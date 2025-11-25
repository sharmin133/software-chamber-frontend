"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroBgSvg = () => {
  const blobRef = useRef();

  useEffect(() => {
    if (!blobRef.current) return;

    // Slow rotation animation for subtle background movement
    gsap.to(blobRef.current, {
      rotation: 360,
      duration: 90,
      repeat: -1,
      ease: "linear",
      force3D: true,
    });
  }, []);

  return (
    <div className="absolute inset-0 z-[-10] flex justify-center items-center pointer-events-none">
      <svg
        ref={blobRef}
        className="absolute w-[600px] sm:w-[720px] md:w-[820px] lg:w-[900px] opacity-70 blur-xl"
        viewBox="0 0 800 800"
        fill="none"
        style={{ willChange: "transform" }}
      >
        <defs>
          <radialGradient id="blobGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0EE6B7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Organic blob shape */}
        <path
          fill="url(#blobGlow)"
          d="M400,50
             C600,100 750,250 700,500
             C650,700 400,750 250,650
             C100,550 150,300 250,200
             C350,100 400,50 400,50
             Z"
          style={{ filter: "drop-shadow(0 15px 40px rgba(14,230,183,0.3))" }}
        />
      </svg>
    </div>
  );
};

export default HeroBgSvg;
