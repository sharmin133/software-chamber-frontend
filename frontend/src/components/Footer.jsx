'use client';

import React from "react";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import bgMap from "../assets/img/World Map3-01.png";

const Footer = () => {
  return (
    <footer className="containerbg">
      {/* Newsletter Section */}
      <div className="box relative">
        <div className="box-inner">
          <div className="w-[300px] sm:w-[350px] md:w-[600px] xl:w-[900px] pt-5 sm:pt-5 flex items-center justify-center m-auto">
            <form className="w-full">
              <h2 className="text-sm sm:text-lg pb-1 font-bold text-teal-400 capitalize">
                Sign up for our email newsletter to stay up-to-date
              </h2>
              <div className="w-full flex items-center justify-between rounded-xl bg-teal-800 border border-white py-1.5 pl-4 pr-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="text-sm w-full text-gray-300 bg-transparent border-none outline-none"
                />
                <button className="text-sm font-bold text-white rounded-xl bg-teal-600 py-2 px-4">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#1d3645] py-10 w-full h-full relative overflow-hidden">
        {/* Background Map */}
        <div className="absolute top-0 right-0 w-full h-full pt-5 z-0">
          <Image
            src={bgMap}
            alt="map"
            className="w-[640px] h-[1000px] sm:w-3xl md:w-[1224px] xl:w-full xl:h-fit opacity-[0.1] object-cover"
            priority
          />
        </div>

        {/* Footer Content */}
        <div className="px-5 md:px-0 xl:px-10 w-full z-10 relative">
          <div className="w-full py-8 flex m-auto justify-center items-center md:px-[50px]">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 w-full items-start">
              
              {/* Company Info */}
              <div data-aos="fade-right" data-aos-duration="4000">
                <Link href="/" className="cursor-pointer">
                  <p className="text-[15px] md:text-[20px] xl:text-[25px] flex items-center gap-3 font-bold text-gray-300">
                    Software Chamber
                  </p>
                </Link>
                <p className="text-gray-50 text-sm mt-5 opacity-80">
                  A team of enthusiastic specialists run the full-service software development company Software Chamber, developing specialized software to address complex problems.
                </p>
              </div>

              {/* Our Services */}
              <div data-aos="fade-up" data-aos-duration="4000">
                <h2 className="mb-5 text-[16px] 3xl:text-2xl font-bold text-white">Our Services</h2>
                <ul className="text-gray-50 font-[400] text-[13px] md:text-[14px] opacity-80">
                  {[
                    "Web Development",
                    "Mobile App Development",
                    "Enterprise Application Development",
                    "Digital Marketing",
                    "Software Testing & Quality Assurance",
                    "IT Consulting",
                    "Setup Own Hosting",
                  ].map((service, i) => (
                    <li key={i} className="mb-2.5">
                      <Link href="#" className="cursor-pointer">{service}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Web Services */}
              <div data-aos="fade-down" data-aos-duration="4000">
                <h2 className="mb-5 text-[16px] 3xl:text-2xl font-bold text-white">Web Services</h2>
                <ul className="text-gray-50 font-[400] text-[13px] md:text-[14px] opacity-80">
                  {[
                    "UI/UX Design",
                    "E-commerce",
                    "ERP Solutions",
                    "Web Hosting",
                    "SEO & Internet Marketing",
                    "Visa Processing Software",
                    "Doctors Prescription",
                    "Other Applications",
                  ].map((service, i) => (
                    <li key={i} className="mb-2.5">
                      <Link href="#" className="cursor-pointer">{service}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div data-aos="fade-left" data-aos-duration="4000">
                <h2 className="mb-5 text-[16px] 3xl:text-2xl font-bold text-white">Get In Touch</h2>
                <ul className="text-gray-50 font-normal text-[13px] md:text-[14px] opacity-80 space-y-3">
                  <li className="flex items-center gap-2.5"><FaPhoneVolume /> +88 01830208833</li>
                  <li className="flex items-center gap-2.5"><MdEmail /> softwarechamber@gmail.com</li>
                  <li className="flex items-center gap-2.5"><FaLocationDot /> 5/A Hoqshaheb Gare, Shyamoli, Dhaka, Bangladesh</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#13222c]">
        <div className="px-5 md:px-[50px] py-3 text-[12px] font-normal text-white flex justify-center">
          <span className="opacity-75">© Software Chamber. 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
