"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewAnalyticsSnapshotPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const record: Record<string, unknown> = {
      campaign_id: formData.get("campaign_id"),
      date: formData.get("date"),
      signups_today: formData.get("signups_today") ? Number(formData.get("signups_today")) : null,
      cumulative_total: formData.get("cumulative_total") ? Number(formData.get("cumulative_total")) : null,
      referral_signups_today: formData.get("referral_signups_today") ? Number(formData.get("referral_signups_today")) : null,
      top_referral_sources: formData.get("top_referral_sources"),
    };

    const { error: insertError } = await supabase.from("analytics_snapshots").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/analytics-snapshots");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/analytics-snapshots" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Analytics Snapshots
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Analytics Snapshot</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="campaign_id" className="label">Campaign Id</label>
          <input id="campaign_id" name="campaign_id" type="text" className="input" placeholder="Enter campaign id" required />
        </div>
        <div>
          <label htmlFor="date" className="label">Date</label>
          <input id="date" name="date" type="text" className="input" placeholder="Enter date" required />
        </div>
        <div>
          <label htmlFor="signups_today" className="label">Signups Today</label>
          <input id="signups_today" name="signups_today" type="number" className="input" placeholder="Enter signups today" />
        </div>
        <div>
          <label htmlFor="cumulative_total" className="label">Cumulative Total</label>
          <input id="cumulative_total" name="cumulative_total" type="number" className="input" placeholder="Enter cumulative total" />
        </div>
        <div>
          <label htmlFor="referral_signups_today" className="label">Referral Signups Today</label>
          <input id="referral_signups_today" name="referral_signups_today" type="number" className="input" placeholder="Enter referral signups today" />
        </div>
        <div>
          <label htmlFor="top_referral_sources" className="label">Top Referral Sources</label>
          <input id="top_referral_sources" name="top_referral_sources" type="text" className="input" placeholder="Enter top referral sources" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Analytics Snapshot"}
          </button>
          <Link href="/dashboard/analytics-snapshots" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
