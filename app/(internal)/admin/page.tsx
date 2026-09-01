import { cookies } from "next/headers";
import { verifySession, ADMIN_COOKIE } from "@/lib/admin-auth";
import { getAllLeads, activeBackend } from "@/lib/db/leads";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  const authed = verifySession(token);

  if (!authed) {
    return <LoginForm />;
  }

  const leads = await getAllLeads();

  return (
    <div className="container-content py-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-display text-2xl">Leads</h1>
        <LogoutButton />
      </div>
      <p className="text-small text-ink-600 mb-8">
        Storage backend: <code>{activeBackend()}</code> · {leads.length} lead{leads.length === 1 ? "" : "s"}
      </p>

      {leads.length === 0 ? (
        <p className="text-ink-700">No leads yet. Submit the calculator or contact form to test the flow.</p>
      ) : (
        <div className="overflow-x-auto rounded-md border border-line">
          <table className="w-full text-small">
            <thead className="bg-paper-100 text-start">
              <tr>
                {["Date", "Source", "Business", "Contact", "Revenue", "Method", "Tier", "Email"].map((h) => (
                  <th key={h} className="px-4 py-3 text-start font-semibold whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t border-line">
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Date(lead.createdAt).toLocaleString("en-AE")}
                  </td>
                  <td className="px-4 py-3">{lead.source}</td>
                  <td className="px-4 py-3">{lead.businessName}</td>
                  <td className="px-4 py-3">
                    {lead.contactName}
                    <br />
                    <span className="text-ink-600">{lead.email}</span>
                  </td>
                  <td className="px-4 py-3">{lead.revenueBand ?? "—"}</td>
                  <td className="px-4 py-3">{lead.invoicingMethod ?? "—"}</td>
                  <td className="px-4 py-3">{lead.tier ?? "—"}</td>
                  <td className="px-4 py-3">
                    {lead.notifiedTeam ? "sent" : "log-only"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
