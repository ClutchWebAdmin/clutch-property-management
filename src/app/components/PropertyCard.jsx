import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <div
      key={property.id}
      className="rounded border hover:shadow-md hover:brightness-110 transition duration-300 h-fit w-auto"
    >
      {property.managedByThirdParty ? (
        <a href={property.url} target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <Image
              src={property.photo}
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
            <h3 className="font-medium text-2xl md:text-xl">{property.name}</h3>
            <p>Price: ${property.price.toLocaleString()}</p>
            <p>Sq Footage: {property.sqFootage.toLocaleString()} ft²</p>
            {property.type === "residential" && (
              <>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathrooms}</p>
              </>
            )}
          </div>
        </a>
      ) : (
        <Link href={property.url} target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <Image
              src={property.photo}
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
            <h3 className="font-medium text-2xl md:text-xl">{property.name}</h3>
            <p>Price: ${property.price.toLocaleString()}</p>
            <p>Sq Footage: {property.sqFootage.toLocaleString()} ft²</p>
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
