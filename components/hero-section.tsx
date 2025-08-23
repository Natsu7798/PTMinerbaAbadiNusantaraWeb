"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-screen">
      <div className="w-full h-full relative">
        {/* Background video */}
        <div
          className="absolute -top-16 left-0 w-full bg-opacity-40"
          style={{ height: "calc(100vh + 64px)" }}
        >
          <video
            src="/sample_miningvideos.mp4"
            className="absolute -top-16 left-0 w-full object-cover"
            style={{ height: "calc(100vh + 8rem)" }}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="text-white block">TRANSFORM</span>
                <span className="text-yellow-400 block">
                  YOUR MINERAL BUSINESS
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                A mineral trading system powered by smart technology to enhance
                your business efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 rounded-full p-3 sm:p-4 transition-all animate-bounce"
      >
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
      </button>
    </section>
  )
}
