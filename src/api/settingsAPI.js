import { supabase } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error("Error fetching settings");
    throw new Error(error.message);
  }
  return data;
}