"use client";

import React, { useState, useCallback } from "react";
import HeroContent from "./HeroContent";
import BottomCard from "../ui/BottomCard";

export const Hero = () => {
  const [activeCard, setActiveCard] = useState(1);

  // stable callback to prevent unnecessary rerenders in child components
  const handleSetActiveCard = useCallback((id) => {
    setActiveCard(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      
      <div className="relative w-full border-t-8 border-l-8 border-r-8 border-white 
        overflow-hidden rounded-br-[150px]">

        {/* HERO CONTENT */}
        <div className="relative containerbg rounded-t-[10px] rounded-b-[44px]">
          <HeroContent
            activeCard={activeCard}
            setActiveCard={handleSetActiveCard}
          />
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative bg-white py-5">
          <BottomCard setActiveCard={handleSetActiveCard} />
        </div>

      </div>
    </div>
  );
};
