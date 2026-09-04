"use client";

import { useId, useState, useEffect, type FormEvent, type ReactNode } from "react";
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
  const [industry, setIndustry] = useState("");
  const [system, setSystem] = useState("");
  const [entities, setEntities] = useState("");
  const [stage, setStage] = useState("");
  const [aspStatus, setAspStatus] = useState("");

  // Attribution, read once on mount. Captured silently and never shown to the
  // visitor: it exists so we can eventually tell which pages produce customers
  // rather than which pages produce traffic. No personal data is read here.
  const [attribution, setAttribution] = useState<{
    landingPage: string;
    referrer: string;
    utmSource: string;
    utmCampaign: string;
  }>({ landingPage: "", referrer: "", utmSource: "", utmCampaign: "" });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      setAttribution({
        landingPage: window.location.pathname,
        referrer: document.referrer || "",
        utmSource: params.get("utm_source") ?? "",
        utmCampaign: params.get("utm_campaign") ?? "",
      });
    } catch {
      // Non-fatal: a lead without attribution is still a lead.
    }
  }, []);
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
          industry,
          system,
          entities,
          stage,
          aspStatus,
          ...attribution,
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
      <fieldset className="space-y-5 border-t border-line pt-6">
        <legend className="sr-only">{f.qualifyHeading}</legend>
        <div>
          <p className="font-display text-lg text-ink-950">{f.qualifyHeading}</p>
          <p className="mt-1 text-small text-ink-600">{f.qualifyNote}</p>
        </div>
        <FieldRow>
          <Select id={`${formId}-industry`} label={f.industryLabel} value={industry} onChange={setIndustry} options={f.industryOptions} />
          <Select id={`${formId}-system`} label={f.systemLabel} value={system} onChange={setSystem} options={f.systemOptions} />
        </FieldRow>
        <FieldRow>
          <Select id={`${formId}-stage`} label={f.stageLabel} value={stage} onChange={setStage} options={f.stageOptions} />
          <Select id={`${formId}-asp`} label={f.aspLabel} value={aspStatus} onChange={setAspStatus} options={f.aspOptions} />
        </FieldRow>
        <Select id={`${formId}-entities`} label={f.entitiesLabel} value={entities} onChange={setEntities} options={f.entitiesOptions} />
      </fieldset>

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

function Select({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-1.5 block text-small font-medium text-ink-800">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border border-line bg-white px-4 py-3 text-ink-950 focus-visible:border-brass-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-500"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
