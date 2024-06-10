"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";

export default function LinkButton({ variant, linkTo, text, isExternalLink }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prevState) => !prevState);
  };

  const buttonClasses = isHovered ? "mb-2 transition-all duration-300" : "";

  if (variant === "primary") {
    return (
      <Link
        href={linkTo}
        className="px-8 py-2 w-fit h-fit border border-transparent bg-secondaryBlue bg-opacity-80 text-primaryLight hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded-full text-lg font-medium"
      >
        {text}
      </Link>
    );
  } else if (variant === "primary" && isExternalLink) {
    return (
      <a
        href={linkTo}
        target="_blank"
        className="px-8 py-2 w-fit h-fit border border-transparent bg-secondaryBlue bg-opacity-80 text-primaryLight hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded-full text-lg font-medium"
      >
        {text}
      </a>
    );
  } else if (variant === "secondary") {
    return (
      <Link
        href={linkTo}
        className="px-8 py-2 w-fit h-fit border border-white bg-primaryLight text-primaryDark hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded-full text-lg font-medium"
      >
        {text}
      </Link>
    );
  } else if (variant === "secondary" && isExternalLink) {
    return (
      <a
        href={linkTo}
        target="_blank"
        className="px-8 py-2 w-fit h-fit border border-white bg-primaryLight text-primaryDark hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded-full text-lg font-medium"
      >
        {text}
      </a>
    );
  } else if (variant === "withArrow") {
    return (
      <Link
        href={linkTo}
        className="flex flex-row gap-2 items-center justify-center px-8 py-2 w-fit h-fit border border-white bg-primaryblue text-primaryLight rounded-full text-lg font-medium"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {text}
        <FaArrowDownLong className={`${buttonClasses} text-sm`} />
      </Link>
    );
  }
}
