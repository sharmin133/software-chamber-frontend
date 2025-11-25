import { useEffect, useRef } from "react";
import gsap from "gsap";

const DynamicCard = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const cards = scrollRef.current;
    gsap.to(cards, {
      y: "-50%", // scroll half height
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative w-1/2 h-[220px] overflow-hidden">
      <div ref={scrollRef} className="flex flex-col gap-6">
        {["Software", "Website", "Mobile App", "Dashboard", "Analytics", "Marketing"].concat(
          ["Software", "Website", "Mobile App", "Dashboard", "Analytics", "Marketing"]
        ).map((text, idx) => (
          <MiddleCard key={idx} text={text} className={idx % 2 === 0 ? "translate-x-[-40px]" : "translate-x-[20px]"} />
        ))}
      </div>
    </div>
  );
};
