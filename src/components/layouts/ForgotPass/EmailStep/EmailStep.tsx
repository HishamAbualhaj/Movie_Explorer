import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";
import EmailInput from "./EmailInput";

const EmailStep = () => {
  return (
    <>
      <div className="text-2xl text-white font-medium">Forgot password</div>
      <div className="mt-2 text-text-secondary text-[15px]">
        Enter your email address and we’ll send you a link to reset your
        password.
      </div>
      <div className="mt-5">
        <EmailInput />
      </div>
      <div className="mt-10 flex justify-between">
        <div className="text-text-secondary">Remember your password?</div>
        <Link className="text-primary underline" href="/login">
          Back to login
        </Link>
      </div>
    </>
  );
};

export default EmailStep;
