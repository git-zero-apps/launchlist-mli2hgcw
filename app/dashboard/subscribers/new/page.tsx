"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewSubscriberPage() {
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
      email: formData.get("email"),
      name: formData.get("name"),
      referral_code: formData.get("referral_code"),
      referred_by_code: formData.get("referred_by_code"),
      referral_count: formData.get("referral_count") ? Number(formData.get("referral_count")) : null,
      position: formData.get("position") ? Number(formData.get("position")) : null,
      source: formData.get("source"),
    };

    const { error: insertError } = await supabase.from("subscribers").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/subscribers");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/subscribers" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Subscribers
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Subscriber</h1>
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
          <label htmlFor="email" className="label">Email</label>
          <input id="email" name="email" type="email" className="input" placeholder="Enter email" required />
        </div>
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" className="input" placeholder="Enter name" />
        </div>
        <div>
          <label htmlFor="referral_code" className="label">Referral Code</label>
          <input id="referral_code" name="referral_code" type="text" className="input" placeholder="Enter referral code" required />
        </div>
        <div>
          <label htmlFor="referred_by_code" className="label">Referred By Code</label>
          <input id="referred_by_code" name="referred_by_code" type="text" className="input" placeholder="Enter referred by code" />
        </div>
        <div>
          <label htmlFor="referral_count" className="label">Referral Count</label>
          <input id="referral_count" name="referral_count" type="number" className="input" placeholder="Enter referral count" />
        </div>
        <div>
          <label htmlFor="position" className="label">Position</label>
          <input id="position" name="position" type="number" className="input" placeholder="Enter position" required />
        </div>
        <div>
          <label htmlFor="source" className="label">Source</label>
          <input id="source" name="source" type="text" className="input" placeholder="Enter source" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Subscriber"}
          </button>
          <Link href="/dashboard/subscribers" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
