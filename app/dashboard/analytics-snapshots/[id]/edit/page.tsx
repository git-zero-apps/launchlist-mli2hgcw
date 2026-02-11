"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EditAnalyticsSnapshotPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [record, setRecord] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function fetchRecord() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("analytics_snapshots")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) setError(error.message);
      else setRecord(data);
      setFetching(false);
    }
    fetchRecord();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();

    const updates: Record<string, unknown> = {
      campaign_id: formData.get("campaign_id"),
      date: formData.get("date"),
      signups_today: formData.get("signups_today") ? Number(formData.get("signups_today")) : null,
      cumulative_total: formData.get("cumulative_total") ? Number(formData.get("cumulative_total")) : null,
      referral_signups_today: formData.get("referral_signups_today") ? Number(formData.get("referral_signups_today")) : null,
      top_referral_sources: formData.get("top_referral_sources"),
    };

    const { error: updateError } = await supabase
      .from("analytics_snapshots")
      .update(updates)
      .eq("id", params.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/analytics-snapshots");
      router.refresh();
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      </div>
    );
  }

  if (!record) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-4">
        <p className="text-sm text-red-700">Analytics Snapshot not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/analytics-snapshots" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Analytics Snapshots
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Analytics Snapshot</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="campaign_id" className="label">Campaign Id</label>
          <input id="campaign_id" name="campaign_id" type="text" className="input" defaultValue={String(record.campaign_id ?? "")} required />
        </div>
        <div>
          <label htmlFor="date" className="label">Date</label>
          <input id="date" name="date" type="text" className="input" defaultValue={String(record.date ?? "")} required />
        </div>
        <div>
          <label htmlFor="signups_today" className="label">Signups Today</label>
          <input id="signups_today" name="signups_today" type="number" className="input" defaultValue={String(record.signups_today ?? "")} />
        </div>
        <div>
          <label htmlFor="cumulative_total" className="label">Cumulative Total</label>
          <input id="cumulative_total" name="cumulative_total" type="number" className="input" defaultValue={String(record.cumulative_total ?? "")} />
        </div>
        <div>
          <label htmlFor="referral_signups_today" className="label">Referral Signups Today</label>
          <input id="referral_signups_today" name="referral_signups_today" type="number" className="input" defaultValue={String(record.referral_signups_today ?? "")} />
        </div>
        <div>
          <label htmlFor="top_referral_sources" className="label">Top Referral Sources</label>
          <input id="top_referral_sources" name="top_referral_sources" type="text" className="input" defaultValue={String(record.top_referral_sources ?? "")} />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Update Analytics Snapshot"}
          </button>
          <Link href="/dashboard/analytics-snapshots" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
