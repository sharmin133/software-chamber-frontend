'use client'
import React, { useEffect, useState } from 'react';
import Image from "next/image"; 
import infineImg from '../../assets/img/infine img2.png.png';

import research from "../../assets/img/Development Process/Research.png"
import design from "../../assets/img/Development Process/Design.png"
import development from "../../assets/img/Development Process/Development.png"
import testing from "../../assets/img/Development Process/Testing.png"
import deployment from "../../assets/img/Development Process/Deployment.png"
import Maintenance from "../../assets/img/Development Process/Maintenance.png"



const DevelopmentProcess = () => {
  const [activeId, setActiveId] = useState(1);
  const [bgColor, setBgColor] = useState("#106617");

  const DevelopmentProcessData = [
    { id: 1, title: "Code", description: "Gather requirements and understand project scope, target audience, and objectives.", image: research, bordercolor: "#29bdcc", color: "#106617" },
    { id: 2, title: "Build", description: "Create architecture and UI prototypes for early feedback and iterative improvements.", image: design, bordercolor: "#1c3b47", color: "#106617" },
    { id: 3, title: "Test", description: "Write efficient, scalable code with best practices and continuous integration.", image: development, bordercolor: "#55381f", color: "#106617" },
    { id: 4, title: "Release", description: "Perform unit, integration, and system tests to ensure software quality.", image: testing, bordercolor: "#882739", color: "#106617" },
    { id: 5, title: "Deploy", description: "Launch software in stages, including beta testing and final live release.", image: deployment, bordercolor: "#f0b224", color: "#106617" },
    { id: 6, title: "Operator", description: "Provide continuous monitoring, updates, and support for reliable software.", image: Maintenance, bordercolor: "#3d1b9c", color: "#106617" },
    { id: 7, title: "Monitor", description: "Track performance and ensure the software stays secure and updated.", image: Maintenance, bordercolor: "#3d1b9c", color: "#106617" },
  ];

  const toggleSection = (id) => setActiveId(id);
  const activeItem = DevelopmentProcessData.find(item => item.id === activeId);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId(prev => (prev + 1 > DevelopmentProcessData.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative containerbg   w-full overflow-hidden lg:rounded-tl-[150px] rounded-tl-[50px]  ">
      <section className='pt-0 md:pt-[50px] z-[8888] max-w-[99rem] mx-auto mb-20  '>
        <div className="relative w-full">
          <div className="relative px-3 lg:px-0 py-10 w-full flex lg:w-[80%] xl:w-full flex-col items-stretch
           justify-center m-auto z-100">
            <div className="flex flex-col xl:flex-row w-full gap-10 3xl:gap-[100px]">
              
              <div className="w-full xl:flex-[40%] xl:order-1 ">
                <div className="pb-[50px] sm:pb-[80px]">
                  <h1 className='text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl font-bold text-white'>
                    Our Software Development Process:
                  </h1>
                  <p className='text-gray-400 mt-5 text-2xl font-medium'>
                    We follow a well-structured and defined process with the end goal of creating a product that meets your business objectives
                  </p>
                </div>

                <div className="w-[320px] h-fit sm:w-[600px] sm:h-fit md:w-full md:h-fit lg:w-full lg:h-fit relative pb-10 xl:pb-0">

                  {/* ==================img section======================== */}
                  <Image
                    className='infineUm-image-animation 3xl:mt-0 w-full object-cover 
                    opacity-[0.8] 3xl:w-[800px] h-fit'
                    src={infineImg.src}
                    alt="infine"
                    width={200}
                    height={200}
                    priority
                  />

                  {[ 
                    {id: 1, src: research, top:'3%', left:'14%', bg:'#00897D'},
                    {id: 2, src: design, top:'62%', right:'26%', bg:'#38A0E0'},
                    {id: 3, src: development, top:'28%', right:'0%', bg:'#36D4C3'},
                    {id: 4, src: testing, top:'0%', right:'22%', bg:'#102164'},
                    {id: 5, src: deployment, top:'28%', left:'0%', bg:'#2DA79C'},
                    {id: 6, src: Maintenance, top:'64%', left:'16%', bg:'#470A89'},
                    {id: 7, src: Maintenance, top:'36%', left:'44%', bg:'#470A89'},
                  ].map(icon => (
                    <Image
                      key={icon.id}
                      onClick={() => toggleSection(icon.id)}
                      className='animat-bg absolute w-[25px] h-[25px] sm:w-[50px] 
                      sm:h-[50px] object-cover rounded-full p-1 sm:p-3 shadow-lg
                      shadow-gray-500 cursor-pointer'
                      src={icon.src}
                      alt={`icon ${icon.id}`}
                      style={{
                        backgroundColor: activeId === icon.id ? bgColor : icon.bg,
                        top: icon.top,
                        left: icon.left,
                        right: icon.right
                      }}
                      width={50}
                      height={50}
                    />
                  ))}

                </div>
              </div>

              <div className="w-full xl:flex-[50%] xl:order-2 pt-[0px]">

                {/*================= card section================== */}
                <div className="xl:mt-[250px] flex justify-center px-4 lg:px-6 relative items-center">
                  <div className="relative w-[70%] max-w-[650px] flex justify-center cursor-pointer">

                    {[ { color: "#1d3645" }, { color: "#1d4445" }, { color: "#1d3645" } ].map((layer, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-3xl border border-teal-500 shadow-2xl shadow-black transition-transform duration-500"
                        style={{
                          backgroundColor: layer.color,
                          transform: `rotate(${(i + 1) * 2}deg) translate(${(i + 1) * 10}px, ${(i + 1) * 10}px)`,
                          zIndex: i,
                        }}
                      ></div>
                    ))}

                    {activeItem && (
                      <div className="relative w-full rounded-3xl containerbg border border-s-teal-500 px-8 py-10 shadow-2xl transition-all duration-500 hover:scale-[1.02] z-[5]">
                        <div className="flex items-center justify-center gap-4 mb-6">
                          <Image
                            src={activeItem.image}
                            alt={activeItem.title}
                            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                            width={48}
                            height={48}
                          />
                          <h1 className="text-4xl font-semibold text-teal-300 tracking-wide">
                            {activeItem.title}
                          </h1>
                        </div>
                        <p className="text-white text-center text-xl leading-relaxed">
                          {activeItem.description}
                        </p>
                        <div className="mt-8 flex justify-center">
                          <span className="block w-16 h-[3px] bg-teal-400 rounded-full"></span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* <StackedPower /> */}

    </div>
  );
};

export default DevelopmentProcess;
