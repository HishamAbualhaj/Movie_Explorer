"use client";
import EmailStep from "@/components/layouts/ForgotPass/EmailStep/EmailStep";
import ResetStep from "@/components/layouts/ForgotPass/ResetStep/ResetStep";
import SentStep from "@/components/layouts/ForgotPass/SentStep/SentStep";
import SuccessStep from "@/components/layouts/ForgotPass/SuccessStep";
import { useSearchParams } from "next/navigation";

const page = () => {
  const step = useSearchParams().get("step") || "email";

  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="max-w-[600px] rounded-xl flex-1 bg-bg-light px-10 py-8">
          {step === "email" && <EmailStep />}
          {step === "sent" && <SentStep />}
          {step === "reset" && <ResetStep />}
          {step === "success" && <SuccessStep />}
        </div>
      </div>
    </>
  );
};

export default page;
