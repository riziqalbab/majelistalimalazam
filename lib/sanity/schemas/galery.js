import { ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "galery",
  type: "document",
  title: "Galery",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image"
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity."
    })
  ]
});
