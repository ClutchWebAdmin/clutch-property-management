import HeadingSection from "./components/HeadingSection";
import Hero from "./components/Hero";
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
        <HeadingSection variant={`white`} text={`About us`} />
        <TwoColumnSection id={`about-us`} />
      </main>
    </>
  );
}
