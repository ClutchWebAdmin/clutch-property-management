import Image from "next/image";
import Link from "next/link";
import clutchLogoLight from "../../../public/logos/clutch-logo-light.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

export default function TheFooter() {
  return (
    <footer className="flex flex-col w-full h-fit">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col col-span-full lg:col-span-1 border-b lg:border-r border-secondaryBlue">
          <Link href="/" className="p-5 md:p-10 lg:p-5 xl:p-10">
            <Image src={clutchLogoLight} alt="Clutch Property Management" />
          </Link>
        </div>

        <ul className="flex flex-col text-lg gap-2 p-5 xl:p-10 border-r border-b border-secondaryBlue">
          <li className="font-medium text-2xl lg:text-3xl text-accentBlue mb-2">
            Properties
          </li>
          <Link
            href={`/properties`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>All Properties</li>
          </Link>
          <Link
            href={`/properties?type=residential`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Residential</li>
          </Link>
          <Link
            href={`/properties?type=commercial`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Commerical</li>
          </Link>
          <Link
            href={`/properties?type=mixed-use`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Mixed-Use</li>
          </Link>
        </ul>

        <ul className="flex flex-col text-lg gap-2 p-5 xl:p-10 border-b border-secondaryBlue">
          <li className="font-medium text-2xl lg:text-3xl text-accentBlue mb-2">
            Services
          </li>
          <Link
            href={`/services`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Service 1</li>
          </Link>
          <Link
            href={`/services`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Service 2</li>
          </Link>
          <Link
            href={`/services`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Service 3</li>
          </Link>
        </ul>

        <ul className="flex flex-col col-span-full md:col-span-1 lg:col-span-1 text-lg gap-2 p-5 xl:p-10 border-b lg:border-b-0 md:border-r border-secondaryBlue">
          <li className="font-medium text-2xl lg:text-3xl text-accentBlue mb-2">
            Other
          </li>
          <Link
            href={`/terms`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Terms of Service</li>
          </Link>
          <Link
            href={`/privacy`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Privacy Policy</li>
          </Link>
          <Link
            href={`/accessibility`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Accessibility Statement</li>
          </Link>
          <Link
            href={`/sitemap.xml`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Sitemap</li>
          </Link>
        </ul>

        <div className="col-span-full md:col-span-1 flex flex-col gap-3 p-5 xl:p-10 border-b lg:border-b-0 lg:border-r border-secondaryBlue">
          <div className="flex flex-col gap-5 text-accentBlue">
            <p className="font-medium text-2xl lg:text-3xl text-accentBlue mb-2">
              Contact Us
            </p>
            <div className="flex flex-row items-start gap-3">
              <FaLocationDot className="text-2xl hover:text-secondaryBlue transition-colors duration-200" />
              <a
                href="https://www.google.com/maps/place/Clutch+Industries/@44.9504676,-123.0366476,16z/data=!3m1!4b1!4m6!3m5!1s0x54bfff07e04c7031:0xc8cc5d1878b3290f!8m2!3d44.9504638!4d-123.0340727!16s%2Fg%2F11c5sv6knd?entry=tts"
                target="_blank"
              >
                <p className="text-primaryLight hover:text-accentBlue transition-colors duration-200 -mt-1.5">
                  360 Belmont St NE
                  <br />
                  Salem, OR 97301
                </p>
              </a>
            </div>
            <div className="flex flex-row items-start gap-3">
              <FaPhone className="text-2xl hover:text-secondaryBlue transition-colors duration-200" />
              <a href="tel:+15039675228" target="_blank">
                <p className="text-primaryLight hover:text-accentBlue transition-colors duration-200">
                  503-967-5228
                </p>
              </a>
            </div>
            <div className="flex flex-row items-start gap-3">
              <AiOutlineMail className="text-2xl hover:text-accentBlue transition-colors duration-200" />
              <a href="mailto:office@clutchindustries.com" target="_blank">
                <p className="text-primaryLight hover:text-accentBlue transition-colors duration-200">
                  office@clutchindustries.com
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-full md:col-span-1 flex flex-col gap-3 p-5 xl:p-10 md:border-r border-secondaryBlue">
          <p className="font-medium text-2xl lg:text-3xl text-accentBlue mb-2">
            Follow Us
          </p>
          <div className="flex flex-row items-baseline gap-5 text-2xl text-primaryLight">
            <Link href={`https://facebook.com`} target="_blank">
              <FaFacebook className="hover:text-secondaryBlue transition-colors duration-200" />
            </Link>
            <Link href={`https://instagram.com`} target="_blank">
              <FaInstagram className="hover:text-secondaryBlue transition-colors duration-200" />
            </Link>
            <Link href={`https://linkedin.com`} target="_blank">
              <FaLinkedin className="hover:text-secondaryBlue transition-colors duration-200" />
            </Link>
            <Link href={`https://twitter.com`} target="_blank">
              <FaTwitter className="hover:text-secondaryBlue transition-colors duration-200" />
            </Link>
          </div>
        </div>
        <p className="col-span-full text-center text-xs border-t border-secondaryBlue py-3">
          © 2024 Clutch Property Management
        </p>
      </div>
    </footer>
  );
}
