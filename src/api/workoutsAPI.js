import { supabase } from "./supabase";

export async function getWorkouts() {
  const { data, error } = await supabase.from("workouts").select("*");

  if (error) {
    console.error("Error fetching workouts");
    throw new Error(error.message);
  }

  return data;
}
