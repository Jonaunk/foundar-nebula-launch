
import React, { useRef } from "react";

const BUTTON_BG = "#7CB8F2"; // Sky blue

const EmailForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!inputRef.current?.value) {
      inputRef.current?.focus();
      return;
    }
    // Simple feedback (could be animated in future)
    alert("¡Te avisaremos pronto!");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-row items-center justify-center gap-0 w-[min(500px,97vw)] max-sm:flex-col max-sm:gap-2 backdrop-blur-xl bg-white/20 border border-[rgba(255,255,255,0.18)] rounded-full shadow-none"
      style={{
        marginTop: "4px",
        marginBottom: "6px",
        minWidth: "340px",
        background: "rgba(255,255,255,0.18)",
        boxShadow: "0 1.5px 18px 0 #d9d3f022 inset, 0 0.5px 3px #fff6f055 inset",
      }}
      autoComplete="off"
    >
      <input
        ref={inputRef}
        type="email"
        required
        placeholder="Tu email"
        aria-label="Tu email"
        className="flex-1 min-w-[180px] max-w-[310px] bg-transparent border-none outline-none text-foundar-slate placeholder:text-foundar-slate/70 placeholder:font-medium placeholder:opacity-90 text-[1.15rem] font-medium px-7 py-3 rounded-full shadow-inner focus:ring-2 focus:ring-[#7CB8F2] focus:bg-white/50 transition-all duration-150"
        style={{
          boxShadow: "inset 0 1px 12px 0 #e1d8f2a0, 0 0.5px 2px #fff6f022 inset",
          letterSpacing: "0.01em",
        }}
      />
      <button
        type="submit"
        className="ml-2 max-sm:ml-0 max-sm:mt-2 flex-shrink-0 px-8 py-3 rounded-full text-white font-bold text-[1.07rem] bg-[color:#7CB8F2] hover:bg-[color:#9B87F5] shadow-[0_2px_16px_rgba(124,184,242,0.19)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7CB8F299]"
        style={{
          boxShadow: "0 0px 14px #7CB8F266, 0 0 0 0 #9B87F580",
          outline: "none",
          textTransform: "lowercase",
        }}
        onMouseOver={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 0 0 0.16rem #9B87F599, 0 2.5px 18px #7CB8F240";
        }}
        onMouseOut={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 0px 14px #7CB8F266, 0 0 0 0 #9B87F580";
        }}
      >
        avísame al lanzar
      </button>
    </form>
  );
};

export default EmailForm;
