// import Image from "next/image";
// import Link from "next/link";
// import placeholder from "../../../public/images/placeholder.png";

// export default function PropertyCard({ property }) {
//   const roundToNearestDollar = (amount) => {
//     return Math.floor(amount);
//   };

//   const formattedPrice = property.price ? (
//     <h3 className="font-medium text-2xl">
//       {`${roundToNearestDollar(property.price).toLocaleString("en-US", {
//         style: "currency",
//         currency: "USD",
//         maximumFractionDigits: 0,
//       })}/mo`}
//     </h3>
//   ) : (
//     <h3 className="font-medium text-2xl  ">
//       Contact for pricing
//     </h3>
//   );

//   return (
//     <div
//       key={property._id}
//       className="flex flex-col  rounded border hover:shadow-md hover:brightness-105 transition duration-300 h-auto w-full"
//       data-aos="fade-up"
//     >
//       {property.isExternallyLinked ? (
//         <a href={property.url} target="_blank">
//           <div className="flex flex-col">
//             <div className="flex flex-col gap-0.5 items-start p-3">
//               {property.name && (
//                 <>
//                   <p className="font-medium text-xl">{property.name}</p>
//                   <p className="text-xs text-gray-400">
//                     {`${property.addressLine1}${property.addressLine2 ? ` #${property.addressLine2}` : ""}, ${property.city}, ${property.state}, ${property.zip}`}
//                   </p>
//                 </>
//               )}
//             </div>

//             {property.imageUrl ? (
//               <Image
//                 src={property.imageUrl}
//                 alt={property.altText}
//                 className="object-cover w-full h-auto max-h-[250px]"
//                 placeholder="blur"
//                 blurDataURL={property.blurDataURL}
//                 height={property.height}
//                 width={property.width}
//               />
//             ) : (
//               <Image
//                 src={placeholder}
//                 alt="placeholder"
//                 className="object-cover w-full h-auto max-h-[250px]"
//               />
//             )}

//             <div className="flex flex-col gap-2 p-3">
//               <div className="flex flex-row justify-between items-center">
//                 {formattedPrice && formattedPrice}
//                 {property.available ? (
//                   <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-primaryBlue">
//                     Available
//                   </div>
//                 ) : (
//                   <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-gray-400">
//                     Leased
//                   </div>
//                 )}
//               </div>

//               <div className="flex flex-row items-center justify-between">
//                 {property.type === "residential" && (
//                   <p className="font-semibold text-lg">
//                     {property.bedrooms}
//                     <span className="font-normal"> bd | </span>
//                     {property.bathrooms}
//                     <span className="font-normal"> ba</span>
//                   </p>
//                 )}
//                 {property.sqFootage && (
//                   <p className="font-medium text-lg">
//                     {property.sqFootage.toLocaleString()}
//                     <span className="font-normal"> sqft</span>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </a>
//       ) : (
//         <Link href={`properties/${property.slug}`}>
//           <div className="flex flex-col">
//             <div className="flex flex-col gap-0.5 items-start p-3">
//               {property.name && (
//                 <>
//                   <p className="font-medium text-xl">{property.name}</p>
//                   <p className="text-xs text-gray-400">
//                     {`${property.addressLine1}${property.addressLine2 ? ` #${property.addressLine2}` : ""}, ${property.city}, ${property.state}, ${property.zip}`}
//                   </p>
//                 </>
//               )}
//             </div>

//             {property.imageUrl ? (
//               <Image
//                 src={property.imageUrl}
//                 alt={property.altText}
//                 className="object-cover w-full h-auto max-h-[250px]"
//                 placeholder="blur"
//                 blurDataURL={property.blurDataURL}
//                 height={property.height}
//                 width={property.width}
//               />
//             ) : (
//               <Image
//                 src={placeholder}
//                 alt="placeholder"
//                 className="object-cover w-full h-auto max-h-[250px]"
//               />
//             )}

