"use client";
import Button from "@/components/ui/Button";
import DataTable from "@/components/ui/DataTable";
import Input from "@/components/ui/Input";
import { supabase } from "@/supabase/client";
import { Column, User } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useMemo, useState } from "react";

const UsersPage = () => {
  const fetchUsers = async () => {
    let query = supabase.from("users").select("*");

    const { data, error } = await query;

    if (error) throw error;
    return data;
  };

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
    staleTime: 1000 * 60 * 5,
  });

  const columns: Column<User>[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "plan",
      label: "Plan",
      render: (u) => (
        <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
          {u.plan}
        </span>
      ),
    },
    { key: "phone", label: "Phone" },
    { key: "moviesWatched", label: "Movies Watched" },
    {
      key: "actions",
      label: "Actions",
      render: (u) => (
        <div
          onClick={() => {
            setModal(true);
            setSelectedUser(u);
          }}
          className="flex gap-2"
        >
          <button className="hover:underline bg-primary/50 text-white px-4 py-2 rounded-md cursor-pointer">
            Ban
          </button>
        </div>
      ),
    },
  ];

  const banUser = (user: User | null) => {
    if (!user) return;

    // handle ban user 
  };
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const filteredUsers = useMemo(() => {
    return users?.filter((u) =>
      `${u.name} ${u.email}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (
    <div className="p-6 space-y-4 bg-bg min-h-screen">
      <h1 className="text-xl font-semibold text-text-main">Users</h1>

      <Input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm rounded-lg border border-border bg-bg-dark px-4 py-2 text-text-main placeholder:text-text-muted outline-none focus:border-primary"
      />
      {modal && (
        <div
          onClick={() => {
            setModal(false);
          }}
          className="bg-bg-dark/10 w-full h-full top-0 grid place-items-center fixed left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col gap-5 bg-bg-dark p-5 w-fit rounded-md ">
            <div className="flex text-white justify-between items-center gap-10">
              <div className="text-white">
                Are you sure you want to ban{" "}
                <strong>{selectedUser?.name}</strong>?
              </div>
              <div
                onClick={() => {
                  setModal(false);
                  setSelectedUser(null);
                }}
                className="bg-bg-light p-2 rounded-md"
              >
                <X size={18} />
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                className="py-2!"
                onClick={() => {
                  banUser(selectedUser);
                }}
              >
                Yes?
              </Button>
              <Button className="py-2!" variant="secondary">
                No
              </Button>
            </div>
          </div>
        </div>
      )}
      <DataTable data={filteredUsers ?? []} columns={columns} />
    </div>
  );
};

export default UsersPage;
