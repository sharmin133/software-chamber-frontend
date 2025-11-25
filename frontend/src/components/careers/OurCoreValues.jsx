import React, { useEffect, useRef } from 'react';
import KnowledgeSharing from "../../assets/careers/coreValue/KnowledgeSharing.svg"
import Teamwork from "../../assets/careers/coreValue/Teamwork.svg"
import Achievement from "../../assets/careers/coreValue/Achievement.svg"
import Appreciation from "../../assets/careers/coreValue/Appreciation.svg"
import Respect from "../../assets/careers/coreValue/Respect.svg"
import Happiness from "../../assets/careers/coreValue/Happiness.svg"
import Ownership from "../../assets/careers/coreValue/Ownership.svg"
import Criticalthinking from "../../assets/careers/coreValue/Criticalthinking.svg"

const OurCoreValues = () => {

    const cardsRef = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // Stop observing the target
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      const currentCardsRef = cardsRef.current;

      currentCardsRef.forEach((card) => {
        if (card) observer.observe(card);
      });

      return () => {
        currentCardsRef.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      };
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-8 lg:gap-9">
            
            <div ref={(el) => cardsRef.current[1] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card1 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={KnowledgeSharing} alt="Knowledge Sharing" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Knowledge Sharing</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Fostering a culture of ongoing learning and information sharing is known as knowledge sharing.</p>
                    </div>
                </div>
            </div>
            <div ref={(el) => cardsRef.current[2] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card5 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={Teamwork} alt="Teamwork" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Teamwork</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Effectively working together to achieve common objectives and results.</p>
                    </div>
                </div>
            </div>
            <div  ref={(el) => cardsRef.current[3] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card2 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={Achievement} alt="Achievement" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Achievement</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Recognition and celebration of both individual and group achievements.</p>
                    </div>
                </div>
            </div>
            <div  ref={(el) => cardsRef.current[4] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card3 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={Appreciation} alt="Appreciation" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Appreciation</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Showing gratitude and recognizing other people's contributions.</p>
                    </div>
                </div>
            </div>
            <div  ref={(el) => cardsRef.current[5] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card6 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={Respect} alt="Respect" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Respect</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Treating all individuals with dignity, fairness, and courtesy.</p>
                    </div>
                </div>
            </div>
            <div  ref={(el) => cardsRef.current[6] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card4 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={Happiness} alt="Happiness" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Happiness</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">fostering a happy and fulfilling work environment for one's own wellbeing.</p>
                    </div>
                </div>
            </div>
            <div  ref={(el) => cardsRef.current[7] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card1 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={Ownership} alt="Ownership" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Ownership</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Taking responsibility and accountability for our actions and results.</p>
                    </div>
                </div>
            </div>
            <div  ref={(el) => cardsRef.current[8] = el} className=" cardNew flex justify-center items-center  relative careerSectionTwo card5 nowInViewPortTwo">
                <div className="containerbg border-[1px] border-teal-400 core-value w-full p-10 rounded-[30px]   cardNew flex justify-center items-center z-[1]">
                    <div className="flex flex-col">
                        <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={Criticalthinking} alt="Critical thinking" />
                        <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-[25px] pb-2 xl:pb-4">Critical thinking</p>
                        <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Encouraging thoughtful analysis and problem-solving.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCoreValues