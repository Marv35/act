export default function JsonLd() {
  const siteUrl = "https://tennis-cloyes.vercel.app"

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "Association Cloysienne de Tennis",
    alternateName: ["ACT", "ACT Cloyes", "ACT 28", "Tennis Cloyes"],
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Club de tennis à Cloyes-les-Trois-Rivières. Cours, stages, compétitions pour tous les niveaux.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Route de Montigny",
      addressLocality: "Cloyes-les-Trois-Rivières",
      postalCode: "28220",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.9244722",
      longitude: "1.2372195",
    },
    telephone: "+33768428751",
    email: "actennis28@gmail.com",
    openingHours: "Mo-Su 08:00-22:00",
    sameAs: ["https://www.facebook.com/Tenniscloyes", "https://www.instagram.com/association_tennis_cloyes_/"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de tennis",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cours de tennis",
            description: "Cours individuels et collectifs pour tous niveaux",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Location de courts",
            description: "Courts extérieurs et couverts disponibles à la réservation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stages de tennis",
            description: "Stages intensifs pendant les vacances scolaires",
          },
        },
      ],
    },
    keywords:
      "tennis, Cloyes-les-Trois-Rivières, ACT, club de tennis, cours de tennis, stages tennis, compétition tennis, Eure-et-Loir, 28220, tennis cloyes, tennis cloyes sur loir, tennis eure et loir, act cloyes, act 28, association cloysienne de tennis",
  }

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Association Cloysienne de Tennis",
    alternateName: ["ACT", "ACT Cloyes", "ACT 28", "Tennis Cloyes"],
    image: `${siteUrl}/logo.png`,
    "@id": `${siteUrl}/#localbusiness`,
    url: siteUrl,
    telephone: "+33768428751",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Route de Montigny",
      addressLocality: "Cloyes-les-Trois-Rivières",
      postalCode: "28220",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.9244722,
      longitude: 1.2372195,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    keywords:
      "tennis, Cloyes-les-Trois-Rivières, ACT, club de tennis, cours de tennis, stages tennis, compétition tennis, Eure-et-Loir, 28220, tennis cloyes, tennis cloyes sur loir, tennis eure et loir, act cloyes, act 28, association cloysienne de tennis",
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Le Club",
        item: `${siteUrl}/club`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Inscriptions",
        item: `${siteUrl}/inscriptions`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Compétitions",
        item: `${siteUrl}/competitions`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Partenaires et Sponsors",
        item: `${siteUrl}/partenaires`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: `${siteUrl}/contact`,
      },
    ],
  }

  // Ajout d'un schéma spécifique pour le club de sport
  const sportsClubLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "Association Cloysienne de Tennis",
    alternateName: ["ACT", "ACT Cloyes", "ACT 28", "Tennis Cloyes"],
    description:
      "L'Association Cloysienne de Tennis (ACT) est un club de tennis situé à Cloyes-les-Trois-Rivières (28220) proposant des cours, stages et compétitions pour tous les niveaux.",
    url: siteUrl,
    telephone: "+33768428751",
    email: "actennis28@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Route de Montigny",
      addressLocality: "Cloyes-les-Trois-Rivières",
      postalCode: "28220",
      addressRegion: "Eure-et-Loir",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.9244722,
      longitude: 1.2372195,
    },
    sameAs: ["https://www.facebook.com/Tenniscloyes", "https://www.instagram.com/association_tennis_cloyes_/"],
    image: `${siteUrl}/logo.png`,
    foundingDate: "1980",
    keywords:
      "tennis, Cloyes-les-Trois-Rivières, ACT, club de tennis, cours de tennis, stages tennis, compétition tennis, Eure-et-Loir, 28220, tennis cloyes, tennis cloyes sur loir, tennis eure et loir, act cloyes, act 28, association cloysienne de tennis",
  }

  const jsonLdArray = [organizationLd, localBusinessLd, breadcrumbLd, sportsClubLd]

  return (
    <>
      {jsonLdArray.map((jsonLd, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ))}
    </>
  )
}
