import { NextResponse } from "next/server";
import { Resend } from "resend";
export const runtime = "nodejs";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Honeypot: silently accept bot submissions without sending email.
    if (typeof body.website === "string" && body.website.trim()) return NextResponse.json({ ok: true });
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "Not specified";
    const details = typeof body.details === "string" ? body.details.trim() : "";
    if (name.length < 2 || name.length > 80 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 150 || details.length < 10 || details.length > 3000) return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO || !process.env.CONTACT_FROM) return NextResponse.json({ error: "The contact form is not configured yet. Please email hello@vectoraai.tech directly." }, { status: 503 });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({ from: process.env.CONTACT_FROM, to: [process.env.CONTACT_TO], replyTo: email, subject: `New VECTORA AI enquiry — ${service}`, text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${details}` });
    if (error) return NextResponse.json({ error: "Email delivery failed. Please try emailing us directly." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 }); }
}
