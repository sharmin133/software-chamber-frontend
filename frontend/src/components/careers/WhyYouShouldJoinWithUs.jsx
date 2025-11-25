import React, { useEffect, useRef } from 'react';

import JobSecurity from "../../assets/careers/JobSecurity.svg";
import onTimeSalary from "../../assets/careers/onTimeSalary.png";
import BettheWorld from "../../assets/careers/BettheWorld.svg";
import OpenCommunication from "../../assets/careers/OpenCommunication.svg";
import LearningOpportunity from "../../assets/careers/LearningOpportunity.svg";
import UpgradetheLevel from "../../assets/careers/UpgradetheLevel.svg";
import WeFamily from "../../assets/careers/WeFamily.svg";

const WhyYouShouldJoinWithUs = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:gap-8 lg:gap-9 pb-[150px]">
      <div ref={(el) => cardsRef.current[0] = el} className="flex justify-center items-center relative careerSection card1 cardNew">
        <div className="containerbg border-[1px] border-teal-400 join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] flex justify-center items-center z-[1]">
          <div className="flex flex-col">
            <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={JobSecurity} alt="Job Security" />
            <p className="text-left text-teal-400 font-bold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4">Job Security</p>
            <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Our company ensures job security, growth, and a healthy work environment for employees.</p>
          </div>
        </div>
      </div>
      <div ref={(el) => cardsRef.current[1] = el} className="flex justify-center items-center relative careerSection card5 cardNew">
        <div className="containerbg border-[1px] border-teal-400 join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] flex justify-center items-center z-[1]">
          <div className="flex flex-col">
            <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={onTimeSalary} alt="On Time Salary" />
            <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4">On Time Salary</p>
            <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Our commitment to timely payments, ensuring financial stability and peace of mind for our team.</p>
          </div>
        </div>
      </div>
      <div ref={(el) => cardsRef.current[2] = el} className="flex justify-center items-center relative careerSection card2 cardNew">
        <div className="containerbg border-[1px] border-teal-400 join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] flex justify-center items-center z-[1]">
          <div className="flex flex-col">
            <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={BettheWorld} alt="Bet the World" />
            <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4">Bet the World</p>
            <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Join Bet the World to make a global impact through ambitious projects and creative thinking.</p>
          </div>
        </div>
      </div>
      <div ref={(el) => cardsRef.current[3] = el} className="flex justify-center items-center relative careerSection card3 cardNew">
        <div className="containerbg border-[1px] border-teal-400 join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] flex justify-center items-center z-[1]">
          <div className="flex flex-col">
            <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={OpenCommunication} alt="Open Communication" />
            <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4">Open Communication</p>
            <p className="text-left text-gray-300 font-normal text-base lg:text-lg">We value open communication, respect diverse viewpoints, and encourage active engagement for your thoughts to be heard and valued.</p>
          </div>
        </div>
      </div>
      <div ref={(el) => cardsRef.current[4] = el} className="flex justify-center items-center relative careerSection card6 cardNew">
        <div className="containerbg border-[1px] border-teal-400 join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] flex justify-center items-center z-[1]">
          <div className="flex flex-col">
            <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={LearningOpportunity} alt="Learning Opportunity" />
            <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4">Learning Opportunity</p>
            <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Join our team for growth, development, and leadership opportunities through cutting-edge technologies, training, and mentorship.</p>
          </div>
        </div>
      </div>
      <div ref={(el) => cardsRef.current[5] = el} className="flex justify-center items-center relative careerSection card4 cardNew">
        <div className="containerbg border-[1px] border-teal-400 join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] flex justify-center items-center z-[1]">
          <div className="flex flex-col">
            <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={UpgradetheLevel} alt="Upgrade the Level" />
            <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4">Upgrade the Level</p>
            <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Join us for a culture of excellence, surrounded by brilliant and driven individuals who inspire continuous development and career advancement.</p>
          </div>
        </div>
      </div>
      <div ref={(el) => cardsRef.current[6] = el} className="flex justify-center items-center relative careerSection card1 cardNew">
        <div className="containerbg border-[1px] border-teal-400 join-us w-full 2xl:p-10 xl:p-7 p-6 rounded-[30px] flex justify-center items-center z-[1]">
          <div className="flex flex-col">
            <img className="aspect-square h-10 w-10 mb-4 md:mb-6" src={WeFamily} alt="We’re Family" />
            <p className="text-left text-teal-400 font-semibold text-xl lg:text-2xl xl:text-3xl pb-2 xl:pb-4">We’re Family</p>
            <p className="text-left text-gray-300 font-normal text-base lg:text-lg">Join our close-knit team for a supportive work environment where we treat each other like family.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyYouShouldJoinWithUs;
