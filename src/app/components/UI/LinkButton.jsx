import Link from "next/link";

export default function LinkButton({ variant, linkTo, text, isExternalLink }) {
  if (variant === "primary") {
    return (
      <Link
        href={linkTo}
        className="px-8 py-2 w-fit h-fit border border-transparent bg-secondaryBlue bg-opacity-80 text-primaryLight hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded text-lg font-medium"
      >
        {text}
      </Link>
    );
  } else if (variant === "primary" && isExternalLink) {
    return (
      <a
        href={linkTo}
        target="_blank"
        className="px-8 py-2 w-fit h-fit border border-transparent bg-secondaryBlue bg-opacity-80 text-primaryLight hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded text-lg font-medium"
      >
        {text}
      </a>
    );
  } else if (variant === "secondary") {
    return (
      <Link
        href={linkTo}
        className="px-8 py-2 w-fit h-fit border border-white bg-primaryLight text-primaryDark hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded text-lg font-medium"
      >
        {text}
      </Link>
    );
  } else if (variant === "secondary" && isExternalLink) {
    return (
      <a
        href={linkTo}
        target="_blank"
        className="px-8 py-2 w-fit h-fit border border-white bg-primaryLight text-primaryDark hover:bg-primaryBlue hover:text-primaryLight hover:border-primaryLight transition-colors duration-200 rounded text-lg font-medium"
      >
        {text}
      </a>
    );
  }
}
