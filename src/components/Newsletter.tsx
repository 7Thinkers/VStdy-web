"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="bg-white px-6 py-12 md:px-12 md:py-16 lg:px-[100px]"
    >
      <div
        className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-center gap-6 overflow-hidden rounded-[24px] px-6 py-12 text-center shadow-[0_16px_40px_rgba(57,29,232,0.08)] md:px-12 md:py-16 lg:py-[56px]"
        style={{
          background:
            "radial-gradient(120% 140% at 50% -20%, rgba(98,46,220,0.45) 0%, rgba(213,198,245,0.55) 30%, #ffffff 80%)",
        }}
      >
        <h2 className="max-w-[1110px] font-serif text-[clamp(2rem,5.5vw,70px)] leading-[1.2] text-neutral-900">
          Change the way you learn?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[640px] flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:justify-center"
          noValidate
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="relative flex h-14 w-full items-center rounded-full border border-[#ededed] bg-white px-6 shadow-[8px_8px_28px_rgba(0,0,0,0.05)] focus-within:ring-2 focus-within:ring-[#0066ff]/30 sm:w-auto sm:flex-1">
            <svg
              className="pointer-events-none mr-2 text-[#848d9b]"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              required
              placeholder="Add your mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="h-full w-full bg-transparent text-base font-medium text-neutral-900 placeholder:text-[#848d9b] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[#3385ff] bg-[#0066ff] px-12 text-base font-bold text-white transition-colors hover:bg-[#0055e0] disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Get Early Access"}
          </button>
        </form>

        <p
          role="status"
          aria-live="polite"
          className="min-h-[1.5em] text-sm font-medium text-[color:var(--neutral-600)]"
        >
          {status === "success" && "Thanks — we'll be in touch soon."}
          {status === "error" && "Something went wrong. Please try again."}
        </p>
      </div>
    </section>
  );
}
