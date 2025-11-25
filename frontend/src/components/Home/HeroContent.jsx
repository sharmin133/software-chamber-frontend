'use client';

import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroCards from "../ui/HeroCards";
import grainy from "../../assets/img/bgElement/grainy.svg";

const HeroContent = ({ activeCard, setActiveCard }) => {
  return (
    <section className="relative z-40 flex flex-col pt-20 mb-5">

      {/* Noise Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <Image
          src={grainy}
          alt="background noise texture"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative w-full lg:w-[1500px] mx-auto pb-24 px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between md:gap-10 py-12">

          {/* ---------------- Text Section ---------------- */}
          <div className="flex-1 text-center lg:text-left lg:w-2/5">
            <h2 className="bg-gradient-to-r from-teal-300 via-white to-yellow-50 bg-clip-text text-transparent text-base sm:text-lg md:text-xl font-semibold tracking-wide">
              One team. All technology. Predictable cost.
            </h2>

            <h1
              className="mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[70px]
                font-extrabold leading-tight tracking-wide bg-clip-text text-transparent
                bg-gradient-to-r from-white via-teal-400 to-white"
            >
              Build. Manage. Grow. Your Entire IT in One Place.
            </h1>

            <p className="mt-10 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide max-w-lg mx-auto lg:mx-0">
              From startups to global brands — Software Chamber acts as your complete IT department, your personal tech team, and your trusted product partner. We build and manage everything — from web & mobile apps to automation, AI, and enterprise systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-5 mt-8">
              <button
                className="containerbg border border-teal-300 rounded-xl text-lg sm:text-xl font-medium text-white px-8 sm:px-12 py-3 sm:py-4 transition-all duration-300 hover:bg-transparent hover:text-teal-200"
              >
                Let's Get Started
              </button>

              <button className="flex items-center gap-2 text-teal-400 hover:text-teal-200 transition-colors">
                <span className="bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent text-lg sm:text-xl font-semibold tracking-wide">
                  About us
                </span>
                <MdOutlineKeyboardArrowRight className="text-xl sm:text-2xl" />
              </button>
            </div>
          </div>

          {/* Right Side Cards */}
          <HeroCards activeCard={activeCard} setActiveCard={setActiveCard} />
        </div>
      </div>

      {/* ---------------- Bottom Divider Shape ---------------- */}
      <div
        className="hidden md:block ml-auto w-[60%] h-[31px] bg-white"
        style={{
          clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0 100%)",
          borderTopLeftRadius: "8px",
          marginBottom: "-2px",
          boxShadow:
            "0 -10px 20px -10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(0,0,0,0.05)",
        }}
      />
    </section>
  );
};

export default HeroContent;
