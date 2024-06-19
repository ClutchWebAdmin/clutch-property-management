import Image from "next/image";
import Link from "next/link";
import placeholder from "../../../public/images/placeholder.png";

export default function PropertyCard({ property }) {
  const roundToNearestDollar = (amount) => {
    return Math.floor(amount);
  };

  const formattedPrice = roundToNearestDollar(property.price).toLocaleString(
    "en-US",
    { style: "currency", currency: "USD", maximumFractionDigits: 0 }
  );

  return (
    <div
      key={property._id}
      className="rounded border hover:shadow-md hover:brightness-105 transition duration-300 h-fit w-auto"
    >
      {property.isExternallyLinked ? (
        <a href={property.url} target="_blank">
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center justify-between p-3">
              {property.addressLine1 && (
                <p className="font-medium text-lg md:text-2xl lg:text-xl">
                  {property.addressLine1}
                  <span>
                    {property.addressLine2 && <>#{property.addressLine2}</>}
                  </span>
                </p>
              )}
              {property.available ? (
                <div className="py-1 px-2 font-medium text-xs rounded-full text-primaryLight bg-primaryBlue">
                  Available
                </div>
              ) : (
                <div className="py-1 px-2 font-medium text-xs rounded-full text-primaryLight bg-gray-500/80">
                  Leased
                </div>
              )}
            </div>

            <Image
              src={placeholder}
              alt="placeholder"
              className="object-fit w-full h-auto rounded-t-sm"
            />

            <div className="flex flex-col gap-2 p-3">
              {formattedPrice && (
                <h3 className="font-medium text-3xl">{formattedPrice}/mo</h3>
              )}

              {(property.sqFootage ||
                property.bedrooms ||
                property.bathrooms) && (
                <div className="flex flex-row items-center justify-between">
                  {property.type === "residential" &&
                    (property.bedrooms || property.bathrooms) && (
                      <p className="font-semibold text-lg">
                        {property.bedrooms && (
                          <>
                            {property.bedrooms}
                            <span className="font-normal"> bd</span>
                            {property.bathrooms && (
                              <span className="font-normal"> | </span>
                            )}
                          </>
                        )}
                        {property.bathrooms && (
                          <>
                            {property.bathrooms}
                            <span className="font-normal"> ba</span>
                          </>
                        )}
                      </p>
                    )}
                  {property.sqFootage && (
                    <p className="font-medium text-lg">
                      {property.sqFootage.toLocaleString()}
                      <span className="font-normal"> sqft</span>
                    </p>
                  )}
                </div>
              )}

              <p className="text-xs text-accentBlue">
                {`${property.addressLine1}${property.addressLine2 ? ` #${property.addressLine2}` : ""}, ${property.city}, ${property.state}, ${property.zip}`}
              </p>
            </div>
          </div>
        </a>
      ) : (
        <Link href={`properties/${property.slug}`}>
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center justify-between p-3">
              {property.addressLine1 && (
                <p className="font-medium text-lg md:text-2xl lg:text-xl">
                  {property.addressLine1}
                  <span>
                    {property.addressLine2 && <> #{property.addressLine2}</>}
                  </span>
                </p>
              )}
              {property.available ? (
                <div className="py-1 px-2 font-medium text-xs rounded-full text-primaryLight bg-primaryBlue">
                  Available
                </div>
              ) : (
                <div className="py-1 px-2 font-medium text-xs rounded-full text-primaryLight bg-gray-500/80">
                  Leased
                </div>
              )}
            </div>

            <Image
              src={placeholder}
              alt="placeholder"
              className="object-fit w-full h-auto rounded-t-sm"
            />

            <div className="flex flex-col gap-2 p-3">
              {formattedPrice && (
                <h3 className="font-medium text-3xl">{formattedPrice}/mo</h3>
              )}

              {property.sqFootage && (
                <div className="flex flex-row items-center justify-between">
                  {property.type === "residential" && (
                    <p className="font-semibold text-lg">
                      {property.bedrooms}
                      <span className="font-normal"> bd | </span>
                      {property.bathrooms}
                      <span className="font-normal"> ba</span>
                    </p>
                  )}
                  <p className="font-medium text-lg">
                    {property.sqFootage.toLocaleString()}
                    <span className="font-normal"> sqft</span>
                  </p>
                </div>
              )}

              <p className="text-sm text-gray-400 -mb-1 font-medium">
                {property.name}
              </p>
              <p className="text-xs text-gray-400">
                {`${property.addressLine1}${property.addressLine2 ? ` #${property.addressLine2}` : ""}, ${property.city}, ${property.state}, ${property.zip}`}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
