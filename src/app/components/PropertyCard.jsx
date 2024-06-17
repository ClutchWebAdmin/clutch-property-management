import Image from "next/image";
import Link from "next/link";
import placeholder from "../../../public/images/property-placeholder.png";

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
      className="rounded border hover:shadow-md hover:brightness-110 transition duration-300 h-fit w-auto"
    >
      {property.managedByThirdParty ? (
        <a href={property.url} target="_blank">
          <div className="relative">
            <Image
              src={placeholder}
              alt="placeholder"
              className="object-fit w-full h-auto rounded-t-sm"
            />
            {property.available ? (
              <div className="absolute top-0 right-0 py-1 px-2 font-medium text-sm rounded-bl-md rounded-tr-sm text-primaryLight bg-primaryBlue">
                Vacant
              </div>
            ) : (
              <div className="absolute top-0 right-0 py-1 px-2 font-medium text-sm rounded-bl-md rounded-tr-sm text-primaryLight bg-gray-500/80">
                Leased
              </div>
            )}
          </div>

          <div className="flex flex-col p-5">
            {formattedPrice && (
              <h3 className="font-medium text-2xl md:text-xl">
                {formattedPrice}
              </h3>
            )}
            {property.addressLine1 && <p>{property.addressLine1}</p>}
            {property.addressLine2 && <p>Unit #: {property.addressLine2}</p>}

            {property.sqFootage && <p>Sq Footage: {property.sqFootage} ft²</p>}
            {property.type === "residential" && (
              <>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathrooms}</p>
              </>
            )}
          </div>
        </a>
      ) : (
        <Link href={`properties/${property.slug}`}>
          <div className="relative">
            <Image
              src={placeholder}
              alt="placeholder"
              className="object-fit w-full h-auto rounded-t-sm"
            />
            {property.available ? (
              <div className="absolute top-0 right-0 py-1 px-2 font-medium text-sm rounded-bl-md rounded-tr-sm text-primaryLight bg-primaryBlue">
                Vacant
              </div>
            ) : (
              <div className="absolute top-0 right-0 py-1 px-2 font-medium text-sm rounded-bl-md rounded-tr-sm text-primaryLight bg-gray-500/80">
                Leased
              </div>
            )}
          </div>

          <div className="flex flex-col p-5">
            {formattedPrice && (
              <h3 className="font-medium text-2xl md:text-xl">
                {formattedPrice}
              </h3>
            )}
            {property.addressLine1 && <p>{property.addressLine1}</p>}
            {property.addressLine2 && <p>Unit #: {property.addressLine2}</p>}

            {property.sqFootage && <p>Sq Footage: {property.sqFootage} ft²</p>}
            {property.type === "residential" && (
              <>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathrooms}</p>
              </>
            )}
          </div>
        </Link>
      )}
    </div>
  );
}
