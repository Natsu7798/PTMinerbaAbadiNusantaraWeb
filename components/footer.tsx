"use client"

import { Phone, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">PT MAN</h3>
                <p className="text-sm text-yellow-400">Minerba Abadi Nusantara</p>
              </div>
            </div>
            <div className="border-b border-yellow-400 w-16 mb-4"></div>
            <p className="text-gray-300 mb-4">
              Jl. Tulodong Atas No. 9C, RT.014/RW.05,
              <br />
              Senayan, Kby. Baru, Kota Jakarta Selatan,
              <br />
              Daerah Khusus Ibukota Jakarta 12110
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <div className="border-b border-yellow-400 w-12 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About PT MAN
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Our History
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="border-b border-yellow-400 w-12 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Mineral & Coal Trading
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Supply Chain Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Export Assistance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Copyright © 2024 PT Minerba Abadi Nusantara. All rights reserved</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                <span className="text-gray-900 text-xs font-bold">YT</span>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                <span className="text-gray-900 text-xs font-bold">in</span>
              </div>
            </div>
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center hover:bg-yellow-500 transition-colors"
            >
              <ArrowUp className="h-4 w-4 text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-50">
        <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors">
          <Phone className="h-6 w-6 text-gray-900" />
        </button>
        <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors">
          <Mail className="h-6 w-6 text-gray-900" />
        </button>
      </div>
    </footer>
  )
}
