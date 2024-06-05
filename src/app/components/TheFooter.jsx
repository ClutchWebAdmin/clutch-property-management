import Image from "next/image";
import Link from "next/link";
import clutchLogoLight from "../../../public/logos/clutch-logo-light.png";

export default function TheFooter() {
  return (
    <footer className="flex flex-col gap-5 lg:flex-row justify-between w-full h-fit p-5">
      <Link href="/" className="w-5/6 md:w-1/5 mx-auto md:mx-0">
        <Image src={clutchLogoLight} alt="Clutch Property Management" />
      </Link>
      <div className="flex flex-col lg:flex-row gap-10"></div>
    </footer>
  );
}
