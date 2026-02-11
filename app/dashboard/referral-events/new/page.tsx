"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewReferralEventPage() {
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
      referrer_subscriber_id: formData.get("referrer_subscriber_id"),
      referred_subscriber_id: formData.get("referred_subscriber_id"),
    };

    const { error: insertError } = await supabase.from("referral_events").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/referral-events");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/referral-events" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Referral Events
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Referral Event</h1>
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
          <label htmlFor="referrer_subscriber_id" className="label">Referrer Subscriber Id</label>
          <input id="referrer_subscriber_id" name="referrer_subscriber_id" type="text" className="input" placeholder="Enter referrer subscriber id" required />
        </div>
        <div>
          <label htmlFor="referred_subscriber_id" className="label">Referred Subscriber Id</label>
          <input id="referred_subscriber_id" name="referred_subscriber_id" type="text" className="input" placeholder="Enter referred subscriber id" required />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Referral Event"}
          </button>
          <Link href="/dashboard/referral-events" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
