'use client'

import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import {
  FaUserShield, FaCode, FaShareAlt, FaLock, FaBullseye,
  FaUserFriends, FaBuilding, FaBalanceScale, FaChartBar
} from "react-icons/fa";


import handle from '../../assets/img/top-handle.png'
import DevelopmentProcess from './DevelopmentProcess';

const WhyChoose = () => {

  const card1 = [
    { id: 1, title: "Software Chamber vs. Hiring Freelancers", icon:
      <FaUserFriends className="text-2xl text-teal-600" /> },
    { id: 2, title: "Software Chamber vs. Building an In-House Team", 
     icon: <FaBuilding className="text-2xl text-teal-600" /> },
    { id: 3, title: "Software Chamber vs. Other Software Companies", 
     icon: <FaBalanceScale className="text-2xl text-teal-600" /> },
    { id: 4, title: "How We Compare", icon: <FaChartBar className="text-2xl text-teal-600" /> }
  ];

  const card2 = [
    {
      id: 11,
      icon: <FaUserShield className="text-3xl text-teal-600" />,
      title: "Personal Technology Management",
      points: [
        "Manage & secure your devices, data, and accounts.",
        "Setup smart cloud systems, backups & privacy controls.",
        "24/7 IT support and troubleshooting."
      ]
    },
    {
      id: 12,
      icon: <FaCode className="text-3xl text-teal-600" />,
      title: "Software & Product Development",
      points: [
        "Build custom apps, websites & business tools.",
        "Research & develop new digital ideas.",
        "Automate workflows and data processes."
      ]
    },
    {
      id: 13,
      icon: <FaShareAlt className="text-3xl text-teal-600" />,
      title: "Digital Identity & Social Media",
      points: [
        "Manage your online presence.",
        "Design & maintain your personal website.",
        "Develop branding & communication strategy."
      ]
    },
    {
      id: 14,
      icon: <FaLock className="text-3xl text-teal-600" />,
      title: "Cybersecurity & Data Protection",
      points: [
        "Full-time monitoring of digital assets.",
        "Secure communication & encrypted systems.",
        "Risk detection & recovery planning."
      ]
    },
    {
      id: 15,
      icon: <FaBullseye className="text-3xl text-teal-600" />,
      title: "Goal-Based Tech Partnership",
      points: [
        "Grow your business or launch new projects.",
        "We work beside you as your tech partner.",
        "Achieve targets with the right technology."
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (id) => setOpenIndex(openIndex === id ? null : id);

  return (
    <div className="w-full  bg-white lg:rounded-br-[150px] rounded-br-[50px]   ">


      <div className="w-full  px-6 md:px-10   py-14">
        <div className="px-6 lg:px-[300px]  mx-auto items-center justify-center">

          <div className="text-center mt-20 ">
            <h1 className="text-4xl text-teal-900 md:text-5xl font-bold">
              Why Choose Us?
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Experience the Difference — Your Perfect Technology Partner
            </p>
          </div>
          {/* handle section  */}
          <div className='hidden  w-full md:flex justify-center '>
            <img src={handle.src} alt="top-handle" className='mx-auto' />
          </div>


          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* CARD 1 */}
            <div className="containerbg p-7 rounded-2xl shadow-lg shadow-white ">
              <h2 className="text-3xl text-yellow-50 font-semibold mb-5">🔹 Why Software Chamber is Best?</h2>

              <div className="space-y-4">
                {card1.map(({ id, title, icon }) => (
                  <div key={id} className="border-b border-teal-900 pb-4">

                    <div className="flex justify-between items-center">
                      <h3 className="flex items-center gap-3 text-xl font-medium">
                        {icon}
                        <span className='text-yellow-50'> {title}</span>
                      </h3>

                      <button onClick={() => toggleFaq(id)}>
                        <IoChevronDown
                          size={26}
                          className={`transition-transform ${openIndex === id ? "rotate-180 text-teal-600" : "text-gray-500"}`}
                        />
                      </button>
                    </div>

                    {/* EXPANDED CONTENT */}
                    {openIndex === id && (
                      <p className="mt-3 text-teal-700 text-lg leading-relaxed">
                        Detailed comparison coming soon...
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 2 */}
            <div className="containerbg p-7 rounded-2xl  shadow-lg shadow-white">
              <h2 className="text-3xl font-semibold text-yellow-50 mb-5">🔹 What We Offer</h2>

              <div className="space-y-4">
                {card2.map(({ id, icon, title, points }) => (
                  <div key={id} className="border-b border-teal-900 pb-4">

                    <div className="flex justify-between items-center">
                      <h3 className="flex items-center gap-3 text-xl font-medium text-yellow-50">
                        {icon}
                        {title}
                      </h3>

                      <button onClick={() => toggleFaq(id)}>
                        <IoChevronDown
                          size={26}
                          className={`transition-transform ${openIndex === id ? "rotate-180 text-teal-600" : "text-gray-500"}`}
                        />
                      </button>
                    </div>

                    {openIndex === id && (
                      <ul className="mt-4 space-y-2 text-teal-700 text-lg">
                        {points.map((p, index) => (
                          <li key={index} className="pl-2">• {p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FULL WIDTH CARD */}
            <div className="containerbg p-7 h-[300px] rounded-2xl text-yellow-50 shadow-lg shadow-white md:col-span-2">
              <h2 className="text-2xl  font-semibold">Need a Dedicated Tech Partner?</h2>
              <p className="text-yellow-50 mt-3 text-lg">
                We provide long-term technology partnership for individuals, startups, and businesses.
              </p>
            </div>

          </div>

        </div>
      </div>

     
 
      
      

    </div>
  );
};

export default WhyChoose;
