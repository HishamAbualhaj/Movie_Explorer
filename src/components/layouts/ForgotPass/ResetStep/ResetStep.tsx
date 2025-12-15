import Link from "next/link";
import ResetInput from "./ResetInput";

const ResetStep = () => {
  return (
    <>
      <div className="text-2xl text-white font-medium">Reset password</div>
      <div className="mt-2 text-text-secondary text-[15px]">
        Enter a new password for your account.
      </div>
      <div className="mt-5">
        <ResetInput />
      </div>
    </>
  );
};

export default ResetStep;
