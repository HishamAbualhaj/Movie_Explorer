"use client"
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


const EmailInput = () => {
  return (
    <>
      <Input label="Email" placeholder="you@example.com" />
      <div className="mt-5 flex justify-center">
        <Button>Send reset link</Button>
      </div>
    </>
  );
};

export default EmailInput;
