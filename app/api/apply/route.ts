import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy initialization to avoid build-time errors if API key is missing
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string || '';
    const position = formData.get('position') as string;
    const message = formData.get('message') as string || '';
    const timestamp = formData.get('timestamp') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Basic validation
    if (!name || !email || !position) {
      return NextResponse.json(
        { error: 'Name, email, and position are required' },
        { status: 400 }
      );
    }

    // Prepare attachment if resume was uploaded
    let attachments: { filename: string; content: Buffer }[] = [];
    if (resumeFile && resumeFile.size > 0) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      // Clean filename
      const cleanFileName = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      
      attachments = [{
        filename: cleanFileName,
        content: buffer
      }];
    }

    // Collect visitor intelligence
    const userAgent = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'Unknown';

    // Send email using Resend
    const resend = getResend();
    await resend.emails.send({
      from: 'CBC Careers <explorer@cbcberry.com>',
      to: ['kyle@cbcberry.com'],
      subject: `Job Application: ${name} - ${position}`,
      attachments: attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6E903C; border-bottom: 2px solid #6E903C; padding-bottom: 10px;">
            New Job Application
          </h2>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Applicant Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong>Position:</strong> ${position}</p>
          </div>
          
          ${message ? `
            <div style="background: #fff; padding: 20px; border-left: 4px solid #6E903C; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Cover Letter / Message</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          ` : ''}
          
          <div style="background: #fdbd51; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #333;">
              <strong>Resume:</strong> ${resumeFile ? `${resumeFile.name} (attached)` : 'Not provided'}
            </p>
          </div>
          
          <div style="background: #f1f3f4; padding: 15px; border-radius: 6px; margin-top: 30px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              <strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}<br>
              <strong>IP Address:</strong> ${ip}<br>
              <strong>Source:</strong> CBC Homepage - Careers Section
            </p>
          </div>
        </div>
      `,
      text: `
        New Job Application
        
        APPLICANT INFORMATION:
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        Position: ${position}
        
        ${message ? `COVER LETTER / MESSAGE:\n${message}` : ''}
        
        Resume: ${resumeFile ? `${resumeFile.name} (attached)` : 'Not provided'}
        
        Submitted: ${new Date(timestamp).toLocaleString()}
        IP: ${ip}
        Source: CBC Homepage - Careers Section
      `
    });

    // Send confirmation email to applicant
    await resend.emails.send({
      from: 'California Berry Cultivars <explorer@cbcberry.com>',
      to: [email],
      subject: 'Application Received - California Berry Cultivars',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6E903C; border-bottom: 2px solid #6E903C; padding-bottom: 10px;">
            Thank You for Your Application
          </h2>
          
          <p style="line-height: 1.6; color: #333;">
            Dear ${name},
          </p>
          
          <p style="line-height: 1.6; color: #333;">
            Thank you for your interest in joining California Berry Cultivars. We have received 
            your application for the <strong>${position}</strong> position.
          </p>
          
          <p style="line-height: 1.6; color: #333;">
            Our team will review your application and reach out if your qualifications match 
            our current needs. Please allow 1-2 weeks for us to review all applications.
          </p>
          
          <p style="line-height: 1.6; color: #333;">
            Best regards,<br>
            <strong>California Berry Cultivars</strong><br>
            <a href="https://cbcberry.com">cbcberry.com</a>
          </p>
          
          <div style="background: #f1f3f4; padding: 15px; border-radius: 6px; margin-top: 30px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              This is an automated confirmation. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
      text: `
        Thank You for Your Application
        
        Dear ${name},
        
        Thank you for your interest in joining California Berry Cultivars. We have received 
        your application for the ${position} position.
        
        Our team will review your application and reach out if your qualifications match 
        our current needs. Please allow 1-2 weeks for us to review all applications.
        
        Best regards,
        California Berry Cultivars
        cbcberry.com
        
        ---
        This is an automated confirmation. Please do not reply to this email.
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing application:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

