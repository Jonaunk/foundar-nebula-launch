
import React from "react";

const NarrativeText = () => (
  <div className="flex flex-col items-center justify-center">
    {/* Main heading */}
    <h2 className="mt-6 text-center text-[clamp(1.45rem,2.45vw,2.7rem)] font-semibold tracking-wide text-foundar-slate drop-shadow-[0_2px_16px_rgba(167,199,242,0.18)]">
      Una plataforma para acompañar misiones que recién comienzan
    </h2>
    {/* Subheading */}
    <p className="mt-2 text-center text-[clamp(1.02rem,1.3vw,1.39rem)] font-medium tracking-wide text-foundar-slate/80">
      Pronto vas a poder impulsar sueños, trayectos y creadores listos para despegar
    </p>
    {/* Description */}
    <p className="text-center text-[clamp(0.87rem,0.92vw,1.08rem)] font-normal text-foundar-slate/60 max-w-lg mb-6 mt-3 mx-auto">
      Foundar es una plataforma de crowdfunding narrativa y simbólica que acompaña a jóvenes creadores desde su primer paso.
    </p>
  </div>
);

export default NarrativeText;
