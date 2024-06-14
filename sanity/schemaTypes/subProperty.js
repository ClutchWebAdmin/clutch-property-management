export default {
  name: "subProperty",
  title: "Sub Property",
  type: "object",
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
      name: "spaceNumber",
      title: "Space Number",
      type: "string",
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
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "sqFootage",
      title: "Square Footage",
      type: "number",
    },
    {
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    },
    {
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    },
  ],
};
