import { supabase } from "./supabase";

export async function getWorkouts() {
  const { data, error } = await supabase.from("walking_workout").select("*");

  if (error) {
    console.error("Error fetching walking workouts");
    throw new Error(error.message);
  }

  return data;
}
