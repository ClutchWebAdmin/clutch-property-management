import { client } from "../../../sanity/lib/client";
import AlternateHero from "../components/AlternateHero";
import FilterSection from "../components/FilterSection";

export const metadata = {
  title: "Salem, OR Properties | Clutch Property Management",
  description: "Premier properties, professionally managed.",
  keywords:
    "property management, property managers, salem oregon, commercial property management, residential property management, clutch management, clutch property management",
  openGraph: {
    title: "Salem, OR Properties | Clutch Property Management",
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
    *[_type == "properties" && defined(nameSlug.current)]{
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
      "nameSlug": nameSlug.current,
      "manager": manager,
      "addressLine1": address.addressLine1,
      "addressLine2": address.addressLine2,
      "city": address.city,
      "state": address.state,
      "zip": address.zip,
      "imageUrl": featuredPhoto.asset->url,
      "altText": featuredPhoto.alt,
      "height": featuredPhoto.asset->metadata.dimensions.height,
      "width": featuredPhoto.asset->metadata.dimensions.width,
      "blurDataURL": featuredPhoto.asset->metadata.lqip,
      isExternallyLinked,
      url,
    } | order(available desc)
    `);

  const properties = data;

  return (
    <main>
      <AlternateHero
        heading={`Our Properties`}
        text={`We offer a variety of different spaces, from townhouses and apartments to warehouses and commerical spaces, and more. Let us help you find a space that fits your needs.`}
        linkTo={`#search-properties`}
        linkText={`Search Properties`}
      />
      <FilterSection properties={properties} />
    </main>
  );
}
