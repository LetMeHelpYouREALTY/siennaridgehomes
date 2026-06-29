import { FatalError, RetryableError } from 'workflow'
import type { CalendlyLeadInput } from '@/lib/calendly-webhook'
import { SITE_URL } from '@/lib/site-config'

const FUB_EVENTS_URL = 'https://api.followupboss.com/v1/events'

function formatLeadMessage(lead: CalendlyLeadInput): string {
  const lines = [
    `Calendly booking: ${lead.eventName}`,
    lead.startTime ? `Start: ${lead.startTime}` : null,
    lead.endTime ? `End: ${lead.endTime}` : null,
    lead.location ? `Location: ${lead.location}` : null,
    lead.rescheduleUrl ? `Reschedule: ${lead.rescheduleUrl}` : null,
    lead.cancelUrl ? `Cancel: ${lead.cancelUrl}` : null,
  ].filter(Boolean)

  if (lead.questionsAndAnswers.length > 0) {
    lines.push('')
    lines.push('Form responses:')
    for (const qa of lead.questionsAndAnswers) {
      lines.push(`- ${qa.question}: ${qa.answer}`)
    }
  }

  return lines.join('\n')
}

export async function sendCalendlyLeadToFollowUpBoss(lead: CalendlyLeadInput) {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    throw new FatalError('FOLLOW_UP_BOSS_API_KEY is not configured')
  }

  const response = await fetch(FUB_EVENTS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      source: 'siennaridgehomes.com',
      system: 'Sienna Ridge Homes Website',
      type: 'Appointment Request',
      message: formatLeadMessage(lead),
      person: {
        firstName: lead.firstName,
        lastName: lead.lastName,
        emails: [{ value: lead.inviteeEmail }],
      },
      sourceUrl: SITE_URL,
    }),
  })

  if (response.status === 429 || response.status >= 500) {
    throw new RetryableError(`Follow Up Boss API error: ${response.status}`)
  }

  if (!response.ok) {
    const body = await response.text()
    throw new FatalError(
      `Follow Up Boss rejected lead (${response.status}): ${body.slice(0, 500)}`,
    )
  }

  return response.json()
}
