"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Info, ArrowLeftRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import EffectifTabs from "@/components/effectif-tabs"
import CoachList, { Coach } from "@/components/CoachList"

interface BureauRole {
  title: string
  person: string
}

interface BureauPair {
  pole: string
  lead: BureauRole
  vice: BureauRole
}

const bureauPairs: BureauPair[] = [
  {
    pole: "Présidence",
    lead: { title: "Président", person: "Guillaume VENDÉ" },
    vice: { title: "Vice-président", person: "Pierre NICOL" },
  },
  {
    pole: "Secrétariat",
    lead: { title: "Secrétaire", person: "Jean-Charles POUZIER" },
    vice: { title: "Vice-secrétaire", person: "Séverine VENDÉ" },
  },
  {
    pole: "Trésorerie",
    lead: { title: "Trésorier", person: "Émilien LETOURNEUX" },
    vice: { title: "Vice-trésorière", person: "Séverine TORAILLE" },
  },
]

const bureauMembers: string[] = [
  "Frédéric COLLIN",
  "Vincent BRETEL",
  "Envel ARCHENAULT",
  "Marlène DUBOIS",
  "Gwendoline HUGUET",
]

// Données des entraîneurs
const coachesData: Coach[] = [
  {
    id: "daniel-terouinard",
    name: "Daniel TEROUINARD",
    ranking: "4/6",
    imageSrc: "/images/Personnes/Daniel_act.webp",
    imageAlt: "Daniel TEROUINARD, entraîneur de tennis à Cloyes-les-Trois-Rivières",
    description:
      "Notre entraîneur diplômé d'État accompagne les joueurs de tous niveaux, des débutants aux compétiteurs confirmés, avec une approche pédagogique adaptée.",
    specialties: [
      "Cours individuels et collectifs",
      "Préparation physique",
      "Organisation de stages vacances",
      "Animation & pédagogie ludique",
    ],
  },
  {
    id: "julien-segard",
    name: "Julien SEGARD",
    ranking: "1/6",
    imageSrc: "/images/Personnes/julien_segard.webp",
    imageAlt: "Julien SEGARD, entraîneur de tennis à Cloyes-les-Trois-Rivières",
    description:
      "Julien rejoint le club pour encadrer les cours compétiteurs le samedi après-midi. Il propose également un accompagnement en préparation mentale et des cours particuliers.",
    specialties: [
      "Cours compétiteurs (samedi après-midi)",
      "Perfectionnement technique & tactique",
      "Cours particuliers (semaine & samedi)",
    ],
  },
]

