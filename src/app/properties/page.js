import { client } from "../../../sanity/lib/client";
import AlternateHero from "../components/AlternateHero";
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

export default async function PropertiesPage() {
  const data = await client.fetch(`
    *[_type == "properties"]{
      _createdAt,
      _updatedAt,
      _id,
      name,
      available,
      price,
      sqFootage,
      bedrooms,
      bathrooms,
      type,
      "slug": slug.current,
      "addressLine1": address.addressLine1,
      "addressLine2": address.addressLine2,
      "city": address.city,
      "state": address.state,
      "zip": address.zip,
      photo,
      isExternallyLinked,
      url,
    } | order(available desc)
    `);

  const properties = data;

  return (
    <main>
      <AlternateHero
        heading={`Our Properties`}
        text={`Faucibus et molestie ac feugiat sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
              eget.`}
        linkTo={`#search-properties`}
        linkText={`Search Properties`}
      />
      <FilterSection properties={properties} />
    </main>
  );
}
