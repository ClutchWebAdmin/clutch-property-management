import Image from "next/image";
import Link from "next/link";
import placeholder from "../../../public/images/placeholder.png";

export default function PropertyCard({ property }) {
  const roundToNearestDollar = (amount) => {
    return Math.floor(amount);
  };

  const formattedPrice = property.price ? (
    <h3 className="font-medium text-3xl">
      {`${roundToNearestDollar(property.price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })}/mo`}
    </h3>
  ) : (
    <h3 className="font-medium text-2xl lg:text-xl xl:text-3xl">
      Contact for pricing
    </h3>
  );

  return (
    <div
      key={property._id}
      className="rounded border hover:shadow-md hover:brightness-105 transition duration-300 h-fit w-auto"
      data-aos="fade-up"
    >
      {property.isExternallyLinked ? (
        <a href={property.url} target="_blank">
          <div className="flex flex-col">
            <div className="flex flex-col gap-0.5 items-start p-3">
              {property.name && (
                <>
                  <p className="font-medium text-xl">{property.name}</p>
                  <p className="text-xs text-gray-400">
                    {`${property.addressLine1}${property.addressLine2 ? ` #${property.addressLine2}` : ""}, ${property.city}, ${property.state}, ${property.zip}`}
                  </p>
                </>
              )}
            </div>

            {property.imageUrl ? (
              <Image
                src={property.imageUrl}
                alt={property.altText}
                className="object-cover w-full h-auto max-h-[250px]"
                placeholder="blur"
                blurDataURL={property.blurDataURL}
                height={property.height}
                width={property.width}
              />
            ) : (
              <Image
                src={placeholder}
                alt="placeholder"
                className="object-cover w-full h-auto max-h-[250px]"
              />
            )}

            <div className="flex flex-col gap-2 p-3">
              <div className="flex flex-row justify-between items-center">
                {formattedPrice && formattedPrice}
                {property.available ? (
                  <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-primaryBlue">
                    Available
                  </div>
                ) : (
                  <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-gray-400">
                    Leased
                  </div>
                )}
              </div>

              <div className="flex flex-row items-center justify-between">
                {property.type === "residential" && (
                  <p className="font-semibold text-lg">
                    {property.bedrooms}
                    <span className="font-normal"> bd | </span>
                    {property.bathrooms}
                    <span className="font-normal"> ba</span>
                  </p>
                )}
                {property.sqFootage && (
                  <p className="font-medium text-lg">
                    {property.sqFootage.toLocaleString()}
                    <span className="font-normal"> sqft</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </a>
      ) : (
        <Link href={`properties/${property.slug}`}>
          <div className="flex flex-col">
            <div className="flex flex-col gap-0.5 items-start p-3">
              {property.name && (
                <>
                  <p className="font-medium text-xl">{property.name}</p>
                  <p className="text-xs text-gray-400">
                    {`${property.addressLine1}${property.addressLine2 ? ` #${property.addressLine2}` : ""}, ${property.city}, ${property.state}, ${property.zip}`}
                  </p>
                </>
              )}
            </div>

            {property.imageUrl ? (
              <Image
                src={property.imageUrl}
                alt={property.altText}
                className="object-cover w-full h-auto max-h-[250px]"
                placeholder="blur"
                blurDataURL={property.blurDataURL}
                height={property.height}
                width={property.width}
              />
            ) : (
              <Image
                src={placeholder}
                alt="placeholder"
                className="object-cover w-full h-auto max-h-[250px]"
              />
            )}

            <div className="flex flex-col gap-2 p-3">
              <div className="flex flex-row justify-between items-center">
                {formattedPrice && formattedPrice}
                {property.available ? (
                  <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-primaryBlue">
                    Available
                  </div>
                ) : (
                  <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-gray-400">
                    Leased
                  </div>
                )}
              </div>

              <div className="flex flex-row items-center justify-between">
                {property.type === "residential" && (
                  <p className="font-semibold text-lg">
                    {property.bedrooms}
                    <span className="font-normal"> bd | </span>
                    {property.bathrooms}
                    <span className="font-normal"> ba</span>
                  </p>
                )}
                {property.sqFootage && (
                  <p className="font-medium text-lg">
                    {property.sqFootage.toLocaleString()}
                    <span className="font-normal"> sqft</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
