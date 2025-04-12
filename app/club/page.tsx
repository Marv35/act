import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Club() {
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terrain%20journ%C3%A9e%20du%20tennis.jpg-HJo6bh7kVB47AfRFJEw5YCIpVyHKbW.jpeg"
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
                  Nos deux courts extérieurs en résine synthétique offrent une surface de jeu idéale pour la pratique du
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mur%20tennis.jpg-TUNvApfmUsIYryMEhIHgueOxbP0DhW.jpeg"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9838.jpg-wpaBU5BmnTtoWHo1DO9DG8N86l8aJw.jpeg"
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
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium mb-2">
                    Actuellement en travaux
                  </span>
                  <br />
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gymnase%20%20devant.jpg-KApaLNyBMr8hAfYF2AOdx6B3W6NhV5.jpeg"
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
                  <span>Rue de Châteaudun, 28220 Cloyes-les-Trois-Rivières</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold mb-3">Réservation des courts</h3>
            <p className="mb-4">
              La réservation des courts est accessible aux membres du club via la plateforme Ten'Up ou directement au
              club house.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="https://tenup.fft.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Réserver un court sur Ten'Up
              </Link>
            </div>
          </div>
        </section>

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
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chef%20jc%20emilien.jpg-uUli1dvRXRStiHyc8deDy1G72ZMe79.jpeg"
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
                {["Séverine TORAILLE", "Séverine VENDÉ", "Guillaume VENDÉ", "Fred COLLIN", "Vincent BRETEL"].map(
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
            <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">Notre entraîneur</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <div className="relative h-80 md:h-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daniel.jpg-Obq8Z72q2FmTmDA0VigDxy2yz6cx0X.jpeg"
                      alt="Daniel TEROUINARD, entraîneur de tennis à Cloyes-les-Trois-Rivières"
                      fill
                      className="object-cover object-top" // Ajout de object-top pour montrer le haut de l'image
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white p-2 rounded-full mr-3">🎾</div>
                    <h4 className="text-xl font-bold">Daniel TEROUINARD</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Notre entraîneur diplômé d'État accompagne les joueurs de tous niveaux, des débutants aux
                    compétiteurs confirmés.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Ses spécialités</h5>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Cours individuels et collectifs</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Préparation physique</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Stages intensifs</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Coaching en compétition</span>
                      </li>
                    </ul>
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
                  <strong>Inclusion</strong> - Le tennis accessible à tous
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
