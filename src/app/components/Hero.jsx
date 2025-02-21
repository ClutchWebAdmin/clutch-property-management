import Image from "next/image";
import mainPhoto from "../../../public/images/edgewater-featured-photo.png";
import secondaryPhoto from "../../../public/images/lockwood.png";
import Link from "next/link";
import LinkButton from "./UI/LinkButton";
import { FaArrowCircleRight } from "react-icons/fa";
import warehouse from "../../../public/images/downtown-storage-featured-photo.png";
import residential from "../../../public/images/residential-photo.png";
import all from "../../../public/images/all-props.png";

export default function Hero({ subheading }) {
  return (
    <section id="hero" className="h-svh relative">
      <div className="absolute z-10 flex flex-col items-start justify-between w-full h-full border-b border-secondaryBlue pt-[var(--header-height)]">
        <div className="flex w-full h-1/3 py-2 px-2 md:px-5 mb-6">
          <h1
            className="text-6xl md:text-6xl lg:text-9xl xl:text-9xl 2xl:text-9xl h-fit"
            data-aos="fade-up"
          >
            Premier properties,
            <br />
            professionally managed
          </h1>
        </div>
        <div className="grid-cols-2 lg:flex-row gap-5 lg:justify-between w-full h-fit py-2 px-5 border-t border-secondaryBlue">
          <div
            className="w-full grid grid-cols-2 lg:flex lg:flex-row gap-5 lg:pr-5 order-1 lg:order-3"
            data-aos="fade-up"
          >
            <Link
              href={`/properties?type=commercial#results`}
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white relative border  rounded-md bg-white overflow-hidden"
            >
              <div className="w-full aspect-[4/3]">
                <Image
                  src={mainPhoto}
                  alt="Edgewater exterior view"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-2">
                <p className="flex items-center gap-2 text-outline text-white font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  Commercial
                </p>
                <p className="flex items-center gap-2 text-black font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  <FaArrowCircleRight />
                </p>
              </div>
            </Link>
            <Link
              href={`/properties?type=commercial#results`}
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white relative border  rounded-md bg-white overflow-hidden"
            >
              <div className="w-full aspect-[4/3]">
                <Image
                  src={warehouse}
                  alt="Edgewater exterior view"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-2">
                <p className="flex items-center gap-2 text-outline font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  Warehouse
                </p>
                <p className="flex items-center gap-2 text-black font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  <FaArrowCircleRight />
                </p>
              </div>
            </Link>
            <Link
              href={`/properties?type=residential#results`}
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white relative border  rounded-md bg-white overflow-hidden"
            >
              
              <div className="w-full aspect-[4/3]">
                <Image
                  src={residential}
                  alt="Lockwood exterior"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-2">
                <p className="flex items-center gap-2 text-outline text-white font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  Residential
                </p>
                <p className="flex items-center gap-2 text-black font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  <FaArrowCircleRight />
                </p>
              </div>
            </Link>
            <Link
              href={`/properties`}
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white relative border  rounded-md bg-white overflow-hidden"
            >
              <div className="w-full aspect-[4/3]">
                <Image
                  src={all}
                  alt="Lockwood exterior"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-2">
                <p className="flex items-center gap-2 text-outline font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  All Properties
                </p>
                <p className="flex items-center gap-2 text-black font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  <FaArrowCircleRight />
                </p>
              </div>
            </Link>
          </div>
        </div>          
      </div>
    </section>
  );
}

