import Image from "next/image";
import placeholder from "../../../public/images/hero.jpg";

export default function TwoColumnSection({ id, text }) {
  return (
    <section id={id}>
      <div className="flex flex-col z-10 w-full h-full bg-primaryLight text-primaryDark border-b border-secondaryBlue">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-secondaryBlue p-5">
            <p className="md:text-2xl 2xl:text-3xl pb-32">
              Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget. Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget.
            </p>
            <div className="flex flex-col w-full h-[250px] justify-end items-start bg-secondaryBlue text-primaryLight rounded-lg p-5 mb-5">
              <h3 className="text-9xl -ml-1.5">8+</h3>
              <p>Properties managed</p>
            </div>
            <div className="flex flex-col w-full h-[250px] justify-end items-start bg-secondaryBlue text-primaryLight rounded-lg p-5">
              <h3 className="text-9xl -ml-1.5">350+</h3>
              <p>Residential and commercial spaces</p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end w-full h-1/2 lg:h-full lg:w-1/2 p-5">
            <Image
              src={placeholder}
              alt="placeholder"
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
