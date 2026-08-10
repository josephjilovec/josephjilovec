"use client";

import { FormEvent, useState } from "react";

export function DataRoomRequest({ venture }: { venture: string }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");
    setMessage("");
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/data-room", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The request could not be submitted.");
      setState("success");
      setMessage(data.message || "Request received.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "The request could not be submitted.");
    }
  }

  return (
    <form className="data-room-form" onSubmit={submit}>
      <input type="hidden" name="venture" value={venture} />
      <div className="form-row">
        <label>Full name<input name="name" required maxLength={120} autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required maxLength={200} autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Fund / firm<input name="organization" required maxLength={180} autoComplete="organization" /></label>
        <label>Role / title<input name="role" maxLength={120} autoComplete="organization-title" /></label>
      </div>
      <div className="form-row">
        <label>Investor status
          <select name="accreditation" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option value="Accredited investor / qualified representative">Accredited investor / qualified representative</option>
            <option value="Institutional / fund representative">Institutional / fund representative</option>
            <option value="Not sure / prefer to discuss">Not sure / prefer to discuss</option>
            <option value="Not applicable — philanthropic / nonprofit diligence">Not applicable — philanthropic / nonprofit diligence</option>
          </select>
        </label>
        <label>Typical check / commitment size<input name="checkSize" maxLength={100} placeholder="Optional" /></label>
      </div>
      <label>What would you like to review?<textarea name="message" rows={4} maxLength={1800} placeholder="Pitch materials, financial model, legal/entity documents, technical diligence, nonprofit program materials, or another specific request." /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree to be contacted about this request. I understand submission does not guarantee data-room access and does not create a confidential, advisory, investment, or partnership relationship.</span></label>
      <div>
        <button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Submitting…" : "Request data room"}</button>
        <span className={`data-room-status ${state}`} role="status" aria-live="polite">{message}</span>
      </div>
    </form>
  );
}
