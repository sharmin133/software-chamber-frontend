

import { useEffect, useState, useRef } from "react";
import { FaCode, FaCloud, FaShieldAlt, FaRobot, FaChartLine, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";

const services = [
  {
    id: "#DEV001",
    title: "Custom Development",
    subtitle: "Web & Mobile Apps",
    info: [
      { label: "Platforms:", value: "Web, iOS, Android" },
      { label: "Delivery:", value: "6-12 weeks" },
    ],
    icon: <FaCode />,
    badge: "Most Popular 🔥",
    button: "Get Quote",
  },
  {
    id: "#CLD002",
    title: "Cloud Solutions",
    subtitle: "Infrastructure & Migration",
    info: [
      { label: "Providers:", value: "AWS, Azure, GCP" },
      { label: "Support:", value: "24/7 Monitoring" },
    ],
    icon: <FaCloud />,
    button: "Learn More",
  },
  {
    id: "#SEC003",
    title: "Cybersecurity",
    subtitle: "Protection & Compliance",
    info: [
      { label: "Services:", value: "Audit, Pentest" },
      { label: "Compliance:", value: "GDPR, HIPAA" },
    ],
    icon: <FaShieldAlt />,
    button: "Secure Now",
  },
  {
    id: "#AI004",
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    info: [
      { label: "Technologies:", value: "TensorFlow, PyTorch" },
      { label: "Applications:", value: "NLP, Vision" },
    ],
    icon: <FaRobot />,
    button: "Explore AI",
  },
  {
    id: "#DATA005",
    title: "Data Analytics",
    subtitle: "Insights & Visualization",
    info: [
      { label: "Tools:", value: "Tableau, Power BI" },
      { label: "Delivery:", value: "Dashboards, Reports" },
    ],
    icon: <FaChartLine />,
    button: "View Samples",
  },
];

export default function Stacked() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stackRef = useRef(null);
  const total = services.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const rotateCards = () => {
    const cards = stackRef.current?.children;
    if (!cards) return;

    [...cards].forEach((card, index) => {
      card.classList.remove("animate-pulseGlow");

      const pos = (index - currentIndex + total) % total;
      let transform = "";
      let zIndex = 1;
      let opacity = 0.7;

      if (pos === 0) {
        transform = "translateZ(0px) translateY(0px)";
        zIndex = 5;
        opacity = 1;
        card.classList.add("animate-pulseGlow");
      } else if (pos === 1) {
        transform = "translateZ(-30px) translateY(20px) rotateX(5deg)";
        zIndex = 4;
        opacity = 0.92;
      } else if (pos === 2) {
        transform = "translateZ(-60px) translateY(40px) rotateX(10deg)";
        zIndex = 3;
        opacity = 0.85;
      } else if (pos === 3) {
        transform = "translateZ(-90px) translateY(60px) rotateX(15deg)";
        zIndex = 2;
        opacity = 0.78;
      } else {
        transform = "translateZ(-120px) translateY(80px) rotateX(20deg)";
        zIndex = 1;
        opacity = 0.7;
      }

      card.style.transform = transform;
      card.style.zIndex = zIndex;
      card.style.opacity = opacity;
    });
  };

  useEffect(() => {
    rotateCards();
  }, [currentIndex]);

  const handleMouseMove = (e) => {
    const rect = stackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / 20).toFixed(2);
    const rotateX = ((midY - y) / 20).toFixed(2);
    stackRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const resetRotation = () => {
    stackRef.current.style.transform = "rotateY(-25deg) rotateX(10deg)";
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0c1120,#01040a)] 
    flex flex-col items-center justify-center text-center text-white px-4">
     
      

      {/* Stack */}
      <div
        ref={stackRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        className="relative w-[340px] h-[220px] transform-style-preserve-3d transition-transform duration-700
         ease-in-out [transform:rotateY(-25deg)_rotateX(10deg)]"
      >
       <Card/>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => setCurrentIndex((i) => (i - 1 + total) % total)}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-400/20 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setCurrentIndex((i) => (i + 1) % total)}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-400/20 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
