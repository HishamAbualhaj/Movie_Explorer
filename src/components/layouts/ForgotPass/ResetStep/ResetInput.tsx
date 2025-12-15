"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const ResetInput = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <Input
          onChange={() => {}}
          label="Password"
          placeholder="New password"
        />
        <Input
          onChange={() => {}}
          label="Confirm Password"
          placeholder="Confirm New password"
        />
      </div>
      <div className="mt-5 flex justify-center">
        <Button>Reset Password</Button>
      </div>
    </>
  );
};

export default ResetInput;
