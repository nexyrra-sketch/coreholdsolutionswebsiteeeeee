import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { BRAND } from "@/lib/brand";

// Fixed, brand-toned WhatsApp entry point — deliberately not the default
// WhatsApp green, so it reads as part of the vault rather than a bolted-on
// widget. Logical `end-*` positioning so it lands bottom-left in RTL
// automatically, matching the rest of the site's RTL approach.
export default function WhatsAppButton({ dict }: { dict: Dictionary }) {
  const href = `https://wa.me/${BRAND.whatsappDigits}?text=${encodeURIComponent(dict.whatsapp.prefill)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.whatsapp.ariaLabel}
      className="motion-safe:animate-fade-up fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-brass-500 bg-ink-950 text-paper-50 shadow-lg shadow-ink-950/20 transition-transform duration-250 hover:-translate-y-0.5 hover:bg-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-500"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-6 w-6 fill-brass-200"
      >
        <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.28 1.65 6.06L4 29l8.2-2.14a12.9 12.9 0 0 0 3.82.58h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.37 22.65 3 16.02 3zm0 21.86h-.01a10.8 10.8 0 0 1-5.51-1.51l-.4-.24-4.86 1.27 1.3-4.74-.26-.49a9.87 9.87 0 0 1-1.51-5.16c0-5.47 4.46-9.92 9.94-9.92a9.85 9.85 0 0 1 9.93 9.9c0 5.48-4.46 9.9-9.62 9.89zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
