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
        <Hero />
        <HeadingSection variant={`white`} text={`About Us`} />
        <TwoColumnSection
          id={`about-us`}
          text={`Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget. Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget.`}
          metric1={`8+`}
          metric1Text={`Properties managed`}
          metric2={`350+`}
          metric2Text={`Residential and commercial spaces`}
        />
        <HeadingSection variant={`white`} text={`Our Services`} />
        <ServicesSection id={`all-services`} />
      </main>
    </>
  );
}
