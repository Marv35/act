import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import JsonLd from "./jsonld"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://tennis-cloyes.vercel.app"),
  title: "Association Cloysienne de Tennis (ACT) | Club de Tennis à Cloyes-les-Trois-Rivières",
  description:
    "Club de tennis à Cloyes-les-Trois-Rivières (28220). ACT propose des cours, stages, compétitions et location de courts. Rejoignez l'Association Cloysienne de Tennis ! Terrains extérieurs et couverts.",
  keywords:
    "tennis, Cloyes-les-Trois-Rivières, ACT, club de tennis, cours de tennis, stages tennis, compétition tennis, Eure-et-Loir, 28220, tennis cloyes, tennis cloyes sur loir, tennis eure et loir, act cloyes, act 28, association cloysienne de tennis, location court tennis, terrains tennis, tennis extérieur, tennis couvert, tennis pour tous les niveaux, école de tennis, entraînement tennis, act28, tennis-cloyes, tennis-cloyes-les-trois-rivières, tennis-cloyes-les-trois-rivières-28",
  authors: [{ name: "Association Cloysienne de Tennis" }],
  creator: "Association Cloysienne de Tennis",
  publisher: "Association Cloysienne de Tennis",
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tennis-cloyes.vercel.app",
    title: "Association Cloysienne de Tennis (ACT)",
    description:
      "Club de tennis à Cloyes-les-Trois-Rivières (ACT 28). Cours, stages, compétitions pour tous les niveaux.",
    siteName: "Association Cloysienne de Tennis",
    images: [
      {
        url: "/images/Logo_ACT.jpg",
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
      "Club de tennis à Cloyes-les-Trois-Rivières (ACT 28). Cours, stages, compétitions pour tous les niveaux.",
    images: [
      "/images/Logo_ACT.jpg",
    ],
  },
  verification: {
    google: "google-site-verification=votrecode", // À remplacer par votre code de vérification Google
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <JsonLd />
        <meta name="google-site-verification" content="em4dxdz8ImdC7L-xnYceq832_XJfF6hkp7GgeByDTBw" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://tennis-cloyes.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
import './globals.css'