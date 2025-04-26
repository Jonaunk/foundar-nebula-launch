
import { useRef } from "react";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const BACKGROUND_STYLE =
  "fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_30%_10%,#D9D3F0_0%,#A7C7F2_40%,#C9B4E5_70%,#FFF6F0_100%)]";

function NebulaFog() {
  // Nebula/fog overlays using SVG/blur/layered shapes
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
      {/* Main fog shape */}
      <svg width="100%" height="100%" className="absolute top-0 left-0 select-none" style={{ filter: "blur(60px)" }} fill="none">
        <ellipse cx="75%" cy="30%" rx="250" ry="90" fill="#D9D3F0" opacity="0.18" />
        <ellipse cx="25%" cy="50%" rx="190" ry="110" fill="#A7C7F2" opacity="0.17" />
        <ellipse cx="50%" cy="80%" rx="350" ry="120" fill="#FFF6F0" opacity="0.18" />
        <ellipse cx="60%" cy="60%" rx="190" ry="65" fill="#C9B4E5" opacity="0.16" />
        <ellipse cx="20%" cy="18%" rx="120" ry="60" fill="#C9B4E5" opacity="0.11" />
      </svg>
      {/* Additional fog layer (subtle movement) */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="w-full h-full animate-nebula-fog" style={{ filter: "blur(100px)" }}>
          <ellipse cx="68%" cy="70%" rx="180" ry="65" fill="#D9D3F0" opacity="0.11" />
          <ellipse cx="30%" cy="85%" rx="100" ry="48" fill="#A7C7F2" opacity="0.07" />
        </svg>
      </div>
    </div>
  );
}

function Starfield() {
  // Simple hand-placed or programmatically scattered stars
  const stars = [
    { top: "14%", left: "22%", size: 1.8, opacity: 0.9 },
    { top: "8%", left: "70%", size: 2, opacity: 0.8 },
    { top: "55%", left: "32%", size: 1.4, opacity: 0.7 },
    { top: "34%", left: "48%", size: 2.3, opacity: 0.9 },
    { top: "22%", left: "84%", size: 1.5, opacity: 0.7 },
    { top: "72%", left: "12%", size: 2, opacity: 0.75 },
    { top: "62%", left: "61%", size: 1.2, opacity: 0.7 },
    { top: "27%", left: "54%", size: 1.6, opacity: 0.8 },
    { top: "80%", left: "40%", size: 1.0, opacity: 0.6 },
    { top: "12%", left: "90%", size: 1.6, opacity: 0.8 },
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: `${star.size * 2}px`,
            height: `${star.size * 2}px`,
            opacity: star.opacity,
            borderRadius: "50%",
            background: "white",
            filter: "blur(0.5px)",
            boxShadow: "0 0 10px 2px #fff4, 0 0 30px #cff2",
          }}
        />
      ))}
    </div>
  );
}

function Orbits() {
  // Use subtle SVG ellipses for planetary orbits
  return (
    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" width="600" height="480" fill="none">
      <ellipse cx="300" cy="240" rx="220" ry="61" stroke="#D9D3F0" strokeWidth="1.1" opacity="0.16" />
      <ellipse cx="290" cy="240" rx="160" ry="37" stroke="#A7C7F2" strokeWidth="1.2" opacity="0.19" />
      <ellipse cx="310" cy="240" rx="87" ry="27" stroke="#C9B4E5" strokeWidth="1" opacity="0.14" />
    </svg>
  );
}

function FoundarLogo() {
  // Logo: Uppercase, navy slate, blue/lavender soft shadow
  return (
    <div
      className="text-[clamp(2.2rem,7vw,4.6rem)] font-bold tracking-wider mx-auto font-sans uppercase select-none"
      style={{
        color: "#323643",
        letterSpacing: "0.08em",
        textShadow:
          "0 2.5px 24px #A7C7F280, 0 0.5px 3px #D9D3F085",
        filter: "drop-shadow(0 1px 10px #A7C7F2aa)",
        lineHeight: 1.09,
      }}
    >
      FOUNDAR
    </div>
  );
}

