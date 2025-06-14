import { Trophy, Users, Calendar, Award, Clock } from "lucide-react"
import Link from "next/link"

export default function Competitions() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Compétitions</h1>

      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="text-lg mb-6">
              Notre association organise tout au long de l'année plusieurs compétitions pour permettre à nos adhérents
              de se mesurer dans une ambiance sportive et conviviale.
            </p>
          </div>
        </section>

        {/* Section Tournoi interne, Open et Match libre */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Trophy className="mr-3 text-green-600" />
            Tournoi interne, Open et Match libre
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="mb-6">
              Nous organisons notre traditionnel tournoi interne (octobre-novembre), un Open (Juin), et des matchs
              libres pendant les vacances scolaires pour offrir à chacun la chance de participer et de se challenger,
              quel que soit son niveau.
            </p>

            {/* Cartes descriptives des compétitions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tournoi interne */}
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

              {/* Tournoi Open */}
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg">Tournoi Open</h3>
                </div>
                <p>Période : Juin</p>
                <p>Ouvert à tous les licenciés FFT</p>
                <p className="mt-3 text-sm italic">
                  Venez vous mesurer à des joueurs de tous horizons dans notre tournoi annuel.
                </p>
              </div>

              {/* Match libre */}
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

        {/* Section Championnats par Équipe */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center border-b border-green-200 pb-2">
            <Users className="mr-3 text-green-600" />
            Championnats par Équipe
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <p className="mb-6">
              Nous participons aux championnats départementaux par équipe, offrant à nos membres l'occasion de
              représenter fièrement notre association.
            </p>

            {/* Liste des championnats */}
            <h3 className="text-xl font-semibold mb-4 border-b border-green-200 pb-2">Nos championnats :</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Championnat hiver */}
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
              {/* Championnat printemps */}
              <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg">Championnat départemental printemps</h3>
                </div>
                <p className="mb-2">Période : Printemps</p>
                <p className="text-sm italic">
                  Compétition par équipe au niveau départemental pendant la belle saison.
                </p>
              </div>
            </div>

            {/* Tableau Pré-Régionale */}
            <h3 className="text-xl font-semibold mt-6 mb-4 border-b border-green-200 pb-2">Nos équipes actuelles :</h3>
            <h4 className="text-1xl font-semibold mb-6 flex items-center">
              <Award className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
              PRE-REGIONAL  |  PHASE PRELIMINAIRE  |  POULE B  | (printemps 2024-2025)
            </h4>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border p-2 text-left">Classement</th>
                    <th className="border p-2 text-left">Équipe</th>
                    <th className="border p-2 text-left">Points</th>
                    <th className="border p-2 text-left">Rencontres disputées</th>
                    <th className="border p-2 text-left">Diff. Matchs</th>
                    <th className="border p-2 text-left">Diff. Sets</th>
                    <th className="border p-2 text-left">Diff. Jeux</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Lignes du classement Pré-Régionale */}
                  <tr className="bg-white">
                    <td className="border p-2">1<span className="align-super">e</span></td>
                    <td className="border p-2">TENNIS CLUB FONTENAY SUR EURE 2</td>
                    <td className="border p-2">12</td>
                    <td className="border p-2">5 (2V/3N)</td>
                    <td className="border p-2">+4 (+17/-13)</td>
                    <td className="border p-2">+3 (+37/-34)</td>
                    <td className="border p-2">+15 (+325/-310)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">2<span className="align-super">e</span></td>
                    <td className="border p-2">C'CHARTRES TENNIS 3</td>
                    <td className="border p-2">11</td>
                    <td className="border p-2">5 (2V/2N/1D)</td>
                    <td className="border p-2">+8 (+19/-11)</td>
                    <td className="border p-2">+14 (+41/-27)</td>
                    <td className="border p-2">+35 (+297/-262)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2">3<span className="align-super">e</span></td>
                    <td className="border p-2">TENNIS CLUB DE BREZOLLES 2</td>
                    <td className="border p-2">10</td>
                    <td className="border p-2">5 (1V/3N/1D)</td>
                    <td className="border p-2">-2 (+14/-16)</td>
                    <td className="border p-2">-2 (+34/-36)</td>
                    <td className="border p-2">-7 (+301/-308)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">4<span className="align-super">e</span></td>
                    <td className="border p-2">TENNIS CLUB DUNOIS 3</td>
                    <td className="border p-2">9</td>
                    <td className="border p-2">5 (2V/3D)</td>
                    <td className="border p-2">0 (+15/-15)</td>
                    <td className="border p-2">-1 (+34/-35)</td>
                    <td className="border p-2">0 (+299/-299)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2">5<span className="align-super">e</span></td>
                    <td className="border p-2">ASSOCIATION CLOYSIENNE DE TENNIS 1</td>
                    <td className="border p-2">9</td>
                    <td className="border p-2">5 (1V/2N/2D)</td>
                    <td className="border p-2">-4 (+13/-17)</td>
                    <td className="border p-2">-8 (+27/-35)</td>
                    <td className="border p-2">-27 (+238/-265)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">6<span className="align-super">e</span></td>
                    <td className="border p-2">AMICALE DE LUCE 2</td>
                    <td className="border p-2">9</td>
                    <td className="border p-2">5 (1V/2N/2D)</td>
                    <td className="border p-2">-6 (+12/-18)</td>
                    <td className="border p-2">-6 (+31/-37)</td>
                    <td className="border p-2">-16 (+280/-296)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tableau Division 2 */}
            <h4 className="text-1xl font-semibold mb-6 flex items-center">
              <Award className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
              DIVISION 2 |  PHASE PRELIMINAIRE  |  POULE C  | (printemps 2024-2025) 
            </h4>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border p-2 text-left">Classement</th>
                    <th className="border p-2 text-left">Équipe</th>
                    <th className="border p-2 text-left">Points</th>
                    <th className="border p-2 text-left">Rencontres disputées</th>
                    <th className="border p-2 text-left">Diff. Matchs</th>
                    <th className="border p-2 text-left">Diff. Sets</th>
                    <th className="border p-2 text-left">Diff. Jeux</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Lignes du classement Division 2 */}
                  <tr className="bg-white">
                    <td className="border p-2">1<span className="align-super">e</span></td>
                    <td className="border p-2">DAMMARIE TENNIS CLUB 2</td>
                    <td className="border p-2">15</td>
                    <td className="border p-2">5 (5V)</td>
                    <td className="border p-2">+15 (+20/-5)</td>
                    <td className="border p-2">+30 (+43/-13)</td>
                    <td className="border p-2">+15 (+277/-166)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">2<span className="align-super">e</span></td>
                    <td className="border p-2">TENNIS CLUB COUDRAY 2</td>
                    <td className="border p-2">13</td>
                    <td className="border p-2">5 (4V/1N)</td>
                    <td className="border p-2">+11 (+18/-7)</td>
                    <td className="border p-2">+19 (+37/-18)</td>
                    <td className="border p-2">+88 (+256/-171)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2">3<span className="align-super">e</span></td>
                    <td className="border p-2">ES NOGENT LE ROI TENNIS 2</td>
                    <td className="border p-2">11</td>
                    <td className="border p-2">5 (3V/2N)</td>
                    <td className="border p-2">+3 (+14/-11)</td>
                    <td className="border p-2">+10 (+34/-24)</td>
                    <td className="border p-2">+63 (+256/-193)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">4<span className="align-super">e</span></td>
                    <td className="border p-2">TENNIS CLUB DUNOIS 5</td>
                    <td className="border p-2">9</td>
                    <td className="border p-2">5 (2V/3D)</td>
                    <td className="border p-2">-1 (+12/-13)</td>
                    <td className="border p-2">0 (+28/-28)</td>
                    <td className="border p-2">-8 (+205/-213)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2">5<span className="align-super">e</span></td>
                    <td className="border p-2">MAINVILLIERS TENNIS CLUB 4</td>
                    <td className="border p-2">7</td>
                    <td className="border p-2">5 (1V/4D)</td>
                    <td className="border p-2">-9 (+8/-17)</td>
                    <td className="border p-2">-19 (+18/-37)</td>
                    <td className="border p-2">-83 (+176/-259)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2">6<span className="align-super">e</span></td>
                    <td className="border p-2">ASSOCIATION CLOYSIENNE DE TENNIS 2</td>
                    <td className="border p-2">5</td>
                    <td className="border p-2">5 (5D)</td>
                    <td className="border p-2">-19 (+3/-22)</td>
                    <td className="border p-2">-40 (+7/-47)</td>
                    <td className="border p-2">-171 (+123/-294)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Appel à rejoindre le club */}
        <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 mt-6">
          <p className="font-medium text-center">
            Rejoignez-nous pour partager la passion du tennis en compétition, que vous soyez débutant ou joueur expérimenté !
          </p>
        </div>
      </div>
    </div>
  )
}
