import Hero from "./components/Hero";
import TheHeader from "./components/TheHeader";

export const metadata = {
  title: "Clutch Property Management",
  description: "",
  keywords: "",
  openGraph: {
    title: "Clutch Property Management",
    description: "",
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

        <section className="h-[900px] p-5 bg-primaryLight text-primaryDark">
          Section 1
        </section>
      </main>
    </>
  );
}
