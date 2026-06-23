// lib/supabase.ts – Supabase client singleton for the application
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase credentials in environment variables (SUPABASE_URL, SUPABASE_ANON_KEY)");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// In development, keep a global reference to avoid re‑creating the client on hot reloads.
const globalForSupabase = globalThis as unknown as { supabase?: typeof supabase };
if (process.env.NODE_ENV !== "production") {
  globalForSupabase.supabase = supabase;
}

export default supabase;
