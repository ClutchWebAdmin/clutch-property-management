import { client } from "../../../../../sanity/lib/client";
import PropertyCard from "../../../components/PropertyCard";

export async function generateStaticParams() {
  const data = await client.fetch(`
    *[_type == "properties" && defined(nameSlug.current)] {
      "slug": nameSlug.current
    }
  `);

  return data.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  return {
    title: `${slug.replace(/-/g, " ")} | Clutch Property Management`,
    description: `Properties grouped under ${slug.replace(/-/g, " ")}`,
  };
}

export default async function PropertiesByGroupPage({ params }) {
  const { slug } = params;

  const properties = await client.fetch(
    `
    *[_type == "properties" && nameSlug.current == $slug] | order(name asc) {
      _id,
      name,
      slug,
      type,
      manager,
      price,
      bedrooms,
      bathrooms,
      sqFootage,
      available,
      isExternallyLinked,
      url,
      "imageUrl": featuredPhoto.asset->url,
      "altText": featuredPhoto.alt,
      "height": featuredPhoto.asset->metadata.dimensions.height,
      "width": featuredPhoto.asset->metadata.dimensions.width,
      "blurDataURL": featuredPhoto.asset->metadata.lqip,
      "addressLine1": address.addressLine1,
      "addressLine2": address.addressLine2,
      "city": address.city,
      "state": address.state,
      "zip": address.zip
    }
    `,
    { slug }
  );

  if (!properties || properties.length === 0) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold text-red-600">Group not found</h1>
        <p className="text-lg mt-4">
          No properties were found for this group.
        </p>
      </main>
    );
  }

  return (
    <main className="px-5 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        {properties[0].name}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </main>
  );
}
