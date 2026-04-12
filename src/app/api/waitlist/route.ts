import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    const apiKey = process.env.CONVERTKIT_API_KEY
    const formId = process.env.CONVERTKIT_FORM_ID

    if (!apiKey || !formId) {
      console.error('Missing ConvertKit configuration')
      return NextResponse.json({ error: 'Service configuration error.' }, { status: 500 })
    }

    const headers = {
      'Content-Type': 'application/json',
      'X-Kit-Api-Key': apiKey,
    }

    // Upsert subscriber first, then add to form
    const upsertResponse = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers,
      body: JSON.stringify({ email_address: email }),
      cache: 'no-store',
    })

    if (!upsertResponse.ok) {
      const text = await upsertResponse.text()
      console.error('Kit error (upsert subscriber):', text)
      return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
    }

    const kitResponse = await fetch(
      `https://api.kit.com/v4/forms/${formId}/subscribers`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ email_address: email }),
        cache: 'no-store',
      }
    )

    if (!kitResponse.ok) {
      const text = await kitResponse.text()
      console.error('ConvertKit error:', text)
      return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
