import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY;

// console.log("Url: " + supabaseUrl);
// console.log("key: " + supabaseKey);

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
