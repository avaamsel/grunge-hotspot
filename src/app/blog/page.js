import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div>
      <Navbar/>
      <p className = "text-center text-xl font-bold mt-4"> grunge history + blog! </p>
      <Image src = "/misslayne.JPG"
                        alt = "i miss layne staley"
                        width = {200}
                        height = {200}
                        className = "ml-8 mt-4 rounded-lg"
                    />
      <div>
        <p className = "ml-8 text-xl font-bold mt-4"> origins: </p>
        <p className = "ml-8 text-xl font-bold" style = {{ color: "var(--navbar-background)" }}> <i> grunge is from washington!</i></p>
        <p className = "ml-8 text-xl"> meow </p>
      </div>

      <div>
        <p className = "ml-8 text-xl font-bold mt-4"> main players: </p>
        <p> Kurt Cobain, Layne Staley, Scott Weiland, Chris Cornell, Shannon Hoon, Andrew Wood, Eddie Vedder</p>
      </div>

      <div>
        <p className = "ml-8 text-xl font-bold mt-4"> grunge vs post-grunge: </p>
        <p> post-grungs is a much more mellow form of the genre, straying away from grunge's punk and metal influences. </p>
      </div>

      <div>
        <p className = "ml-8 text-xl font-bold mt-4"> grunge today: </p>
      </div>

      <Footer/>
    </div>
  )
};