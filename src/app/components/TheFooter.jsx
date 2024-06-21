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
import services from "./data/services";

export default function TheFooter() {
  return (
    <footer className="flex flex-col w-full h-fit">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col col-span-full lg:col-span-1 border-b lg:border-r border-secondaryBlue">
          <Link href="/" className="p-5 md:p-10 lg:p-5 xl:p-10">
            <Image src={clutchLogoLight} alt="Clutch Property Management" />
          </Link>
        </div>

        <ul className="flex flex-col col-span-full md:col-span-1 text-base lg:text-lg gap-2 p-5 xl:p-10 md:border-r border-b border-secondaryBlue">
          <Link href={`/properties`}>
            <li className="font-medium text-xl lg:text-2xl text-accentBlue mb-2">
              Properties
            </li>
          </Link>

          <Link
            href={`/properties`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>All Properties</li>
          </Link>
          <Link
            href={`/properties?available=true`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Available Properties</li>
          </Link>
          <Link
            href={`/properties?type=residential`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Residential Properties</li>
          </Link>
          <Link
            href={`/properties?type=commercial`}
            className="hover:text-accentBlue transition-colors duration-200"
          >
            <li>Commerical Properties</li>
          </Link>
        </ul>

        <ul className="flex flex-col col-span-full md:col-span-1 text-base lg:text-lg gap-2 p-5 xl:p-10 border-b border-secondaryBlue">
          <Link href={`/services`}>
            <li className="font-medium text-xl lg:text-2xl text-accentBlue mb-2">
              Services
            </li>
          </Link>
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/#${service.sectionId}`}
              className="hover:text-accentBlue transition-colors duration-200"
            >
              <li>{service.name}</li>
            </Link>
          ))}
        </ul>

        <ul className="flex flex-col col-span-full md:col-span-1 lg:col-span-1 text-base lg:text-lg gap-2 p-5 xl:p-10 border-b lg:border-b-0 md:border-r border-secondaryBlue">
          <li className="font-medium text-xl lg:text-2xl text-accentBlue mb-2">
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
          <div className="flex flex-col text-base lg:text-lg gap-3">
            <p className="font-medium text-xl lg:text-2xl text-accentBlue mb-1">
              Contact Us
            </p>
            <div className="flex flex-row items-start gap-3">
              <a
                href="https://www.google.com/maps/place/Clutch+Industries/@44.9504676,-123.0366476,16z/data=!3m1!4b1!4m6!3m5!1s0x54bfff07e04c7031:0xc8cc5d1878b3290f!8m2!3d44.9504638!4d-123.0340727!16s%2Fg%2F11c5sv6knd?entry=tts"
                target="_blank"
              >
                <FaLocationDot className="text-2xl hover:text-secondaryBlue transition-colors duration-200" />
              </a>
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
            <div className="flex flex-row items-center gap-3">
              <a href="tel:+15039675228" target="_blank">
                <FaPhone className="text-2xl hover:text-secondaryBlue transition-colors duration-200" />
              </a>
              <a href="tel:+15039675228" target="_blank">
                <p className="text-primaryLight hover:text-accentBlue transition-colors duration-200">
                  503-967-5228
                </p>
              </a>
            </div>
            <div className="flex flex-row items-center gap-3">
              <a href="mailto:office@clutchindustries.com" target="_blank">
                <AiOutlineMail className="text-2xl hover:text-accentBlue transition-colors duration-200" />
              </a>

              <a href="mailto:office@clutchindustries.com" target="_blank">
                <p className="text-primaryLight hover:text-accentBlue transition-colors duration-200">
                  office@clutchindustries.com
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-full md:col-span-1 flex flex-col gap-3 p-5 xl:p-10 md:border-r border-secondaryBlue">
          <p className="font-medium text-xl lg:text-2xl text-accentBlue mb-2">
            Follow Us
          </p>
          <div className="flex flex-row items-baseline gap-5 text-2xl text-primaryLight">
            <Link
              href={`https://www.facebook.com/Clutch.Industries.Oregon/`}
              target="_blank"
            >
              <FaFacebook className="hover:text-secondaryBlue transition-colors duration-200" />
            </Link>
            <Link
              href={`https://www.instagram.com/theclutchindustries/`}
              target="_blank"
            >
              <FaInstagram className="hover:text-secondaryBlue transition-colors duration-200" />
            </Link>
            <Link
              href={`https://www.linkedin.com/company/clutch-industries-inc/`}
              target="_blank"
            >
              <FaLinkedin className="hover:text-secondaryBlue transition-colors duration-200" />
            </Link>
            <Link href={`https://twitter.com/clutch90588373`} target="_blank">
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
