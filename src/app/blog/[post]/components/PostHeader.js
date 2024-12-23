import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";


export default function PostHeader({ post }) {
  const { width, height } = tryGetImageDimensions(post.image);
  
  return (
    <header className="text-center space-y-4">
      <h1 className="font-semibold text-4xl pt-4">{post.title}</h1>
      <Image
            src = {urlFor(post.image).fit("max").auto("format").url()}
            width = {width}
            height = {height}
            alt={post.title}
            loading = "lazy"
            className = "mx-auto md:max-w-prose rounded-lg md:hover:scale-95 transition-transform"
            style = {{ aspectRatio: width / height}}
          />
      <p className="font-medium text-primary-700 text-xl pb-4"> <b>groups: </b>{post.groups}</p>
    </header>
  );
}