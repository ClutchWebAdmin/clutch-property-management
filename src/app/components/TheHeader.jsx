import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../data/navLinks";

export default function TheHeader() {
  return (
    <header>
      <nav className="bg-gray-400 flex flex-row items-start justify-between w-full p-5">
        <Link href="/">Clutch Property Management</Link>
        <div className="hidden lg:flex flex-row gap-10">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.linkTo}>
              {item.text}
            </Link>
          ))}
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
