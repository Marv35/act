"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// Carrousel d'images simple : une image visible à la fois, défilement automatique toutes les 6 secondes
const images = [
  { src: "/images/Terrains/Courts_1_2.jpg", alt: "Terrains de tennis" },
  { src: "/images/Terrains/Terrain_coucher_soleil.jpg", alt: "Terrain au coucher du soleil" },
  { src: "/images/Terrains/Journee_du_tennis.jpg", alt: "Journée du tennis" },
  { src: "/images/Terrains/Court_4.jpg", alt: "Court collectif" },
  { src: "/images/Terrains/Court_3-4_travaux_de_nuit.jpg", alt: "Court 3-4 travaux de nuit" },
  { src: "/images/Terrains/Court_2.jpg", alt: "Court 2" },
  { src: "/images/Terrains/Terrain_salle_construction.jpg", alt: "Terrain salle de construction" },
  { src: "/images/Terrains/court_arc_en_ciel.jpg", alt: "Court arc-en-ciel" },
]

export default function ImagesCarousel() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    // Conteneur principal du carrousel
    <div className="relative w-[950px] h-[300px] flex items-center justify-center mx-auto">
      {/* Halo d'arrière-plan */}
      <div className="absolute -inset-4 bg-gray-180 rounded-full opacity-20 blur-xl animate-pulse"></div>
      {/* Carrousel : une seule image visible à la fois, défilement automatique */}
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={600}
          height={700}
          className={`absolute rounded-lg shadow-xl transform transition-all duration-700 ease-in-out hover:scale-105 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ transitionProperty: 'opacity, transform' }}
        />
      ))}
      {/* Pagination points (puces) sous l'image */}
      <div className="absolute left-1/2 top-full mt-20 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-green-600' : 'bg-gray-300'} transition-colors`}
            aria-label={`Aller à l'image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}