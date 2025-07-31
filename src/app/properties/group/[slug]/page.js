import { client } from "../../../../../sanity/lib/client";

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
    *[_type == "properties" && lower(nameSlug.current) == $slug] | order(name asc) {
      _id,
      slug,
      type,
      manager,
      price,
      bedrooms,
      bathrooms,
      sqFootage,

      available
    }
    `,
    { slug: slug.toLowerCase() }
  );

  if (!properties || properties.length === 0) {
    return (
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold text-red-600">Group not found</h1>
        <p className="text-lg mt-4">No properties were found for this group.</p>
      </main>
    );
  }

  return (
    <main className="px-5 py-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 capitalize">
        {params.slug.replace(/-/g, " ")}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-transparent border rounded-lg shadow-sm p-4 hover:shadow-md transition flex justify-between items-start"
          >
            {/* Left info block */}
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">
                {property.price
                  ? `$${Math.floor(property.price).toLocaleString()}/mo`
                  : "Contact for pricing"}
              </p>

              <div className="text-sm text-gray-600 flex flex-col gap-1">
                {property.sqFootage && (
                  <p>
                    <strong>Size:</strong> {property.sqFootage.toLocaleString()} sqft
                  </p>
                )}
                {property.bedrooms !== undefined && property.bathrooms !== undefined && (
                  <p>
                    <strong>Layout:</strong> {property.bedrooms} bd / {property.bathrooms} ba
                  </p>
                )}
                {property.type && (
                  <p>
                    <strong>Type:</strong> {property.type}
                  </p>
                )}
                {property.available !== undefined && (
                  <p
                    className={`inline-block px-3 py-1 mt-1 text-sm font-semibold rounded-full text-white w-fit ${
                      property.available ? "bg-green-600" : "bg-gray-400"
                    }`}
                  >
                    {property.available ? "Available" : "Leased"}
                  </p>
                )}
              </div>
            </div>

            {/* Right: Additional Photos Count */}
            {/* {property.additionalPhotos && property.additionalPhotos.length > 0 && (
  <div className="mt-3 grid grid-cols-2 gap-2">
    {property.additionalPhotos.map((photo, index) => (
      <img
        key={index}
        src={photo.imageUrl}
        alt={photo.alt}
        className="w-full h-auto rounded"
      />
    ))}
  </div>
)} */}

          </div>
        ))}
      </div>
    </main>
  );
}
