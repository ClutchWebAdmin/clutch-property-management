"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-logo-light.png";

export default function MobileMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={
          isMobileMenuOpen ? "hidden" : "lg:hidden flex flex-row gap-4 p-5"
        }
      >
        <button
          id="open-mobile-menu"
          aria-label="open-mobile-menu"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="h-8 w-8" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <button
          id="close-mobile-menu"
          aria-label="close-mobile-menu"
          onClick={toggleMobileMenu}
          className="lg:hidden p-5 z-[9998] animate__animated animate__rotateIn"
        >
          <AiOutlineClose className="h-8 w-8" />
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed flex flex-col h-full inset-0 bg-primaryBlue opacity-[98%] font-medium z-[9000] animate__animated animate__slideInDown">
          <Image
            src={clutchLogo}
            alt="Clutch Property Management"
            className="w-[175px] m-5"
          />
          <div className="flex flex-col h-full items-start justify-start text-4xl border-t border-secondaryBlue">
            <Link
              href={`/services`}
              className="border-b border-secondaryBlue w-full p-5"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href={`/properties`}
              className="border-b border-secondaryBlue w-full p-5"
              onClick={toggleMobileMenu}
            >
              All Properties
            </Link>
            <Link
              href={`/properties?type=residential`}
              className="border-b border-secondaryBlue w-full p-5"
              onClick={toggleMobileMenu}
            >
              Residential
            </Link>
            <Link
              href={`/properties?type=commercial`}
              className="border-b border-secondaryBlue w-full p-5"
              onClick={toggleMobileMenu}
            >
              Commercial
            </Link>
            <Link
              href={`/contact`}
              className="border-b border-secondaryBlue w-full p-5"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
            <a
              href={`https://appfolio.com`}
              target="_blank"
              className="border-b border-secondaryBlue w-full p-5"
              onClick={toggleMobileMenu}
            >
              Pay Rent
            </a>
          </div>
        </div>
      )}
    </>
  );
}
