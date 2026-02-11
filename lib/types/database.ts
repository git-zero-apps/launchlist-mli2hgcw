// Auto-generated database types from ZERO Builder
// Do not edit manually
export interface Profiles {
  id: string;
  full_name: string;
  role: string;
  subscription_tier: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  subscription_status?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfilesInsert {
  full_name: string;
  role?: string;
  subscription_tier?: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  subscription_status?: string | null;
}

export interface Campaigns {
  id?: string;
  user_id: string;
  name: string;
  slug: string;
  headline: string;
  subheadline: string | null;
  description: string | null;
  cta_button_text: string;
  brand_color?: string | null;
  logo_url: string | null;
  status: string;
  total_signups: number;
  show_branding: boolean;
  webhook_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface CampaignsInsert {
  user_id: string;
  name: string;
  slug: string;
  headline: string;
  subheadline: string | null;
  description: string | null;
  cta_button_text?: string;
  brand_color?: string | null;
  logo_url: string | null;
  status?: string;
  total_signups?: number;
  show_branding?: boolean;
  webhook_url: string | null;
}

export interface Subscribers {
  id?: string;
  campaign_id: string;
  email: string;
  name: string | null;
  referral_code: string;
  referred_by_code: string | null;
  referral_count: number;
  position: number;
  source: string;
  created_at: string;
  updated_at: string;
}

export interface SubscribersInsert {
  campaign_id: string;
  email: string;
  name: string | null;
  referral_code: string;
  referred_by_code: string | null;
  referral_count?: number;
  position: number;
  source?: string;
}

export interface ReferralEvents {
  id?: string;
  campaign_id: string;
  referrer_subscriber_id: string;
  referred_subscriber_id: string;
  created_at: string;
}

export interface ReferralEventsInsert {
  campaign_id: string;
  referrer_subscriber_id: string;
  referred_subscriber_id: string;
}

export interface AnalyticsSnapshots {
  id?: string;
  campaign_id: string;
  date: string;
  signups_today: number;
  cumulative_total: number;
  referral_signups_today: number;
  top_referral_sources?: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface AnalyticsSnapshotsInsert {
  campaign_id: string;
  date: string;
  signups_today?: number;
  cumulative_total?: number;
  referral_signups_today?: number;
  top_referral_sources?: Record<string, unknown> | null;
}
