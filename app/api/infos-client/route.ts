import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const headers = request.headers

  // Récupérer l'IP réelle (prise en charge des proxies Vercel / Cloudflare)
  const forwarded = headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0].trim() : headers.get("x-real-ip") || "IP non détectée"

  // Informatique système & localisation
  const userAgent = headers.get("user-agent") || "Inconnu"
  const acceptLanguage = headers.get("accept-language") || "Inconnu"
  
  // Géolocalisation automatique si hébergé sur Vercel
  const country = headers.get("x-vercel-ip-country") || ""
  const city = headers.get("x-vercel-ip-city") || ""
  const location = country ? (city ? `${city}, ${country}` : country) : "Non disponible"

  return NextResponse.json({
    ip,
    userAgent,
    acceptLanguage,
    location,
    timestamp: new Date().toISOString(),
  })
}