import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <div
      key={property.id}
      className="rounded shadow-md hover:shadow-lg hover:brightness-110 transition duration-300"
    >
      {property.managedByThirdParty ? (
        <a href={property.url} target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <Image
              src={property.photo}
              alt="placeholder"
              className="object-fit w-full h-auto rounded-t"
            />
            {property.available ? (
              <div className="absolute top-0 right-0 p-1 font-medium text-xs md:text-sm rounded-bl-md rounded-tr-sm text-primaryLight bg-green-600/80">
                Available
              </div>
            ) : (
              <div className="absolute top-0 right-0 p-1 font-medium text-xs md:text-sm rounded-bl-md rounded-tr-sm text-primaryLight bg-red-500/80">
                Rented
              </div>
            )}
          </div>

          <div className="flex flex-col p-5">
            <h3>{property.name}</h3>
            <p>Price: ${property.price.toLocaleString()}</p>
            <p>Sq Footage: {property.sqFootage.toLocaleString()} ft²</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Available: {property.available ? "Yes" : "No"}</p>
          </div>
        </a>
      ) : (
        <Link href={property.url}>
          <div className="relative">
            <Image
              src={property.photo}
              alt="placeholder"
              className="object-fit w-full h-auto rounded-t"
            />
          </div>
          <div className="flex flex-col p-5">
            <h3>{property.name}</h3>
            <p>Price: ${property.price.toLocaleString()}</p>
            <p>Sq Footage: {property.sqFootage.toLocaleString()} ft²</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Available: {property.available ? "Yes" : "No"}</p>
          </div>
        </Link>
      )}
    </div>
  );
}
