export type LeadSource = "calculator" | "contact";

export type LeadInput = {
  source: LeadSource;
  locale: string;
  businessName: string;
  contactName: string;
  email: string;
  phone?: string | null;
  revenueBand?: string | null;
  invoicingMethod?: string | null;
  tier?: string | null;
  message?: string | null;

  // Qualification. Captured so the first sales call starts informed rather
  // than spending fifteen minutes establishing facts a form could have asked.
  industry?: string | null;
  system?: string | null;
  entities?: string | null;
  stage?: string | null;
  aspStatus?: string | null;

  // Attribution. Which page produced this lead, and where the visitor came
  // from — so we can eventually tell which pages create customers, not just
  // which pages get traffic.
  landingPage?: string | null;
  referrer?: string | null;
  utmSource?: string | null;
  utmCampaign?: string | null;
};

export type Lead = LeadInput & {
  id: number | string;
  createdAt: string;
  appointBy?: string | null;
  liveBy?: string | null;
  notifiedTeam: boolean;
  notifiedCustomer: boolean;
};
