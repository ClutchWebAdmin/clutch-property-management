import Image from "next/image";
import sectionPhoto1 from "../../../public/images/cherry-city-commercial.png";
import sectionPhoto2 from "../../../public/images/cherry-city-hero.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function TwoColumnSection({
  id,
  text,
  metric1,
  metric1Text,
  metric2,
  metric2Text,
}) {
  return (
    <section id={id}>
      <div className="flex flex-col z-10 w-full h-full bg-primaryLight text-primaryDark border-b border-accentBlue">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-accentBlue p-5">
            <p className="md:text-2xl 2xl:text-3xl pb-32" data-aos="fade-up">
              {text}
            </p>
            <div
              className="flex flex-col w-full h-[250px] justify-end items-start bg-primaryMid text-primaryDark rounded-lg p-5 mb-5"
              data-aos="fade-up"
            >
              <h3 className="text-9xl -ml-1.5">{metric1}</h3>
              <p>{metric1Text}</p>
            </div>
            <div
              className="flex flex-col w-full h-[250px] justify-end items-start bg-primaryMid text-primaryDark rounded-lg p-5"
              data-aos="fade-up"
            >
              <h3 className="text-9xl -ml-1.5">{metric2}</h3>
              <p>{metric2Text}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-end justify-end w-full h-1/2 lg:h-full lg:w-1/2 py-24  px-5">
            <Link
              href={`/properties?type=commercial`}
              className="flex w-full h-auto relative hover:brightness-90 transition-all duration-300"
              data-aos="fade-up"
            >
              <h5 className="text-xl md:text-3xl lg:text-2xl xl:text-3xl flex flex-row gap-2 items-center absolute bottom-5 left-5 text-primaryLight font-medium">
                View Commercial Properties
                <FaArrowRight className="text-lg md:text-2xl lg:text-xl xl:text-2xl" />
              </h5>
              <Image
                src={sectionPhoto1}
                alt="Verda Crossing apartments aerial view"
                className="object-cover !w-full h-auto rounded-lg flex"
                placeholder="blur"
                priority
              />
            </Link>
            <Link
              href={`/properties?type=residential`}
              className="flex w-full h-auto relative hover:brightness-90 transition-all duration-300"
              data-aos="fade-up"
            >
              <h5 className="text-xl md:text-3xl lg:text-2xl xl:text-3xl flex flex-row gap-2 items-center absolute bottom-5 left-5 text-primaryLight font-medium">
                View Residential Properties
                <FaArrowRight className="text-lg md:text-2xl lg:text-xl xl:text-2xl" />
              </h5>
              <Image
                src={sectionPhoto2}
                alt="Verda Crossing apartments aerial view"
                className="object-cover !w-full h-auto rounded-lg flex"
                placeholder="blur"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
