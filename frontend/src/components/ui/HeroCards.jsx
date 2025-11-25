"use client";

import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";

// Lazy load heavy components
const Card = dynamic(() => import("./Card"));
const SecondCard = dynamic(() => import("./SecondCard"));
const ThirdCard = dynamic(() => import("./ThirdCard"));
const HeroSvg = dynamic(() => import("./HeroSvg"));
const HeroBgSvg = dynamic(() => import("./HeroBgSvg"));

const HeroCards = ({ activeCard, setActiveCard }) => {
  const cardRefs = useRef([]);
  const intervalRef = useRef(null);

  const registerCardRef = (el, index) => {
    if (el) cardRefs.current[index] = el;
  };

  // Lighter bobbing animation
  useEffect(() => {
    if (!cardRefs.current?.length) return;

    gsap.to(cardRefs.current, {
      y: 2, // smaller movement for performance
      yoyo: true,
      repeat: 1,
      duration: 0.25,
      ease: "power1.out",
      stagger: 0.03,
      force3D: true,
    });
  }, [activeCard]);

  // Auto rotate with mobile optimization
  useEffect(() => {
    const rotate = () => {
      setActiveCard((prev) => (prev === 3 ? 1 : prev + 1));
    };

    intervalRef.current = setInterval(rotate, 5500);

    const pause = () => clearInterval(intervalRef.current);
    const resume = () => {
      intervalRef.current = setInterval(rotate, 5500);
    };

    const container = document.getElementById("hero-card-container");

    if (container) {
      container.addEventListener("touchstart", pause, { passive: true });
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", resume);
      container.addEventListener("touchend", resume);
    }

    return () => {
      clearInterval(intervalRef.current);
      if (container) {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", resume);
        container.removeEventListener("touchstart", pause);
        container.removeEventListener("touchend", resume);
      }
    };
  }, [setActiveCard]);

  const renderFrontCard = () => {
    switch (activeCard) {
      case 1:
        return <Card />;
      case 2:
        return <SecondCard />;
      case 3:
        return <ThirdCard />;
      default:
        return <Card />;
    }
  };

  return (
    <div
      id="hero-card-container"
      className="relative flex flex-col lg:w-1/2 lg:flex-row items-center justify-end lg:justify-start md:gap-10"
    >
      <HeroBgSvg />

      {/* Card Container */}
      <div
        className="relative w-full max-w-[90%] lg:max-w-sm mx-auto mt-10"
        style={{
          transform: "perspective(600px) rotateZ(5deg) rotateY(-10deg) rotateX(5deg)",
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          scale: "0.95",
        }}
      >
        <HeroSvg />

        <div className="relative z-10 w-full flex flex-col sm:flex-row justify-center lg:justify-start gap-3">

          {/* Back Card */}
          <div
            ref={(el) => registerCardRef(el, 0)}
            className="absolute top-0 left-4 lg:left-10 rounded-xl hero-card"
            style={{
              transform: "translate3d(0,12px,-30px) rotateY(5deg) rotateZ(-5deg)",
              opacity: 0.9,
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.15))",
            }}
          >
            <ThirdCard />
          </div>

          {/* Middle Card */}
          <div
            ref={(el) => registerCardRef(el, 1)}
            className="absolute top-0 left-2 lg:left-5 rounded-xl hero-card"
            style={{
              transform: "translate3d(0,6px,-15px) rotateY(5deg) rotateZ(-5deg)",
              opacity: 0.95,
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.18))",
            }}
          >
            <SecondCard />
          </div>

          {/* Front Card */}
          <div
            ref={(el) => registerCardRef(el, 2)}
            className="relative rounded-xl shadow-md hero-card"
            style={{
              transform: "translate3d(0,0,0) rotateY(5deg) rotateZ(-5deg)",
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))",
            }}
          >
            {renderFrontCard()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default memo(HeroCards);
