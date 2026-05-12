import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email).trim().toLowerCase()
      : "";

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email" }, { status: 422 });
  }

  // TODO: forward to ESP (Resend, Mailchimp, ConvertKit, etc.) or persist to DB.
  // For now we log the signup so prod logs capture the lead.
  console.log("[waitlist] new signup", email);

  return NextResponse.json({ ok: true }, { status: 200 });
}
