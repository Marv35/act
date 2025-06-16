"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// Carrousel d'images simple : une image visible à la fois, défilement automatique toutes les 6 secondes
const images = [
  { src: "/images/Terrains/Courts_1_2.jpg", alt: "Terrains de tennis" },
  { src: "/images/Terrains/Terrain_coucher_soleil.jpg", alt: "Terrain au coucher du soleil" },
  { src: "/images/Terrains/Journee_du_tennis.jpg", alt: "Journée du tennis" },
  { src: "/images/Terrains/Court_4.jpg", alt: "Court collectif" },
    { src: "/images/Terrains/Jeter_de_balles.jpg", alt: "Jeter des balles dans membres du club" },
  { src: "/images/Terrains/Court_3-4_travaux_de_nuit.jpg", alt: "Court 3-4 travaux de nuit" },
  { src: "/images/Terrains/Court_2.jpg", alt: "Court 2" },
  { src: "/images/Terrains/Terrain_salle_construction.jpg", alt: "Terrain salle de construction" },
  { src: "/images/Terrains/court_arc_en_ciel.jpg", alt: "Court arc-en-ciel" },

  { src: "/images/Terrains/Court_n1_jeux.jpg", alt: "Court 1 jeux collectif" },
  { src: "/images/Terrains/Photo_groupe.jpg", alt: "Photo de groupe" },
  { src: "/images/Terrains/Vue_tous_les_courts.jpg", alt: "Vue de l'ensemble des courts nouvelles scructures terrains 3 et 4" },
]

export default function ImagesCarousel() {
  const [index, setIndex] = useState(0)
  const [imgError, setImgError] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Affichage d'un message si erreur de chargement d'image
  if (imgError) {
    return (
      <div className="w-[95vw] h-[60vw] max-w-[450px] max-h-[300px] sm:w-[900px] sm:h-[600px] sm:max-w-[0px] sm:max-h-[600px] flex items-center justify-center mx-auto bg-white rounded-2xl shadow-xl border-2 border-white my-2">
        <span className="text-center text-red-600">Aucune image à afficher. Vérifiez le dossier <code>/public/images/Terrains/</code> et les chemins.</span>
      </div>
    )
  }

  return (
    // Conteneur principal du carrousel, responsive mobile/PC
    <div
      // Pour diminuer la taille de l'image sur grand écran, réduisez md:w-[55vw] à md:w-[45vw] ou md:w-[40vw]
      className="relative w-full md:w-[45vw] max-w-[1200px] aspect-[3/2] flex flex-col items-center justify-center mx-auto bg-white overflow-hidden rounded-2xl shadow-xl border-2 border-white my-2"
      style={{ minHeight: 200 }}
    >
      {/* Halo d'arrière-plan */}
      <div className="absolute inset-0 bg-green-100 rounded-2xl opacity-20 blur-xl animate-pulse pointer-events-none z-0"></div>
      {/* Carrousel : une seule image visible à la fois, défilement automatique */}
      <div className="relative w-full h-full flex-1 flex items-center justify-center">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            // Pour ajuster la taille de l'image chargée, modifiez la valeur de sizes ci-dessous
            sizes="(max-width: 800px) 90vw, 45vw"
            className={`object-cover rounded-2xl transition-all duration-700 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'} hover:scale-110 transition-transform duration-500`}
            style={{ transitionProperty: 'opacity, transform' }}
            priority={i === index}
            onError={() => setImgError(true)}
            unoptimized
          />
        ))}
      </div>
      {/* Pagination points (puces) sous l'image */}
      <div className="relative mt-4 flex gap-2 z-20">
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