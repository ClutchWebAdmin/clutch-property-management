import AlternateHero from "../components/AlternateHero";
import HeadingSection from "../components/HeadingSection";
import FilterSection from "../components/FilterSection";

export const metadata = {
  title: "Properties | Clutch Property Management",
  description: "Premier properties, professionally managed.",
  keywords:
    "property management, property managers, salem oregon, commercial property management, residential property management",
  openGraph: {
    title: "Clutch Property Management",
    description: "Premier properties, professionally managed.",
    siteName: "Clutch Property Management",
    type: "website",
    locale: "en_US",
    url: "https://clutchpropertymanagement.com/properties",
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

export default function ServicesPage() {
  return (
    <main>
      <AlternateHero />
      <HeadingSection
        id={`all-properties`}
        variant={`white`}
        text={`Search Properties`}
      />
      <FilterSection />
    </main>
  );
}
