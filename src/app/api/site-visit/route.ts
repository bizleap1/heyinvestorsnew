import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, projectSlug, preferredDate, message } = body;

    if (!fullName || !phoneNumber) {
      return NextResponse.json(
        { error: 'Full name and phone number are required.' },
        { status: 400 }
      );
    }

    // Lead capture record ready for Supabase / Resend / CRM / WhatsApp webhook
    const leadRecord = {
      fullName,
      phoneNumber,
      email: email || null,
      projectSlug: projectSlug || 'General Inquiry',
      preferredDate: preferredDate || null,
      message: message || null,
      timestamp: new Date().toISOString(),
      source: 'Hey Investor Website - Redesign',
      companyRera: 'A50500037507',
    };

    console.log('[LEAD CAPTURED]:', leadRecord);

    return NextResponse.json({
      success: true,
      message: 'Site visit booked successfully. Senior land advisory will contact you.',
      leadId: `LEAD-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Error handling site visit request:', error);
    return NextResponse.json(
      { error: 'Internal server error processing visit booking.' },
      { status: 500 }
    );
  }
}
