import LinkButton from "./UI/LinkButton";

export default function AlternateHero() {
  return (
    <section id="hero" className="h-[500px] relative">
      <div className="absolute flex flex-col z-10 w-full h-full border-b border-secondaryBlue pt-[var(--header-height)]">
        <div className="flex flex-col lg:flex-row h-full border-b border-secondaryBlue">
          <div className="w-full h-1/2 lg:h-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-secondaryBlue p-5">
            <h2 className="text-4xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              Our Properties
            </h2>
          </div>
          <div className="flex flex-col items-end justify-end w-full h-1/2 lg:h-full lg:w-1/2">
            <p className="md:text-2xl 2xl:text-3xl p-5">
              Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 h-fit p-5">
          <LinkButton
            variant={`withArrow`}
            linkTo={`#all-properties`}
            text={`Search Properties`}
          />
        </div>
      </div>
    </section>
  );
}
