import { supabase } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error("Error fetching settings");
    throw new Error(error.message);
  }

  return data;
}

export async function updateSettings({ id, timeZone, measurementUnits }) {
  const { data, error } = await supabase
    .from("settings")
    .update({ time_zone: timeZone, measurement_units: measurementUnits })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating settings");
    throw new Error(error.message);
  }

  return data;
}
