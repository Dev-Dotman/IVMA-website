import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongoose';
import Waitlist from '../../../models/Waitlist';
import { sendWaitlistEmail } from '../../../lib/email';

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, whatsappNumber, businessType, emailConsent } = body;

    // Validate required fields
    if (!name || !email || !businessType) {
      return NextResponse.json(
        { error: 'Name, email, and business type are required' },
        { status: 400 }
      );
    }

    // Validate email consent
    if (!emailConsent) {
      return NextResponse.json(
        { error: 'You must consent to receive emails to join the waitlist' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await Waitlist.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Create waitlist entry
    const waitlistEntry = await Waitlist.create({
      name,
      email,
      whatsappNumber: whatsappNumber || undefined,
      businessType,
      emailConsent,
    });

    // Send welcome email (don't block response if email fails)
    try {
      await sendWaitlistEmail(email, name);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Continue anyway - user is on the waitlist
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the waitlist! Check your email.',
        id: waitlistEntry._id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API Error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: messages.join(', ') },
        { status: 400 }
      );
    }

    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    
    const count = await Waitlist.countDocuments();
    
    return NextResponse.json(
      { 
        success: true, 
        count 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist GET Error:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch waitlist count' },
      { status: 500 }
    );
  }
}
