import { supabase } from "./supabase";

export async function getWorkouts() {
  const { data, error } = await supabase.from("cycling_workout").select("*");

  if (error) {
    console.error("Error fetching cycling workouts");
    throw new Error(error.message);
  }

  return data;
}
