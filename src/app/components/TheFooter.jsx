import Link from "next/link";
import { navLinks } from "../data/navLinks";

export default function TheFooter() {
  return (
    <footer className="flex flex-row justify-between w-full h-fit p-5 bg-gray-400">
      <p>The Footer</p>
      <div className="flex flex-col lg:flex-row gap-10">
        {navLinks.map((item, index) => (
          <Link key={index} href={item.linkTo}>
            {item.text}
          </Link>
        ))}
      </div>
    </footer>
  );
}
