import crypto from 'crypto'

export type CalendlyLeadInput = {
  eventType: string
  inviteeEmail: string
  inviteeName: string
  firstName: string
  lastName: string
  eventName: string
  startTime: string | null
  endTime: string | null
  location: string | null
  cancelUrl: string | null
  rescheduleUrl: string | null
  questionsAndAnswers: Array<{ question: string; answer: string }>
}

type CalendlyWebhookBody = {
  event?: string
  payload?: {
    email?: string
    name?: string
    first_name?: string
    last_name?: string
    cancel_url?: string
    reschedule_url?: string
    questions_and_answers?: Array<{ question: string; answer: string }>
    scheduled_event?: {
      name?: string
      start_time?: string
      end_time?: string
      location?: { location?: string; type?: string } | string
    }
  }
}

export function verifyCalendlyWebhookSignature(
  rawBody: string,
  signatureHeader: string | null,
  signingKey: string,
): boolean {
  if (!signatureHeader) return false

  const parts = Object.fromEntries(
    signatureHeader.split(',').map((part) => {
      const [key, value] = part.split('=')
      return [key, value]
    }),
  )

  const timestamp = parts.t
  const signature = parts.v1
  if (!timestamp || !signature) return false

  const payload = `${timestamp}.${rawBody}`
  const expected = crypto
    .createHmac('sha256', signingKey)
    .update(payload)
    .digest('hex')

  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  } catch {
    return false
  }
}

function scheduledEventLocation(
  location:
    | string
    | { location?: string; type?: string }
    | null
    | undefined,
): string | null {
  if (!location) return null
  if (typeof location === 'string') return location
  if (typeof location === 'object' && 'location' in location) {
    return location.location ?? location.type ?? null
  }
  return null
}

export function parseCalendlyLeadInput(body: unknown): CalendlyLeadInput | null {
  const data = body as CalendlyWebhookBody
  if (data.event !== 'invitee.created') return null

  const payload = data.payload
  if (!payload?.email) return null

  const firstName = payload.first_name?.trim() || payload.name?.split(' ')[0] || 'Calendly'
  const lastName =
    payload.last_name?.trim() ||
    payload.name?.split(' ').slice(1).join(' ') ||
    'Lead'

  return {
    eventType: data.event,
    inviteeEmail: payload.email,
    inviteeName: payload.name?.trim() || `${firstName} ${lastName}`.trim(),
    firstName,
    lastName,
    eventName: payload.scheduled_event?.name ?? 'Consultation',
    startTime: payload.scheduled_event?.start_time ?? null,
    endTime: payload.scheduled_event?.end_time ?? null,
    location: scheduledEventLocation(payload.scheduled_event?.location),
    cancelUrl: payload.cancel_url ?? null,
    rescheduleUrl: payload.reschedule_url ?? null,
    questionsAndAnswers: (payload.questions_and_answers ?? []).map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
  }
}
