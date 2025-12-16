"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const SearchMovie = () => {
  return (
    <>
      <Input
        className="lg:py-3"
        placeholder="Search for a movie…"
        label="search"
      />
      <div className="max-lg:mt-5 max-lg:flex justify-end">
        <Button className="max-lg:py-2!">Search</Button>
      </div>
    </>
  );
};

export default SearchMovie;
