import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // In a real implementation, you would send this data to your email service or database
    console.log('Contact form submission:', { name, email, message });
    
    // For now, we'll just return a success response
    return NextResponse.json({ 
      message: 'Message sent successfully!' 
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ 
      message: 'Failed to send message' 
    }, { status: 500 });
  }
} 