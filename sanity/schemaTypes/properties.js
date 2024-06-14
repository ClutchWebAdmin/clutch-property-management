export default {
  name: "properties",
  title: "Properties",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "available",
      title: "Available",
      type: "boolean",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "residential" },
          { title: "Commercial", value: "commercial" },
        ],
      },
    },
    {
      name: "managedByThirdParty",
      title: "Managed by Third Party",
      type: "boolean",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "minPrice",
      title: "Min Price",
      type: "number",
    },
    {
      name: "maxPrice",
      title: "Max Price",
      type: "number",
    },
    {
      name: "minSqFootage",
      title: "Min Square Footage",
      type: "number",
    },
    {
      name: "maxSqFootage",
      title: "Max Square Footage",
      type: "number",
    },
    {
      name: "minBedrooms",
      title: "Min Bedrooms",
      type: "number",
    },
    {
      name: "maxBedrooms",
      title: "Max Bedrooms",
      type: "number",
    },
    {
      name: "subProperties",
      title: "Sub Properties",
      type: "array",
      of: [{ type: "subProperty" }],
    },
  ],
};
