import gsap from "gsap";
import { useEffect, useRef } from "react";
import Card from "./Card";




const HeroCards = () => {

  const vectorRef = useRef();

  useEffect(() => {
    gsap.to(vectorRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear",
    });
  }, []);


  return (
    <div>
       <div
              className="relative w-full max-w-[90%] lg:max-w-sm mx-auto mt-10"
              style={{
                transform: "perspective(1200px) rotateZ(10deg) rotateY(-25deg) rotateX(10deg)",
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
                scale: "0.95",
              }}
            >

              {/* ===== SVGs Behind Cards ===== */}
              <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                {/* Background Glow SVG */}
                <svg
                  className="absolute w-[520px] sm:w-[620px] md:w-[720px] lg:w-[780px] opacity-80 blur-2xl"
                  viewBox="0 0 800 800"
                  fill="none"
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
                    style={{ filter: "drop-shadow(0 20px 50px rgba(14, 230, 183, 0.4))" }}
                  />
                </svg>
              </div>

              {/* ===== Cards  ===== */}
              <div className="relative z-10 w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <div
                  className="absolute top-0 left-4 lg:left-12 rounded-xl shadow-lg "
                  style={{
                    transform: "translateZ(-40px) translateY(16px) rotateY(10deg) rotateZ(-10deg)",
                    opacity: 0.95,
                    filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.25))",
                  }}
                >
                  <Card />
                </div>

                <div
                  className="absolute top-0 left-2 lg:left-6 rounded-xl shadow-lg"
                  style={{
                    transform: "translateZ(-20px) translateY(8px) rotateY(10deg) rotateZ(-10deg)",
                    opacity: 0.985,
                    filter: "drop-shadow(0 10px 16px rgba(0,0,0,0.28))",
                  }}
                >
                  <Card />
                </div>

                <div
                  className="relative rounded-xl shadow-lg"
                  style={{
                    transform: "translateZ(0px) rotateY(10deg) rotateZ(-10deg)",
                    filter: "drop-shadow(0 14px 22px rgba(0,0,0,0.32))",
                  }}
                >
                  <Card />
                </div>
              </div>

            </div>

    </div>
  )
}

export default HeroCards