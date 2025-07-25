import Image from "next/image";
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
                    Remplir la fiche d'inscription (cf ci-dessous « Fiche Inscription ACT.pdf »).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Apporter un chèque pour le montant total annuel.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    Pour les mineurs : remplir et signer l'attestation de santé (ci-dessous « Attestation mineur.pdf » et « Questionnaire de santé mineurs.pdf »).
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
              </ul>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <p className="font-medium">
                  Nous garantissons 30 heures de cours pour la saison.
                </p>
              </div>

              <p className="mb-4">
                Vous pouvez laisser les documents dans la boîte aux lettres du club, 6 Route de Montigny ou contacter le
                numéro du club.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/documents/Fiche_Inscription_ACT.pdf"
                className="flex items-center p-4 border rounded-lg hover:bg-green-50 transition-colors"
                download
              >
                <FileText className="mr-3 text-green-600" />
                <span>Fiche Inscription ACT</span>
                <Download className="ml-auto text-green-600" />
              </a>
              <a
                href="/documents/Attestation_mineur.pdf"
                className="flex items-center p-4 border rounded-lg hover:bg-green-50 transition-colors"
                download
              >
                <FileText className="mr-3 text-green-600" />
                <span>Attestation mineur</span>
                <Download className="ml-auto text-green-600" />
              </a>
              <a
                href="/documents/Questionnaire_de_sante_mineurs.pdf"
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
              <h2 className="text-2xl font-semibold text-green-600">Tarifs ACT saison 2025 / 2026</h2>
            </div>

            {/* Cotisation Annuelle */}
            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
          <h3 className="font-bold">Cotisation Annuelle : Accès aux courts + licence Multi-Raquettes</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
          <p className="mb-2">
            <strong>MINEURS :</strong> L'attestation relative au questionnaire de santé est obligatoire pour l'obtention de la licence FFT.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-green-100">
            <th className="border p-2 text-left">Cotisation</th>
            <th className="border p-2 text-left">Licence Multi-Raquettes (€)</th>
            <th className="border p-2 text-left">Adhésion (€)</th>
            <th className="border p-2 text-left font-bold">TOTAL (€)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
            <td className="border p-2 font-medium">Adulte 1</td>
            <td className="border p-2">33</td>
            <td className="border p-2">63</td>
            <td className="border p-2 font-bold">96</td>
                </tr>
                <tr className="bg-gray-50">
            <td className="border p-2 font-medium">Adulte 2</td>
            <td className="border p-2">33</td>
            <td className="border p-2">49</td>
            <td className="border p-2 font-bold">82</td>
                </tr>
                <tr className="bg-white">
            <td className="border p-2 font-medium">Étudiant</td>
            <td className="border p-2">33</td>
            <td className="border p-2">37</td>
            <td className="border p-2 font-bold">70</td>
                </tr>
                <tr className="bg-gray-50">
            <td className="border p-2 font-medium">Enfant 1 (7 à 18 ans)</td>
            <td className="border p-2">23</td>
            <td className="border p-2">34</td>
            <td className="border p-2 font-bold">57</td>
                </tr>
                <tr className="bg-white">
            <td className="border p-2 font-medium">Enfant 2 (7 à 18 ans)</td>
            <td className="border p-2">23</td>
            <td className="border p-2">25</td>
            <td className="border p-2 font-bold">48</td>
                </tr>
                <tr className="bg-gray-50">
            <td className="border p-2 font-medium">Enfant (6 ans et moins)</td>
            <td className="border p-2">13</td>
            <td className="border p-2">26</td>
            <td className="border p-2 font-bold">39</td>
                </tr>
                <tr className="bg-white">
            <td className="border p-2 font-medium">Nouvel arrivant (*)</td>
            <td className="border p-2">33</td>
            <td className="border p-2">43</td>
            <td className="border p-2 font-bold">76</td>
                </tr>
                <tr className="bg-gray-50">
            <td className="border p-2 font-medium">Parent (**)</td>
            <td className="border p-2">33</td>
            <td className="border p-2">7</td>
            <td className="border p-2 font-bold">40</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-xs mt-3 space-y-1">
            <p>(*) Nouvel arrivant = Adulte non adhérent au club durant l'année N-1.</p>
            <p>(**) Parent = votre enfant prend des cours à l'ACT, vous voulez jouer avec lui ? La cotisation parent vous permet de jouer avec votre enfant uniquement, durant toute l'année.</p>
          </div>
              </div>
            </div>

            {/* Cotisation ÉTÉ 1 mois */}
            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
          <h3 className="font-bold">Cotisation ÉTÉ 1 mois</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
          <p className="mb-2">Valable du 1er juin au 31 août.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] border-collapse text-sm">
              <thead>
                <tr className="bg-green-100">
            <th className="border p-2 text-left">Cotisation</th>
            <th className="border p-2 text-left">Licence Multi-Raquettes (€)</th>
            <th className="border p-2 text-left">Adhésion (€)</th>
            <th className="border p-2 text-left font-bold">TOTAL (€)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
            <td className="border p-2 font-medium">Adulte</td>
            <td className="border p-2">33</td>
            <td className="border p-2">30</td>
            <td className="border p-2 font-bold">63</td>
                </tr>
                <tr className="bg-gray-50">
            <td className="border p-2 font-medium">Enfant (7 à 18 ans)</td>
            <td className="border p-2">23</td>
            <td className="border p-2">20</td>
            <td className="border p-2 font-bold">43</td>
                </tr>
                <tr className="bg-white">
            <td className="border p-2 font-medium">Enfant (6 ans et moins)</td>
            <td className="border p-2">13</td>
            <td className="border p-2">20</td>
            <td className="border p-2 font-bold">33</td>
                </tr>
              </tbody>
            </table>
          </div>
              </div>
            </div>

            {/* Cotisation Découverte 3 mois */}
            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
          <h3 className="font-bold">Cotisation Découverte 3 mois</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
          <p className="mb-2">Accès aux terrains pendant 3 mois, compétition NON autorisée.<br />
            Valable 3 mois maximum, une fois par saison, la licence Découverte s’adresse à tous les non licenciés sans restriction. Elle est accessible tout au long de l’année (sauf les moins de 15 ans : à partir du 25 mars).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] border-collapse text-sm">
              <thead>
                <tr className="bg-green-100">
            <th className="border p-2 text-left">Cotisation</th>
            <th className="border p-2 text-left">Licence Découverte (€)</th>
            <th className="border p-2 text-left">Adhésion (€)</th>
            <th className="border p-2 text-left font-bold">TOTAL (€)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
            <td className="border p-2 font-medium">Adulte</td>
            <td className="border p-2">4</td>
            <td className="border p-2">30</td>
            <td className="border p-2 font-bold">34</td>
                </tr>
                <tr className="bg-gray-50">
            <td className="border p-2 font-medium">Enfant</td>
            <td className="border p-2">4</td>
            <td className="border p-2">20</td>
            <td className="border p-2 font-bold">24</td>
                </tr>
              </tbody>
            </table>
          </div>
              </div>
            </div>

            {/* Cotisation Annuelle sans licence ACT */}
            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
          <h3 className="font-bold">Cotisation Annuelle sans licence ACT</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
          <p className="italic mb-2">Sous réserve de posséder une licence valide dans un autre club.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[300px] border-collapse text-sm">
              <thead>
                <tr className="bg-green-100">
            <th className="border p-2 text-left">Adulte</th>
            <th className="border p-2 text-left">Étudiant</th>
            <th className="border p-2 text-left">Enfant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
            <td className="border p-2 font-bold">71 €</td>
            <td className="border p-2 font-bold">51 €</td>
            <td className="border p-2 font-bold">47 €</td>
                </tr>
              </tbody>
            </table>
          </div>
              </div>
            </div>

            {/* Cours de tennis annuels */}
            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
          <h3 className="font-bold">Cours de tennis annuels (30h minimum assurées)</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[300px] border-collapse text-sm">
              <thead>
                <tr className="bg-green-100">
            <th className="border p-2 text-left">Adulte</th>
            <th className="border p-2 text-left">Enfant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
            <td className="border p-2 font-bold">165 €</td>
            <td className="border p-2 font-bold">145 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2">La licence est obligatoire.</p>
              </div>
            </div>

            {/* Tennis Forme */}
            <div className="mb-8">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
          <h3 className="font-bold">Tennis Forme (carnet de 10 séances de 1h30)</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
          <p className="mb-2 text-sm">
            La licence est obligatoire. <span className="text-red-600">Ne donne pas le droit d'accéder aux terrains municipaux en dehors des séances.</span>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[200px] border-collapse text-sm">
              <thead>
                <tr className="bg-green-100">
            <th className="border p-2 text-left">Adulte / Enfant</th>
            <th className="border p-2 text-left">Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
            <td className="border p-2 font-medium">Adulte / Enfant</td>
            <td className="border p-2 font-bold">72 €</td>
                </tr>
              </tbody>
            </table>
          </div>
              </div>
            </div>

            {/* Location terrain extérieur */}
            <div className="mb-2">
              <div className="bg-green-600 text-white p-3 rounded-t-lg">
          <h3 className="font-bold">Location terrain extérieur 1 heure</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
          <p>10 euros + chèque de caution</p>
          <p className="text-xs mt-1">
            S’adresser à la Maison des Trois Rivières au <span className="font-bold">06 77 28 60 17</span>, ou au club.
          </p>
              </div>
            </div>
          </div>
        </section>
                        
        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
              <div>
                <div className="bg-green-600 text-white p-3 rounded-t-lg">
                  <h3 className="font-bold" id="location la maison des trois rivieres">Location terrains (extérieur et intérieur) pour les non-adhérents</h3>
                </div>
                <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg bg-gray-50">
                  <div className="flex flex-col gap-14 md:flex-row md:items-start">
                    {/* Infos et horaires */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <p>S'adresser à la Maison des Trois Rivières</p>
                        <p>4 rue Nationale – Cloyes-sur-le-Loir <br /> <span className="font-medium">06 77 28 60 17</span></p>
                      </div>
                      <div className="mb-2 flex justify-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded font-bold text-lg">10 € / heure</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col justify-center items-center mt-0 md:mt-0">

                      <Image
                        src="/images/Logo_maison_des_trois_rivières.webp"
                        alt="Logo Maison des Trois Rivières"
                        width={170}
                        height={170}
                        className="object-contain rounded shadow"
                      />
                    </div>
                    <div className="mt-0 md:mt-0">
                      <h4 className="font-semibold mb-0">Horaires d'ouverture :</h4>
                      <table className="min-w-[180px] text-sm">
                        <tbody>
                          <tr>
                            <td className="pr-4 font-medium">Lundi</td>
                            <td>Fermé</td>
                          </tr>
                          <tr>
                            <td className="pr-4 font-medium">Mardi</td>
                            <td>09:00–12:30</td>
                          </tr>
                          <tr>
                            <td className="pr-4 font-medium">Mercredi</td>
                            <td>09:00–12:30, 15:00–18:00</td>
                          </tr>
                          <tr>
                            <td className="pr-4 font-medium">Jeudi</td>
                            <td>Fermé</td>
                          </tr>
                          <tr>
                            <td className="pr-4 font-medium">Vendredi</td>
                            <td>09:00–12:30, 15:00–18:00</td>
                          </tr>
                          <tr>
                            <td className="pr-4 font-medium">Samedi</td>
                            <td>09:00–12:30</td>
                          </tr>
                          <tr>
                            <td className="pr-4 font-medium">Dimanche</td>
                            <td>Fermé</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>  
        </div>
      </div>
      );
}