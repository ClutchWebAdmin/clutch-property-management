import Link from "next/link";
import Image from "next/image";
import clutchLogoLight from "../../../public/logos/clutch-logo-light.png";
import clutchLogoDark from "../../../public/logos/clutch-logo-dark.png";
import MobileMenu from "./MobileMenu";

export default function TheHeader({ variant }) {
  if (variant === "light") {
    return (
      <header>
        <nav className="flex flex-row w-full justify-between z-50 p-5 absolute top-0 text-white font-medium text-lg">
          <div className="flex w-full lg:w-1/5">
            <Link href="/" className="flex">
              <Image
                src={clutchLogoLight}
                alt="Clutch Property Management"
                className="w-[200px]"
              />
            </Link>
          </div>
          <div className="hidden lg:flex flex-row justify-center gap-10 lg:w-3/5">
            <Link
              href={`/about`}
              className="w-fit h-fit px-2 py-1 hover:bg-gray-600/20 rounded-md"
            >
              About
            </Link>
            <Link
              href={`/services`}
              className="w-fit h-fit px-2 py-1 hover:bg-gray-600/20 rounded-md"
            >
              Services
            </Link>
            <Link
              href={`/properties`}
              className="w-fit h-fit px-2 py-1 hover:bg-gray-600/20 rounded-md"
            >
              Properties
            </Link>
          </div>
          <div className="hidden lg:flex flex-row justify-end gap-10 lg:w-1/5">
            <a
              href="https://appfolio.com"
              className="px-4 py-2 w-fit h-fit border border-white hover:bg-primaryGold hover:border-primaryGold hover:shadow-md transition-colors duration-200 rounded-lg"
            >
              Pay Rent
            </a>
          </div>
          <MobileMenu />
        </nav>
      </header>
    );
  } else if (variant === "dark") {
    return (
      <header>
        <nav className="flex flex-row w-full justify-between z-50 p-5 absolute top-0 font-medium text-lg">
          <div className="flex w-full lg:w-1/5">
            <Link href="/" className="flex">
              <Image
                src={clutchLogoDark}
                alt="Clutch Property Management"
                className="w-[200px]"
              />
            </Link>
          </div>
          <div className="hidden lg:flex flex-row justify-center gap-10 lg:w-3/5">
            <Link
              href={`/about`}
              className="w-fit h-fit px-2 py-1 hover:bg-gray-500/10 rounded-md"
            >
              About
            </Link>
            <Link
              href={`/services`}
              className="w-fit h-fit px-2 py-1 hover:bg-gray-500/10 rounded-md"
            >
              Services
            </Link>
            <Link
              href={`/properties`}
              className="w-fit h-fit px-2 py-1 hover:bg-gray-500/10 rounded-md"
            >
              Properties
            </Link>
          </div>
          <div className="hidden lg:flex flex-row justify-end gap-10 lg:w-1/5">
            <a
              href="https://appfolio.com"
              className="px-4 py-2 w-fit h-fit border border-primaryDark hover:bg-primaryGold hover:border-primaryGold hover:shadow-md hover:text-primaryLight transition-colors duration-200 rounded-lg"
            >
              Pay Rent
            </a>
          </div>
          <MobileMenu />
        </nav>
      </header>
    );
  }
}
