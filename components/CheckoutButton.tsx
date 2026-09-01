"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/path";
import { Button } from "./Button";

type Props = {
  tierName: string;
  amountFils: number;
  mode: "payment" | "subscription";
  locale: Locale;
  label: string;
  notConnectedLabel: string;
};

export default function CheckoutButton({ tierName, amountFils, mode, locale, label, notConnectedLabel }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "not-connected">("idle");

  async function handleClick() {
    setStatus("loading");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierName, amountFils, mode, locale }),
      });
      if (res.status === 501) {
        setStatus("not-connected");
        return;
      }
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setStatus("not-connected");
      }
    } catch {
      setStatus("not-connected");
    }
  }

  if (status === "not-connected") {
    return (
      <div>
        <p className="mb-2 text-small text-ink-600">{notConnectedLabel}</p>
        <Button variant="ghost" type="button" onClick={() => (window.location.href = localePath(locale, "/contact"))}>
          {label}
        </Button>
      </div>
    );
  }

  return (
    <Button type="button" onClick={handleClick} disabled={status === "loading"} className="w-full">
      {status === "loading" ? "…" : label}
    </Button>
  );
}
