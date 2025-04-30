import { supabase } from "./supabase";

export async function getWorkouts() {
  let { data: gymWorkouts, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("type", "gym");

  if (error) {
    console.error("Error fetching workouts; trying to get gym workouts");
    throw new Error(error.message);
  }

  return gymWorkouts;
}
