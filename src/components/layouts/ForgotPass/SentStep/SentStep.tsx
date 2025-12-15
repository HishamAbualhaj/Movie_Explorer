import SentInput from "./SentInput";

const SentStep = () => {
  return (
    <>
      <div className="text-2xl text-white font-medium">Check your email</div>
      <div className="mt-2 text-text-secondary text-[15px]">
        We’ve sent a password reset link to your email address.
      </div>
      <div className="mt-5">
        <SentInput />
      </div>
    </>
  );
};

export default SentStep;
