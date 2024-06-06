import AlternateHero from "../components/AlternateHero";
import HeadingSection from "../components/HeadingSection";

export const metadata = {
  title: "Properties | Clutch Property Management",
  description: "",
  keywords: "",
  openGraph: {
    title: "Properties | Clutch Property Management",
    description: "",
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
        text={`All Properties`}
      />
    </main>
  );
}
