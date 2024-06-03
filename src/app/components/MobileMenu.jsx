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
          isMobileMenuOpen
            ? "hidden"
            : "lg:hidden absolute top-5 right-5 flex flex-row gap-4"
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
          className="lg:hidden fixed top-5 right-5 z-[9998] animate__animated animate__rotateIn"
        >
          <AiOutlineClose className="h-8 w-8" />
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed flex flex-col h-full inset-0 bg-primaryGold text-white font-medium z-[9000] animate__animated animate__slideInDown">
          <Image
            src={clutchLogo}
            alt="Clutch Property Management"
            className="w-[200px] m-5"
          />
          <div className="flex flex-col h-full items-start justify-start gap-y-12 text-4xl p-5">
            <Link href={`/about`} onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href={`/services`} onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link href={`/properties`} onClick={toggleMobileMenu}>
              Properties
            </Link>
            <Link href={`/contact`} onClick={toggleMobileMenu}>
              Contact
            </Link>
            <a
              href={`https://appfolio.com`}
              target="_blank"
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
