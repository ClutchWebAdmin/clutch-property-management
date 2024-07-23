import HeadingSection from "./components/HeadingSection";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TheHeader from "./components/TheHeader";
import TwoColumnSection from "./components/TwoColumnSection";

export const metadata = {
  title: "Clutch Property Management",
  description: "Premier properties, professionally managed.",
  keywords:
    "property management, property managers, salem oregon, commercial property management, residential property management",
  openGraph: {
    title: "Clutch Property Management",
    description: "Premier properties, professionally managed.",
    siteName: "Clutch Property Management",
    type: "website",
    locale: "en_US",
    url: "https://clutchpropertymanagement.com",
    images: [
      {
        url: "https://clutchpropertymanagement.com/images/og-image.png",
        alt: "Clutch Property Management",
      },
    ],
  },
  images: [
    {
      url: "https://clutchpropertymanagement.com/images/og-image.png",
      alt: "Clutch Property Management",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <TheHeader variant="light" />
      <main>
        <Hero
          subheading={`We are your Salem, Oregon experts in seamless property operations, providing dependable service and care for all of our properties.`}
        />
        <HeadingSection variant={`white`} text={`About Us`} />
        <TwoColumnSection
          id={`about-us`}
          text={`With over 12 properties and more than 350 residential and commercial spaces under our care, we excel in exceptional property management. Our team boasts extensive experience, ensuring top-notch service and meticulous care for all our residential and commercial spaces.`}
          metric1={`12+`}
          metric1Text={`Properties managed`}
          metric2={`350+`}
          metric2Text={`Residential and commercial spaces`}
        />
        <HeadingSection variant={`blue`} text={`Our Services`} />
        <ServicesSection id={`all-services`} variant={`list`} />
      </main>
    </>
  );
}
