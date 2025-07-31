import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "./env";

const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn,
};

const client = createClient(config);

export async function fetchProperties() {
  console.log("Fetching properties from Sanity...");
  console.log("All property nameSlugs:", properties.map(p => p.nameSlug));

  return await client.fetch(`
    *[_type == "properties" && defined(nameSlug.current)]{
      _id,
      name,
      "nameSlug": nameSlug.current,
      slug,
      address,
      price,
      bedrooms,
      bathrooms,
      "imageUrl": featuredPhoto.asset->url,
      "altText": featuredPhoto.alt,

      "blurDataURL": featuredPhoto.asset->metadata.lqip,
      "height": featuredPhoto.asset->metadata.dimensions.height,
      "width": featuredPhoto.asset->metadata.dimensions.width,
    }

  `);
}
