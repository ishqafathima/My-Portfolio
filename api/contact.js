import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Connect to MongoDB
    await client.connect();

    const db = client.db("portfolio");

    // Save contact message
    await db.collection("contacts").insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    // Send email through Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: ["ishqafathima34@gmail.com"],
        subject: `New Portfolio Contact: ${subject}`,
        html: `
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <h3>Message</h3>
          <p>${message}</p>
        `,
      }),
    });

    // Check Resend response
    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();

      console.error("Resend error:", errorData);

      return res.status(500).json({
        message: "Message saved, but email could not be sent.",
      });
    }

    const resendData = await emailResponse.json();

    console.log("Resend success:", resendData);

    return res.status(200).json({
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      message: "Failed to process contact form.",
    });
  }
}