import LinkButton from "./UI/LinkButton";

export default function AlternateHero({ heading, text, linkTo, linkText }) {
  return (
    <section className="h-[500px] relative">
      <div className="absolute flex flex-col z-10 w-full h-full border-b border-secondaryBlue pt-[var(--header-height)]">
        <div className="flex flex-col lg:flex-row h-full border-b border-secondaryBlue">
          <div className="w-full h-1/2 lg:h-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-secondaryBlue p-5">
            <h2
              className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
              data-aos="fade-up"
            >
              {heading}
            </h2>
          </div>
          <div className="flex flex-col items-end justify-end w-full lg:h-full lg:w-1/2">
            <p className="md:text-2xl 2xl:text-3xl p-5" data-aos="fade-up">
              {text}
            </p>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row gap-5 h-fit p-5"
          data-aos="fade-up"
        >
          <LinkButton variant={`withArrow`} linkTo={linkTo} text={linkText} />
        </div>
      </div>
    </section>
  );
}
