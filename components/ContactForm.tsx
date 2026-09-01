"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { Button } from "./Button";

export default function ContactForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const f = dict.contact.form;
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formId = useId();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          locale,
          businessName: business,
          contactName: name,
          email,
          phone,
          message,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-md border border-line bg-white p-8 text-ink-900">
        {dict.contact.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-line bg-white p-6 sm:p-8 space-y-5">
      <FieldRow>
        <Field id={`${formId}-name`} label={f.name} value={name} onChange={setName} required />
        <Field id={`${formId}-business`} label={f.business} value={business} onChange={setBusiness} required />
      </FieldRow>
      <FieldRow>
        <Field id={`${formId}-email`} label={f.email} type="email" value={email} onChange={setEmail} required />
        <Field id={`${formId}-phone`} label={f.phone} type="tel" value={phone} onChange={setPhone} />
      </FieldRow>
      <div>
        <label htmlFor={`${formId}-message`} className="mb-1.5 block text-small font-medium text-ink-800">
          {f.message}
        </label>
        <textarea
          id={`${formId}-message`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-sm border border-line bg-paper-50 px-4 py-3 text-base text-ink-950 focus-visible:outline-2 focus-visible:outline-brass-500"
        />
      </div>
      {status === "error" && (
        <p role="alert" className="text-small text-red-700">
          {dict.contact.error}
        </p>
      )}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? f.submitting : f.submit}
      </Button>
    </form>
  );
}

function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-small font-medium text-ink-800">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-line bg-paper-50 px-4 py-3 text-base text-ink-950 focus-visible:outline-2 focus-visible:outline-brass-500"
      />
    </div>
  );
}
