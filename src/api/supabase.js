import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zbslaiojfxrfihxtjwnq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpic2xhaW9qZnhyZmloeHRqd25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMzI0MDUsImV4cCI6MjA1NjcwODQwNX0.iWzBK1eYAHiAUA1mjOxqv3O6upD5jMbcFPkZghNM-JM";

// export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseURL, supabaseKey);
