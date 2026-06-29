import type { CalendlyLeadInput } from '@/lib/calendly-webhook'
import { sendCalendlyLeadToFollowUpBoss } from '@/lib/follow-up-boss'

async function syncLeadToFollowUpBoss(lead: CalendlyLeadInput) {
  'use step'

  console.log('[calendly-lead] Syncing lead to Follow Up Boss', {
    email: lead.inviteeEmail,
    eventName: lead.eventName,
  })

  const result = await sendCalendlyLeadToFollowUpBoss(lead)

  console.log('[calendly-lead] Follow Up Boss sync complete', {
    email: lead.inviteeEmail,
  })

  return result
}

export async function processCalendlyLead(lead: CalendlyLeadInput) {
  'use workflow'

  console.log('[calendly-lead] Workflow started', {
    email: lead.inviteeEmail,
    eventType: lead.eventType,
  })

  const result = await syncLeadToFollowUpBoss(lead)

  console.log('[calendly-lead] Workflow finished', {
    email: lead.inviteeEmail,
  })

  return { ok: true as const, result }
}
