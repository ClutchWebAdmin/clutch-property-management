"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clutchLogoLight from "../../../public/logos/clutch-logo-light.png";
import MobileMenu from "./MobileMenu";
import LinkButton from "./UI/LinkButton";
import { FaArrowDownLong } from "react-icons/fa6";
import services from "./data/services";

export default function TheHeader() {
  const [dropdown, setDropdown] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (buttonType) => {
    setHoveredButton(buttonType);
    setDropdown(buttonType);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const closeDropdown = () => {
    setDropdown(null);
    setHoveredButton(null);
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
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-grow flex-row justify-start gap-10 pl-5">
          <button
            onMouseEnter={() => handleMouseEnter("properties")}
            onMouseLeave={handleMouseLeave}
            className="flex flex-row items-start gap-2 h-2/3 mt-auto"
          >
            <div className="flex flex-row gap-2 items-center">
              Properties
              <FaArrowDownLong
                className={`text-sm ${
                  hoveredButton === "properties"
                    ? "mb-2 transition-all duration-300"
                    : ""
                }`}
              />
            </div>
          </button>
          <button
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
            className="flex flex-row items-start gap-2 h-2/3 mt-auto"
          >
            <div className="flex flex-row gap-2 items-center">
              Services
              <FaArrowDownLong
                className={`text-sm ${
                  hoveredButton === "services"
                    ? "mb-2 transition-all duration-300"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>
        <div className="hidden lg:flex flex-row justify-end items-center gap-10 w-fit p-5">
          <Link href={`/contact`}>Contact Us</Link>
          <LinkButton
            variant={`secondary`}
            text={`Pay Rent`}
            linkTo={`https://appfolio.com`}
            isExternalLink={true}
          />
        </div>
        <MobileMenu />
      </nav>
      {dropdown === "services" && (
        <nav
          className="absolute hidden lg:grid grid-cols-2 lg:grid-cols-3 flex-row gap-5 top-[var(--header-height)] w-full border-b bg-primaryBlue border-secondaryBlue z-20 p-5 py-10"
          onMouseLeave={closeDropdown}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/#${service.sectionId}`}
              className="bg-secondaryBlue rounded-lg h-[200px] hover:opacity-80 p-5 hover:-translate-y-3 transition duration-300"
              onClick={closeDropdown}
            >
              <h4 className="text-2xl font-medium">{service.name}</h4>
            </Link>
          ))}
        </nav>
      )}
      {dropdown === "properties" && (
        <nav
          className="absolute hidden lg:flex flex-row gap-5 top-[var(--header-height)] w-full border-b bg-primaryBlue border-secondaryBlue z-20 p-5 py-10 text-2xl font-medium"
          onMouseLeave={closeDropdown}
        >
          <Link
            href={`/properties`}
            className="w-1/3 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80 p-5 hover:-translate-y-3 transition duration-300"
            onClick={closeDropdown}
          >
            All Properties
          </Link>
          <Link
            href={`/properties?type=residential`}
            className="w-1/3 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80 p-5 hover:-translate-y-3 transition duration-300"
            onClick={closeDropdown}
          >
            Residential Properties
          </Link>
          <Link
            href={`/properties?type=commercial`}
            className="w-1/3 bg-secondaryBlue rounded-lg aspect-square hover:opacity-80 p-5 hover:-translate-y-3 transition duration-300"
            onClick={closeDropdown}
          >
            Commerical Properties
          </Link>
        </nav>
      )}
    </header>
  );
}
