import { client } from "@/sanity/lib/client";
import PostHeader from "./components/PostHeader";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default async function Post({ params }) {
  const post = await getPost(params.post);

  return (
    <div className = "py-8 max-w-5xl px-4 mx-auto">
      <Navbar/>
      <PostHeader post = {post} />
      <hr className = "border-primary-200"/>
      <article className = "prose md:prose-md prose-primary mx-auto">
        <PortableText value = {post.content} components = {[portableTextComponents]} />
      </article>
    </div>
  );
}

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $mySlug][0] {
    title, 
    description,
    "slug": slug.current,
    image,
    "content": coalesce(content, [])
  }`;

  const post = await client.fetch(query, { mySlug: slug });

  if (!post) {
    return notFound();
  }
  
  else {
    return post;
  }
}

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src = {urlFor(value).fit("max").auto("format").url()}
      width = {width}
      height = {height}
      loading = "lazy"
      className = "mx-auto md:max-w-prose rounded-lg"
      style = {{ aspectRatio: width / height}}
    />
  );
}

