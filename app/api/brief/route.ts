import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max = 3000) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.companyWebsite, 200)) return NextResponse.json({ message: "Thanks." });

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const interest = clean(body.interest, 120);
    const venture = clean(body.venture, 160);
    const focus = clean(body.focus, 200);
    const message = clean(body.message, 3000);
    const consent = clean(body.consent, 20);

    if (!name || !emailPattern.test(email) || !interest || !message || consent !== "yes") {
      return NextResponse.json({ error: "Please complete the required fields with a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return NextResponse.json({ error: "Mail delivery is not configured yet. Add the Resend environment variables in Vercel." }, { status: 503 });
    }

    const organization = clean(body.organization, 160) || "—";
    const role = clean(body.role, 120) || "—";
    const text = [
      "Private venture brief request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization}`,
      `Role: ${role}`,
      `Area: ${interest}`,
      `Venture: ${venture || "General / studio"}`,
      `Focus: ${focus || "—"}`,
      "",
      message,
      "",
      "Note: submission alone does not create confidentiality or an investment relationship."
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `[JosephJilovec.com] Venture brief request — ${venture || name}`, text })
    });

    if (!response.ok) {
      console.error("Resend error", response.status, await response.text());
      return NextResponse.json({ error: "Mail delivery failed. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ message: "Brief request sent. Thank you." });
  } catch (error) {
    console.error("Brief route error", error);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
