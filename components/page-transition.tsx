"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Image from "next/image"

export default function PageTransition() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 500) // Délai pour s'assurer que la page est bien chargée
    }

    // Simuler un événement de navigation pour les tests
    const handleRouteChange = () => {
      handleStart()
      setTimeout(handleComplete, 1000) // Simuler un délai de chargement
    }

    // Surveiller les changements de route
    const url = pathname + searchParams.toString()
    handleRouteChange()

    return () => {
      // Nettoyage
    }
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 animate-bounce">
          <Image src="/images/tennis-ball.png" alt="Chargement" fill className="object-contain animate-spin" />
        </div>
        <p className="mt-4 text-green-600 font-semibold text-lg animate-pulse">Chargement en cours...</p>
      </div>
    </div>
  )
}
