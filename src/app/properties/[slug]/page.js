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

  const propertyStatus = property.available ? "Available" : "Leased";

  const roundToNearestDollar = (amount) => {
    return Math.floor(amount);
  };

  const formattedPrice = property.price
    ? `${roundToNearestDollar(property.price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })}/mo`
    : "Contact for pricing";

  return (
    <main>
      <section className="pt-[var(--header-height)] border-b border-secondaryBlue flex flex-col">
        <div className="flex flex-col gap-2 w-full border-b border-secondaryBlue p-5">
          <h6 className="uppercase text-sm font-medium text-accentBlue">
            Location
          </h6>
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium">
            {property.name}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col w-full lg:w-1/2 border-b md:border-b-0 md:border-r border-secondaryBlue p-5">
            <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col gap-2 col-span-2">
                <h6 className="uppercase text-sm font-medium text-accentBlue">
                  Address
                </h6>
                <p className="text-xl">{property.addressLine1}</p>
              </div>
              {property.addressLine2 && (
                <div className="flex flex-col gap-2 col-span-2">
                  <h6 className="uppercase text-sm font-medium text-accentBlue">
                    Unit
                  </h6>
                  <p className="text-xl">{property.addressLine2}</p>
                </div>
              )}
              <div className="flex flex-col gap-2 col-span-2">
                <h6 className="uppercase text-sm font-medium text-accentBlue md:col-span-2">
                  City
                </h6>
                <p className="text-xl">{property.city}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-sm font-medium text-accentBlue">
                  State
                </h6>
                <p className="text-xl">{property.state}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-sm font-medium text-accentBlue">
                  Zip Code
                </h6>
                <p className="text-xl">{property.zip}</p>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <h6 className="uppercase text-sm font-medium text-accentBlue md:col-span-2">
                  Price
                </h6>
                <p className="text-xl">{formattedPrice}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-sm font-medium text-accentBlue">
                  Status
                </h6>
                <p className="text-xl">{propertyStatus}</p>
              </div>
            </div>
          </div>

          <div className="flex w-full lg:w-1/2 p-5">
            {property.imageUrl ? (
              <Image
                src={property.imageUrl}
                className="w-full h-auto object-cove rounded-lg"
                alt={property.altText}
                placeholder="blur"
                blurDataURL={property.blurDataURL}
                height={property.height}
                width={property.width}
              />
            ) : (
              <Image
                src={placeholder}
                className="w-full h-auto object-cover rounded-lg"
                alt={property.name}
                placeholder="blur"
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
