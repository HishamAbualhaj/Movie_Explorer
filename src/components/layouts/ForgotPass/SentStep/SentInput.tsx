"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const SentInput = () => {
  return (
    <>
      <Input label="Enter token from your email" placeholder="wrt@#$q4thr..." />
      <div className="mt-5 flex justify-center">
        <Button>Verify token</Button>
      </div>
    </>
  );
};

export default SentInput;
