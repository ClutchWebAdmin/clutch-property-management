import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import placeholder from "../../../../public/images/placeholder.png";

export async function generateStaticParams() {
  const data = await client.fetch(`
    *[_type == "properties"]{
        "slug": slug.current,
    }
  `);

  return data.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  const data = await client.fetch(
    `
    *[_type == "properties" && slug.current == $slug]{
      name,
      type,
      "slug": slug.current,
      "addressLine1": address.addressLine1,
      "addressLine2": address.addressLine2,
      "city": address.city,
      "state": address.state,
      "zip": address.zip,
      "featuredPhoto": featuredPhoto.asset->url,
      additionalPhotos,
      url,
    }
  `,
    { slug }
  );

  const propertySlug = data[0].slug;
  const propertyType = data[0].type;
  const propertyName = data[0].name;
  const propertyLine1 = data[0].addressLine1;
  const propertyLine2 = data[0].addressLine2;
  const propertyCity = data[0].city;
  const propertyState = data[0].state;
  const propertyZip = data[0].zip;
  const formattedProperty = propertyLine2
    ? `${propertyLine1}, #${propertyLine2}, ${propertyCity}, ${propertyState} ${propertyZip}`
    : `${propertyLine1}, ${propertyCity}, ${propertyState} ${propertyZip}`;
  const propertyPhoto = data[0].featuredPhoto;

  let isAnApartment;
  propertyType === "residential"
    ? (isAnApartment = "best cheap apartments in salem oregon")
    : "";

  return {
    title: `${propertyLine1} | ${propertyName} | Clutch Property Management`,
    description: `${formattedProperty}`,
    keywords: `${propertyType} properties in salem oregon, cheap ${propertyType} properties, salem oregon, ${isAnApartment}`,
    openGraph: {
      title: `${propertyName} | ${propertyLine1} | Clutch Property Management`,
      description: `${formattedProperty}`,
      siteName: "Clutch Property Management",
      type: "website",
      locale: "en_US",
      url: `https://clutchpropertymanagement.com/properties/${propertySlug}`,
      images: [
        {
          url: `${propertyPhoto}`,
          alt: `${propertyName}`,
        },
      ],
    },
    images: [
      {
        url: `${propertyPhoto}`,
        alt: `${propertyName}`,
      },
    ],
  };
}

export default async function PropertyDetailPage({ params }) {
  const { slug } = params;

  const data = await client.fetch(
    `
    *[_type == "properties" && slug.current == $slug]{
      name,
      available,
      price,
      sqFootage,
      bedrooms,
      bathrooms,
      "slug": slug.current,
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
      additionalPhotos,
      isExternallyLinked,
      url,
    }
  `,
    { slug }
  );

  const property = data[0];

  const formattedAddress = property.addressLine2 ? (
    <div className="flex flex-col">
      <p className="text-xl">
        {`${property.addressLine1} #${property.addressLine2}`} <br />
        {property.city}, {property.state} {property.zip}
      </p>
    </div>
  ) : (
    <p className="text-xl">
      {`${property.addressLine1}`} <br />
      {property.city}, {property.state} {property.zip}
    </p>
  );

  return (
    <main>
      <section className="pt-[var(--header-height)] border-b border-secondaryBlue">
        <div className="flex flex-col lg:flex-row h-[600px]">
          <div className="flex flex-col w-full lg:w-1/2 py-10 px-5">
            <h3 className="text-3xl font-medium">{property.name}</h3>
            {formattedAddress}
          </div>

          {property.imageUrl ? (
            <Image
              src={property.imageUrl}
              className="w-full lg:w-1/2 h-auto object-cover py-10 px-5"
              alt={property.altText}
              placeholder="blur"
              blurDataURL={property.blurDataURL}
              height={property.height}
              width={property.width}
            />
          ) : (
            <Image
              src={placeholder}
              className="w-full lg:w-1/2 h-auto object-cover py-10 px-5"
              alt={property.name}
              placeholder="blur"
            />
          )}
        </div>
      </section>
    </main>
  );
}
