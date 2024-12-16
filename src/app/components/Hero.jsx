import Image from "next/image";
import mainPhoto from "../../../public/images/edgewater-aerial-view.png";
import secondaryPhoto from "../../../public/images/lockwood.png";
import Link from "next/link";
import LinkButton from "./UI/LinkButton";
import { FaArrowRight } from "react-icons/fa6";
import warehouse from "../../../public/images/downtown-storage-featured-photo.png";
import residential from "../../../public/images/residential-photo.png";
import all from "../../../public/images/all-props.png";

export default function Hero({ subheading }) {
  return (
    <section id="hero" className="h-svh relative">
      <div className="absolute z-10 flex flex-col items-start justify-between w-full h-full border-b border-secondaryBlue pt-[var(--header-height)]">
        <div className="flex w-full h-1/3 p-5">
          <h1
            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl h-fit"
            data-aos="fade-up"
          >
            Premier properties,
            <br />
            professionally managed.
          </h1>
        </div>
        <div className="grid-cols-2 lg:flex-row gap-5 lg:justify-between w-full h-fit p-5 border-t border-secondaryBlue">
          
          <div
            className="w-full grid grid-cols-2 lg:flex lg:flex-row gap-5 lg:pr-5 order-1 lg:order-3"
            data-aos="fade-up"
          >
            <Link
              href={`/properties?type=commercial#results`}
              className="w-full lg:w-1/2 h-auto relative"
            >
              <Image
                src={mainPhoto}
                alt="Edgewater exterior view"
                className="aspect-square hover:shadow-lg hover:shadow-white object-cover rounded-xl"
                priority
                placeholder="blur"
              />
              <p className="absolute bottom-0 left-0 p-2 md:p-5 flex flex-row items-center gap-2 font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                Commercial <FaArrowRight />
              </p>
            </Link>
            <Link
              href={`/properties?type=commercial#results`}
              className="w-full lg:w-1/2 h-auto relative"
            >
              <Image
                src={warehouse}
                alt="Edgewater exterior view"
                className="aspect-square hover:shadow-lg hover:shadow-white object-cover rounded-xl"
                priority
                placeholder="blur"
              />
              <p className="absolute bottom-0 left-0 p-2 md:p-5 flex flex-row items-center gap-2 font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                Warehouse <FaArrowRight />
              </p>
            </Link>
            <Link
              href={`/properties?type=residential#results`}
              className="w-full lg:w-1/2 h-auto relative"
            >
              <Image
                src={residential}
                alt="Lockwood exterior"
                className="aspect-square hover:shadow-lg hover:shadow-white object-cover rounded-xl"
                priority
                placeholder="blur"
              />
              <p className="absolute bottom-0 left-0 p-2 md:p-5 flex flex-row items-center gap-2 font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                Residential <FaArrowRight />
              </p>
            </Link>
            <Link
              href={`/properties`}
              className="w-full lg:w-1/2 h-auto relative"
            >
              <Image
                src={all}
                alt="Lockwood exterior"
                className="aspect-square hover:shadow-lg hover:shadow-white object-cover rounded-xl"
                priority
                placeholder="blur"
              />
              <p className="absolute bottom-0 left-0 p-2 md:p-5 flex flex-row items-center gap-2 font-medium text-xl md:text-3xl lg:text-2xl 2xl:text-3xl">
                All Properties <FaArrowRight />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
