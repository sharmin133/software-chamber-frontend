'use client'
import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo-new.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChooseusImg from "../assets/img/WhyChooseUsL1-01.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 p-5
        ${isScrolled ? "bg-[#1d3645]/30 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="relative">
        <div className="px-3 lg:px-12 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image 
                src={logo} 
                alt="company logo" 
                className="h-12 w-auto object-contain"  
                width={150}
                height={50} 
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:block z-20">
              <div className="ml-10 flex items-baseline space-x-12 text-gray-200">

                {/* SERVICES */}
                <div
                  className="relative group py-4 text-xl font-medium cursor-pointer"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex gap-2">
                      Services
                      <MdKeyboardArrowDown className="size-6 transition-transform group-hover:rotate-180" />
                    </span>
                  </div>

                  
                </div>

                {/* PRICING */}
                <div
                  className="relative group py-4 text-xl font-medium cursor-pointer"
                  onMouseEnter={() => setShowPricing(true)}
                  onMouseLeave={() => setShowPricing(false)}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex gap-2">
                      Pricing
                      <MdKeyboardArrowDown className="size-6 transition-transform group-hover:rotate-180" />
                    </span>
                  </div>

                </div>

                {/* Other Links */}
                {["Team","Careers","About","Contact","Blog","SEO"].map((name, idx) => (
                  <Link
                    key={idx}
                    href={`/${name.toLowerCase()}`}
                    className="relative group py-4 text-lg font-medium"
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-teal-400 group-hover:w-full transition-all"></span>
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="border border-teal-400 p-2 rounded-md text-teal-400 hover:text-white hover:bg-gray-800"
              >
                {!isOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="containerbg lg:hidden border-t-2 border-teal-400">
            <div className="px-3 py-3 space-y-2 text-gray-300">

              {/* Services */}
              <div>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="flex justify-between w-full px-3 py-2 rounded-md hover:bg-teal-800"
                >
                  <span>Services</span>
                  <MdKeyboardArrowDown className={`size-6 transition-transform ${showServices ? "rotate-180" : ""}`} />
                </button>

                {showServices && (
                  <div className="pl-5 space-y-1">
                    {[
                      "Custom Software Development",
                      "Strategic IT Consulting",
                      "Dedicated Teams & Talent",
                      "Digital Growth & Automation",
                      "Training & Upskilling",
                    ].map((service, i) => (
                      <Link
                        key={i}
                        href={`/services/${i + 1}`}
                        onClick={handleLinkClick}
                        className="block px-3 py-2 text-sm hover:bg-teal-700 rounded-md"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div>
                <button
                  onClick={() => setShowPricing(!showPricing)}
                  className="flex justify-between w-full px-3 py-2 rounded-md hover:bg-teal-800"
                >
                  <span>Pricing</span>
                  <MdKeyboardArrowDown className={`size-6 transition-transform ${showPricing ? "rotate-180" : ""}`} />
                </button>

                {showPricing && (
                  <div className="pl-5 space-y-1">
                    {[
                      "Product Development Cost",
                      "Team Extension Cost",
                      "MVP Development Cost",
                      "Odoo Implementation Cost",
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/pricing/${i + 1}`}
                        onClick={handleLinkClick}
                        className="block px-3 py-2 text-sm hover:bg-teal-700 rounded-md"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other links */}
              {["Team","Careers","About","Contact","Blog","SEO"].map((name) => (
                <Link
                  key={name}
                  onClick={handleLinkClick}
                  href={`/${name.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md hover:bg-teal-800"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
