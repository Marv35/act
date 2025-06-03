"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Définition des partenaires avec leurs logos et liens
const partners = [
  {
    name: "Carrefour Express",
    logo: "/images/Partenaires/Carrefour_Express_vert.jpg",
    link: "#",
  },
  {
    name: "Guy Hoquet",
    logo: "/images/Partenaires/Guy_hoquet.jpg",
    link: "#",
  },
  {
    name: "Crédit Agricole Val de France",
    logo: "/images/Partenaires/Credit_Agricole.png",
    link: "#",
  },
  {
    name: "Sporteam",
    logo: "/images/Partenaires/Sporteam.jpg",
    link: "#",
  },
  {
    name: "BV elec",
    logo: "/images/Partenaires/Bvelec.jpg",
    link: "#",
  },

  {
    name: "Garage Peugeot Cassonnet",
    logo: "/images/Partenaires/Ad_peugeot_cassonnet.png",
    link: "#",
  },
  {
    name: "M.T.S",
    logo: "/images/Partenaires/Mts_pecnard.png",
    link: "#",
  },
  {
    name: "Auto Récuperer Lascaux",
    logo: "/images/Partenaires/Auto_recuper_lascaux.jpg",
    link: "#",
  },
]

export default function PartnersCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef(0)

  // Nombre de partenaires visibles selon la taille d'écran
  const [visibleCount, setVisibleCount] = useState(4)

  // Mettre à jour le nombre d'éléments visibles en fonction de la taille d'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 768) {
        setVisibleCount(2)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3)
      } else {
        setVisibleCount(4)
      }
    }

    handleResize() // Initialiser
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Gérer l'autoplay
  useEffect(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current)
      autoplayTimerRef.current = null
    }

    if (autoplay && !isHovered) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % Math.ceil(partners.length / visibleCount))
      }, 3000)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
        autoplayTimerRef.current = null
      }
    }
  }, [autoplay, isHovered, visibleCount])

  // Fonctions de navigation
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(partners.length / visibleCount))
  }

  const goToPrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + Math.ceil(partners.length / visibleCount)) % Math.ceil(partners.length / visibleCount),
    )
  }

  // Gestion des événements tactiles
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 50) {
      // Swipe gauche
      goToNext()
    } else if (diff < -50) {
      // Swipe droite
      goToPrev()
    }
  }

  // Calculer les partenaires visibles
  const visiblePartners = () => {
    const startIndex = activeIndex * visibleCount
    return partners.slice(startIndex, startIndex + visibleCount)
  }

  // Calculer le nombre total de slides
  const totalSlides = Math.ceil(partners.length / visibleCount)

  return (
    <div className="partners-carousel-container py-8 px-4 bg-gradient-to-r from-green-50 via-white to-yellow-50 rounded-2xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">Nos Partenaires</h2>
        <p className="text-gray-600">Ils nous font confiance et nous soutiennent</p>
      </div>

      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contrôles de navigation */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 -ml-2 md:-ml-5"
          aria-label="Précédent"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white w-8 h-8 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 -mr-2 md:-mr-5"
          aria-label="Suivant"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
        </button>

        {/* Carousel */}
        <div ref={carouselRef} className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-2 md:px-4"
              >
                {partners.slice(slideIndex * visibleCount, (slideIndex + 1) * visibleCount).map((partner, index) => (
                  <div key={`${slideIndex}-${index}`} className="partner-card group">
                    <Link
                      href={partner.link}
                      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform h-full border border-gray-100 p-4"
                    >
                      <div className="relative flex flex-col items-center h-full">
                        <div className="relative h-24 w-full mb-3 flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={`Logo ${partner.name}`}
                            width={120}
                            height={80}
                            className="object-contain max-h-full transition-all duration-500 group-hover:scale-110"
                            style={{ maxHeight: "100px" }}
                          />
                        </div>
                        <h3 className="text-center text-sm font-medium text-gray-700 mt-auto group-hover:text-green-600 transition-colors duration-300">
                          {partner.name}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-green-600 w-6 md:w-8" : "bg-gray-300 hover:bg-green-300"
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lien vers la page des partenaires */}
      <div className="text-center mt-6">
        <Link
          href="/partenaires"
          className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors hover:underline"
        >
          Voir tous nos partenaires
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
