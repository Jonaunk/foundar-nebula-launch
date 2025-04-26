
import React from "react";

const NarrativeText = () => (
  <div className="flex flex-col items-center justify-center font-sans">
    {/* Main logo title (as in space symbolism, not a separate logo) */}
    <div
      className="text-[clamp(2.2rem,7vw,4.6rem)] font-bold tracking-wider mx-auto font-sans uppercase select-none"
      style={{
        color: "#323643",
        letterSpacing: "0.08em",
        textShadow: "0 2.5px 24px #A7C7F280, 0 0.5px 3px #D9D3F085",
        filter: "drop-shadow(0 1px 10px #A7C7F2aa)",
        lineHeight: 1.09,
      }}
    >
      FOUNDAR
    </div>
    {/* Heading */}
    <h2 className="mt-4 text-center text-[clamp(1.5rem,2.5vw,2.7rem)] font-semibold tracking-wide text-foundar-slate drop-shadow-[0_2px_16px_rgba(167,199,242,0.18)]">
      Una plataforma para acompañar misiones que recién comienzan
    </h2>
    {/* Subheading */}
    <p className="mt-2 text-center text-[clamp(1.04rem,1.3vw,1.45rem)] font-medium tracking-wide text-foundar-slate/80">
      Pronto vas a poder impulsar sueños, trayectos y creadores listos para despegar
    </p>
    {/* Description */}
    <p className="text-center text-[clamp(0.89rem,1vw,1.15rem)] font-normal text-foundar-slate/60 max-w-lg mb-7 mt-3 mx-auto">
      Foundar es una plataforma de crowdfunding narrativa y simbólica que acompaña a jóvenes creadores desde su primer paso.
    </p>
  </div>
);

export default NarrativeText;
