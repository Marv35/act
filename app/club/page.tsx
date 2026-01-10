"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react" 
import { useEffect, useState } from "react"
import EffectifTabs from "@/components/effectif-tabs"

export default function Club() {  
  const [effectif, setEffectif] = useState<{ total: number | null, jeunes: number | null, adultes: number | null }>({ total: null, jeunes: null, adultes: null })
  useEffect(() => {
    fetch("/api/tenup-effectif")
      .then(res => res.json())
      .then(data => setEffectif(data))
      .catch(() => setEffectif({ total: null, jeunes: null, adultes: null }))
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Le Club</h1>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
          <p className="mb-4">
            L'Association Cloysienne de Tennis (ACT) a été fondée avec pour objectif de promouvoir la pratique du tennis
            dans la région de Cloyes-les-Trois-Rivières.
          </p>
          <p>
            Au fil des années, notre club s'est développé pour devenir un lieu convivial où se retrouvent passionnés et
            amateurs de tennis de tous niveaux.
          </p>
        </section>

        <section className="mb-12" id="installations">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Nos installations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/Terrains/Journee_du_tennis.webp"
                  alt="Courts de tennis extérieurs n°1 et n°2 de l'Association Cloysienne de Tennis"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4">Courts n°1 et n°2</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Nos deux courts extérieurs en béton poreux offrent une surface de jeu idéale pour la pratique du
                  tennis en toutes saisons.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>6 Route de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/Terrains/mur_nouvelle_couleur_grand.webp"
                  alt="Mur d'entraînement de tennis à Cloyes-les-Trois-Rivières"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4">Mur d'entraînement</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Notre mur d'entraînement permet aux joueurs de tous niveaux de perfectionner leur technique et de
                  s'exercer individuellement.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>6 Route de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/Terrains/Court3.webp"
                  alt="Courts de tennis n°3 et n°4 avec structure couverte et panneaux solaires à Cloyes-les-Trois-Rivières"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4">Courts n°3 et n°4</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  {/* <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium mb-2">
                    Les terrains sont dispo travaux presque fini
                  </span> 
                  <br />
                  */}
                  Ces courts bénéficient d'une nouvelle structure couverte avec panneaux solaires, permettant de jouer
                  par tous les temps.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>6 Route de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/Terrains/cours_gymnase.webp"
                  alt="Gymnase des Trois Rivières à Cloyes-les-Trois-Rivières"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-bold p-4">Gymnase des Trois Rivières</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  Le club dispose également d'un accès au Gymnase des Trois Rivières pour les entraînements et
                  compétitions en intérieur pendant la saison hivernale.
                </p>
                <div className="mt-3 flex items-center text-sm text-green-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>9 Rte de Montigny, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 via-white to-green-100 p-8 rounded-2xl border border-green-200 shadow-md relative">
            <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center gap-2">
              <svg width="24" height="24" fill="none" className="text-green-600"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Réservation des courts
            </h3>
            <p className="mb-3 text-gray-700">
              La réservation des courts est accessible aux membres du club via la plateforme <span className="font-semibold text-green-700">Ten'Up</span>.
            </p>
            <div className="flex flex-col md:flex-row gap-2 mb-2">
              <Link
              href="https://tenup.fft.fr/club/53280682"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded-lg shadow transition-colors duration-150"
              >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Réserver un court sur Ten'Up
              </Link>
            </div>
            <p className="text-gray-600 text-sm">
              Pour les non-adhérents, la réservation des courts est possible à la <span className="font-semibold text-green-700">Maison des Trois Rivières</span>.
            </p>
            <Link
              href="/inscriptions#location la maison des trois rivieres"
              className="inline-flex items-center justify-center text-xs px-3 py-1 bg-white border border-green-400 text-green-700 rounded shadow hover:bg-green-50 transition-colors duration-150 mt-2"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              En savoir plus
            </Link>
            </div>
        </section>
        
        {/* Graphique historique des effectifs */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">Données</h3>
          <h3 className="font-semibold mb-3">Effectif actuel du club (source Ten'Up)</h3>
          {effectif.total !== null ? (
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 bg-white rounded-lg shadow p-4 flex items-center">
              <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                {effectif.total}
              </div>
              <div>
                <div className="font-semibold text-green-700">Total</div>
                <div className="text-gray-500 text-sm">Tous âges confondus</div>
              </div>
              </div>
              <div className="flex-1 bg-white rounded-lg shadow p-4 flex items-center">
              <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                {effectif.jeunes}
              </div>
              <div>
                <div className="font-semibold text-green-700">Jeunes</div>
                <div className="text-gray-500 text-sm">Moins de 18 ans</div>
              </div>
              </div>
              <div className="flex-1 bg-white rounded-lg shadow p-4 flex items-center">
              <div className="bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                {effectif.adultes}
              </div>
              <div>
                <div className="font-semibold text-green-700">Adultes</div>
                <div className="text-gray-500 text-sm">18 ans et plus</div>
              </div>
              </div>
            </div>
          ) : (
            <span className="text-gray-500">Chargement des effectifs...</span>
          )}
        <div className="mb-0">
          <EffectifTabs />
        </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Notre équipe</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">Le bureau directeur</h3>

            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src="/images/Personnes/Christophe_Jean-Charles_Emilien.webp"
                        alt="Bureau directeur de l'Association Cloysienne de Tennis"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-1 text-green-700">Président</h4>
                        <p className="text-gray-800">Christophe TORAILLE</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-1 text-green-700">Secrétaire</h4>
                        <p className="text-gray-800">Jean-Charles POUZIER</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-1 text-green-700">Trésorier</h4>
                        <p className="text-gray-800">Emilien LETOURNEUX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-3">Les membres du bureau</h3>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Séverine TORAILLE", "Séverine VENDÉ", "Guillaume VENDÉ", "Frédéric COLLIN", "Vincent BRETEL", "Maël BRETEL", "Envel ARCHENAULT"].map(
                  (member, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                        {member.charAt(0)}
                      </span>
                      <span>{member}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        <div>
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">Notre entraîneur</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-2/5">
                  <div className="relative h-80 md:h-full min-h-96">
                    <Image
                      src="/images/Personnes/Daniel_act.webp"
                      alt="Daniel TEROUINARD, entraîneur de tennis à Cloyes-les-Trois-Rivières"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full mr-4 flex items-center justify-center text-xl">🎾</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">Daniel TEROUINARD</h4>
                      <span className="text-sm text-green-600 font-semibold">Meilleur classement : 4/6</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Notre entraîneur diplômé d'État accompagne les joueurs de tous niveaux, des débutants aux compétiteurs confirmés, avec une approche pédagogique adaptée.
                  </p>
                  <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                    <h5 className="font-semibold text-green-700 mb-3">Ses spécialités</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <span className="text-green-600 mr-3 font-bold">✓</span>
                        <span>Cours individuels et collectifs</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-green-600 mr-3 font-bold">✓</span>
                        <span>Préparation physique</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-green-600 mr-3 font-bold">✓</span>
                        <span>Organisation de stages vacances</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="text-green-600 mr-3 font-bold">✓</span>
                        <span>Animation & pédagogie ludique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nos valeurs</h2>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>
                  <strong>Convivialité</strong> - Un club où il fait bon vivre et jouer
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>
                  <strong>Respect</strong> - Des valeurs sportives et humaines
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">✓</span>
                <span>
                  <strong>Progression</strong> - Accompagnement adapté à chaque niveau
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
