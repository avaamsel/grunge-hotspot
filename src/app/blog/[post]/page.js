import { client } from "@/sanity/lib/client";
import PostHeader from "./components/PostHeader";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
  marks: {
    strong: ({ children }) => <strong style = {{ color: "var(--navbar-background)" }}>{children}</strong>,
  },
};

export default async function Post({ params }) {
  const post = await getPost(params.post);

  return (
    <div>
      <Navbar/>
      <PostHeader post = {post} />
      <article style = {{color: "#ffffff"}} className = "prose md:prose-md prose-primary mx-auto text-lg">
        <PortableText value = {post.content} components = {portableTextComponents} />
      </article>
      <Footer/>
    </div>
  );
}

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $mySlug][0] {
    title, 
    groups,
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

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src = {urlFor(value).fit("max").auto("format").url()}
      width = {width}
      height = {height}
      alt = {value.alt}
      loading = "lazy"
      className = "mx-auto md:max-w-prose rounded-lg"
      style = {{ aspectRatio: width / height}}
    />
  );
}

