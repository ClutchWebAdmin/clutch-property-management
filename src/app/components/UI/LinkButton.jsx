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

  const commonClasses =
    "px-8 py-2 w-fit h-fit text-lg font-medium rounded-full transition-colors duration-200";
  const primaryClasses =
    "border border-transparent bg-secondaryBlue bg-opacity-80 text-primaryLight hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight";
  const secondaryClasses =
    "border border-white bg-primaryLight text-primaryDark hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight";

  if (variant === "primary") {
    return isExternalLink ? (
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClasses} ${primaryClasses}`}
      >
        {text}
      </a>
    ) : (
      <Link href={linkTo} className={`${commonClasses} ${primaryClasses}`}>
        {text}
      </Link>
    );
  } else if (variant === "secondary") {
    return isExternalLink ? (
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClasses} ${secondaryClasses}`}
      >
        {text}
      </a>
    ) : (
      <Link href={linkTo} className={`${commonClasses} ${secondaryClasses}`}>
        {text}
      </Link>
    );
  } else if (variant === "withArrow") {
    return (
      <Link
        href={linkTo}
        className={`flex flex-row gap-2 items-center justify-center ${commonClasses} border border-primaryLight bg-primaryBlue text-primaryLight`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {text}
        <FaArrowDownLong className={`${buttonClasses} text-sm`} />
      </Link>
    );
  }
}
