export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*");

  if (error) {
    console.error("Error fetching settings");
    throw new Error(error.message);
  }

  return data;
}
