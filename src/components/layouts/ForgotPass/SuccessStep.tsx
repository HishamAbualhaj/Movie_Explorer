import Link from "next/link";

const SuccessStep = () => {
  return (
    <>
      <div className="text-2xl text-white font-medium">Password updated</div>
      <div className="mt-2 text-text-secondary text-[15px]">
        Your password has been successfully reset.
      </div>
      <div className="mt-10">
        <Link
          className=" bg-primary text-white py-2 px-3 rounded-md cursor-pointer"
          href="login"
        >
          Back to Login
        </Link>
      </div>
    </>
  );
};

export default SuccessStep;