export default function Index() {
  // Form submit (static for now)
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    // Optionally show a toast (with useToast)
    if (!inputRef.current?.value) {
      inputRef.current?.focus();
      return;
    }
    // Replace below with actual email logic if needed
    alert("Gracias por tu interés. Te avisaremos pronto.");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div
      className={`${BACKGROUND_STYLE} font-sans flex flex-col min-h-screen h-screen w-full items-center justify-center relative overflow-hidden [&>*]:z-10`}
      style={{ minHeight: "100vh", height: "100dvh" }}
    >
      {/* Background Nebula, Overlays */}
      <NebulaFog />
      <Starfield />
      <Orbits />

      <main className="flex flex-col items-center justify-center flex-1 relative w-full h-full min-h-0 mx-auto">
        {/* Logo */}
        <FoundarLogo />
        {/* Headings */}
        <h2 className="mt-4 mb-1 text-center text-[clamp(1.12rem,2.33vw,2.25rem)] font-semibold tracking-wide text-foundar-slate drop-shadow-[0_2px_16px_rgba(167,199,242,0.18)]">
          Donde nacen las ideas que merecen ser acompañadas
        </h2>
        <div className="mb-1">
          <p className="text-center text-[clamp(0.93rem,1.2vw,1.36rem)] tracking-wide text-foundar-slate/80">
            Pronto vas a poder impulsar creadores, sueños y trayectos que recién comienzan
          </p>
        </div>
        {/* Description */}
        <p className="text-center text-[clamp(0.9rem,0.95vw,1.09rem)] font-normal text-foundar-slate/60 max-w-lg mb-5 mt-2 mx-auto">
          Foundar es una plataforma de crowdfunding narrativa y simbólica que acompaña a jóvenes creadores desde su primer paso.
        </p>

        {/* Email Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          className="backdrop-blur-xl bg-white/20 shadow-none border border-[rgba(255,255,255,0.23)] flex flex-row max-sm:flex-col items-center justify-center gap-2 max-sm:gap-2 px-3.5 py-2 w-[min(410px,95vw)] rounded-full"
          style={{
            boxShadow: "0 1.5px 18px 0 #d9d3f022 inset, 0 0.5px 3px #fff6f055 inset",
            marginTop: "18px",
            marginBottom: "14px",
            minWidth: "340px",
            background: "rgba(255,255,255,0.18)",
          }}
          autoComplete="off"
        >
          <input
            ref={inputRef}
            type="email"
            required
            placeholder="Tu email"
            aria-label="Tu email"
            className="appearance-none w-full min-w-[120px] max-w-[210px] flex-1 border-none outline-none bg-transparent text-foundar-slate text-[1.13rem] px-4 py-2 rounded-full placeholder:text-foundar-slate/40 shadow-inner focus:ring-0 focus:outline-none"
            style={{
              boxShadow: "inset 0 0.6px 8px 0 #e1d8f2aa, 0 0.5px 2px #fff6f022 inset",
              fontWeight: 500,
            }}
          />
          <button
            type="submit"
            className="flex-shrink-0 px-6 py-2 rounded-full text-white font-semibold text-[1.07rem] shadow-[0_2px_16px_rgba(199,109,170,0.13)] transition-all duration-200"
            style={{
              background: "linear-gradient(90deg,#C76DAA,#D88393)",
              boxShadow: "0 0px 12px #D8839366",
              outline: "none",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 0 0.13rem #D8839399,0 2.5px 18px #C76DAA40";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0px 12px #D8839366";
            }}
          >
            Quiero enterarme cuando lancen
          </button>
        </form>
      </main>

      {/* Footer – simple, small */}
      <footer className="absolute left-0 right-0 bottom-0 w-full flex items-center justify-center sm:justify-center pb-3 px-4 z-20 select-none">
        <div className="flex flex-row items-center gap-4 bg-transparent rounded-full px-4 py-1.5">
          {/* FOUNDAR Logo */}
          <span
            className="uppercase font-bold text-[1.13rem] tracking-wider text-foundar-slate"
            style={{
              textShadow: "0 0.5px 8px #A7C7F2dd",
              letterSpacing: "0.07em",
            }}
          >
            FOUNDAR
          </span>
          {/* Divider */}
          <span className="w-[1.1px] h-4 bg-foundar-slate/20 rounded-full mx-1"></span>
          {/* Email */}
          <a
            href="mailto:hello@append.com.ar"
            className="flex items-center gap-1 text-foundar-slate/80 hover:text-foundar-blue/90 text-[1.04rem] transition-colors"
            style={{ textDecoration: "none" }}
            title="Mail"
          >
            <Mail size={17} className="opacity-70" /> hello@append.com.ar
          </a>
          {/* Social Icons */}
          <span className="flex flex-row gap-1.5 ml-3">
            <a
              href="https://instagram.com/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foundar-slate/40 hover:text-foundar-blue transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://twitter.com/"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foundar-slate/40 hover:text-foundar-blue transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foundar-slate/40 hover:text-foundar-blue transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