function RevealSection({
  children,
  className = "",
  id,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default function Club() {
  const [effectif, setEffectif] = useState<{
    total: number | null
    jeunes: number | null
    adultes: number | null
  }>({
    total: null,
    jeunes: null,
    adultes: null,
  })

  useEffect(() => {
    fetch("/api/tenup-effectif")
      .then((res) => res.json())
      .then((data) => setEffectif(data))
      .catch(() => setEffectif({ total: null, jeunes: null, adultes: null }))
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center animate-[fadeUp_0.5s_ease-out_both]">
        Le Club
      </h1>

      <div className="max-w-4xl mx-auto">
        <RevealSection className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
          <p className="mb-4">
            L'Association Cloysienne de Tennis (ACT) a été fondée avec pour objectif de promouvoir la pratique du tennis
            dans la région de Cloyes-les-Trois-Rivières.
          </p>
          <p>
            Au fil des années, notre club s'est développé pour devenir un lieu convivial où se retrouvent passionnés et
            amateurs de tennis de tous niveaux.
          </p>
        </RevealSection>

        <RevealSection className="mb-12" id="installations">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Nos installations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Terrains/Journee_du_tennis.webp"
                  alt="Courts de tennis extérieurs n°1 et n°2 de l'Association Cloysienne de Tennis"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4 transition-transform duration-300 group-hover:translate-x-1">
                    Courts n°1 et n°2
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Nos deux courts extérieurs en béton poreux offrent une surface de jeu idéale pour la pratique du
                  tennis en toutes saisons.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>6 Route de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Terrains/mur_nouvelle_couleur_grand.webp"
                  alt="Mur d'entraînement de tennis à Cloyes-les-Trois-Rivières"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4 transition-transform duration-300 group-hover:translate-x-1">
                    Mur d'entraînement
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Notre mur d'entraînement permet aux joueurs de tous niveaux de perfectionner leur technique et de
                  s'exercer individuellement.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>6 Route de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Terrains/Court3.webp"
                  alt="Courts de tennis n°3 et n°4 avec structure couverte et panneaux solaires à Cloyes-les-Trois-Rivières"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4 transition-transform duration-300 group-hover:translate-x-1">
                    Courts n°3 et n°4
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Ces courts bénéficient d'une nouvelle structure couverte avec panneaux solaires, permettant de jouer
                  par tous les temps.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>6 Route de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/Terrains/cours_gymnase.webp"
                  alt="Gymnase des Trois Rivières à Cloyes-les-Trois-Rivières"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4 transition-transform duration-300 group-hover:translate-x-1">
                    Gymnase des Trois Rivières
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Le club dispose également d'un accès au Gymnase des Trois Rivières pour les entraînements et
                  compétitions en intérieur pendant la saison hivernale.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>9 Rte de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 via-white to-green-100 p-8 rounded-2xl border border-green-200 shadow-md relative transition-all duration-300 hover:shadow-lg">
            <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center gap-2">
              <svg width="24" height="24" fill="none" className="text-green-600">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Réservation des courts
            </h3>
            <p className="mb-3 text-gray-700">
              La réservation des courts est accessible aux membres du club via la plateforme{" "}
              <span className="font-semibold text-green-700">Ten'Up</span>.
            </p>
            <div className="flex flex-col md:flex-row gap-2 mb-2">
              <Link
                href="https://tenup.fft.fr/club/53280682"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 rounded-lg shadow transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <svg
                  className="w-4 h-4 mr-1 transition-transform duration-300 group-hover/btn:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Réserver un court sur Ten'Up
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              Pour les non-adhérents, la réservation des courts est possible à la{" "}
              <span className="font-semibold text-green-700">Maison des Trois Rivières</span>.
            </p>
            <Link
              href="/inscriptions#location-la-maison-des-trois-rivieres"
              className="group/link inline-flex items-center justify-center text-xs px-3 py-1.5 bg-white border border-green-400 text-green-700 rounded shadow hover:bg-green-50 transition-all duration-200 hover:-translate-y-0.5 mt-2"
            >
              <svg
                className="w-4 h-4 mr-1 transition-transform duration-300 group-hover/link:rotate-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              En savoir plus
            </Link>
          </div>
        </RevealSection>

        {/* Données & effectifs */}
        <RevealSection className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">Données</h3>
          <h3 className="font-semibold mb-3">Effectif actuel du club (source Ten'Up)</h3>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
            <span>Dernière mise à jour : 11/2026</span>

            {/* Conteneur de l'icône et du tooltip */}
            <div className="group relative inline-flex items-center">
              <Info className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />

              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-md z-10 pointer-events-none">
                La page source de ces informations a été fermée sur Ten'Up.
              </div>
            </div>
          </div>

          {effectif.total !== null ? (
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="group flex-1 bg-white rounded-lg shadow p-4 flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 transition-transform duration-300 group-hover:scale-110">
                  {effectif.total}
                </div>
                <div>
                  <div className="font-semibold text-green-700">Total</div>
                  <div className="text-gray-500 text-sm">Tous âges confondus</div>
                </div>
              </div>
              <div className="group flex-1 bg-white rounded-lg shadow p-4 flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 transition-transform duration-300 group-hover:scale-110">
                  {effectif.jeunes}
                </div>
                <div>
                  <div className="font-semibold text-green-700">Jeunes</div>
                  <div className="text-gray-500 text-sm">Moins de 18 ans</div>
                </div>
              </div>
              <div className="group flex-1 bg-white rounded-lg shadow p-4 flex items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4 transition-transform duration-300 group-hover:scale-110">
                  {effectif.adultes}
                </div>
                <div>
                  <div className="font-semibold text-green-700">Adultes</div>
                  <div className="text-gray-500 text-sm">18 ans et plus</div>
                </div>
              </div>
            </div>
          ) : (
            <span className="text-gray-500 animate-pulse">Chargement des effectifs...</span>
          )}

          <div className="mb-0">
            <EffectifTabs />
          </div>
        </RevealSection>

        <RevealSection className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Notre équipe</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">
              Le bureau directeur
            </h3>

            {/* Carte unique épurée sans boîtes imbriquées */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 transition-shadow duration-300 hover:shadow-xl">
              <div className="lg:flex">
                <div className="group lg:w-1/3 lg:flex-shrink-0 overflow-hidden">
                  <div className="relative h-64 lg:h-full min-h-[300px]">
                    <Image
                      src="/images/Terrains/photo_drone.webp"
                      alt="Bureau directeur de l'Association Cloysienne de Tennis"
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:w-2/3 flex flex-col justify-center divide-y divide-green-100">
                  {bureauPairs.map((pair, idx) => (
                    <div
                      key={pair.pole}
                      style={{ transitionDelay: `${idx * 70}ms` }}
                      className="group/pair py-4 first:pt-0 last:pb-0 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-green-700">
                          {pair.pole}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-green-600/80 transition-transform duration-300 group-hover/pair:scale-105">
                          <ArrowLeftRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/pair:rotate-180" />
                          Binôme
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6">
                        <div>
                          <span className="text-xs font-semibold text-green-700 block">
                            {pair.lead.title}
                          </span>
                          <span className="font-semibold text-gray-900">
                            {pair.lead.person}
                          </span>
                        </div>

                        <span className="hidden sm:block h-6 w-px bg-green-200 transition-colors duration-300 group-hover/pair:bg-green-400" />

                        <div className="sm:text-right">
                          <span className="text-xs font-medium text-green-600 block">
                            {pair.vice.title}
                          </span>
                          <span className="text-sm font-medium text-gray-700">
                            {pair.vice.person}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4 border-b border-green-200 pb-2">
              Les membres du bureau 
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 transition-shadow duration-300 hover:shadow-lg">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bureauMembers.map((member) => (
                  <li
                    key={member}
                    className="group flex items-center rounded-lg p-1.5 transition-all duration-200 hover:bg-green-50/80 hover:translate-x-0.5"
                  >
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 font-semibold transition-transform duration-200 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                      {member.charAt(0)}
                    </span>
                    <span className="text-gray-800">{member}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apport du composant CoachList */}
            <CoachList coaches={coachesData} title="Nos entraîneurs" />
          </div>
        </RevealSection>

        <RevealSection>
          <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 transition-shadow duration-300 hover:shadow-md">
            <ul className="space-y-3">
              <li className="flex items-start transition-transform duration-200 hover:translate-x-1.5">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>
                  <strong>Convivialité</strong> - Un club où il fait bon vivre et jouer
                </span>
              </li>
              <li className="flex items-start transition-transform duration-200 hover:translate-x-1.5">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>
                  <strong>Respect</strong> - Des valeurs sportives et humaines
                </span>
              </li>
              <li className="flex items-start transition-transform duration-200 hover:translate-x-1.5">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>
                  <strong>Progression</strong> - Accompagnement adapté à chaque niveau
                </span>
              </li>
            </ul>
          </div>
        </RevealSection>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}