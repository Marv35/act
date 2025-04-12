import { Trophy, Users, Calendar, Award, Clock } from "lucide-react"
import Link from "next/link"

export default function Competitions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Compétitions</h1>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="text-lg mb-6">
              Notre association organise tout au long de l'année plusieurs compétitions pour permettre à nos adhérents
              de se mesurer dans une ambiance sportive et conviviale.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Trophy className="mr-3 text-green-600" />
            Tournoi interne, Open et Match libre
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="mb-6">
              Nous organisons notre traditionnel tournoi interne (octobre-novembre), un Open (juillet), et des matchs
              libres pendant les vacances scolaires pour offrir à chacun la chance de participer et de se challenger,
              quel que soit son niveau.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg">Tournoi interne</h3>
                </div>
                <p>Période : Octobre-Novembre</p>
                <p>Ouvert à tous les membres du club</p>
                <p className="mt-3 text-sm italic">
                  Une excellente occasion de rencontrer les autres membres du club dans une ambiance conviviale.
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg">Tournoi Open</h3>
                </div>
                <p>Période : Juillet</p>
                <p>Ouvert à tous les licenciés FFT</p>
                <p className="mt-3 text-sm italic">
                  Venez vous mesurer à des joueurs de tous horizons dans notre tournoi annuel.
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg">Match libre</h3>
                </div>
                <p>Période : Vacances scolaires</p>
                <p>Ouvert à tous les membres du club</p>
                <p className="mt-3 text-sm italic">
                  Profitez des vacances pour jouer des matchs amicaux dans un cadre détendu.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Users className="mr-3 text-green-600" />
            Championnats par Équipe
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="mb-6">
              Nous participons aux championnats départementaux par équipe, offrant à nos membres l'occasion de
              représenter fièrement notre association.
            </p>

            <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">Nos championnats :</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg">Championnat départemental d'hiver</h3>
                </div>
                <p className="mb-2">Période : Hiver</p>
                <p className="text-sm italic">
                  Compétition par équipe au niveau départemental pendant la saison hivernale.
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg">Championnat départemental printemps-été</h3>
                </div>
                <p className="mb-2">Période : Printemps-Été</p>
                <p className="text-sm italic">
                  Compétition par équipe au niveau départemental pendant la belle saison.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4 border-b border-green-200 pb-2">Nos équipes actuelles :</h3>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <Award className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span>Pré-régionale (printemps été)</span>
              </li>
              <li className="flex items-center">
                <Award className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                <span>Deuxième division (printemps été)</span>
              </li>
            </ul>

            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 mt-6">
              <p className="font-medium text-center">
                Rejoignez-nous pour partager la passion du tennis en compétition, que vous soyez débutant ou joueur
                expérimenté !
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Vous souhaitez participer ?</h2>

            <div className="text-center">
              <p className="mb-6">
                Pour plus d'informations sur nos compétitions ou pour vous inscrire à l'une d'entre elles, n'hésitez pas
                à nous contacter.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg"
                >
                  Nous contacter
                </Link>
                <Link
                  href="/inscriptions"
                  className="inline-flex items-center bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition-all hover:shadow-md"
                >
                  Voir les tarifs d'inscription
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
