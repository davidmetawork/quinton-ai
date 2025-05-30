import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Log the plan selection data
    console.log('Plan Selection Tracking:', {
      timestamp: new Date().toISOString(),
      plan: data.plan,
      planId: data.planId,
      seats: data.seats,
      billing: data.billing,
      totalPrice: data.totalPrice,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    })

    // Send email notification (uncomment and configure with your email service)
    // const emailData = {
    //   to: 'your-email@quintonai.com',
    //   subject: `New Plan Selection: ${data.plan} Plan`,
    //   html: `
    //     <h2>Someone just selected a plan and is heading to Calendly!</h2>
    //     <p><strong>Plan:</strong> ${data.plan}</p>
    //     <p><strong>Seats:</strong> ${data.seats} recruiters</p>
    //     <p><strong>Billing:</strong> ${data.billing}</p>
    //     <p><strong>Price:</strong> $${data.totalPrice}/month</p>
    //     <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    //     <hr>
    //     <p>They should be booking a call on Calendly shortly. Be ready to discuss their ${data.plan} plan needs!</p>
    //   `
    // }
    
    // Example: Send via your email service (Resend, SendGrid, etc.)
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(emailData)
    // })

    // Send Slack notification (uncomment and add your webhook URL)
    // const slackMessage = {
    //   text: `🎯 New Plan Selection!`,
    //   blocks: [
    //     {
    //       type: "section",
    //       text: {
    //         type: "mrkdwn",
    //         text: `*Someone just selected the ${data.plan} plan!*\n\n*Plan:* ${data.plan}\n*Seats:* ${data.seats} recruiters\n*Billing:* ${data.billing}\n*Price:* $${data.totalPrice}/month\n\nThey're heading to Calendly now! 📅`
    //       }
    //     }
    //   ]
    // }
    
    // await fetch(process.env.SLACK_WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(slackMessage)
    // })

    // Here you could also:
    // 1. Save to your database
    // 2. Send to analytics service (Mixpanel, Amplitude, etc.)
    // 3. Send to your CRM
    
    // Example: Send to your database
    // await db.planSelections.create({
    //   data: {
    //     plan: data.plan,
    //     planId: data.planId,
    //     seats: data.seats,
    //     billing: data.billing,
    //     totalPrice: data.totalPrice,
    //     timestamp: new Date(),
    //   }
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking plan selection:', error)
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
  }
} 
 