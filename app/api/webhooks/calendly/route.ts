import { NextResponse } from 'next/server'
import { start } from 'workflow/api'
import {
  parseCalendlyLeadInput,
  verifyCalendlyWebhookSignature,
} from '@/lib/calendly-webhook'
import { processCalendlyLead } from '@/workflows/calendly-lead'

export async function POST(request: Request) {
  const signingKey = process.env.CALENDLY_SIGNING_KEY
  if (!signingKey) {
    console.error('[calendly-webhook] CALENDLY_SIGNING_KEY is not configured')
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const rawBody = await request.text()
  const signature = request.headers.get('calendly-webhook-signature')

  if (!verifyCalendlyWebhookSignature(rawBody, signature, signingKey)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let body: unknown
  try {
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const lead = parseCalendlyLeadInput(body)
  if (!lead) {
    return NextResponse.json({ message: 'Event ignored' })
  }

  await start(processCalendlyLead, [lead])

  return NextResponse.json({ message: 'Accepted' })
}
