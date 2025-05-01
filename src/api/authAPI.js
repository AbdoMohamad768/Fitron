import { supabase } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Error logging in");
    throw new Error(error.message);
  }

  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", data.user.id)
    .single();

  if (userError) {
    console.error("Error fetching user data");
    throw new Error(userError.message);
  }

  return { email: data.user.email, ...user };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error logging out");
    throw new Error(error.message);
  }
}

export async function signup({ email, password, firstName, lastName }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Error signing up");
    throw new Error(error.message);
  }

  const { data: user, error: userError } = await supabase
    .from("users")
    .insert([
      {
        user_id: data.user.id,
        first_name: firstName,
        last_name: lastName,
        region: "Egypt",
      },
    ])
    .select()
    .single();

  if (userError) {
    console.error("Error creating user data");
    throw new Error(userError.message);
  }

  return { email: data.user.email, ...user };
}

export async function updateUser({
  id,
  firstName,
  lastName,
  birthday,
  weight,
  height,
  gender,
}) {
  const { data, error } = await supabase
    .from("users")
    .update({
      first_name: firstName,
      last_name: lastName,
      birthday: birthday,
      gender: gender,
      weight: weight,
      height: height,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error updating user data");
    throw new Error(error.message);
  }

  return data;
}
