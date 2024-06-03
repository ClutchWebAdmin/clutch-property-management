import Image from "next/image";
import heroImage from "../../../public/images/hero.jpg";

export default function Hero() {
  return (
    <section id="hero" className="h-svh relative">
      <Image
        src={heroImage}
        className="object-cover brightness-[80%]"
        alt="hero image"
        priority
        fill
      />
      <div className="absolute z-10 flex flex-col lg:flex-row gap-5 items-center justify-center lg:justify-start w-full h-full p-4">
        <h1 className="flex w-full lg:w-1/2 text-3xl lg:text-4xl xl:text-5xl font-medium text-primaryLight">
          Premier properties, <br />
          professionally managed.
        </h1>
        <p className="flex w-full lg:w-1/2 lg:h-full items-end text-primaryLight">
          Lorem ipsum
        </p>
      </div>
    </section>
  );
}
