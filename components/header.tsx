"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for fixed header

      // Only set as scrolled when significantly scrolled down from the very top
      setIsScrolled(window.scrollY > 100)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Don't call handleScroll initially to ensure we start transparent
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  const isActive = (section: string) => activeSection === section

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-transparent backdrop-blur-md shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div>
                <h1 className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
                  PT MAN
                </h1>
                <p className="text-xs text-yellow-400">Minerba Abadi Nusantara</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium pb-1 transition-colors ${
                isActive("home")
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : `${isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"}`
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium pb-1 transition-colors ${
                isActive("about")
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : `${isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"}`
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium pb-1 transition-colors ${
                isActive("services")
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : `${isScrolled ? "text-gray-700 hover:text-red-600" : "text-white hover:text-yellow-400"}`
              }`}
            >
              Products and Services
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t ${
                isScrolled ? "bg-white border-gray-200" : "bg-black/80 backdrop-blur-sm border-white/20"
              }`}
            >
              <button
                onClick={() => scrollToSection("home")}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("home")
                    ? "text-yellow-400"
                    : `${isScrolled ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" : "text-white hover:text-yellow-400 hover:bg-white/10"}`
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("about")
                    ? "text-yellow-400"
                    : `${isScrolled ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" : "text-white hover:text-yellow-400 hover:bg-white/10"}`
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                  isActive("services")
                    ? "text-yellow-400"
                    : `${isScrolled ? "text-gray-700 hover:text-red-600 hover:bg-gray-50" : "text-white hover:text-yellow-400 hover:bg-white/10"}`
                }`}
              >
                Products and Services
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
