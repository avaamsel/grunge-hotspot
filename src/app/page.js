import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <p className = "text-xl font-bold text-center pt-4"> welcome to grunge hotspot! </p>

            <div className = "flex items-center">
                <div>
                    <Image src = "/avapaul.JPG"
                        alt = "me lol"
                        width = {325}
                        height = {325}
                        className = "ml-8 mt-4 rounded-lg"
                    />
                </div>
                <div className = "w-1/2 p-2 pl-4">
                    <i className= "text-xl font-bold pb-2 "> Hi! I'm Ava! </i>
                    <p className = "text-xl"> I've been a grunge fan since the womb, where my favorite song in-utero was <b>Pearl Jam's Corduroy</b>. My mom is an original grunge fan,
                        having been to the infamous '99 Woodstock and seeing countless bands in concert, her favorite of which being <b>Red Hot Chili Peppers</b>. </p>
                    <p className = "mt-8 text-xl"> My favorite band is <b>Alice in Chains</b>. I also dabble in metal, punk, and folk genres. </p>
                    <p className = "text-xl"> I'm a huge South Park fan, have three cats, play lots of Pokemon, and have seen the <b>Red Hot Chili Peppers</b> in concert about four times. </p>
                </div>
                <div>
                    <Image src = "/mumsypowoodstock.png"
                        alt = "mumsy at woodstock"
                        width = {325}
                        height = {325}
                        className = "ml-8 mt-8 rounded-lg"
                    />
                    <Image src = "/fleawoodstock.png"
                        alt = "flea at woodstock"
                        width = {325}
                        height = {325}
                        className = "ml-8 mt-4 rounded-lg"
                    />
                </div>
            </div>

            <p className = "text-xl font-bold ml-8 pt-4 pb-2"> Some of my favorite grunge albums:</p>
            <div className = "flex items-center">
                <iframe className = "pr-2 ml-8 md:hover:scale-95 transition-transform" src="https://open.spotify.com/embed/album/49R4Qye4UUwzjPPQhtCkRe?utm_source=generator&theme=0" width="50%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                <iframe className = "pl-2 mr-8 md:hover:scale-95 transition-transform"src="https://open.spotify.com/embed/album/5o2p8FZAyEOSH7arjJLCJp?utm_source=generator" width="50%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            </div>
            <div className = "flex items-center">
                <iframe className = "pr-2 ml-8 md:hover:scale-95 transition-transform" src="https://open.spotify.com/embed/album/5ohJawP6UajQ6ZIjWxnvM6?utm_source=generator" width="50%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe className = "pl-2 mr-8 md:hover:scale-95 transition-transform"src="https://open.spotify.com/embed/album/55jET4vDioHHd7ztX7OX3h?utm_source=generator" width="50%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div className = "flex items-center">
                <div className = "left-column text-left">
                    <p className = "text-xl font-bold ml-8" style = {{ color: "var(--navbar-background)" }}> Some of grunge favorites:</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> "Holy Trinity": </p>
                        <p className = "pl-16 text-xl"> Layne Staley, Chris Cornell, and Andrew Wood</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> An Underrated Band: </p>
                        <p className = "pl-16 text-xl"> Screaming Trees!</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> Favorite MTV Unplugged: </p>
                        <p className = "pl-16 text-xl"> Alice in Chain's performance by far!</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> Favorite Supergroup: </p>
                        <p className = "pl-16 text-xl"> Temple of the Dog or Mad Season!</p>
                </div>

                <div>
                    <Image src = "/eddiechristemple.jpeg"
                        alt = "eddie vedder and chris cornell"
                        width = {525}
                        height = {525}
                        className = "ml-8 mt-10 rounded-lg md:hover:scale-95 transition-transform"
                    />
                    <p className = "text-center text-lg"> Eddie Vedder and Chris Cornell of Temple of the Dog </p>

                </div>

                <div className = "right-column mr-8 items-center justify-center">
                    <p className = "text-xl font-bold ml-20 pt-4 pb-2" style = {{ color: "var(--navbar-background)" }}> My personal grunge playlist: </p>
                    <iframe className= "ml-12 mr-12 md:hover:scale-95 transition-transform" src="https://open.spotify.com/embed/playlist/0JyulBYN7M8orNvD6oQ0ld?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <Footer/>
        </div> 
    )
}