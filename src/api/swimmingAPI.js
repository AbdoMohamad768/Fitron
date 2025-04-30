import { supabase } from "./supabase";

export async function getWorkouts() {
  const { data, error } = await supabase.from("swimming_workout").select("*");

  if (error) {
    console.error("Error fetching swimming workouts");
    throw new Error(error.message);
  }

  return data;
}
