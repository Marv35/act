import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import JsonLd from "./jsonld"

const inter = Inter({ subsets: ["latin"], display: "swap" })

// Définition des métadonnées globales du site (SEO, réseaux sociaux, favicon, etc.)
export const metadata: Metadata = {
  // Domaine de base utilisé pour générer les URLs absolues (Open Graph, canonical, etc.)
  metadataBase: new URL("https://tenniscloyes.fr"),
  // Titre principal du site (affiché dans l'onglet et dans Google)
  title: "Club de Tennis de Cloyes | Association Cloysienne de Tennis (ACT)",
  // Description pour les moteurs de recherche
  description:
    "Club de Tennis à Cloyes-les-Trois-Rivières : entraînements, tournois, location de courts, école de tennis et passion du sport. Rejoignez l'ACT !",
  // Mots-clés pour le SEO
  keywords:
      "tennis cloyes, cloyes tennis, Cloyes tennis, CLOYES TENNIS, club de tennis Cloyes, ACT tennis, association cloysienne de tennis, tenniscloyes.fr, Cloyes-les-Trois-Rivières, tennis 28, club de tennis 28, Eure-et-Loir, cours de tennis, stages de tennis, compétitions, location de courts, terrains de tennis, école de tennis, entraînements, tennis pour tous, jouer au tennis à Cloyes, comment jouer au tennis à Cloyes, association tennis Cloyes 28220, ou jouer au tennis à Cloyes, Club de sport Cloyes, Sport Cloyes",
  authors: [{ name: "Association Cloysienne de Tennis" }],
  creator: "Association Cloysienne de Tennis",
  publisher: "Association Cloysienne de Tennis",
  // URL canonique pour le SEO
  alternates: {
    canonical: "https://tenniscloyes.fr",
  },
  // Directives pour les robots des moteurs de recherche
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Métadonnées Open Graph (partage réseaux sociaux)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tenniscloyes.fr",
    title: "Association Cloysienne de Tennis (ACT)",
    description:
      "ASSOCIATION CLOYSIENNE DE TENNIS à Cloyes-les-Trois-Rivières (ACT 28). Cours, stages, compétitions pour tous les niveaux.",
    siteName: "Association Cloysienne de Tennis",
    images: [
      {
        url: "/apple-icon.png", // Image carrée recommandée pour Open Graph (Facebook, LinkedIn, etc.)
        width: 180,
        height: 180,
        alt: "Logo Association Cloysienne de Tennis",
      },
      {
        url: "/icon1.png", // Variante PNG 32x32
        width: 32,
        height: 32,
        alt: "Logo Association Cloysienne de Tennis",
      },
      {
        url: "/web-app-manifest-512x512.png", // Variante grande pour PWA/social
        width: 512,
        height: 512,
        alt: "Logo Association Cloysienne de Tennis",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Association Cloysienne de Tennis (ACT)",
    description:
      "ASSOCIATION CLOYSIENNE DE TENNIS à Cloyes-les-Trois-Rivières (ACT 28). Cours, stages, compétitions pour tous les niveaux.",
    images: [
      "/apple-icon.png", // Image carrée recommandée pour Twitter Card
      "/web-app-manifest-512x512.png"
    ],
  },
  // Vérification Google Search Console
  verification: {
    google: "google-site-verification", // À remplacer par votre code de vérification Google
  },
}

// Layout principal du site (structure HTML commune à toutes les pages)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Script JSON-LD pour le SEO enrichi */}
        <JsonLd />
        {/* Balise de vérification Google Search Console */}
        <meta name="google-site-verification" content="em4dxdz8ImdC7L-xnYceq832_XJfF6hkp7GgeByDTBw" />
        {/* Favicon classique */}
        <link rel="icon" href="/favicon.ico" />
        {/* SVG icon (optionnel, moderne) */}
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        {/* PNG icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon1.png" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        {/* Manifestes PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        {/* Couleur de thème pour mobile */}
        <meta name="theme-color" content="#16a34a" />
        {/* URL canonique */}
        <link rel="canonical" href="https://tenniscloyes.fr" />
        {/* Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* En-tête du site */}
          <Header />
          {/* Contenu principal */}
          <main className="flex-grow">{children}</main>
          {/* Pied de page */}
          <Footer />
          {/* Bouton retour en haut */}
          <BackToTop />
        </div>
      </body>
    </html>
  )
}