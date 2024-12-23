import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="space-y-4"
    >
      <Image
        src={urlFor(post.image).auto("format").size(1920, 1080).url()}
        width={1920}
        height={1080}
        alt={post.title}
        className="rounded-2xl border border-primary-400 md:hover:scale-95 transition-transform"
      />
      <div className="space-y-2">
        <div>
          <h2 className="text-lg font-semibold">{post.title}</h2>
        </div>
      </div>
    </Link>
  );
}