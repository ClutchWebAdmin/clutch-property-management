export default function AlternateHero({ heading, text, linkTo, linkText }) {
  return (
    <section className="pt-[var(--header-height)] border-b border-secondaryBlue bg-primaryBlue flex h-fit">
      <h2 className="text-5xl md:text-6xl 2xl:text-8xl p-5" data-aos="fade-up">
        {heading}
      </h2>
    </section>
  );
}
