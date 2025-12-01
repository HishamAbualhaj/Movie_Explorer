import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image width={150} height={150} alt="Logo Image" src="/Logo.png" />
    </Link>
  );
};

export default Logo;
