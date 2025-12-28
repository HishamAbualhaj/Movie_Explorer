import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  duration: Yup.number().required("Duration is required"),
  year: Yup.number().required("Year is required"),
  overview: Yup.string().required("Overview is required"),
  rating: Yup.number().required("Rating is required"),
});
