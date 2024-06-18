export default {
  name: "properties",
  title: "Properties",
  type: "document",
  groups: [
    {
      name: "address",
      title: "Address",
    },
    {
      name: "availability",
      title: "Availability",
    },
    {
      name: "photos",
      title: "Photos",
    },
  ],
  fields: [
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
      validation: (Rule) => Rule.required().error("Type is required"),
    },
    {
      name: "address",
      title: "Address",
      type: "object",
      group: "address",
      fields: [
        {
          name: "addressLine1",
          title: "Address Line 1",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Address Line 1 is required"),
        },
        {
          name: "addressLine2",
          title: "Address Line 2",
          type: "string",
        },
        {
          name: "city",
          title: "City",
          type: "string",
          validation: (Rule) => Rule.required().error("City is required"),
        },
        {
          name: "state",
          title: "State",
          type: "string",
          validation: (Rule) => Rule.required().error("State is required"),
        },
        {
          name: "zip",
          title: "Zip Code",
          type: "string",
          validation: (Rule) => Rule.required().error("Zip Code is required"),
        },
      ],
    },
    {
      name: "available",
      title: "Available",
      type: "boolean",
      group: "availability",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, options) => {
          // Concatenate addressLine1 and addressLine2 if addressLine2 exists
          const { addressLine1, addressLine2 } = doc.address || {};
          return addressLine2
            ? `${addressLine1}-${addressLine2}`.toLowerCase()
            : `${addressLine1}`.toLowerCase();
        },
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required().error("Slug is required"),
    },
    {
      name: "featuredPhoto",
      title: "Featured Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "photos",
    },
    {
      name: "additionalPhotos",
      title: "Additional Photos",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
        },
      ],
      group: "photos",
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
    {
      name: "notes",
      title: "Notes",
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
  ],
  initialValue: {
    available: false,
  },
  preview: {
    select: {
      available: "available",
      addressLine1: "address.addressLine1",
      addressLine2: "address.addressLine2",
    },
    prepare(selection) {
      const { available, addressLine1, addressLine2 } = selection;
      const title = addressLine2
        ? `${addressLine1} #${addressLine2}`
        : addressLine1;
      return {
        title: title,
        subtitle: available ? "Available" : "Not Available",
      };
    },
  },
};
