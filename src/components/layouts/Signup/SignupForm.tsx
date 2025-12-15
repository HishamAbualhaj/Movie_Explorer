"use client";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useState } from "react";

const SignupForm = () => {
  const [signupState, setSignupState] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPass: "",
    isAgreed: false,
  });
  const inputs = [
    {
      component: (
        <Input
          label="Full Name"
          type="text"
          placeholder="Hisham Abualhaj"
          onChange={(e) => {
            setSignupState((prev) => ({
              ...prev,
              fullname: e.target.value,
            }));
          }}
          value={signupState.fullname}
        />
      ),
    },
    {
      component: (
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          onChange={(e) => {
            setSignupState((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          value={signupState.email}
        />
      ),
    },
    {
      component: (
        <Input
          label="Password"
          type="password"
          placeholder="Create a strong password"
          onChange={(e) => {
            setSignupState((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          value={signupState.password}
        />
      ),
    },
    {
      component: (
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => {
            setSignupState((prev) => ({
              ...prev,
              confirmPass: e.target.value,
            }));
          }}
          value={signupState.confirmPass}
        />
      ),
    },
  ];
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
            <Input
              className="p-0!"
              type="checkbox"
              onChange={(e) => {
                setSignupState((prev) => ({
                  ...prev,
                  isAgreed: e.target.checked,
                }));
              }}
              checked={signupState.isAgreed}
            />
          </div>
          <div className="text-text-muted py-4 text-[15px] flex-1">
            I agree to the{" "}
            <Link href="termsofservice" className="text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="text-primary" href="privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
