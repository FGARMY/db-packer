import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    'Supabase env vars missing: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set.'
  );
  // Create a dummy client that won't crash the app
  supabase = createClient(
    'https://placeholder.supabase.co',
    'placeholder-key'
  );
}

export { supabase };
