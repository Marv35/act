"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { emoji: "🏠", text: "Accueil", href: "/" },
    { emoji: "🎾", text: "Le club", href: "/club" },
    { emoji: "📄", text: "Inscriptions et Tarifs", href: "/inscriptions" },
    { emoji: "🤝", text: "Partenaires et Sponsors", href: "/partenaires" },
    { emoji: "🏆", text: "Compétitions", href: "/competitions" },
    { emoji: "✉️", text: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20ACT%20Couleur%20petit%20%281%29.jpg-ajgbR3Egn4mfWrnKNXhqj13noiwzLl.jpeg"
              alt="Logo ACT"
              width={70}
              height={70}
              className="mr-3 transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-xl font-bold text-green-600 hidden sm:block">
              <span className="block text-sm text-green-500">Association</span>
              <span className="block">Cloysienne de Tennis</span>
            </h1>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link px-3 py-2 rounded-md flex items-center transition-all ${
                      pathname === link.href ? "active" : "hover:text-green-600"
                    }`}
                  >
                    <span className="mr-1">{link.emoji}</span> {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-green-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 rounded-md ${
                    pathname === link.href
                      ? "bg-green-50 text-green-600 font-medium"
                      : "hover:bg-green-50 hover:text-green-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-2">{link.emoji}</span> {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
