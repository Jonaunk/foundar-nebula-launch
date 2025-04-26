import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import NarrativeText from "@/components/NarrativeText";
import EmailForm from "@/components/EmailForm";
import React from "react";

const BACKGROUND_STYLE =
  "fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_30%_10%,#D9D3F0_0%,#A7C7F2_40%,#C9B4E5_70%,#FFF6F0_100%)]";

function NebulaFog() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <svg width="100%" height="100%" className="absolute top-0 left-0 select-none" style={{ filter: "blur(60px)" }} fill="none">
        <ellipse cx="75%" cy="30%" rx="250" ry="90" fill="#D9D3F0" opacity="0.18" />
        <ellipse cx="25%" cy="50%" rx="190" ry="110" fill="#A7C7F2" opacity="0.17" />
        <ellipse cx="50%" cy="80%" rx="350" ry="120" fill="#FFF6F0" opacity="0.18" />
        <ellipse cx="60%" cy="60%" rx="190" ry="65" fill="#C9B4E5" opacity="0.16" />
        <ellipse cx="20%" cy="18%" rx="120" ry="60" fill="#C9B4E5" opacity="0.11" />
      </svg>
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
    <div className="absolute inset-0 w-full h-full -z-10">
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
  return (
    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" width="600" height="480" fill="none">
      <ellipse cx="300" cy="240" rx="220" ry="61" stroke="#D9D3F0" strokeWidth="1.1" opacity="0.16" />
      <ellipse cx="290" cy="240" rx="160" ry="37" stroke="#A7C7F2" strokeWidth="1.2" opacity="0.19" />
      <ellipse cx="310" cy="240" rx="87" ry="27" stroke="#C9B4E5" strokeWidth="1" opacity="0.14" />
    </svg>
  );
}

export default function Index() {
  return (
    <div
      className="font-sans flex flex-col min-h-screen h-screen w-full items-center justify-center relative overflow-hidden [&>*]:z-10"
      style={{
        minHeight: "100vh",
        height: "100dvh",
      }}
    >
      <div className={BACKGROUND_STYLE} aria-hidden="true" />
      <NebulaFog />
      <Starfield />
      <Orbits />

      <main className="flex flex-col items-center justify-center flex-1 relative w-full h-full min-h-0 mx-auto select-none"
        style={{ paddingTop: "2.5vh", paddingBottom: "2.5vh", margin: 0 }}
      >
        <NarrativeText />
        <EmailForm />
      </main>

      <footer className="absolute left-0 right-0 bottom-0 w-full flex items-center justify-center sm:justify-center pb-3 px-4 z-20 select-none"
        style={{ pointerEvents: 'auto' }}
      >
        <div className="flex flex-row items-center gap-4 bg-transparent rounded-full px-4 py-1.5">
          <span
            className="uppercase font-bold text-[1.13rem] tracking-wider text-foundar-slate"
            style={{
              textShadow: "0 0.5px 8px #A7C7F2dd",
              letterSpacing: "0.07em",
            }}
          >
            FOUNDAR
          </span>
          <span className="w-[1.1px] h-4 bg-foundar-slate/20 rounded-full mx-1"></span>
          <a
            href="mailto:hello@append.com.ar"
            className="flex items-center gap-1 text-foundar-slate/80 hover:text-foundar-blue/90 text-[1.04rem] transition-colors"
            style={{ textDecoration: "none" }}
            title="Mail"
          >
            <Mail size={17} className="opacity-70" /> hello@append.com.ar
          </a>
          <span className="flex flex-row gap-1.5 ml-3">
            <a
              href="https://www.instagram.com/append_ar"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foundar-slate/40 hover:text-foundar-blue transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://twitter.com/append_ar"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foundar-slate/40 hover:text-foundar-blue transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/append-ar/"
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
