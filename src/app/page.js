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
                        className = "ml-8 mt-4 rounded-lg md:hover:scale-95 transition-transform"
                    />
                </div>
                <div className = "w-1/2 p-2 pl-4">
                    <i className= "text-xl font-bold pb-2" style = {{ color: "var(--navbar-background)" }}> hi! i'm ava! </i>
                    <p className = "text-xl"> i've been a grunge fan since the womb, where my favorite song in-utero was pearl jam's <b>"corduroy".</b> my mom is an original grunge fan,
                        having been to the infamous <b style = {{ color: "var(--navbar-background)" }}>'99 woodstock</b> and seeing countless bands in concert, her favorite of which being <b style = {{ color: "var(--navbar-background)" }}>red hot chili peppers</b>. </p>
                    <p className = "mt-8 text-xl"> my favorite band is <b style = {{ color: "var(--navbar-background)" }}>alice in chains</b>. i also dabble in <b>metal, punk, and folk</b> genres. </p>
                    <p className = "text-xl"> i'm a huge south park fan, have three cats, play lots of pokemon, and have seen the <b>red hot chili peppers</b> in concert about four times. </p>
                </div>
                <div>
                    <Image src = "/mumsypowoodstock.png"
                        alt = "mumsy at woodstock"
                        width = {325}
                        height = {325}
                        className = "ml-8 mt-8 rounded-lg md:hover:scale-95 transition-transform"
                    />
                    <Image src = "/fleawoodstock.png"
                        alt = "flea at woodstock"
                        width = {325}
                        height = {325}
                        className = "ml-8 mt-4 rounded-lg md:hover:scale-95 transition-transform"
                    />
                </div>
            </div>

            <p className = "text-xl font-bold ml-8 pt-4 pb-2"> some of my favorite grunge albums:</p>
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
                    <p className = "text-xl font-bold ml-8" style = {{ color: "var(--navbar-background)" }}> some of grunge favorites:</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> "holy trinity": </p>
                        <p className = "pl-16 text-xl"> layne staley, chris cornell, and andrew wood</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> an underrated band: </p>
                        <p className = "pl-16 text-xl"> screaming trees!</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> favorite mtv unplugged: </p>
                        <p className = "pl-16 text-xl"> alice in chain's performance by far!</p>
                    <p className = "text-xl font-bold ml-8 pt-4 pb-2"> favorite supergroup: </p>
                        <p className = "pl-16 text-xl"> temple of the dog or mad season!</p>
                </div>

                <div>
                    <Image src = "/eddiechristemple.jpeg"
                        alt = "eddie vedder and chris cornell"
                        width = {525}
                        height = {525}
                        className = "ml-8 mt-10 rounded-lg md:hover:scale-95 transition-transform"
                    />
                    <p className = "text-center text-lg"> eddie vedder and chris cornell of temple of the dog </p>

                </div>

                <div className = "right-column mr-8 items-center justify-center">
                    <p className = "text-xl font-bold ml-20 pt-4 pb-2" style = {{ color: "var(--navbar-background)" }}> my personal grunge playlist: </p>
                    <iframe className= "ml-12 mr-12 md:hover:scale-95 transition-transform" src="https://open.spotify.com/embed/playlist/0JyulBYN7M8orNvD6oQ0ld?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <Footer/>
        </div> 
    )
}