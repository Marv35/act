import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bell, Calendar, Images } from "lucide-react"
import PartnersCarousel from "@/components/partners-carousel"
import JsonLd from "./jsonld"
import ImagesCarousel from "@/components/images-carousel"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <JsonLd />
      <section className="py-16 md:py-24">
        <h1 className="sr-only">
          Association de Tennis Cloysienne (ACT) à Cloyes-les-Trois-Rivières – Tennis Cloyes, club, cours, location de courts, compétition Eure-et-Loir
        </h1>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-yellow-100 shadow-2xl ring-1 ring-black/5 p-6 md:p-10 reveal">
          <div className="pointer-events-none absolute -left-16 top-12 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute right-0 top-24 h-40 w-40 rounded-full bg-yellow-200/50 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
          <div className="pointer-events-none absolute left-1/2 -bottom-10 h-56 w-56 -translate-x-1/2 rounded-full bg-lime-200/40 blur-3xl animate-blob" style={{ animationDelay: "1s" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm ring-1 ring-emerald-200">
                Nouveautés 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-700 leading-tight tracking-tighter">
                Rejoignez l'<span className="text-yellow-500">ACT</span> et vivez le tennis autrement.
              </h2>
              <p className="text-lg text-slate-700 max-w-xl">
                Que vous soyez passionné de sport, de culture ou à la recherche de nouvelles activités, notre association
                vous accueille dans une ambiance chaleureuse et conviviale. Des cours, des compétitions et des événements pour toute la famille.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/inscriptions"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-bold py-3 px-7 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  S'inscrire <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/club"
                  className="inline-flex items-center justify-center bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-7 rounded-full shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  Découvrir le club
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 via-transparent to-yellow-100 opacity-70 rounded-[2rem] blur-3xl" />
              <div className="relative w-full max-w-[550px]">
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/10 via-transparent to-slate-50/30" />
                  <section className="py-1 mb-2">
                    <ImagesCarousel />
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Terrains rénovés", description: "Des courts de tennis entretenus pour tous les niveaux." },
              { title: "Ambiance conviviale", description: "Un club où la famille, les jeunes et les compétiteurs se retrouvent." },
              { title: "Événements réguliers", description: "Tournois, soirées tennis et réunions de club tout au long de l'année." },
              { title: "Inscription simple", description: "Réservez votre place facilement depuis notre site." },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-emerald-700 mb-2">{card.title}</h3>
                <p className="text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <div className="scroll-indicator" aria-hidden="true" />
          </div>
        </div>
      </section>
      {/* Galerie de photos */}
      <section className="py-6 mb-4 reveal reveal-delay-1">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Nos installations</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Découvrez nos terrains de tennis et nos installations pour pratiquer votre sport favori
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/Terrains/acces_pmr.webp"
              alt="Accès PMR au club de tennis"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <p className="text-white p-4">Accès PMR</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/Terrains/Journee_du_tennis.webp"
              alt="Journée du tennis ensoleillée"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <p className="text-white p-4">Cours collectif</p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/Terrains/Court_4.webp"
              alt="Cours collectif de tennis"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
              <p className="text-white p-4">Match par équipe</p>
            </div>
          </div>
        </div>
      </section>


      {/* Annonce importante */}
      <section className="py-8 mt-8 reveal reveal-delay-2">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-3xl overflow-hidden shadow-2xl border border-green-100">
          <div className="p-6 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-500 animate-pulse" />
                <h3 className="text-xl font-bold text-green-700">Annonce importante</h3>
              </div>
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-5 shadow-inner">
                <h4 className="font-semibold text-lg mb-3">Actualités du club 🎾</h4>
                <p className="mb-4 text-gray-700">
                      La saison de tennis 2026 touche à sa fin.                 
                  <br />Un grand merci à nos sponsors et partenaires pour leur soutien et leur engagement à nos côtés durant cette saison.
                  <br />Pour finaliser complètement notre projet, nous souhaitons installer un système de fermeture par bâches.
                  <br />Ouvertes aux beaux jours, elles permettront de profiter de terrains aérés et frais, fermées l’hiver, nous profiterons d’une vraie salle abritée du vent et du froid. Nous sommes en recherchede mécènes et partenaires pouvant nous aider financièrement à faire aboutir notre projet.
                </p>
                  <h4 className="font-semibold text-lg mb-3">Les championnats par équipes de printemps</h4>
                <p className="mb-4 text-gray-700">
                5 équipes étaient engagées, résultats moyens pour l’ensemble. Les équipes devraient se maintenir dans leur division. 
                </p>

                <h4 className="font-semibold text-lg mb-3">Fête du tennis</h4>
                <p className="mb-4 text-gray-700">
                  Cette journée s’est passée dans la joie et la bonne humeur, rassemblant une soixantaine de participants.
                </p>
              
                <h4 className="font-semibold text-lg mb-3">Tournoi open 2026</h4>
                <p className="mb-4 text-gray-700">
                  Nous avons vécu cette année un tournoi très particulier, dû aux fortes chaleurs. Démarrage retardé de 3 jours et stoppé 4 jours avant la fin. C’est dommage, les tableaux étaient bien garnis avec 28 participantes chez les dames et 103 participants chez les Messieurs.
                </p>

                <h4 className="font-semibold text-lg mb-3">Inscription 2027</h4>
                <p className="mb-4 text-gray-700">
Nous vous donnons rendez-vous aux journées d’information et d’inscription 2027 au club, 6 route de Montigny 28220 Cloyes-sur-le-Loir, présence de Daniel notre entraîneur, les :
<br />
-        Mercredi 2 septembre de 16h à 20h < br/>
-        Samedi 5 septembre de 10h à 18h             
                </p>
                
                <p className="mb-4 text-gray-700">Bon Tennis à tous🎾😉 !</p>
                <p className="font-medium text-green-600">L'équipe ACT</p>
              </div>
              <div className="flex">
                {/* <Link href="/club" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                  En savoir plus sur les installations<ArrowRight className="ml-1 h-4 w-4" />
                </Link> */}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 md:h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/Terrains/tournoi_nuit.webp"
                  fill
                  alt="Vue du parking des terrains de tennis de nuit"
                  className="object-cover transform transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">
                    <Calendar className="inline-block mr-1 h-4 w-4" />
                    Mise à jour : Juillet 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-14 reveal reveal-delay-3">
        <div className="relative bg-gradient-to-br to-white rounded-2xl p-10 shadow-xl overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full opacity-30 blur-2xl pointer-events-none" />
          <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center drop-shadow-sm">
        Suivez toute l’actualité du club sur nos réseaux sociaux !
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10">
        Découvrez les dernières actualités, photos, événements et moments forts de l’ACT sur Facebook et Instagram.<br />
        <span className="text-green-600 font-semibold">Rejoignez notre communauté pour ne rien manquer de la vie du club !</span>
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
        <Link
          href="https://www.facebook.com/Tenniscloyes/?locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center rounded-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 text-lg shadow-lg transition-all duration-300 focus:ring-2 focus:ring-blue-300"
          style={{ letterSpacing: "0.05em" }}
        >
          Facebook
        </Link>
        <Link
          href="https://www.instagram.com/association_tennis_cloyes_/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold px-8 py-3 text-lg shadow-lg hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-pink-300"
          style={{ letterSpacing: "0.05em" }}
        >
          Instagram
        </Link>
          </div>
        </div>
      </section>
      
     {/* Annonce importante t-shirt commande*/}
      {/* <section className="py-8 mt-8">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl overflow-hidden shadow-lg border border-green-100">
          <div className="p-6 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-500 animate-pulse" />
                <h3 className="text-xl font-bold text-green-700">Réédition t-shirt de ACT</h3>
              </div>
              <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-5 shadow-inner">
                <h4 className="font-semibold text-lg mb-3">Reprise des cours de tennis 🎾</h4>
                <p className="mb-4 text-gray-700">
                  Vous avez été nombreux à nous demander leur retour, et c’est avec plaisir que nous vous annonçons la réédition des t-shirts ACT ! Un incontournable pour afficher fièrement les couleurs du club, que ce soit sur les courts ou au quotidien.
                  <br />Si vous êtes intéressé(e), n’hésitez pas à nous contacter :
                  <br />📧 par email à [votre adresse email]
                  <br />📞 ou par téléphone au [votre numéro de téléphone]
                </p>
                <p className="mb-4 text-gray-700">Bon tennis à tous 🎾😉 !</p>
                <p className="font-medium text-green-600">L'équipe ACT</p>
              </div>
              <div className="flex">
                {/* <Link href="/club" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                  En savoir plus sur les installations<ArrowRight className="ml-1 h-4 w-4" />
                </Link> 
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-48 md:h-full w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/Terrains/t_shirts_act.webp"
                  fill
                  alt="Court de baby tennis"
                  className="object-cover transform transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}




      <section className="py-16 bg-gradient-to-r from-orange-50 to-green-50 rounded-3xl mb-16">
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
      {/* Carousel des partenaires */}
      <section className="py-8 mb-16 reveal reveal-delay-3">
        <PartnersCarousel />
      </section>
    </div>
  )
}
