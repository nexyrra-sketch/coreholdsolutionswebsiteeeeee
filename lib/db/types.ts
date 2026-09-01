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
};

export type Lead = LeadInput & {
  id: number | string;
  createdAt: string;
  appointBy?: string | null;
  liveBy?: string | null;
  notifiedTeam: boolean;
  notifiedCustomer: boolean;
};
