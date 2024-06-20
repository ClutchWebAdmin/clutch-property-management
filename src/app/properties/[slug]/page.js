import { client } from "../../../../sanity/lib/client";

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

export default async function PropertyDetailPage({ params }) {
  const { slug } = params;

  const data = await client.fetch(
    `
    *[_type == "properties" && slug.current == $slug]{
      _createdAt,
      _updatedAt,
      _id,
      name,
      available,
      price,
      sqFootage,
      "slug": slug.current,
      "addressLine1": address.addressLine1,
      "addressLine2": address.addressLine2,
      "city": address.city,
      "state": address.state,
      "zip": address.zip,
      additionalPhotos,
      isExternallyLinked,
      url,
    }
  `,
    { slug }
  );

  const property = data[0];

  return (
    <main>
      <section className="pt-[var(--header-height)] border-b border-secondaryBlue">
        <div className="h-[600px] p-5">
          <h2>Property Detail Page</h2>
          <p>ID: {property._id}</p>
          <p>Slug: {property.slug}</p>
          <p>Address Line 1: {property.addressLine1}</p>
          <p>Address Line 2: {property.addressLine2}</p>
          <p>City: {property.city}</p>
          <p>State: {property.state}</p>
          <p>Zip: {property.zip}</p>
          <p>Price: {property.price}</p>
          <p>Sq Footage: {property.sqFootage}</p>
        </div>
      </section>
    </main>
  );
}
