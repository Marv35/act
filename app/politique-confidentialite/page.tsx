import { Mail, Shield, Eye, Edit, Trash2, Clock } from "lucide-react"

export const metadata = {
  title: "Politique de Confidentialité - Association Cloysienne de Tennis",
  description: "Politique de confidentialité et protection des données personnelles du site de l'Association Cloysienne de Tennis",
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Politique de Confidentialité</h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-8">
          <p className="text-gray-700">
            Conformément au Règlement Général sur la Protection des Données (RGPD), 
            cette politique de confidentialité explique comment l'Association Cloysienne de Tennis 
            collecte, utilise et protège vos données personnelles.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
            <Eye className="h-6 w-6 mr-2" />
            1. Données collectées
          </h2>
          <p className="text-gray-700 mb-4">
            Nous collectons les données personnelles suivantes :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Via le formulaire de contact :</strong> nom, prénom, adresse email, numéro de téléphone (optionnel)</li>
            <li><strong>Via le formulaire d'inscription :</strong> nom, prénom, date de naissance, adresse, coordonnées des parents (pour les mineurs), niveau de pratique</li>
            <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées (via les cookies analytiques)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
            <Clock className="h-6 w-6 mr-2" />
            2. Finalité de la collecte
          </h2>
          <p className="text-gray-700 mb-4">
            Vos données personnelles sont collectées pour les finalités suivantes :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Gestion des inscriptions :</strong> traitement des demandes d'adhésion, création des licences</li>
            <li><strong>Communication :</strong> envoi d'informations sur les activités du club, newsletter, convocations aux entrainements et compétitions</li>
            <li><strong>Organisation des tournois :</strong> inscription aux compétitions, gestion des tableaux</li>
            <li><strong>Amélioration du site :</strong> analyse des statistiques de visite pour optimiser l'expérience utilisateur</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
            <Clock className="h-6 w-6 mr-2" />
            3. Durée de conservation
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>Nous conservons vos données personnelles pour les durées suivantes :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Données des licenciés :</strong> durée de la licence + 3 ans après expiration</li>
              <li><strong>Données du formulaire de contact :</strong> 1 an après le dernier contact</li>
              <li><strong>Données analytiques :</strong> 13 mois maximum</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            4. Base légale du traitement
          </h2>
          <p className="text-gray-700">
            Le traitement de vos données personnelles repose sur :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
            <li><strong>Consentement :</strong> pour l'envoi de la newsletter et les cookies analytiques</li>
            <li><strong>Exécution du contrat :</strong> pour la gestion des inscriptions et licences</li>
            <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
            <Eye className="h-6 w-6 mr-2" />
            5. Vos droits
          </h2>
          <p className="text-gray-700 mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Eye className="h-5 w-5 text-green-600 mr-2" />
                <strong className="text-green-600">Droit d'accès</strong>
              </div>
              <p className="text-sm text-gray-600">Vous pouvez obtenir la confirmation du traitement de vos données et en recevoir une copie.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Edit className="h-5 w-5 text-green-600 mr-2" />
                <strong className="text-green-600">Droit de rectification</strong>
              </div>
              <p className="text-sm text-gray-600">Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Trash2 className="h-5 w-5 text-green-600 mr-2" />
                <strong className="text-green-600">Droit à l'effacement</strong>
              </div>
              <p className="text-sm text-gray-600">Vous pouvez demander la suppression de vos données dans certains cas.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-green-600 mr-2" />
                <strong className="text-green-600">Droit d'opposition</strong>
              </div>
              <p className="text-sm text-gray-600">Vous pouvez vous opposer au traitement de vos données pour des motifs légitimes.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
            <Mail className="h-6 w-6 mr-2" />
            6. Contact RGPD
          </h2>
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Pour exercer vos droits ou pour toute demande relative à la protection de vos données personnelles, 
              vous pouvez nous contacter à l'adresse suivante :
            </p>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-green-600 mr-2" />
              <a 
                href="mailto:tennis.cloyes@orange.fr?subject=Demande%20RGPD" 
                className="text-xl font-semibold text-green-600 hover:underline"
              >
                tennis.cloyes@orange.fr
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-4 text-center">
              Nous répondrons à votre demande dans un délai maximum d'un mois.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">7. Modification de la politique</h2>
          <p className="text-gray-700">
            Cette politique de confidentialité peut être modifiée à tout moment. 
            En cas de modification substantielle, nous vous en informerons via le site.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </div>
    </div>
  )
}