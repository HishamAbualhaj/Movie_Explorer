"use client";
import Button from "@/components/ui/Button";
import DataTable from "@/components/ui/DataTable";
import Input from "@/components/ui/Input";
import { useMovies } from "@/hooks/useMovies";
import { supabase } from "@/supabase/client";
import { Column, User } from "@/types";
import { Movie } from "@/types/movie";
import { useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const MoviesPage = () => {
  const columns: Column<Movie>[] = [
    { key: "title", label: "Title" },
    { key: "genre", label: "Genre" },
    { key: "year", label: "Year" },
    { key: "rating", label: "Rating" },
    { key: "overview", label: "Overview" },
    {
      key: "actions",
      label: "Actions",
      render: (m) => (
        <div
          onClick={() => {
            setModal(true);
            setSelectedMoive(m);
          }}
          className="flex gap-2"
        >
          <button className="hover:underline bg-primary/50 text-white px-4 py-2 rounded-md cursor-pointer">
            Delete
          </button>
        </div>
      ),
    },
  ];
  const queryClient = useQueryClient();

  const { data: movies, isLoading } = useMovies();

  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedMoive, setSelectedMoive] = useState<Movie | null>(null);

  const deleteMovie = async (id: string | undefined) => {
    if (!id) return;
    const { data, error } = await supabase.from("movies").delete().eq("id", id);

    if (error) {
      console.error("Failed to delete movie:", error.message);
      return { success: false, error };
    }

    toast("Movie deleted");
    setModal(false);
    await queryClient.invalidateQueries({
      queryKey: ["movies"],
    });
    return { success: true, data };
  };

  return (
    <div className="p-6 space-y-4 bg-bg min-h-screen">
      <h1 className="text-xl font-semibold text-text-main">Movies</h1>

      <Input
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm rounded-lg border border-border bg-bg-dark px-4 py-2 text-text-main placeholder:text-text-muted outline-none focus:border-primary"
      />
      {modal && (
        <div className="flex flex-col gap-5 bg-bg-dark p-5 w-fit rounded-md">
          <div className="flex text-white justify-between items-center gap-10">
            <div className="text-white">
              Are you sure you want to delete{" "}
              <strong>{selectedMoive?.title}</strong>?
            </div>
            <div
              onClick={() => {
                setModal(false);
                setSelectedMoive(null);
              }}
              className="bg-bg-light p-2 rounded-md"
            >
              <X size={18} />
            </div>
          </div>
          <div className="flex gap-3">
            {isLoading ? (
              <Button className="py-2!">Loading ...</Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    deleteMovie(selectedMoive?.id);
                  }}
                  className="py-2!"
                >
                  Yes?
                </Button>
                <Button className="py-2!" variant="secondary">
                  No
                </Button>
              </>
            )}
          </div>
        </div>
      )}
      <DataTable data={movies ?? []} columns={columns} />
    </div>
  );
};

export default MoviesPage;
