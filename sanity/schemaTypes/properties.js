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
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Name is required"),
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
      validation: (Rule) => Rule.required().error("Availability is required"),
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
      // validation: (Rule) => Rule.required().error("Featured photo is required"),
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
      validation: (Rule) =>
        Rule.positive().error("Price must be a positive number"),
    },
    {
      name: "sqFootage",
      title: "Square Footage",
      type: "number",
      validation: (Rule) =>
        Rule.positive().error("Square Footage must be a positive number"),
    },
    {
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      validation: (Rule) =>
        Rule.positive().error("Bedrooms must be a positive number"),
    },
    {
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      validation: (Rule) =>
        Rule.positive().error("Bathrooms must be a positive number"),
    },
    {
      name: "isExternallyLinked",
      title: "Externally Linked?",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "External URL",
      type: "url",
      validation: (Rule) =>
        Rule.custom((url, context) => {
          if (context.document.isExternallyLinked && !url) {
            return "URL is required when externally linked.";
          }
          return true;
        }),
    },
  ],
  initialValue: {
    available: false,
    isExternallyLinked: false,
  },
  preview: {
    select: {
      name: "name",
      addressLine1: "address.addressLine1",
      addressLine2: "address.addressLine2",
    },
    prepare(selection) {
      const { name, addressLine1, addressLine2 } = selection;
      const formattedAddress = addressLine2
        ? `${addressLine1} #${addressLine2}`
        : addressLine1;

      return {
        title: formattedAddress,
        subtitle: name,
      };
    },
  },
};
