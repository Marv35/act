import Link from "next/link"
import { Download, FileText, CheckCircle, Info } from "lucide-react"

export default function Inscriptions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Inscriptions et Tarifs</h1>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Documents nécessaires pour l'inscription</h2>

            <div className="prose max-w-none">
              <p className="mb-4">Voici tous les documents nécessaires si vous souhaitez vous inscrire :</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Remplir la fiche d'inscription (cf ci-dessous « Fiche Inscription ACTennis V02_A5_2-pages.pdf »).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Apporter un chèque pour le montant total annuel (paiement en trois fois possible).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Pour les mineurs : remplir et signer l'attestation de santé (ci-dessous «
                    modele_attestation_mineur.pdf » et « Questionnaire_de_sante_mineurs.pdf »).
                  </span>
                </li>
                <li className="flex items-start">
                  <Info className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="italic">
                    NB : L'association ne conserve ni le certificat médical ni l'attestation des réponses au
                    questionnaire de santé.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pour les adultes : le certificat médical n'est plus obligatoire.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Rendre l'ancien badge pour recevoir le nouveau. Le non-retour du badge sera facturé 10 euros.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Fournir une enveloppe timbrée à votre adresse pour la convocation à l'Assemblée Générale ou préciser
                    si une convocation par mail vous suffit.
                  </span>
                </li>
              </ul>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <p className="font-medium">
                  Les cours auront lieu le jeudi soir et le samedi matin garantissant 30 heures de cours minimum.
                </p>
              </div>

              <p className="mb-4">
                Vous pouvez laisser les documents dans la boîte aux lettres du club, 6 Route de Montigny ou contacter le
                numéro du club.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/documents/fiche-inscription.pdf"
                className="flex items-center p-4 border rounded-lg hover:bg-green-50 transition-colors"
                download
              >
                <FileText className="mr-3 text-green-600" />
                <span>Fiche Inscription ACTennis</span>
                <Download className="ml-auto text-green-600" />
              </a>
              <a
                href="/documents/attestation-mineur.pdf"
                className="flex items-center p-4 border rounded-lg hover:bg-green-50 transition-colors"
                download
              >
                <FileText className="mr-3 text-green-600" />
                <span>Attestation mineur</span>
                <Download className="ml-auto text-green-600" />
              </a>
              <a
                href="/documents/questionnaire-sante-mineur.pdf"
                className="flex items-center p-4 border rounded-lg hover:bg-green-50 transition-colors"
                download
              >
                <FileText className="mr-3 text-green-600" />
                <span>Questionnaire de santé mineurs</span>
                <Download className="ml-auto text-green-600" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-green-600">Tarifs A.C.T. 2024/2025</h2>
            </div>

            <div className="mb-6">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
                <h3 className="font-bold">Accès au courts + licence Multi-Raquettes FFT</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
                <p className="mb-2">
                  <strong>ADULTES :</strong> Le certificat médical N'EST PAS OBLIGATOIRE pour l'obtention de la licence
                  FFT.
                </p>
                <p>
                  <strong>MINEURS :</strong> L'attestation relative au questionnaire santé est obligatoire pour
                  l'obtention de la licence FFT.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border p-2 text-left">Catégorie</th>
                    <th className="border p-2 text-left">Cotisation</th>
                    <th className="border p-2 text-left">Licence Multi-Raquettes</th>
                    <th className="border p-2 text-left">Adhésion</th>
                    <th className="border p-2 text-left font-bold">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border p-2 font-medium">Adulte 1</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">33 €</td>
                    <td className="border p-2">58 €</td>
                    <td className="border p-2 font-bold">91 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 font-medium">Adulte 2</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">33 €</td>
                    <td className="border p-2">49 €</td>
                    <td className="border p-2 font-bold">82 €</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2 font-medium">Etudiant</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">33 €</td>
                    <td className="border p-2">37 €</td>
                    <td className="border p-2 font-bold">70 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 font-medium">Enfant 1 (7 à 18 ans)</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">23 €</td>
                    <td className="border p-2">31 €</td>
                    <td className="border p-2 font-bold">54 €</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2 font-medium">Enfant 2 (7 à 18 ans)</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">23 €</td>
                    <td className="border p-2">25 €</td>
                    <td className="border p-2 font-bold">48 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 font-medium">Enfant (6 ans et moins)</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">13 €</td>
                    <td className="border p-2">26 €</td>
                    <td className="border p-2 font-bold">39 €</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border p-2 font-medium">Nouvel arrivant (*)</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">33 €</td>
                    <td className="border p-2">41 €</td>
                    <td className="border p-2 font-bold">74 €</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-2 font-medium">Parent (**)</td>
                    <td className="border p-2">-</td>
                    <td className="border p-2">33 €</td>
                    <td className="border p-2">5 €</td>
                    <td className="border p-2 font-bold">38 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-sm mb-6">
              <p>(*) Nouvel arrivant = Adulte non adhérent au club durant l'année N-1</p>
              <p>
                (**) Parent = votre enfant prend des cours à l'ACT, vous voulez jouer avec lui ? La cotisation parent
                vous permet de jouer avec votre enfant uniquement durant toute l'année.
              </p>
            </div>

            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
                <h3 className="font-bold">Accès au courts sans licence ACT</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
                <p className="italic mb-2">(sous réserve de posséder une licence valide dans un autre club)</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="font-medium">Adulte</p>
                    <p className="text-xl font-bold text-green-600">69 €</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="font-medium">Etudiant</p>
                    <p className="text-xl font-bold text-green-600">49 €</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="font-medium">Enfant</p>
                    <p className="text-xl font-bold text-green-600">45 €</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
                <h3 className="font-bold">Accès aux courts + Licence Découverte</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
                <p className="font-medium mb-2">Conditions :</p>
                <p className="mb-4">
                  Valable 3 mois maximum, une fois par saison, la licence Découverte s'adresse à tous les non licenciés
                  sans restriction. Elle est accessible tout au long de l'année (sauf les moins de 15 ans : à partir du
                  25 mars). Durant ces 3 mois vous pouvez accéder aux terrains mais la compétition n'est pas autorisée.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border p-2 text-left">Catégorie</th>
                        <th className="border p-2 text-left">Licence Découverte</th>
                        <th className="border p-2 text-left">Adhésion</th>
                        <th className="border p-2 text-left font-bold">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border p-2 font-medium">Adulte</td>
                        <td className="border p-2">4 €</td>
                        <td className="border p-2">27 €</td>
                        <td className="border p-2 font-bold">31 €</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2 font-medium">Enfant</td>
                        <td className="border p-2">4 €</td>
                        <td className="border p-2">17 €</td>
                        <td className="border p-2 font-bold">21 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
                <h3 className="font-bold">Cours de tennis (30h minimum à l'année)</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="font-medium">Adulte</p>
                    <p className="text-xl font-bold text-green-600">158 €</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="font-medium">Enfant</p>
                    <p className="text-xl font-bold text-green-600">138 €</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
                <h3 className="font-bold">Tennis Forme</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
                <p className="mb-4">
                  La licence est obligatoire. La carte de 10 séances ne donne pas le droit d'accéder aux terrains
                  municipaux en dehors des séances.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border p-2 text-left">Catégorie</th>
                        <th className="border p-2 text-left">Licence FFT OBLIGATOIRE</th>
                        <th className="border p-2 text-left">Carte de 10 séances</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border p-2 font-medium">Adulte</td>
                        <td className="border p-2">33 €</td>
                        <td className="border p-2">69 €</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2 font-medium">Enfant</td>
                        <td className="border p-2">23 €</td>
                        <td className="border p-2">69 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
                <h3 className="font-bold">Location terrain extérieur 1 heure</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
                <p className="text-xl font-bold text-green-600 mb-2">10 euros + chèque de caution</p>
                <p>S'adresser à l'Office du Tourisme (02 37 98 55 27) ou au club.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-xl font-semibold mb-4">Coordonnées du club</h2>
            <div className="space-y-2">
              <p>
                <strong>Association Cloysienne de Tennis</strong>
              </p>
              <p>6, route de Montigny</p>
              <p>28220 Cloyes sur le Loir</p>
              <p>
                Tel :{" "}
                <a href="tel:0768428751" className="text-green-600 hover:underline">
                  07 68 42 87 51
                </a>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:actennis28@gmail.com" className="text-green-600 hover:underline">
                  actennis28@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
