"use client";

import { useId, useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import {
  DEADLINES,
  tierForRevenue,
  type InvoicingMethod,
  type RevenueBand,
} from "@/lib/deadlines";
import { formatDate } from "@/lib/format";
import { localePath } from "@/lib/i18n/path";
import { Button, LinkButton } from "./Button";

type Step = 1 | 2 | 3;
type Status = "idle" | "submitting" | "success" | "error";

export default function Calculator({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.calculator;
  const [step, setStep] = useState<Step>(1);
  const [revenue, setRevenue] = useState<RevenueBand | null>(null);
  const [method, setMethod] = useState<InvoicingMethod | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const liveRegionId = useId();

  const tier = revenue ? tierForRevenue(revenue) : null;
  const deadlines = tier ? DEADLINES[tier] : null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!businessName || !contactName || !email) {
      setFieldError(dict.common.requiredField);
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setFieldError(dict.common.invalidEmail);
      return;
    }
    setFieldError(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "calculator",
          locale,
          businessName,
          contactName,
          email,
          phone,
          revenueBand: revenue,
          invoicingMethod: method,
          tier,
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setStep(1);
    setRevenue(null);
    setMethod(null);
    setBusinessName("");
    setContactName("");
    setEmail("");
    setPhone("");
    setStatus("idle");
    setFieldError(null);
  }

  if (status === "success" && tier && deadlines) {
    const r = c.results;
    return (
      <div className="rounded-md border border-line bg-white p-6 sm:p-10 animate-fade-up">
        <p className="text-micro font-semibold uppercase tracking-widest text-brass-600 mb-2">
          {tier === "large" ? r.tierLarge : r.tierSme}
        </p>
        <h3 className="font-display text-h3 mb-6">
          {tier === "large" ? r.headingLarge : r.headingSme}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="rounded-sm bg-paper-100 p-5">
            <p className="text-small text-ink-700">{r.appointByLabel}</p>
            <p className="mt-1 font-display text-xl">{formatDate(deadlines.appoint, locale)}</p>
          </div>
          <div className="rounded-sm bg-paper-100 p-5">
            <p className="text-small text-ink-700">{r.liveByLabel}</p>
            <p className="mt-1 font-display text-xl">{formatDate(deadlines.live, locale)}</p>
          </div>
        </div>

        {method && (
          <div className="mb-6">
            <h4 className="text-small font-semibold text-ink-900 mb-1">{r.methodNoteHeading}</h4>
            <p className="text-small text-ink-700">{r.methodNotes[method]}</p>
          </div>
        )}

        <div className="mb-6 border-s-2 border-brass-500 ps-4">
          <h4 className="text-small font-semibold text-ink-900 mb-1">{r.exposureHeading}</h4>
          <p className="text-small text-ink-700">{r.exposureBody}</p>
          <p className="mt-2 text-small text-ink-600 italic">{r.voluntaryNote}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <LinkButton href={localePath(locale, "/contact")} variant="primary">
            {r.ctaBook}
          </LinkButton>
          <LinkButton href={localePath(locale, "/pricing")} variant="ghost">
            {r.ctaPricing}
          </LinkButton>
          <Button type="button" variant="ghost" onClick={reset}>
            {r.restart}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-line bg-white p-6 sm:p-10">
      <p aria-live="polite" className="sr-only" id={liveRegionId}>
        {c.stepOf.replace("{current}", String(step)).replace("{total}", "3")}
      </p>

      <div className="mb-8 flex gap-2" aria-hidden="true">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full ${s <= step ? "bg-brass-500" : "bg-line"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <fieldset>
          <legend className="font-display text-h4 mb-6">{c.step1.label}</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {c.step1.options.map((opt) => (
              <label
                key={opt.value}
                className={`cursor-pointer rounded-sm border p-4 text-small transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brass-500 ${
                  revenue === opt.value ? "border-ink-950 bg-paper-100" : "border-line hover:border-ink-700"
                }`}
              >
                <input
                  type="radio"
                  name="revenue"
                  value={opt.value}
                  checked={revenue === opt.value}
                  onChange={() => setRevenue(opt.value as RevenueBand)}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Button type="button" disabled={!revenue} onClick={() => setStep(2)}>
              {c.next}
            </Button>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="font-display text-h4 mb-6">{c.step2.label}</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {c.step2.options.map((opt) => (
              <label
                key={opt.value}
                className={`cursor-pointer rounded-sm border p-4 text-small transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brass-500 ${
                  method === opt.value ? "border-ink-950 bg-paper-100" : "border-line hover:border-ink-700"
                }`}
              >
                <input
                  type="radio"
                  name="method"
                  value={opt.value}
                  checked={method === opt.value}
                  onChange={() => setMethod(opt.value as InvoicingMethod)}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>
              {c.back}
            </Button>
            <Button type="button" disabled={!method} onClick={() => setStep(3)}>
              {c.next}
            </Button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} noValidate>
          <h3 className="font-display text-h4 mb-1">{c.step3.heading}</h3>
          <p className="text-small text-ink-700 mb-6">{c.step3.subheading}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={c.step3.fields.businessName}
              value={businessName}
              onChange={setBusinessName}
              required
            />
            <Field label={c.step3.fields.contactName} value={contactName} onChange={setContactName} required />
            <Field label={c.step3.fields.email} type="email" value={email} onChange={setEmail} required />
            <Field label={c.step3.fields.phone} type="tel" value={phone} onChange={setPhone} />
          </div>

          {fieldError && (
            <p role="alert" className="mt-4 text-small text-red-700">
              {fieldError}
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-4 text-small text-red-700">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="mt-4 text-small text-ink-600">{c.step3.consent}</p>

          <div className="mt-8 flex justify-between">
            <Button type="button" variant="ghost" onClick={() => setStep(2)}>
              {c.back}
            </Button>
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? c.step3.submitting : c.step3.submit}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  const id = useId();
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
