"use client";
import Link from "next/link";
import Image from "next/image";
import clutchLogoLight from "../../../public/logos/clutch-logo-light.png";
import MobileMenu from "./MobileMenu";
import services from "./data/services";
import ContactButton from "./UI/ContactButton";
import LinkButton from "./UI/LinkButton";
import { FaArrowDownLong } from "react-icons/fa6";

export default function TheHeader() {
  return (
    <header className="flex flex-col">
      <nav className="flex justify-between items-center z-50 absolute top-0 w-full font-medium text-lg h-[var(--header-height)] bg-primaryBlue px-5 lg:px-10 border-b border-secondaryBlue">
        <div className="flex items-center w-fit lg:w-1/4 py-5">
          <Link href="/" className="flex">
            <Image src={clutchLogoLight} alt="Logo" className="w-[175px]" priority />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-10 flex-grow">
          {/* Properties */}
          <div className="relative group">
            <button className="flex items-center gap-2">
              Properties <FaArrowDownLong className="text-sm" />
            </button>
            <div className="absolute top-full left-0  hidden group-hover:block flex-col bg-white/60 backdrop-blur-md text-black rounded shadow-lg z-50 w-56 py-3 px-4">
              <Link href="/properties" className="block py-1 hover:underline">All Properties</Link>
              <Link href="/properties?type=residential" className="block py-1 hover:underline">Residential</Link>
              <Link href="/properties?type=commercial" className="block py-1 hover:underline">Commercial</Link>
              <Link href="/properties?type=warehouse" className="block py-1 hover:underline">Warehouse</Link>
            </div>
          </div>

          {/* Services */}
          <div className="relative group">
            <button className="flex items-center gap-2">
              Services <FaArrowDownLong className="text-sm" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block flex-col bg-white/60 backdrop-blur-md text-black rounded shadow-lg z-50 w-56 py-3 px-4">
              {services.map((s, i) => (
                <Link key={i} href={`/services/#${s.sectionId}`} className="block py-1 hover:underline">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 py-5">
          <ContactButton buttonText="Contact Us" />
          <LinkButton variant="secondary" text="Pay Rent" linkTo="https://passport.appf.io/sign_in?idp_type=property&vhostless=true" isExternalLink />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
