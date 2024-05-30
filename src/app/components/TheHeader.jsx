import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function TheHeader() {
  return (
    <header>
      <nav className="bg-gray-400 flex flex-row items-start justify-between w-full p-5">
        <Link href="/">Logo</Link>
        <div className="space-x-10">
          <Link href="/">Link</Link>
          <Link href="/">Link</Link>
          <Link href="/">Link</Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
