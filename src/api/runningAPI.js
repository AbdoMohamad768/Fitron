import { supabase } from "./supabase";

export async function getWorkouts() {
  const { data, error } = await supabase.from("running_workout").select("*");

  if (error) {
    console.error("Error fetching running workouts");
    throw new Error(error.message);
  }

  return data;
}
