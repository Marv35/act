import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bell, Calendar } from "lucide-react"
import PartnersCarousel from "@/components/partners-carousel"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium">
              Bienvenue à l'ACT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-600 leading-tight">
              Rejoignez-nous à <span className="text-yellow-500">ACT</span> !
            </h2>
            <p className="text-lg text-gray-700">
              Que vous soyez passionné de sport, de culture ou à la recherche de nouvelles activités, notre association
              est ouverte à tous ! Que vous soyez débutant ou expert, nous vous accueillons dans une ambiance
              conviviale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/inscriptions"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
              >
                S'inscrire <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/club"
                className="inline-flex items-center bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition-all hover:shadow-md"
              >
                Découvrir le club
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20ACT%20Couleur%20petit%20%281%29.jpg-ajgbR3Egn4mfWrnKNXhqj13noiwzLl.jpeg"
                alt="Logo ACT"
                width={400}
                height={400}
                className="relative rounded-lg shadow-xl transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie de photos */}
      <section className="py-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Nos installations</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Découvrez nos terrains de tennis et nos installations pour pratiquer votre sport favori
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terrain.jpg-HksM1ycU8LheQvdUZlb7XCuOwePhRd.jpeg"
              alt="Courts de tennis"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <p className="text-white p-4">Courts extérieurs</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terrain%20pasmal.jpg-U7bqPRz6Vpq12VVDMdqy4cqwGEcu8n.jpeg"
              alt="Tennis au coucher du soleil"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <p className="text-white p-4">Jeu en soirée</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/terrain%20journ%C3%A9e%20du%20tennis.jpg-cNbrTKSOHB1cNSmvOf9IFq8f30yjjX.jpeg"
              alt="Cours collectif de tennis"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <p className="text-white p-4">Cours collectifs</p>
            </div>
          </div>
        </div>
      </section>



      {/* Annonce importante */}
      <section className="py-8 mt-8">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl overflow-hidden shadow-lg border border-green-100">
          <div className="p-6 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-500 animate-pulse" />
                <h3 className="text-xl font-bold text-green-700">Annonce importante</h3>
              </div>
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-5 shadow-inner">
                <h4 className="font-semibold text-lg mb-3">Chers membres,</h4>
                <p className="mb-4 text-gray-700">
                  Nous avons le plaisir de vous annoncer que les travaux sur les courts numéro trois et quatre avancent
                  rapidement. Une nouvelle structure avec des panneaux solaires y est installée protégeant ainsi les
                  terrains des intempéries.
                </p>
                <p className="mb-4 text-gray-700">Merci pour votre patience !</p>
                <p className="font-medium text-green-600">L'équipe ACT</p>
              </div>
              <div className="flex">
                <Link href="/club" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                  En savoir plus sur nos installations <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 md:h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9838.jpg-Eb1W2ihmchxKtDSn1cXV2CYp4ZLowC.jpeg"
                  alt="Nouvelle structure avec panneaux solaires"
                  fill
                  className="object-cover transform transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">
                    <Calendar className="inline-block mr-1 h-4 w-4" />
                    Mise à jour : Juin 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*
      <section className="mb-16">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Actualités du club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Tournoi de printemps",
                desc: "Inscrivez-vous à notre prochain tournoi qui aura lieu le mois prochain.",
                icon: "🏆",
              },
              {
                title: "Cours collectifs",
                desc: "Nouveaux horaires pour les cours collectifs à partir de septembre.",
                icon: "👥",
              },
              {
                title: "Stage vacances",
                desc: "Stage de tennis pour les jeunes pendant les vacances scolaires.",
                icon: "🎓",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <Link href="#" className="inline-block mt-4 text-green-600 hover:text-green-800 font-medium">
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>*/}



            {/* Carousel des partenaires */}
      <section className="py-8 mb-16">
        <PartnersCarousel />
      </section>

      <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50 rounded-3xl mb-16">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Réservez vos courts en ligne</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Utilisez la plateforme Ten'Up pour réserver facilement vos courts et gérer votre compte FFT
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://tenup.fft.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-600 to-yellow-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            <span className="relative rounded-md bg-white px-8 py-3.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0">
              <span className="relative text-lg font-semibold">Accéder à Ten'Up</span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
