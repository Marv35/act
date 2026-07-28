import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Mentions Légales - Association Cloysienne de Tennis",
  description: "Mentions légales du site de l'Association Cloysienne de Tennis",
}

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Mentions Légales</h1>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">1. Identité de l'association</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Nom du club :</strong> Association Cloysienne de Tennis</p>
            <p><strong>Adresse du siège social :</strong> 6, route de Montigny, 28220 Cloyes-les-Trois-Rivières</p>
            <div className="flex items-center mt-2">
              <Phone className="h-5 w-5 text-green-600 mr-2" />
              <p><strong>Téléphone :</strong> <a href="tel:0768428751" className="text-green-600 hover:underline">07 68 42 87 51</a></p>
            </div>
            <div className="flex items-center mt-2">
              <Mail className="h-5 w-5 text-green-600 mr-2" />
              <p><strong>Email :</strong> <a href="mailto:actennis28@gmail.com" className="text-green-600 hover:underline">actennis28@gmail.com</a></p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">2. Directeur de la publication</h2>
          <p className="text-gray-700">
            Le directeur de la publication est le Président de l'Association Cloysienne de Tennis, 
            responsable légal de l'association.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">3. Hébergeur</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Nom de l'hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://vercel.com</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">4. Propriété intellectuelle</h2>
          <p className="text-gray-700">
            L'ensemble des contenus présents sur ce site (textes, images, photos, vidéos, logos, sons) 
            est protégé par le droit d'auteur et les droits de propriété intellectuelle. 
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie 
            des éléments du site est interdite sans autorisation écrite préalable de l'Association Cloysienne de Tennis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">5. Responsabilité</h2>
          <p className="text-gray-700">
            Les informations fournies sur ce site le sont à titre purement informatif. 
            L'Association Cloysienne de Tennis s'efforce de fournir des informations exactes et à jour, 
            mais ne peut garantir l'exactitude, l'exhaustivité ou l'actualité des informations diffusées sur le site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-green-600">6. Liens hypertextes</h2>
          <p className="text-gray-700">
            Le site peut contenir des liens vers d'autres sites internet. 
            L'Association Cloysienne de Tennis n'exerce aucun contrôle sur ces sites et décline toute 
            responsabilité quant à leur contenu.
          </p>
        </section>
      </div>
    </div>
  )
}