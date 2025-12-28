"use client";
import Button from "@/components/ui/Button";
import DataTable from "@/components/ui/DataTable";
import Input from "@/components/ui/Input";
import { Column, User } from "@/types";
import { X } from "lucide-react";
import { useMemo, useState } from "react";

const UsersPage = () => {
  const users: User[] = [
    {
      id: '1',
      name: "John Carter",
      email: "john@mail.com",
      plan: "Premium",
      phone: "+1 555 123",
      moviesWatched: 42,
    },
    {
      id: '2',
      name: "Sarah Smith",
      email: "sarah@mail.com",
      plan: "Free",
      phone: "+44 222 333",
      moviesWatched: 8,
    },
    {
      id: '3',
      name: "Ahmed Ali",
      email: "ahmed@mail.com",
      plan: "Premium",
      phone: "+970 599 111",
      moviesWatched: 120,
    },
  ];

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

  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
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
        <div className="flex flex-col gap-5 bg-bg-dark p-5 w-fit rounded-md">
          <div className="flex text-white justify-between items-center gap-10">
            <div className="text-white">
              Are you sure you want to ban <strong>{selectedUser?.name}</strong>
              ?
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
            <Button className="py-2!">Yes?</Button>
            <Button className="py-2!" variant="secondary">
              No
            </Button>
          </div>
        </div>
      )}
      <DataTable data={users} columns={columns} />
    </div>
  );
};

export default UsersPage;
