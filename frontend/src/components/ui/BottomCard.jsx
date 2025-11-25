"use client";

import React, { memo, useMemo } from "react";
import { FaNetworkWired, FaUserTie, FaCubes } from "react-icons/fa";

const BottomCard = ({ setActiveCard }) => {
  const infoCardData = useMemo(
    () => [
      {
        id: 1,
        icon: FaNetworkWired,
        title: "Complete IT Department",
        des: "Hire a full tech team on subscription.",
      },
      {
        id: 2,
        icon: FaUserTie,
        title: "Personal IT Team",
        des: "Your private CTO & digital advisor.",
      },
      {
        id: 3,
        icon: FaCubes,
        title: "Product Development Partner",
        des: "Build modern, scalable software that grows your business.",
      },
    ],
    []
  );

  return (
    <div className="flex lg:flex-row items-center justify-between gap-8">
      {/* Left Info Section */}
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center px-4">
        <h1 className="bg-gradient-to-r from-black to-teal-700 bg-clip-text text-transparent font-bold text-3xl tracking-widest">
          Software Chamber
        </h1>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed max-w-xs">
          Lorem ipsum dolor sit amet consectetur elit.
        </p>
      </div>

      {/* Info Card Section */}
      <div className="hidden lg:w-3/5 lg:flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {infoCardData.map(({ id, icon: Icon, title, des }) => (
            <div
              key={id}
              onClick={() => setActiveCard(id)}
              className="group flex items-start gap-4 text-sm sm:text-base containerbg
              w-[400px] h-28 rounded-2xl shadow-2xl p-2 cursor-pointer
              transition-transform duration-300 hover:scale-[1.03]
              hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
            >
              <div
                className="flex items-center justify-center w-full h-full 
                bg-white/10 backdrop-blur-sm shadow-inner border border-teal-600 
                rounded-2xl transition-colors duration-300"
              >
                <span
                  className="flex items-center justify-center w-16 h-16 
                  rounded-xl bg-white/10 mr-6 shadow-[0_8px_20px_rgba(0,0,0,0.6)]
                  text-white transition-colors duration-300 group-hover:text-teal-400"
                >
                  <Icon className="w-[34px] h-[34px]" />
                </span>

                <div className="flex flex-col justify-start text-gray-100 group-hover:text-teal-600">
                  <h3 className="font-semibold text-xl leading-none">{title}</h3>
                  <p className="text-white/50 text-lg mt-1 leading-tight max-w-[260px]">
                    {des}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(BottomCard);
