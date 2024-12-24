import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import {client} from "@/sanity/lib/client";
import PostCard from "./components/PostCard";

export default async function History() {
  const posts = await getPosts();
  
  return (
    <div>
      <Navbar/>
      <div className = "flex items-center">
        <div className = "w-1/2 pt-4 pl-8 pr-16">
          <i className= "text-xl font-bold pb-2 "> grunge's origins: </i>
          <p className = "text-xl font-bold pl-4" style = {{ color: "var(--navbar-background)" }}> <i> grunge is from washington!</i></p>
          <p className = "mt-4 pb-2 text-xl pl-4"> grunge as a genre had its epicenter in <b>Seattle</b> starting in the late 80s</p>
          <p className = "text-xl pb-2 pl-4">  early bands drew influence from <b>hardcore punk, alternative and noise rock, and heavy metal</b> of the late 70s and early 80s, denoted by <b>thick, sludgy</b> sounds </p>
          <p className = "text-xl pb-2 pl-4"> the band green river is attributed as being the first ever "grunge" band, formed in 1983, with members later going on to form major grunge bands <b style = {{ color: "var(--navbar-background)" }}> mudhoney, pearl jam, and mother love bone</b></p>
          <p className = "text-xl pl-4"> the <i className = "font-bold" style = {{ color: "var(--navbar-background)" }}> deep six</i> compilation album not only helped to establish grunge's sound but also is a record of some of the foundational early grunge bands </p>
        </div>

        <div>
          <Image src = "/DeepSixcover.jpeg"
                 alt = "deep six"
                 width = {375}
                 height = {375}
                 className = "ml-24 mt-8 rounded-lg md:hover:scale-95 transition-transform"/>
        </div>
      </div>

      <div className = "pt-8 pl-8 pr-16">
          <i className= "text-xl font-bold pb-2 "> main players: </i>
      </div>

      <div className = "py-8 max-w-7xl mx-auto">
        <div className = "grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
          <PostCard key = {post.slug} post = {post}/>
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
};

async function getPosts() {
  const query = `*[_type == "post"] {
    title, 
    groups,
    "slug": slug.current,
    image
  }`;

  const post = await client.fetch(query);
  return post;
}