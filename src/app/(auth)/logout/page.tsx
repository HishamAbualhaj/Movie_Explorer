"use client";
import { useUserStore } from "@/stores/userStore";
import { supabase } from "@/supabase/client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const { setUser } = useUserStore();

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      setUser(null);
      redirect("/login");
    };
    logout();
  }, [setUser]);
  return <></>;
};

export default page;
