import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Blog() {
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

          <div className = "flex justify-center">
            <div className = "w-1/3 pt-4 pl-4">
              <p className = "text-xl font-bold pb-4" style = {{ color: "var(--navbar-background)" }}> chris cornell</p>
              <Image src = "/chrisimage.webp"
                     alt = "chris cornell"
                     width = {375}
                     height = {375}
                     className = "rounded-lg md:hover:scale-95 transition-transform"/>

              <p className = "text-lg pb-2 pt-2"> <b>groups:</b> soundgarden, temple of the dog, + audioslave</p>
              <p className = "text-lg pb-2"> one of the biggest figures in grunge, chris cornell helped to define and establish the genre </p>
              <p className = "text-lg pb-2"> as the <b style = {{ color: "var(--navbar-background)" }}>frontman of soundgarden,</b> he combined heavy metal influences with his astonishing voice to create the group's iconic sound </p>
              <p className = "text-lg pb-2"> through <b style = {{ color: "var(--navbar-background)" }}>audioslave,</b> a supergroup created with members of the metal band <b>rage against the machine</b>, he strayed away from the metal infuences and had a slower, more melancholic sound</p>
              <p className = "text-lg pb-2"> cornell passed away in 2017 by suicide, the last song he performed was <b style = {{ color: "var(--navbar-background)" }}><i>badmotorfinger's</i> "slaves and bulldozers"</b></p>
            </div>

            <div className = "w-1/3 pt-4 pl-8">
              <p className = "text-xl font-bold pb-4" style = {{ color: "var(--navbar-background)" }}> andrew wood</p>
              <Image src = "/andyimage.png"
                     alt = "andrew wood"
                     width = {325}
                     height = {325}
                     className = "rounded-lg md:hover:scale-95 transition-transform"/>

              <p className = "text-lg pb-2 pt-2"> <b>groups:</b> malfunkshun + mother love bone</p>
              <p className = "text-lg pb-2"> while not remembered as well as other figures in grunge, wood was seen as a major inspiration and could've been one of grunge's greatest stars</p>
              <p className = "text-lg pb-2"> wood's groups <b style = {{ color: "var(--navbar-background)" }}> malfunkshun and mother love bone</b> had heavy glam rock influences, while in them adopting the captivating persona "landrew the love child"</p>
              <p className = "text-lg pb-2"> andrew wood passed away in 1990 from a heroin overdose, weeks before mother love bone's debut album <i className = "font-bold" style = {{ color: "var(--navbar-background)" }}> apple </i> was to release</p>
              <p className = "text-lg pb-2"> the supergroup <b style = {{ color: "var(--navbar-background)" }}>temple of the dog</b> was created in wood's honor after his passing, songs <b style = {{ color: "var(--navbar-background)" }}>"say hello 2 heaven"</b> and <b style = {{ color: "var(--navbar-background)" }}>"reach down"</b> were written about wood by close friend chris cornell </p>
            </div>

            <div className = "w-1/3 pt-4 pl-8">
              <p className = "text-xl font-bold  pb-4" style = {{ color: "var(--navbar-background)" }}> eddie vedder</p>
              <Image src = "/eddieimage.webp"
                     alt = "eddie vedder"
                     width = {375}
                     height = {375}
                     className = "rounded-lg md:hover:scale-95 transition-transform"/>
              <p className = "text-lg pb-2 pt-2"> <b>groups:</b> temple of the dog + pearl jam</p>
              <p className = "text-lg pb-2"> vedder gained his footing in grunge as a vocalist in <b style = {{ color: "var(--navbar-background)" }}>temple of the dog's "hunger strike",</b> going from previously unknown in the scene to a major figurehead </p>
              <p className = "text-lg pb-2"> pearl jam, formed with members from temple of the dog, immediately hit it big with their debut album, <i className = "font-bold" style = {{ color: "var(--navbar-background)" }}> ten,</i> known as one of the greatest albums of all time</p>
              <p className = "text-lg pb-2"> vedder's vocal power is also seen in pearl jam's other albums including, <i className = "font-bold" style = {{ color: "var(--navbar-background)" }}>vs., vitalogy, and no code</i></p>
              <p className = "text-lg pb-2"> pearl jam is known not only for vedder's vocals, but their favoring of more of an <b>acoustic sound</b> compared a sharp, electric one, and powerful lyrics about war and loss</p>
            </div>
          </div>

          <div className = "flex justify-center">
            <div className = "w-1/3 pt-4 pl-4">
              <p className = "text-xl font-bold pb-4" style = {{ color: "var(--navbar-background)" }}> layne staley</p>
              <Image src = "/laynejerry.jpeg"
                     alt = "layne staley and jerry cantrell"
                     width = {375}
                     height = {375}
                     className = "rounded-lg md:hover:scale-95 transition-transform"/>

              <p className = "text-lg pb-2 pt-2"> <b>groups:</b> alice in chains + mad season</p>
              <p className = "text-lg pb-2"> layne is known in the genre for his low, gravelly voice with an extremely large vocal range </p>
              <p className = "text-lg pb-2"> <b style = {{ color: "var(--navbar-background)" }}>alice in chains' albums <i>dirt, facelift, and jar of flies</i></b> contain extremely deep lyrics about loss, drug addiction, and depression, <b style = {{ color: "var(--navbar-background)" }}> jar of flies</b> is the most unique out of the group's four, being wholey acoustic</p>
              <p className = "text-lg pb-2"> alice in chains' final album with layne, dubbed <b style = {{ color: "var(--navbar-background)" }}>"tripod",</b> combines both metal and acoustic tracks and features guitarist <b style = {{ color: "var(--navbar-background)" }}>jerry cantrell</b> as the singer in a good number of songs, complimenting layne's unique voice</p>
              <p className = "text-lg pb-2"> layne took a break from both of his groups due to his <b>worsening addiction to heroin and the passing of his fiancee, demri parrott,</b> after 3 years, alice in chains played for <b style = {{ color: "var(--navbar-background)" }}>mtv unplugged,</b> here, layne is physically weaker and less powerful vocally, the performance is a testament to the group's strong relationship, and <b>staley and cantrell's friendship</b></p>
              <p className = "text-lg pb-2"> layne passed away in 2002 from a heroin and cocaine overdose, he and kurt cobain both passed on <b style = {{ color: "var(--navbar-background)" }}>april 5th</b> </p>
            </div>

            <div className = "w-1/3 pt-4 pl-8">
              <p className = "text-xl font-bold pb-4" style = {{ color: "var(--navbar-background)" }}> mark arm</p>
              <Image src = "/markandkurt.jpeg"
                     alt = "mark arm and kurt cobain"
                     width = {325}
                     height = {325}
                     className = "rounded-lg md:hover:scale-95 transition-transform"/>
              <p className = "text-lg pb-2 pt-2"> <b>groups:</b> green river + mudhoney</p>
              <p className = "text-lg pb-2"> founding member of the first grunge band <b style = {{ color: "var(--navbar-background)" }}> green river</b> mark arm surprisingly isn't as renknown as some of his peers in the genre </p>
              <p className = "text-lg pb-2"> <b style = {{ color: "var(--navbar-background)" }}>mudhoney's</b> debut album <i className = "font-bold" style = {{ color: "var(--navbar-background)" }}> superfuzz bigmuff,</i> released in 1989, follows with the characteristic "sludgy" sound of grunge with audible <b style = {{ color: "var(--navbar-background)" }}>punk influences</b></p>
              <p className = "text-lg pb-2"> unfortunately, mudhoney's lack of mainstream success can be attributed to release of <b style = {{ color: "var(--navbar-background)" }}>nirvana's <i>nevermind</i></b> and the subsequent influx of grunge in popular culture that overshadowed the band's new albums </p>
            </div>

            <div className = "w-1/3 pt-4 pl-8">
              <p className = "text-xl font-bold pb-4" style = {{ color: "var(--navbar-background)" }}>  kurt cobain</p>
              <Image src = "/kurtimage.jpeg"
                     alt = "kurt cobain"
                     width = {375}
                     height = {375}
                     className = "rounded-lg md:hover:scale-95 transition-transform"/>
              <p className = "text-lg pb-2 pt-2"> <b>groups:</b> nirvana</p>
              <p className = "text-lg pb-2"> kurt cobain, hands down the most well known figure in grunge, through his work in <b style = {{ color: "var(--navbar-background)" }}>nirvana,</b> pushed grunge into the mainstream and changed the genre forever</p>
              <p className = "text-lg pb-2"> nirvana's first album, <i className = "font-bold" style = {{ color: "var(--navbar-background)" }}> bleach,</i> released in 1989, was heavily inspired by noise rock and seattle's sludge-metal scene</p>
              <p className = "text-lg pb-2"> <i className = "font-bold" style = {{ color: "var(--navbar-background)" }}>nevermind</i> is often considered <b>"grunge for the non-grunge listener"</b> due to it being much different from the band's pre-established sound, success of the album overwhelmed cobain and aided in the worsening of his heroin addiction</p>
              <p className = "text-lg pb-2"> kurt passed away in 1994 by suicide, leaving behind wife, <b style = {{ color: "var(--navbar-background)" }}>kourtney love,</b> singer of fellow grunge band, Hole, and year-old daughter, <b style = {{ color: "var(--navbar-background)" }}>frances bean</b></p>
            </div>
          </div>
        </div>

      <Footer/>
    </div>
  )
};