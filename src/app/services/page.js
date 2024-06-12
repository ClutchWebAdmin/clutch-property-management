import AlternateHero from "../components/AlternateHero";
import ServicesSection from "../components/ServicesSection";

export const metadata = {
  title: "Services | Clutch Property Management",
  description: "Premier properties, professionally managed.",
  keywords:
    "property management, property managers, salem oregon, commercial property management, residential property management",
  openGraph: {
    title: "Clutch Property Management",
    description: "Premier properties, professionally managed.",
    siteName: "Clutch Property Management",
    type: "website",
    locale: "en_US",
    url: "https://clutchpropertymanagement.com/services",
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
      <AlternateHero
        heading={`Our Services`}
        text={`Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget.`}
        linkTo={`/services/#view-all-services`}
        linkText={`View All Services`}
      />
      <ServicesSection id={`view-all-services`} />
    </main>
  );
}
