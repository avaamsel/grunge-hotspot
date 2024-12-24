import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import AlbumCard from "./components/AlbumCard";


export default async function Albums() {
  const albums = await getAlbums();

  return (
    <div>
      <Navbar/>
      <p className = "text-xl font-bold text-center pt-4 pb-4"> there is more to grunge than nirvana's <i>nevermind</i></p>
      <p className = "text-center pb-2 text-xl"> recommendations are based on various criteria like vocal sound, influences, acoustic vs electric, and more! </p>

      <div className = "py-8 max-w-7xl mx-auto">
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-4">
          {albums.map((album) => (
            <AlbumCard key = {album.title} album = {album}/>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

async function getAlbums() {
  const query = `*[_type == "albums"] {
    title, 
    image,
    band, 
    date,
    titleRec,
    imageRec,
    bandRec,
    dateRec,
  }`;

  const album = await client.fetch(query);
  return album;
}