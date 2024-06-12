export default function HeadingSection({ variant, id, text }) {
  if (variant === "white") {
    return (
      <section
        id={id}
        className="grid h-fit w-full border-b border-secondaryBlue bg-primaryLight text-primaryDark px-5 pt-[180px] pb-[60px] text-4xl lg:text-5xl xl:text-7xl"
      >
        {text}
      </section>
    );
  }
}
