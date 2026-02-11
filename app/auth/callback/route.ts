import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: existing } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .single();
      if (!existing) {
        await supabase.from("profiles").insert({
          id: user.id,
          full_name: user.user_metadata?.full_name || user.user_metadata?.name || "User",
          email: user.email,
        });
      }
    }
  }

  return NextResponse.redirect(`${origin}/dashboard`);
}
