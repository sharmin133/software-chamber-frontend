import React from "react";

// Usage: import BankingHeader from "./BankingHeader" and place <BankingHeader /> in a Next.js page
// Make sure Tailwind CSS is configured in your project.

export default function HeroCardTest() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Top red header */}
      <div className="relative w-full max-w-2xl">
        {/* Decorative red header */}
        <div className="relative overflow-visible">
          <div
            className="h-56 sm:h-64 bg-gradient-to-br from-red-600 to-red-500 rounded-b-[80px] shadow-md"
            style={{
              // Slight perspective shape using transform
              transform: "skewY(-1deg)",
              WebkitTransform: "skewY(-1deg)",
            }}
          >
            {/* Top row icons */}
            <div className="px-5 pt-4 flex items-center justify-between">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7"
                  />
                </svg>
              </div>
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>

            {/* center area (placeholder for blurred personal info) */}
            <div className="px-6 pt-6">
              <div className="h-14 w-40 bg-red-400 rounded-lg opacity-90 mx-auto" />
            </div>

            {/* Tabs */}
            <div className="px-6 mt-6">
              <div className="flex items-center gap-6 justify-start">
                <button className="text-white font-medium relative pb-2">
                  Accounts
                  <span className="absolute left-0 right-0 -bottom-1 mx-auto w-10 h-1 rounded-full bg-white shadow-sm" />
                </button>
                <button className="text-red-200 font-medium">Cards</button>
              </div>
            </div>
          </div>

         
          <div className="absolute -bottom-12 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 390 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
              <path d="M0 0 H390 V40 C260 95 130 95 0 40 Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="w-full max-w-2xl px-6 -mt-6">
        <div className="bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.06)] p-6 mt-10" style={{ minHeight: 200 }}>
          {/* content blur/white placeholder to match the screenshot look */}
          <div className="h-40 bg-gradient-to-b from-white to-slate-50 rounded-md opacity-90" />
        </div>

        {/* faint shadow area below to mimic the soft gradient fade */}
        <div className="h-24" />
      </div>

      {/* Optional preview of the uploaded image (for reference) */}
      <div className="mt-4">
        <img
          src="/mnt/data/b71d2123-13b8-4b96-a3b6-ff53b6f71986.png"
          alt="reference"
          className="w-48 opacity-40"
        />
      </div>
    </div>
  );
}
