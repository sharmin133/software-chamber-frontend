'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";


const ThirdCard = () => {
  const scrollRef = useRef();
  const tl = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const firstSetHeight = el.scrollHeight / 2;

    tl.current = gsap.to(el, {
      y: -firstSetHeight,
      duration: 14,
      ease: "linear",
      repeat: -1,
    });

    return () => tl.current?.kill();
  }, []);

  const handleBtnEnter = () => tl.current?.pause();
  const handleBtnLeave = () => tl.current?.resume();

  const tasks = [
    {
      id: 1,
      label: "Software",
      left: "6%",
      width: "60%",
      top: 50,
      link: "https://github.com/tahazzee",
    },
    {
      id: 2,
      label: "Website",
      left: "35%",
      width: "60%",
      top: 120,
      link: "https://tahazzeeportfolio.netlify.app",
    },
    {
      id: 3,
      label: "Mobile app",
      left: "60%",
      width: "60%",
      top: 190,
      link: "https://www.linkedin.com/in/umme-tahazzee/",
    },
    {
      id: 4,
      label: "UX-UI",
      left: "35%",
      width: "60%",
      top: 260,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div
      className="cardbg relative flex flex-col items-center md:w-[400px] p-6
   rounded-[44px] overflow-hidden  shadow-[0_25px_50px_rgba(0,0,0,0.8)]
    before:bg-[radial-gradient(circle_at_top_right,rgba(0,255,200,0.2),transparent_70%)]
    border border-cyan-600 
   "
    >
      {/* Top Glow */}
      <div
        className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-[150%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(0,255,255,0.2) 20%, transparent 70%)",
        }}
      ></div>

      {/* Timeline Section */}
      <div
        className="cardbg relative w-full h-[300px] flex flex-col 
        justify-between rounded-2xl overflow-hidden z-10"
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "inset 0 0 50px rgba(255,255,255,0.06), 0 0 50px rgba(0,255,255,0.05)",

        }}
      >
        {/* Timeline Header */}
        <div className="relative w-full h-[60px] flex flex-col justify-center">
          <div className="flex justify-between px-6 text-white/70 text-sm font-medium">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
          </div>

          <div className="relative mt-2">
            <div className="absolute top-1/2 w-[1px] h-full bg-white/30"></div>
            <div className="flex justify-between items-center px-6">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Auto Scroll Task Items */}
        <div className="relative flex-1 overflow-hidden">
          <div ref={scrollRef} className="absolute inset-0 z-20">
            {[...tasks, ...tasks].map((t, index) => (
              <div
                key={index}
                style={{ top: t.top + (index >= tasks.length ? 300 : 0) }}
                className="absolute w-full"
              >
                <div
                  className="absolute rounded-[16px] p-3 bg-[rgba(255,255,255,0.05)] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.06),inset_0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-lg hover:scale-[1.03] transition-transform duration-300 z-30"
                  style={{ left: t.left, width: t.width, height: 60 }}
                >
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleBtnEnter}
                    onMouseLeave={handleBtnLeave}
                    className="absolute left-0 top-1/2 -translate-y-1/2 px-8 py-2 text-sm text-white font-medium rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 active:scale-95"
                  >
                    {t.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Below Timeline */}
      <div className="w-full h-auto md:h-[300px]   flex flex-col gap-4 text-left items-start mt-4
       z-10">
        <h2 className="text-xl md:text-3xl font-semibold text-white tracking-normal">
          Product Development Partner
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm md:text-2xl leading-relaxed max-w-md">
          You don’t need to hire separately. Just subscribe, and get a world-class
          IT department at a predictable monthly cost.
        </p>
        <button
          className="px-6 md:px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 shadow-[0_6px_20px_rgba(0,0,0,0.4),0_0_25px_rgba(255,255,255,0.06)] transition-all duration-300 active:scale-95"
        >
          Discover
        </button>
      </div>
    </div>
  );
};

export default ThirdCard;