"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Login failed.");
    }
  }

  return (
    <div className="mx-auto max-w-sm py-24 px-6">
      <h1 className="font-display text-2xl mb-6">CHS — Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="pw" className="block text-small font-medium mb-1.5">
            Admin password
          </label>
          <input
            id="pw"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-sm border border-line px-4 py-3 focus-visible:outline-2 focus-visible:outline-brass-500"
            autoFocus
          />
        </div>
        {error && (
          <p role="alert" className="text-small text-red-700">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-ink-950 text-paper-50 py-3 font-medium disabled:opacity-50"
        >
          {loading ? "Checking…" : "View leads"}
        </button>
      </form>
    </div>
  );
}
