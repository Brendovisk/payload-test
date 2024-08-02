import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "banner",
      label: "Banner",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "shortDescription",
      label: "Short Description",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
  ],
};

export default Posts;