//             <div className="flex flex-col gap-2 p-3">
//               <div className="flex flex-row justify-between items-center">
//                 {formattedPrice && formattedPrice}
//                 {property.available ? (
//                   <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-primaryBlue">
//                     Available
//                   </div>
//                 ) : (
//                   <div className="py-1 px-2.5 text-sm font-medium rounded-full text-primaryLight bg-gray-400">
//                     Leased
//                   </div>
//                 )}
//               </div>

//               <div className="flex flex-row items-center justify-between">
//                 {property.type === "residential" && (
//                   <p className="font-semibold text-lg">
//                     {property.bedrooms}
//                     <span className="font-normal"> bd | </span>
//                     {property.bathrooms}
//                     <span className="font-normal"> ba</span>
//                   </p>
//                 )}
//                 {property.sqFootage && (
//                   <p className="font-medium text-lg">
//                     {property.sqFootage.toLocaleString()}
//                     <span className="font-normal"> sqft</span>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </Link>
//       )}
//             <div>
//               {property.manager === "neighborly" && (
//                 <div className="py-1 px-2.5 text-lg font-semibold text-primaryLight bg-primaryGreen flex justify-center">
//                   Managed By Neighborly
//                 </div>
//               )}
//             </div>
              
            
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import placeholder from "../../../public/images/placeholder.png";

export default function PropertyCard({ property }) {
  const roundToNearestDollar = (amount) => Math.floor(amount);

  const formattedPrice = property.price ? (
    <h3 className="font-bold text-xl mb-2">
      {`${roundToNearestDollar(property.price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      })}/mo`}
    </h3>
  ) : (
    <h3 className="font-bold text-xl">Contact for pricing</h3>
  );

  // Determine the color band
  const isNeighborly = property.manager === "neighborly";
  const colorBandClass = isNeighborly ? "bg-green-600" : "bg-monopolyRoyalBlue";

  // Card content
  const cardContent = (
    <div
      className="flex flex-col items-center border-2 border-black rounded-md bg-white w-full p-2 border hover:shadow-lg hover:shadow-black hover:brightness-110 transition duration-300"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Color Band with Conditional Text */}
      <div
        className={`w-full h-14 mb-2 flex items-center justify-center ${colorBandClass}`}
      >
        {isNeighborly && (
          <span className="text-black font-bold text-sm">
            Managed by Neighborly
          </span>
        )}
      </div>

      {/* Property Name and Address */}
      <div className="text-center mb-4">
        <h2 className="text-md xl:text-lg 2xl:text-xl font-bold mb-1">
          {property.name || "Unnamed Property"}
        </h2>
        <p className="text-sm text-gray-600">
          {`${property.addressLine1}${
            property.addressLine2 ? ` #${property.addressLine2}` : ""
          }, ${property.city}, ${property.state}, ${property.zip}`}
        </p>
      </div>

      {/* Property Image */}
      <div className="mb-4 w-full">
        {property.imageUrl ? (
          <Image
            src={property.imageUrl}
            alt={property.altText || "Property image"}
            className="object-cover w-full h-auto max-h-[250px] rounded-md"
            height={200}
            width={300}
          />
        ) : (
          <Image
            src={placeholder}
            alt="placeholder"
            className="object-cover w-full rounded-md"
            height={200}
            width={300}
          />
        )}
      </div>

      {/* Price and Availability */}
      <div className="text-center mb-4">
        {formattedPrice}
        <div
          className={`py-1 px-4 text-sm font-bold text-white rounded-full ${
            property.available ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {property.available ? "Available" : "Leased"}
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center text-lg">
        {property.type === "residential" && (
          <p>
            {property.bedrooms} bd | {property.bathrooms} ba
          </p>
        )}
        {property.sqFootage && (
          <p>
            {property.sqFootage.toLocaleString()} sqft
          </p>
        )}
      </div>
    </div>
  );

  // Wrap in external link if property is externally linked
  if (property.isExternallyLinked) {
    return (
      <a
        href={property.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  // Wrap in internal link if not externally linked
  return (
    <Link href={`/properties/${property.slug}`} className="block">
      {cardContent}
    </Link>
  );
}
