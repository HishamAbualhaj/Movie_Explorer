"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { validationSchema } from "@/lib/validation/movie.schema";
import { supabase } from "@/supabase/client";
import { useFormik } from "formik";
import { toast } from "sonner";

const page = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      duration: "",
      year: "",
      overview: "",
      poster: "",
      rating: "",
      genre: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { data, error } = await supabase.from("movies").insert([
        {
          title: values.title,
          duration: Number(values.duration),
          year: Number(values.year),
          overview: values.overview,
          poster: values.poster || "/movie_image.png",
          rating: Number(values.rating),
          genre: values.genre
            ? values.genre.split(",").map((g) => g.trim())
            : [],
          views: 0,
        },
      ]);

      if (error) {
        console.error(error);
        return toast("Failed to add movie");
      }

      toast("Movie added successfully!");
      formik.resetForm();
    },
  });
  return (
    <>
      <div className="container-wrapper py-8">
        <h1 className="text-2xl text-white mb-5">Add New Movie</h1>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Title"
            className="bg-bg-dark"
            placeholder="Movie title..."
            {...formik.getFieldProps("title")}
            error={
              formik.touched.title && formik.errors.title
                ? formik.errors.title
                : undefined
            }
          />
          <Input
            label="Duration (min)"
            type="number"
            className="bg-bg-dark"
            placeholder="ex: 120"
            {...formik.getFieldProps("duration")}
            error={
              formik.touched.duration && formik.errors.duration
                ? formik.errors.duration
                : undefined
            }
          />
          <Input
            label="Year"
            type="number"
            className="bg-bg-dark"
            placeholder="2022"
            {...formik.getFieldProps("year")}
            error={
              formik.touched.year && formik.errors.year
                ? formik.errors.year
                : undefined
            }
          />
          <Input
            label="Overview"
            className="bg-bg-dark"
            placeholder="Overview for movie ..."
            {...formik.getFieldProps("overview")}
            error={
              formik.touched.overview && formik.errors.overview
                ? formik.errors.overview
                : undefined
            }
          />
          <Input
            className="bg-bg-dark"
            placeholder="/image_url"
            label="Poster URL"
            {...formik.getFieldProps("poster")}
          />

          <Input
            label="Genre (comma separated)"
            className="bg-bg-dark"
            placeholder="Drama,Comedy,Action..."
            {...formik.getFieldProps("genre")}
          />
          <Button type="submit" className="mt-4 py-2 w-fit cursor-pointer">
            Add Movie
          </Button>
        </form>
      </div>
    </>
  );
};

export default page;
