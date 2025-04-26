
import React, { useRef } from "react";

const EmailForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!inputRef.current?.value) {
      inputRef.current?.focus();
      return;
    }
    alert("Gracias por tu interés. Te avisaremos pronto.");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-row items-center justify-center gap-0 w-[min(410px,95vw)] max-sm:flex-col max-sm:gap-2 backdrop-blur-xl bg-white/20 border border-[rgba(255,255,255,0.23)] rounded-full px-2 py-2 shadow-none"
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
        className="appearance-none flex-1 min-w-[120px] max-w-[210px] bg-transparent border-none outline-none text-foundar-slate placeholder:text-foundar-slate/70 placeholder:font-medium placeholder:opacity-90 text-[1.13rem] font-medium px-5 py-3 rounded-full shadow-inner focus:ring-0 focus:outline-none transition-all duration-150"
        style={{
          boxShadow: "inset 0 1px 10px 0 #e1d8f2a0, 0 0.5px 2px #fff6f022 inset",
          letterSpacing: "0.01em",
        }}
      />
      <button
        type="submit"
        className="ml-2 max-sm:ml-0 max-sm:mt-2 flex-shrink-0 px-7 py-3 rounded-full text-white font-semibold text-[1.07rem] bg-[color:#C76DAA] hover:bg-[color:#D88393] shadow-[0_2px_16px_rgba(199,109,170,0.13)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D8839399]"
        style={{
          boxShadow: "0 0px 13px #D8839366",
          outline: "none",
        }}
        onMouseOver={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 0 0 0.13rem #D8839399,0 2.5px 18px #C76DAA40";
        }}
        onMouseOut={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            "0 0px 13px #D8839366";
        }}
      >
        Quiero enterarme cuando lancen
      </button>
    </form>
  );
};

export default EmailForm;
