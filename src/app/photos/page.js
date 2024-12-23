import Navbar from "../components/Navbar"
import Image from "next/image";
import Footer from "../components/Footer";

export default function Albums() {
  return (
    <div>
      <Navbar/>
      <p className = "text-xl font-bold text-center pt-4 pb-4"> there is more to grunge than nirvana's <i>nevermind</i></p>
      <p className = "text-center pb-8 text-xl"> recommendations are based on various criteria like vocal sound, influences, acoustic vs electric, and more! </p>

      <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-8 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
  
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>If you liked:</b> <i> Ten </i>
          </p>
          <Image
            src="/tencover.jpeg"
            alt="pearl jam's ten"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Pearl Jam:</b> 1991
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>You may like:</b> <i> Throwing Copper </i>
          </p>
          <Image
            src="/throwingcoppercover.jpeg"
            alt="live's throwing copper"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Live:</b> 1994
          </p>
      </div>
      </div>

      <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-4 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
        
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>If you liked:</b> <i> Nevermind </i>
          </p>
          <Image
            src="/nevermindcover.jpeg"
            alt="nirvana's nevermind"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Nirvana:</b> 1991
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>You may like:</b> <i> Superfuzz Bigmuff </i>
          </p>
          <Image
            src="/superfuzzbigmuffcover.jpeg"
            alt="mudhoney's superfuzz bigmuff"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Mudhoney:</b> 1988
          </p>
      </div>
      </div>

      <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-24 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
  
          <div className="space-y-4 flex flex-col items-center justify-center">
            <p className="text-xl text-center">
              <b>If you liked:</b> <i> Dirt </i>
            </p>
            <Image
              src="/dirtcover.jpeg"
              alt="alice in chains' dirt"
              width={325}
              height={325}
              className="w-40 h-40 rounded-lg border object-cover border-primary-200"
            />
            <p className="text-med font-medium text-primary-600 text-center">
              <b>Alice in Chains:</b> 1992
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center justify-center">
            <p className="text-xl text-center">
              <b>You may like:</b> <i> Dragline </i>
            </p>
            <Image
              src="/draglinecover.jpeg"
              alt="paw's dragline"
              width={325}
              height={325}
              className="w-40 h-40 rounded-lg border object-cover border-primary-200"
            />
            <p className="text-med font-medium text-primary-600 text-center">
              <b>Paw:</b> 1993
            </p>
        </div>
      </div>

    <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-12 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
  
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>If you liked:</b> <i> Purple </i>
          </p>
          <Image
            src="/purplecover.jpeg"
            alt="stone temple pilot's"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Stone Temple Pilots:</b> 1994
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>You may like:</b> <i> Sweet Oblivion </i>
          </p>
          <Image
            src="/sweetoblivioncover.jpeg"
            alt="screaming tree's sweet oblivion"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Screaming Trees:</b> 1992
          </p>
      </div>
    </div>

    <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-4 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
  
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>If you liked:</b> <i> In Utero </i>
          </p>
          <Image
            src="/inuterocover.jpeg"
            alt="nirvana's in utero"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Nirvana:</b> 1993
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center pl-4">
          <p className="text-xl text-center">
            <b>You may like:</b> <i> Live Through This </i>
          </p>
          <Image
            src="/livethroughthiscover.png"
            alt="hole's live through this"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200 ml-8"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Hole:</b> 1994
          </p>
      </div>
    </div>

    <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-20 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
  
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>If you liked:</b> <i> Blind Melon </i>
          </p>
          <Image
            src="/blindmeloncover.jpeg"
            alt="blind melon's self titled"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200 mr-4"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Blind Melon:</b> 1992
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>You may like:</b> <i> Apple </i>
          </p>
          <Image
            src="/applecover.jpeg"
            alt="mother love bone's apple"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200 ml-4"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Mother Love Bone:</b> 1990
          </p>
      </div>
    </div>

    <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-24 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
  
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>If you liked:</b> <i> Badmotorfinger </i>
          </p>
          <Image
            src="/badmotorfingercover.jpeg"
            alt="sound garden's badmotorfinger"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Soundgarden:</b> 1991
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>You may like:</b> <i> Above </i>
          </p>
          <Image
            src="/abovecover.jpeg"
            alt="mad season's above"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Mad Season:</b> 1995
          </p>
      </div>
    </div>

    <div className="border md:hover:scale-95 transition-transform border-primary-200 rounded-xl p-4 gap-24 flex items-center justify-center space-x-4 w-full max-w-4xl mx-auto" style={{ background: "var(--navbar-background)" }}>
  
        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>If you liked:</b> <i> The Colour and Shape </i>
          </p>
          <Image
            src="/thecolourandshapecover.jpeg"
            alt="foo fighters' the colour and shape"
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Foo Fighters:</b> 1997
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="text-xl text-center">
            <b>You may like:</b> <i> Vs. </i>
          </p>
          <Image
            src="/vs.cover.jpeg"
            alt="pearl jam's vs."
            width={325}
            height={325}
            className="w-40 h-40 rounded-lg border object-cover border-primary-200"
          />
          <p className="text-med font-medium text-primary-600 text-center">
            <b>Pearl Jam:</b> 1993
          </p>
      </div>
    </div>


      <Footer/>
    </div>
  );
}