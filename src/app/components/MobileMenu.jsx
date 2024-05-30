"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

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
            : "lg:hidden flex flex-row gap-4 absolute top-5 right-5"
        }
      >
        <button
          id="open-mobile-menu"
          aria-label="open-mobile-menu"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="h-6 w-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <button
          id="close-mobile-menu"
          aria-label="close-mobile-menu"
          onClick={toggleMobileMenu}
          className="lg:hidden absolute top-5 right-5 z-[9998] animate__animated animate__rotateIn"
        >
          <AiOutlineClose className="h-6 w-6 text-white" />
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-500 text-white font-medium z-[9000] animate__animated animate__slideInDown">
          <div className="flex flex-col h-full justify-center space-y-12 items-center text-xl">
            <Link href="/" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="/" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
