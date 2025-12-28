"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { supabase } from "@/supabase/client";
import Link from "next/link";
import { useFormik } from "formik";
import { signupSchema } from "@/lib/validation/auth.schema";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPass: "",
      isAgreed: false,
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      signUp(values.email, values.password);
    },
  });

  const inputs = [
    {
      component: (
        <Input
          label="Full Name"
          type="text"
          placeholder="Hisham Abualhaj"
          {...formik.getFieldProps("fullname")}
          error={
            formik.touched.fullname && formik.errors.fullname
              ? formik.errors.fullname
              : undefined
          }
        />
      ),
    },
    {
      component: (
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          {...formik.getFieldProps("email")}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : undefined
          }
        />
      ),
    },
    {
      component: (
        <Input
          label="Password"
          type="password"
          placeholder="Create a strong password"
          {...formik.getFieldProps("password")}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : undefined
          }
        />
      ),
    },
    {
      component: (
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          {...formik.getFieldProps("confirmPass")}
          error={
            formik.touched.confirmPass && formik.errors.confirmPass
              ? formik.errors.confirmPass
              : undefined
          }
        />
      ),
    },
  ];

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error || !data.user) {
      toast("Something went wrong");
      return;
    }

    const { error: insertError } = await supabase.from("users").insert({
      id: data.user.id, // SAME ID as auth user
      name: formik.values.fullname,
      email: data.user.email,
      plan: "Free",
      movies_watched: 0,
    });

    if (insertError) {
      toast("User created but failed to save profile");
      return;
    }
    
    toast("Signed up successfully");

    return redirect("/");
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-5 mt-8">
          {inputs.map((input, i) => (
            <div key={i}>{input.component}</div>
          ))}
        </div>
        <div className="flex mt-3 justify-between">
          <div className="flex items-center flex-1 gap-2">
            <div className="">
              <Input
                className="p-0!"
                type="checkbox"
                {...formik.getFieldProps("isAgreed")}
                checked={formik.values.isAgreed}
                error={
                  formik.touched.isAgreed && formik.errors.isAgreed
                    ? formik.errors.isAgreed
                    : undefined
                }
              />
            </div>
            <div className="text-text-muted py-4 text-[15px] flex-1">
              I agree to the
              <Link href="termsofservice" className="text-primary">
                Terms of Service
              </Link>
              and
              <Link className="text-primary" href="privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <Button type="submit" className="py-2!">
            Create Account
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
