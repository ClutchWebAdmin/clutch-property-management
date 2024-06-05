import Image from "next/image";
import placeholder from "../../../public/images/hero.jpg";
import LinkButton from "./UI/LinkButton";

export default function Hero() {
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
          <div className="w-full flex flex-col justify-between gap-5 items-start lg:w-1/3 order-2 lg:order-1">
            <p className="md:text-2xl">
              Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget.
            </p>
            <LinkButton
              variant={`primary`}
              linkTo={`/properties`}
              text={`View Properties`}
            />
          </div>
          <div className="hidden lg:flex w-full lg:w-1/6 lg:order-2"></div>
          <div className="w-full flex flex-row gap-5 lg:w-1/2 pr-5 order-1 lg:order-3">
            <Image
              src={placeholder}
              alt="placeholder"
              className="w-full lg:w-3/5 object-cover rounded-xl"
            />
            <Image
              src={placeholder}
              alt="placeholder"
              className="hidden lg:flex w-2/5 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
