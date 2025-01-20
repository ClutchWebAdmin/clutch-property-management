import Image from "next/image";
import mainPhoto from "../../../public/images/edgewater-aerial-view.png";
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
        <div className="flex w-full h-1/3 py-2 px-5 mb-6">
          <h1
            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl h-fit"
            data-aos="fade-up"
          >
            Premier properties,
            <br />
            professionally managed.
          </h1>
        </div>
        <div className="grid-cols-2 lg:flex-row  lg:justify-between w-full h-fit py-5  border-y-4 border-black bg-monopolyBoard">
          <div
            className="w-full grid grid-cols-2 lg:flex lg:flex-row   order-1 lg:order-3"
            data-aos="fade-up"
          >
            <Link
              href={`/properties?type=commercial#results`}
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white hover:-translate-y-2 transition duration-300 relative border-x-4 border-y-8 border-black  bg-monopolyBoard overflow-hidden"
            >
              <div
                className={`w-full h-8 lg:h-16 mb-2 flex items-center border-b-4 border-black justify-center bg-monopolyRoyalBlue`}
              ></div>
              <div className="w-full aspect-[4/3]">
                <Image
                  src={mainPhoto}
                  alt="Edgewater exterior view"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-5">
                <p className="flex items-center gap-2 text-outline text-white font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  Commercial
                </p>
                <p className="flex items-center gap-2 text-black font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                  <FaArrowCircleRight />
                </p>
              </div>
            </Link>

            <Link
              href={`/properties?type=warehouse#results`}
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white hover:-translate-y-2 transition duration-300 relative border-x-4 border-y-8 border-black  bg-monopolyBoard overflow-hidden"
            >
              <div
                className={`w-full h-8 lg:h-16 mb-2 flex items-center border-b-4 border-black justify-center bg-green-700`}
              ></div>
              <div className="w-full aspect-[4/3]">
                <Image
                  src={warehouse}
                  alt="Edgewater exterior view"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-5">
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
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white hover:-translate-y-2 transition duration-300 relative border-x-4 border-y-8 border-black  bg-monopolyBoard overflow-hidden"
            >
              <div
                className={`w-full h-8 lg:h-16 mb-2 flex items-center border-b-4 border-black justify-center bg-red-600`}
              ></div>
              <div className="w-full aspect-[4/3]">
                <Image
                  src={residential}
                  alt="Lockwood exterior"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-5">
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
              className="w-full lg:w-1/2 h-full hover:shadow-lg hover:shadow-white hover:-translate-y-2 transition duration-300 relative border-x-4 border-y-8 border-black  bg-monopolyBoard overflow-hidden"
            >
              <div
                className={`w-full h-8 lg:h-16 mb-2 flex items-center border-b-4 border-black justify-center bg-fuchsia-700`}
              ></div>
              <div className="w-full aspect-[4/3]">
                <Image
                  src={all}
                  alt="Lockwood exterior"
                  className="object-cover w-full h-full"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-between items-center p-1 md:p-5">
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

