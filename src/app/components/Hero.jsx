import Image from "next/image";
import mainPhoto from "../../../public/images/edgewater-aerial-view.png";
import secondaryPhoto from "../../../public/images/verda-crossing-residential.png";
import LinkButton from "./UI/LinkButton";

export default function Hero({ subheading }) {
  return (
    <section id="hero" className="h-svh relative">
      <div className="absolute z-10 flex flex-col items-start justify-between w-full h-full border-b border-secondaryBlue pt-[var(--header-height)]">
        <div className="flex w-full h-full p-5">
          <h1 className="text-4xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl h-fit">
            Premier properties,
            <br />
            professionally managed.
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:justify-between w-full h-fit p-5 border-t border-secondaryBlue">
          <div className="w-full flex flex-col gap-5 items-start lg:w-[37%] xl:w-[45%] order-2 lg:order-1">
            <p className="md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {subheading}
            </p>
            <LinkButton
              variant={`primary`}
              linkTo={`/properties`}
              text={`View Properties`}
            />
          </div>
          <div className="w-full flex flex-row gap-5 lg:w-1/2 lg:pr-5 order-1 lg:order-3">
            <Image
              src={mainPhoto}
              alt="Edgewater aerial view"
              className="w-full lg:w-3/5 h-auto max-h-[200px] md:max-h-[375px] lg::max-h-max object-cover rounded-xl"
              priority
              placeholder="blur"
            />
            <Image
              src={secondaryPhoto}
              alt="Cherry City apartments street view"
              className="hidden lg:flex w-2/5 h-auto object-cover rounded-xl"
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
