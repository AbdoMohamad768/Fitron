import { supabase } from "./supabase";

export async function getWorkouts() {
  const { data, error } = await supabase.from("workouts").select("*");

  if (error) {
    console.error("Error fetching workouts");
    throw new Error(error.message);
  }

  return data;
}
export async function getWorkout(id) {
  console.log(id);
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching workout");
    throw new Error(error.message);
  }

  return data;
}
export async function getWorkoutByActivity({ id, activity }) {
  let query;

  if (activity === "running") {
    query = supabase
      .from("running_workout")
      .select("distance, pace, workout_id(*)")
      .eq("workout_id", id);
  } else if (activity === "swimming") {
    query = supabase
      .from("swimming_workout")
      .select("distance, workout_id(*)")
      .eq("workout_id", id);
  } else if (activity === "cycling") {
    query = supabase
      .from("cycling_workout")
      .select("distance, pace, workout_id(*)")
      .eq("workout_id", id);
  } else {
    query = supabase.from("workouts").select("*").eq("id", id);
  }

  const { data, error } = await query.single();

  if (activity === "gym") return data;

  const workout = {
    pace: data.pace,
    distance: data.distance,
    ...data.workout_id,
  };

  if (error) {
    console.error("Error fetching workout by activity");
    throw new Error(error.message);
  }

  return workout;
}
export async function deleteWorkoutByActivity(id, activity) {
  if (activity === "running") {
    await deleteRunningWorkout(id);
  } else if (activity === "swimming") {
    await deleteSwimmingWorkout(id);
  } else if (activity === "cycling") {
    await deleteCyclingWorkout(id);
  }
}

export async function addWorkout({
  name,
  duration,
  activity,
  start_date,
  calories_burned,
  status,
  by,
  pace,
  distance,
}) {
  const { data, error } = await supabase
    .from("workouts")
    .insert([
      { name, duration, activity, start_date, calories_burned, status, by },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error adding workout");
    throw new Error(error.message);
  }

  if (activity === "running")
    addRunningWorkout({ workout_id: data.id, pace, distance });

  if (activity === "swimming")
    addSwimmingWorkout({ workout_id: data.id, distance });

  if (activity === "cycling")
    addCyclingWorkout({ workout_id: data.id, pace, distance });

  return data;
}
export async function deleteWorkout({ id, activity }) {
  if (activity === "running") {
    await deleteRunningWorkout(id);
  } else if (activity === "swimming") {
    await deleteSwimmingWorkout(id);
  } else if (activity === "cycling") {
    await deleteCyclingWorkout(id);
  }

  const { error } = await supabase.from("workouts").delete().eq("id", id);

  if (error) {
    console.error("Error deleting workout");
    throw new Error(error.message);
  }

  return id;
}
export async function duplicateWorkout({ workout }) {
  const extraData = await getWorkoutByActivity(workout.id, workout.activity);

  const data = await addWorkout({
    name: workout.name,
    duration: workout.duration,
    activity: workout.activity,
    start_date: workout.start_date,
    calories_burned: workout.calories_burned,
    status: workout.status,
    pace: extraData?.pace ?? null,
    distance: extraData?.distance ?? null,
    by: workout.by,
  });

  return data;
}
export async function updateWorkout({
  name,
  duration,
  activity,
  start_date,
  calories_burned,
  status,
  id,
  pace,
  distance,
}) {
  const workout = await getWorkout(id);

  const { data, error } = await supabase
    .from("workouts")
    .update({ name, duration, activity, start_date, calories_burned, status })
    .eq("id", id)
    .select()
    .single();

  if (activity !== workout.activity) {
    await deleteWorkoutByActivity(id, workout.activity);

    if (activity === "running")
      addRunningWorkout({ workout_id: id, pace, distance });

    if (activity === "swimming")
      addSwimmingWorkout({ workout_id: id, distance });

    if (activity === "cycling")
      addCyclingWorkout({ workout_id: id, pace, distance });
  } else {
    if (activity === "running")
      updateRunningWorkout({ workout_id: id, pace, distance });

    if (activity === "swimming")
      updateSwimmingWorkout({ workout_id: id, distance });

    if (activity === "cycling")
      updateCyclingWorkout({ workout_id: id, pace, distance });
  }

  if (error) {
    console.error("Error updating workout");
    throw new Error(error.message);
  }

  return data;
}

export async function addCyclingWorkout({ workout_id, pace, distance }) {
  const { data, error } = await supabase
    .from("cycling_workout")
    .insert([{ workout_id, pace, distance }])
    .select()
    .single();

  if (error) {
    console.error("Error adding cycling workout");
    throw new Error(error.message);
  }

  return data;
}
export async function deleteCyclingWorkout(id) {
  const { error } = await supabase
    .from("cycling_workout")
    .delete()
    .eq("workout_id", id);

  if (error) {
    console.error("Error deleting cycling workout");
    throw new Error(error.message);
  }
}
export async function updateCyclingWorkout({ workout_id, pace, distance }) {
  const { data, error } = await supabase
    .from("cycling_workout")
    .update({ pace, distance })
    .eq("workout_id", workout_id)
    .select()
    .single();

  if (error) {
    console.error("Error updating cycling workout");
    throw new Error(error.message);
  }

  return data;
}

export async function addRunningWorkout({ workout_id, pace, distance }) {
  const { data, error } = await supabase
    .from("running_workout")
    .insert([{ workout_id, pace, distance }])
    .select()
    .single();

  console.log(data);

  if (error) {
    console.error("Error adding running workout");
    throw new Error(error.message);
  }

  return data;
}
export async function deleteRunningWorkout(id) {
  console.log(id);
  const { error } = await supabase
    .from("running_workout")
    .delete()
    .eq("workout_id", id);

  console.log("Deleted running workout");

  if (error) {
    console.error("Error deleting running workout");
    throw new Error(error.message);
  }
}
export async function updateRunningWorkout({ workout_id, pace, distance }) {
  const { data, error } = await supabase
    .from("running_workout")
    .update({ pace, distance })
    .eq("workout_id", workout_id)
    .select()
    .single();

  if (error) {
    console.error("Error updating running workout");
    throw new Error(error.message);
  }

  return data;
}

export async function addSwimmingWorkout({ workout_id, distance }) {
  const { data, error } = await supabase
    .from("swimming_workout")
    .insert([{ workout_id, distance }])
    .select()
    .single();

  console.log(data);

  if (error) {
    console.error("Error adding swimming workout");
    throw new Error(error.message);
  }

  return data;
}
export async function deleteSwimmingWorkout(id) {
  const { error } = await supabase
    .from("swimming_workout")
    .delete()
    .eq("workout_id", id);

  if (error) {
    console.error("Error deleting swimming workout");
    throw new Error(error.message);
  }
}
export async function updateSwimmingWorkout({ workout_id, distance }) {
  const { data, error } = await supabase
    .from("swimming_workout")
    .update({ distance })
    .eq("workout_id", workout_id)
    .select()
    .single();

  if (error) {
    console.error("Error updating swimming workout");
    throw new Error(error.message);
  }

  return data;
}
