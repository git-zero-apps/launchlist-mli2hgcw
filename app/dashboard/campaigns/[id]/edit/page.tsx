"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EditCampaignPage() {
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
        .from("campaigns")
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
      name: formData.get("name"),
      slug: formData.get("slug"),
      headline: formData.get("headline"),
      subheadline: formData.get("subheadline"),
      description: formData.get("description"),
      cta_button_text: formData.get("cta_button_text"),
      brand_color: formData.get("brand_color"),
      logo_url: formData.get("logo_url"),
      status: formData.get("status"),
      total_signups: formData.get("total_signups") ? Number(formData.get("total_signups")) : null,
      show_branding: formData.get("show_branding") === "on",
      webhook_url: formData.get("webhook_url"),
    };

    const { error: updateError } = await supabase
      .from("campaigns")
      .update(updates)
      .eq("id", params.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/campaigns");
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
        <p className="text-sm text-red-700">Campaign not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/campaigns" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Campaigns
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Campaign</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" className="input" defaultValue={String(record.name ?? "")} required />
        </div>
        <div>
          <label htmlFor="slug" className="label">Slug</label>
          <input id="slug" name="slug" type="text" className="input" defaultValue={String(record.slug ?? "")} required />
        </div>
        <div>
          <label htmlFor="headline" className="label">Headline</label>
          <input id="headline" name="headline" type="text" className="input" defaultValue={String(record.headline ?? "")} required />
        </div>
        <div>
          <label htmlFor="subheadline" className="label">Subheadline</label>
          <input id="subheadline" name="subheadline" type="text" className="input" defaultValue={String(record.subheadline ?? "")} />
        </div>
        <div>
          <label htmlFor="description" className="label">Description</label>
          <textarea id="description" name="description" rows={4} className="input" defaultValue={String(record.description ?? "")} />
        </div>
        <div>
          <label htmlFor="cta_button_text" className="label">Cta Button Text</label>
          <input id="cta_button_text" name="cta_button_text" type="text" className="input" defaultValue={String(record.cta_button_text ?? "")} />
        </div>
        <div>
          <label htmlFor="brand_color" className="label">Brand Color</label>
          <input id="brand_color" name="brand_color" type="text" className="input" defaultValue={String(record.brand_color ?? "")} />
        </div>
        <div>
          <label htmlFor="logo_url" className="label">Logo Url</label>
          <input id="logo_url" name="logo_url" type="url" className="input" defaultValue={String(record.logo_url ?? "")} />
        </div>
        <div>
          <label htmlFor="status" className="label">Status</label>
          <input id="status" name="status" type="text" className="input" defaultValue={String(record.status ?? "")} />
        </div>
        <div>
          <label htmlFor="total_signups" className="label">Total Signups</label>
          <input id="total_signups" name="total_signups" type="number" className="input" defaultValue={String(record.total_signups ?? "")} />
        </div>
        <div className="flex items-center gap-3">
          <input id="show_branding" name="show_branding" type="checkbox" defaultChecked={!!record.show_branding} className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500" />
          <label htmlFor="show_branding" className="text-sm font-medium text-gray-700">Show Branding</label>
        </div>
        <div>
          <label htmlFor="webhook_url" className="label">Webhook Url</label>
          <input id="webhook_url" name="webhook_url" type="url" className="input" defaultValue={String(record.webhook_url ?? "")} />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Update Campaign"}
          </button>
          <Link href="/dashboard/campaigns" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
