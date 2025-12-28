"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { loginSchema } from "@/lib/validation/auth.schema";
import { supabase } from "@/supabase/client";
import { useFormik } from "formik";
import Link from "next/link";
import { toast } from "sonner";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      signIn(values.email, values.password);
    },
  });
  const inputs = [
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
          placeholder="Enter you password"
          {...formik.getFieldProps("password")}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : undefined
          }
        />
      ),
    },
  ];

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return toast("Something went wrong");

    toast("Logined successfully");
    return data;
  };

  return (
    <>
      <div className="flex flex-col gap-5 mt-8">
        {inputs.map((input, i) => (
          <div key={i}>{input.component}</div>
        ))}
      </div>
      <div className="flex mt-3 justify-between">
        <div className="flex items-center flex-1 gap-2">
          <div className="">
            <Input className="p-0!" type="checkbox" />
          </div>
          <div className="text-text-muted flex-1">Remember me</div>
        </div>
        <Link href="forgotpass" className="text-primary underline">
          Forgot password
        </Link>
      </div>
      <div className="flex justify-center mt-3">
        <Button type="submit" className="py-2!">
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
