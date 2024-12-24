export default {
  name: "albums",
  title: "Albums",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "band",
      title: "Band",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "titleRec",
      title: "Rec Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageRec",
      title: "Rec Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "bandRec",
      title: "Rec Band",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "dateRec",
      title: "Rec Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
  ]
}