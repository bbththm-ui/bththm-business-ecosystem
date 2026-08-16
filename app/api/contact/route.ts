import { Resend } from "resend";

export async function POST(request: Request) {
  console.log(
    "RESEND KEY LOADED:",
    Boolean(process.env.RESEND_API_KEY)
  );

  try {
    const data = await request.json();

    const { name, email, service, message } = data;

    if (!name || !email || !service || !message) {
      return Response.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "BTHTHM Website <onboarding@resend.dev>",
      to: ["btht91@gmail.com"],
      subject: `New BTHTHM inquiry - ${service}`,
      replyTo: email,
      text: `New BTHTHM Website Inquiry

Name: ${name}
Email: ${email}
Service: ${service}

Project:
${message}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Email could not be sent." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Inquiry received successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}