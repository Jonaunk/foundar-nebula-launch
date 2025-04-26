
import React from "react";

function Logo() {
  // Logo: Uppercase, navy slate, blue/lavender soft shadow
  return (
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
  );
}

export default Logo;
