"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useQueryParams from "@/hooks/useQueryParams";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const SearchMovie = () => {
  const [search, setSearch] = useState<string>("");

  const handleQuery = useQueryParams();
  const url = useSearchParams();

  const triggerSearch = (value: string) => {
    handleQuery("search", value, true);
    // hitting api end point
  };

  useEffect(() => {
    const searchData = url.get("search") || "";
    setSearch(searchData);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Input
        onChange={handleChange}
        value={search}
        className="lg:py-3"
        placeholder="Search for a movie…"
        label="search"
      />
      <div className="max-lg:mt-5 max-lg:flex justify-end">
        <Button
          onClick={() => {
            triggerSearch(search);
          }}
          className="max-lg:py-2!"
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default SearchMovie;
