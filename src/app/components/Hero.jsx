import Image from "next/image";
import mainPhoto from "../../../public/images/edgewater-featured-photo.png";
import secondaryPhoto from "../../../public/images/lockwood.png";
import Link from "next/link";
import LinkButton from "./UI/LinkButton";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import warehouse from "../../../public/images/downtown-storage-featured-photo.png";
import residential from "../../../public/images/residential-photo.png";
import all from "../../../public/images/all-props.png";

export default function Hero({ subheading }) {
  return (
    <section id="hero" className="h-svh relative">
      <div className="absolute z-10 flex flex-col items-start justify-between w-full h-full border-b border-secondaryBlue pt-[var(--header-height)]">
        <div className="flex w-full h-full p-5">
        <h1
            className="text-4xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl h-fit"
            data-aos="fade-up"
          >
            Premier properties,
            <br />
            professionally managed.
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-between w-full h-fit p-5 border-t border-secondaryBlue">
        <div
            className="w-fit flex flex-col justify-between gap-5 items-start order-2 lg:order-1"
            data-aos="fade-up"
          >
            <p className="md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {subheading}
            </p>
            <div className="flex flex-row gap-2 md:gap-5 w-full">
              <LinkButton
                variant={`primary`}
                linkTo={`/properties#results`}
                text={`View all properties`}
              />
            </div>
          </div>
          <div
            className="w-full flex flex-row gap-5 lg:pr-5 order-1 lg:order-3"
            data-aos="fade-up"
          >
            <Link
              href={`/properties?type=commercial#results`}
              className="w-full lg:w-1/2 h-auto relative"
            >
              <Image
                src={mainPhoto}
                alt="Edgewater exterior view"
                className="aspect-square object-cover rounded-xl"
                priority
                placeholder="blur"
              />
              <p className="absolute bottom-0 left-0 p-2 md:p-5 flex flex-row items-center gap-2 font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                Commercial <FaArrowRight />
              </p>
            </Link>
            <Link
              href={`/properties?type=residential#results`}
              className="w-full lg:w-1/2 h-auto relative"
            >
              <Image
                src={secondaryPhoto}
                // src={residential}
                alt="Lockwood exterior"
                className="aspect-square object-cover rounded-xl"
                priority
                placeholder="blur"
              />
              <p className="absolute bottom-0 left-0 p-2 md:p-5 flex flex-row items-center gap-2 font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                Residential <FaArrowRight />
              </p>
            </Link>
            </div>
        </div>
      </div>  
    </section>
  );
}

