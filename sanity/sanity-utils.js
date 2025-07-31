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
  return await client.fetch(`
    *[_type == "properties" && defined(name)]{
      _id,
      name,
      slug,
      nameSlug,
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
