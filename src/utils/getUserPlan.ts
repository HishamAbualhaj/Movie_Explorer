import { supabase } from "@/supabase/client";

const getUserPlan = async (id: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("plan")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching user plan:", error.message);
    return;
  }
  return data;
};

export default getUserPlan;
