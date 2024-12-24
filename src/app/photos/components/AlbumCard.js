import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";

export default function AlbumCard({ album }) {
  return (
    <div className="border md:hover:scale-95 transition-transform rounded-xl p-4" style={{ background: "var(--navbar-background)" }}>
      <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>if you liked:</b> <i> {album.title} </i>
          </p>
          <Image
            src= {urlFor(album.image).auto("format").url()}
            alt= {album.title}
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>{album.band}:</b> {format(new Date(album.date), "yyyy")}
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center pt-4">
          <p className="text-xl text-center">
            <b>you may like:</b> <i> {album.titleRec} </i>
          </p>
          <Image
            src= {urlFor(album.imageRec).auto("format").url()}
            alt= {album.titleRec}
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b> {album.bandRec}:</b> {format(new Date(album.dateRec), "yyyy")}
          </p>
      </div>
    </div>
  );
}