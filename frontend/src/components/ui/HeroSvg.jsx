"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSvg = () => {
  const vectorRef = useRef();

  useEffect(() => {
    if (!vectorRef.current) return;

    // Smooth 360° rotation with GPU acceleration
    gsap.to(vectorRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear",
      force3D: true, // force GPU layer
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
      {/* Background Glow SVG */}
      <svg
        className="absolute w-[520px] sm:w-[620px] md:w-[720px] lg:w-[780px] opacity-80 blur-xl"
        viewBox="0 0 800 800"
        fill="none"
        style={{ willChange: "opacity, transform" }} // GPU hint
      >
        <path
          fill="url(#modernGlow)"
          d="M400,700 Q550,650 650,500 T700,200 Q650,50 450,50 T150,200 Q100,400 250,600 T400,700 Z"
        />
        <circle cx="400" cy="300" r="200" fill="url(#radialGlow)" opacity="0.6" />
        <defs>
          <linearGradient id="modernGlow">
            <stop offset="0%" stopColor="#0EE6B7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#083B4A" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="radialGlow">
            <stop offset="0%" stopColor="#0EE6B7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0EE6B7" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Main Animated SVG */}
      <svg
        ref={vectorRef}
        className="absolute w-[450px] sm:w-[520px] md:w-[600px] lg:w-[750px]"
        viewBox="0 0 800 800"
        fill="none"
        style={{ willChange: "transform" }} // GPU hint
      >
        <defs>
          <linearGradient id="tealFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0EE6B7" />
            <stop offset="100%" stopColor="#083B4A" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          fill="url(#tealFill)"
          d="M400,720 Q580,680 680,520 Q750,380 720,220 Q680,60 500,40 Q320,20
             180,140 Q40,260 80,440 Q120,620 280,700 Q340,730 400,720 Z"
          style={{
            filter: "drop-shadow(0 15px 35px rgba(14,230,183,0.35))",
          }}
        />
      </svg>
    </div>
  );
};

export default HeroSvg;
