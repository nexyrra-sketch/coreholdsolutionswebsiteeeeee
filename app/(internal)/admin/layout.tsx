import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../globals.css";
import "@/lib/fonts";

export const metadata: Metadata = {
  title: "CHS — Leads",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-paper-100 text-ink-950">{children}</body>
    </html>
  );
}
