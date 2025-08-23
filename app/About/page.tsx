import React from "react"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-red-600 to-red-700">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white hover:text-yellow-400 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              About <span className="text-yellow-400">PT MAN</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-2">
              Leading Indonesia's mineral trading industry with innovation and excellence since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-700 text-justify leading-relaxed mb-6">
                PT Minerba Abadi Nusantara is a company engaged in the trade of
                mining and mineral products such as coal, nickel, and gold. With
                the support of an extensive network and trusted partners, we are
                committed to providing professional, transparent, and highly
                competitive trading services.
              </p>
              <div className="flex items-center text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-yellow-500" />
                <span>Established in 2024</span>
              </div>
              <div className="flex items-start text-gray-600 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-red-600 mt-0.5 sm:mt-1" />
                <span>
                  Jl. Tulodong Atas No. 9C, RT.014/RW.05, Senayan, Kby. Baru,
                  Kota Jakarta Selatan, DKI Jakarta 12110
                </span>
              </div>
            </div>

            {/* Image Collage */}
            <div className="relative h-72 sm:h-96 w-full">
              {/* Background image - largest */}
              <div className="absolute top-0 right-0 w-40 sm:w-72 h-28 sm:h-48 rounded-lg overflow-hidden shadow-lg transform rotate-3">
                <img
                  src="/coal-mining-operation.png"
                  alt="Coal mining operations"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle image - medium */}
              <div className="absolute top-12 sm:top-16 left-4 sm:left-8 w-36 sm:w-64 h-24 sm:h-40 rounded-lg overflow-hidden shadow-xl transform -rotate-2 z-10">
                <img
                  src="/nickel-ore-processing.png"
                  alt="Nickel ore processing facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front image - smallest */}
              <div className="absolute bottom-2 sm:bottom-4 right-6 sm:right-12 w-32 sm:w-56 h-20 sm:h-36 rounded-lg overflow-hidden shadow-2xl transform rotate-1 z-20">
                <img
                  src="/gold-mineral-extraction.png"
                  alt="Gold extraction process"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 sm:top-8 left-0 w-2 sm:w-4 h-2 sm:h-4 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute bottom-4 sm:bottom-8 left-2 sm:left-4 w-2 sm:w-3 h-2 sm:h-3 bg-red-600 rounded-full opacity-60"></div>
              <div className="absolute top-20 sm:top-32 right-2 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
            Join us in transforming Indonesia's mineral trading landscape with
            professional, transparent, and competitive services.
          </p>
          <a
            href="https://wa.me/6281286185200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg">
              Contact Us Today
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
