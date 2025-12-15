"use client";
import Dropdown from "@/components/ui/DropDown";
import useQueryParams from "@/hooks/useQueryParams";
import { useSearchParams } from "next/navigation";

const FilterMovie = () => {
  const handleQuery = useQueryParams();

  const url = useSearchParams();
  const categories = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Horror",
  ];
  const languages = ["English", "Arabic", "Franch"];
  const newToOld = ["Newest", "Oldest"];
  const duration = ["90 min", "90 - 120 min", "120+ min"];
  const type = ["Top Rated", "Masterpiece","Recommended"];
  return (
    <div className="flex max-sm:flex max-sm:flex-col lg:flex-wrap max-lg:grid-cols-2 max-lg:grid gap-3 ">
      <Dropdown
        onSelect={(option) => {
          handleQuery("category", option, true);
        }}
        label={`${url.get("category") || "Select Category"}`}
        options={categories}
      />
      <Dropdown
        onSelect={(option) => {
          handleQuery("language", option, true);
        }}
        label={`${url.get("language") || "Select Language"}`}
        options={languages}
      />
      <Dropdown
        onSelect={(option) => {
          handleQuery("order", option, true);
        }}
        label={`${url.get("order") || "Select Order"}`}
        options={newToOld}
      />
      <Dropdown
        onSelect={(option) => {
          handleQuery("duration", option, true);
        }}
        label={`${url.get("duration") || "Select Duration"}`}
        options={duration}
      />
      <Dropdown
        onSelect={(option) => {
          handleQuery("type", option, true);
        }}
        label={`${url.get("type") || "Select Type"}`}
        options={type}
      />
    </div>
  );
};

export default FilterMovie;
