import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import JsonLd from "./jsonld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://tennis-cloyes.vercel.app"),
  title: "Association Cloysienne de Tennis (ACT) | Club de Tennis à Cloyes-les-Trois-Rivières",
  description:
    "Club de tennis à Cloyes-les-Trois-Rivières (28220). ACT propose des cours, stages, compétitions et location de courts. Rejoignez l'Association Cloysienne de Tennis ! Terrains extérieurs et couverts.",
  keywords:
    "tennis, Cloyes-les-Trois-Rivières, ACT, club de tennis, cours de tennis, stages tennis, compétition tennis, Eure-et-Loir, 28220, tennis cloyes, tennis cloyes sur loir, tennis eure et loir, act cloyes, act 28, association cloysienne de tennis",
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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20ACT%20Couleur%20petit%20%281%29.jpg-ajgbR3Egn4mfWrnKNXhqj13noiwzLl.jpeg",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20ACT%20Couleur%20petit%20%281%29.jpg-ajgbR3Egn4mfWrnKNXhqj13noiwzLl.jpeg",
    ],
  },
  verification: {
    google: "google-site-verification=votrecode", // À remplacer par votre code de vérification Google
  },
  generator: "v0.dev",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://tennis-cloyes.vercel.app" />
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