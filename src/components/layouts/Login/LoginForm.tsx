"use client";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    isRemember: false,
  });
  const inputs = [
    {
      component: (
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          onChange={(e) => {
            setLoginState((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          value={loginState.email}
        />
      ),
    },
    {
      component: (
        <Input
          label="Password"
          type="password"
          placeholder="Enter you password"
          onChange={(e) => {
            setLoginState((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          value={loginState.password}
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
          <Input
            className="p-0!"
            type="checkbox"
            onChange={(e) => {
              setLoginState((prev) => ({
                ...prev,
                isRemember: e.target.checked,
              }));
            }}
            checked={loginState.isRemember}
          />
          <div className="text-text-muted flex-1">Remember me</div>
        </div>
        <Link href="forgotpass" className="text-primary underline">
          Forgot password
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
