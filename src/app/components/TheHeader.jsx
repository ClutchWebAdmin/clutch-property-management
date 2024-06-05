"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clutchLogoLight from "../../../public/logos/clutch-logo-light.png";
import MobileMenu from "./MobileMenu";
import LinkButton from "./UI/LinkButton";
import { FaArrowDownLong } from "react-icons/fa6";

export default function TheHeader() {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (dropdownType) => {
    setDropdown((prev) => (prev === dropdownType ? null : dropdownType));
  };

  const closeDropdown = () => {
    setDropdown(null);
  };

  return (
    <header className="flex flex-col">
      <nav className="flex flex-row w-full justify-between z-50 absolute top-0 font-medium text-lg border-b border-secondaryBlue h-[var(--header-height)]">
        <div className="flex w-fit lg:w-1/4 md:border-r border-secondaryBlue p-5">
          <Link href="/" className="flex">
            <Image
              src={clutchLogoLight}
              alt="Clutch Property Management"
              className="w-[175px]"
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-grow flex-row justify-start gap-10 pl-5">
          <button
            onClick={() => toggleDropdown("services")}
            onMouseEnter={() => toggleDropdown("services")}
            className="flex flex-row items-start gap-2 h-2/3 mt-auto"
          >
            <div className="flex flex-row gap-2 items-center">
              Services
              <FaArrowDownLong className="text-sm" />
            </div>
          </button>
          <button
            onClick={() => toggleDropdown("properties")}
            onMouseEnter={() => toggleDropdown("properties")}
            className="flex flex-row items-start gap-2 h-2/3 mt-auto"
          >
            <div className="flex flex-row gap-2 items-center">
              Properties
              <FaArrowDownLong className="text-sm" />
            </div>
          </button>
        </div>
        <div className="hidden lg:flex flex-row justify-end items-center gap-10 w-fit p-5">
          <Link href={`/contact`}>Contact Us</Link>
          <LinkButton
            variant={`secondary`}
            text={`Pay Rent`}
            linkTo={`https://appfolio.com`}
            isExternalLink
          />
        </div>
        <MobileMenu />
      </nav>
      {dropdown === "services" && (
        <div
          className="absolute hidden lg:flex flex-row gap-5 top-[var(--header-height)] w-full border-b bg-primaryBlue border-secondaryBlue z-20 p-5"
          onMouseLeave={closeDropdown}
        >
          <Link
            href={`/services`}
            className="w-1/3 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80"
          >
            Service 1
          </Link>
          <Link
            href={`/services`}
            className="w-1/3 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80"
          >
            Service 2
          </Link>
          <Link
            href={`/services`}
            className="w-1/3 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80"
          >
            Service 3
          </Link>
        </div>
      )}
      {dropdown === "properties" && (
        <div
          className="absolute hidden lg:flex flex-row gap-5 top-[var(--header-height)] w-full border-b bg-primaryBlue border-secondaryBlue z-20 p-5"
          onMouseLeave={closeDropdown}
        >
          <Link
            href={`/properties`}
            className="w-1/4 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80"
          >
            Property 1
          </Link>
          <Link
            href={`/properties`}
            className="w-1/4 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80"
          >
            Property 2
          </Link>
          <Link
            href={`/properties`}
            className="w-1/4 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80"
          >
            Property 3
          </Link>
          <Link
            href={`/properties`}
            className="w-1/4 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80"
          >
            Property 4
          </Link>
        </div>
      )}
    </header>
  );
}
