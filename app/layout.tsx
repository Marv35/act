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
    "tennis, cloyes tennis, tennis cloyes, act, Tennis Cloyes, act cloyes tennis, act tennis cloyes, cloyes tennis act, TENNIS CLOYES, CLOYES TENNIS, tenniscloyes, Tenniscloyes, Cloyestennis, Tennis Cloyes, Cloyes Tennis, Tennis 28, tennis28, Cloyes-les-Trois-Rivières, ACT, club de tennis, cours de tennis, stages tennis, compétition tennis, Eure-et-Loir, 28220, tennis cloyes, tennis cloyes sur le loir, tennis eure et loir, act cloyes, act 28, association cloysienne de tennis, location court tennis, terrains tennis, tennis extérieur, tennis couvert, tennis pour tous les niveaux, école de tennis, entraînement tennis, act28, tennis-cloyes, tennis-cloyes-les-trois-rivières, tennis-cloyes-les-trois-rivières-28, jouer au tennis a cloyes, ou jouer au tennis a cloyes, jouer au tennis a cloyes les trois rivières, jouer au tennis a cloyes les trois rivières 28, association cloisonne de tennis, association cloisonne de tennis 28, association cloisonne de tennis cloyes, association cloisonne de tennis cloyes les trois rivières, association cloisonne de tennis cloyes les trois rivières  28, comment jouer au tennisa cloyes, comment jouer au tennis a cloyes les trois rivières, comment jouer au tennis a cloyes les trois rivières 28, tennis pour tous les niveaux, école de tennis cloyes, entraînement tennis cloyes, ou jouer au tennis a cloyes les trois rivières, ou jouer au tennis a cloyes les trois rivières 28, association cloyesienne de tennis cloyes les trois rivières, association cloyesienne de tennis cloyes les trois rivières 28, club de tennis 28",
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
        url: "/images/favicon-32x32.png", // <-- Cette image sera utilisée pour l'aperçu Open Graph (Facebook, LinkedIn, etc.)
        width: 800,
        height: 600,
        alt: "Logo Association Cloysienne de Tennis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Association Cloysienne de Tennis (ACT)",
    description:
      "ASSOCIATION CLOYSIENNE DE TENNIS à Cloyes-les-Trois-Rivières (ACT 28). Cours, stages, compétitions pour tous les niveaux.",
    images: [
      "/images/favicon-32x32.png", // <-- Cette image sera utilisée pour l'aperçu Twitter Card
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
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" /> {/* <-- Chemin absolu recommandé */}
        {/* Favicon PNG (optionnel) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" /> {/* <-- Chemin absolu recommandé */}
        {/* Apple Touch Icon (optionnel) */}
        <link rel="apple-touch-icon" href="/images/favicon-32x32.png" /> {/* <-- Chemin absolu recommandé */}
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