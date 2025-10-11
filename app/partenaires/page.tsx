import Image from "next/image"

export default function Partenaires() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Partenaires et Sponsors</h1>

      <div className="max-w-4xl mx-auto">
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nos partenaires principaux</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-48 h-48 mb-4 flex items-center justify-center">
                <a
                  href="https://www.carrefour.fr/magasin/express-cloyes-sur-le-loir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/Partenaires/Carrefour_Express_vert.webp"
                    alt="Logo Carrefour Express"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </a>
              </div>
              <h3 className="font-bold mb-2">Carrefour Express</h3>
              <p className="text-center text-sm">Partenaire principal de l'ACT</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-48 h-48 mb-4 flex items-center justify-center">
                <a
                  href="https://www.guy-hoquet.com/agence-immobiliere/chateaudun"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/Guy_hoquet.webp"
                  alt="Logo Guy Hoquet"
                  width={200}
                  height={200}
                  className="object-contain"
                />
                </a>
              </div>
              <h3 className="font-bold mb-2">Guy Hoquet</h3>
              <p className="text-center text-sm">Partenaire principal de l'ACT</p>
            </div>
          </div>
        </section> */}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nos partenaires</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-2 flex items-center justify-center">
                <a
                  href="https://www.guy-hoquet.com/agence-immobiliere/chateaudun"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/Guy_hoquet.webp"
                  alt="Logo Guy Hoquet"
                  width={200}
                  height={200}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Guy Hoquet</h3>
                <p className="text-sm text-gray-600">Agence immobilière sur Chateaudun (Partenaire distribuant la dotation de chèques sur le tournoi)</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-40 h-32 mb-2 flex items-center justify-center">
                <a
                  href="https://www.ad.fr/garage/ad-carrosserie-dunoise"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/AD_Cassonnet.webp"
                  alt="Logo Garage AD Cassonnet"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">AD Cassonnet</h3>
                <p className="text-sm text-gray-600">(Partenaires fournisseurs des balles sur notre tournoi)</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-2 flex items-center justify-center">
                <a
                  href="https://www.garage-cassonnet-cloyes.fr/"
                  target="_blank"
                  rel="noopener noreferrer">
                <Image
                  src="/images/Partenaires/Peugeot_cassonnet.webp"
                  alt="Logo Garage Cassonnet Peugeot"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Garages Peugeot Cassonnet </h3>
                <p className="text-sm text-gray-600">(Partenaires fournisseurs des balles sur notre tournoi)</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-40 h-32 mb-2 flex items-center justify-center">
                <a
                  href="https://www.pagesjaunes.fr/pros/63034760"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/Bvelec.webp"
                  alt="Logo BV elec"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">BV elec</h3>
                <p className="text-sm text-gray-600">Électricien à Cloyes sur le Loir (Partenaire fournisseur des boissons gratuites lors du tournoi)</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-48 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.vorwerk.com/fr/fr/c/vorwerk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/images/Partenaires/Vorwerk.webp"
                  alt="Logo Vorwerk"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Vorwerk</h3>
              </div>
            </div>

              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.carrefour.fr/magasin/express-cloyes-sur-le-loir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/Partenaires/Carrefour_Express_vert.webp"
                    alt="Logo Carrefour Express"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Carrefour Express</h3>
                <p className="text-sm text-gray-600">Magasin à Cloyes sur le Loir</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.pagesjaunes.fr/pros/05686654"
                  target="_blank"
                  rel="noopener noreferrere"
                  >
                  <Image
                  src="/images/Partenaires/Credit_agricole.webp"
                  alt="Logo Crédit Agricole Val de France"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Crédit Agricole Val de France</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.claveau-et-styles.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/claveau.webp"
                  alt="Logo Claveau"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Claveau</h3>
                <p className="text-sm text-gray-600">Peinture, ravalement, revêtements de sols à Cloyes sur le Loir</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-48 h-32 mb-2 flex items-center justify-center">
                <a
                  href="https://www.lerabotdesbois.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <Image
                  src="/images/Partenaires/La_menuiserie.webp"
                  alt="Logo Menuiserie le rabot des bois"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Menuiserie le rabot des bois</h3>
                <p className="text-sm text-gray-600">à Cloyes sur le Loir</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-58 h-32 mb-2 flex items-center justify-center">
                <a
                  href="https://www.sporteam-tennis.com/agences/vendome"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/Sporteam.webp"
                  alt="Logo Sporteam"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Sporteam</h3>
                <p className="text-sm text-gray-600">Notre spécialiste de tennis à Vendôme</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-48 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://agence.mma.fr/cloyes-les-trois-rivieres/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/Mma.webp"
                  alt="Logo M.M.A"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">M.M.A </h3>
                <p className="text-sm text-gray-600">Assurance</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.audilab.fr/centre/audioprothesiste-cloyes-sur-le-loir/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/images/Partenaires/Audilab.webp"
                  alt="Logo Audilab"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Audilab</h3>
                <p className="text-sm text-gray-600">Audioprothésiste</p>
              </div>
            </div>
          
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-48 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.le-domaine-du-pecheur.fr/"
                  target="_blank"
                  rel="noopener noreferrere"
                  >
                  <Image
                  src="/images/Partenaires/Domaine-pecheur.webp"
                  alt="Logo Domaine du pecheur"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Le Domaine du Pêcheur</h3>
                <p className="text-sm text-gray-600">Magasin de pêche à Cloyes sur le loir</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://auto-recuper-lascaux.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Partenaires/Auto_recuper_lascaux.webp"
                  alt="Logo Auto Recuper Lascaux"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Auto Recuper Lascaux</h3>
                <p className="text-sm text-gray-600">Casse automobile à Cloyes sur le Loir</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center  justify-center">
                <a
                  href="https://www.lerefletdaurelie.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <Image
                  src="/images/Partenaires/Reflet_aurelie.webp"
                  alt="Logo Le reflet d'Aurelie"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Le reflet d'Aurélie</h3>
                <p className="text-sm text-gray-600">Salon de coiffure à Cloyes sur le Loir</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.multi-toitures-services-pecnard.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <Image
                  src="/images/Partenaires/Mts_pecnard.webp"
                  alt="Logo M.T.S"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">M.T.S</h3>
                <p className="text-sm text-gray-600">Charpentier, couvreur, menuisier à Cloyes sur le Loir</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://cphv41.fr/fr/bu/1016563/244974/damien-guenet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/images/Partenaires/Damien_guenet.webp"
                  alt="Logo Damien Guerent"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Damien Guenet</h3>
                <p className="text-sm text-gray-600">Traiteur lors de nos tournois et manifestations</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://stef-o-pizz.eatbu.com/?lang=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/images/Partenaires/Stef_o_pizza.webp"
                  alt="Logo Stef O Pizza"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Stef O Pizza</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-58 h-32 mb-4 flex items-center justify-center">
                <a
                  href="https://www.artgraphique-design.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/images/Partenaires/logo_agd.webp"
                  alt="Logo Art Graphique Design"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-1">Art Graphique Design</h3>
                <p className="text-sm text-gray-600">à Chateaudun</p>
              </div>
            </div>
            
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nos sponsors sur le tournoi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-24 h-24 mr-4 flex items-center justify-center">
                <a
                  href="https://www.pagesjaunes.fr/pros/50007712"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Sponsors/Au_relais_de_cloyes.webp"
                  alt="Logo Au relais de cloyes"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-1">Au relais de cloyes</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-24 h-24 mr-4 flex items-center justify-center">
                <a
                  href="https://www.artisansfleuristesdefrance.com/livraison/28-cloyes-les-trois-rivieres-l-epi-floral"
                  target="_blank"
                  rel="nooperer noreferrer"
                >
                <Image
                  src="/images/Sponsors/Epi_floral.webp"
                  alt="Logo L'épi floral"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-1">L'épi floral</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-24 h-24 mr-4 flex items-center justify-center">
                <a
                  href="https://www.lesaintjacques.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Image
                  src="/images/Sponsors/Le_saint_jacques.webp"
                  alt="Logo Le Saint Jacques"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-1">Le Saint Jacques</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-24 h-24 mr-4 flex items-center justify-center">
                <a 
                  href="https://www.solfa-carburants.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <Image
                  src="/images/Sponsors/Solfa_carburants.webp"
                  alt="Logo Solfa Carburants"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-1">Solfa Carburants</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>

             <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-24 h-24 mr-4 flex items-center justify-center">
                <a href="https://www.institutdiane-melanie.fr/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                  src="/images/Sponsors/Institut_diana.webp"
                  alt="Logo Institut Diana"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                </a>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">Institut Diane</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
             <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-24 h-24 mr-4 flex items-center justify-center">
                <a href="https://www.gammvert.fr/magasins/magasin-de-cloyes?utm_source=GMB&utm_campaign=Multidiffusion&utm_medium=local&utm_content=1025781"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                  src="/images/Sponsors/Gamm_vert.webp"
                  alt="Logo Gamm vert"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-1">Gamm vert</h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="w-24 h-24 mr-4 flex items-center justify-center">
                <a href="https://auxcopainsgourmands.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                  src="/images/Sponsors/Aux_co'pains_gourmands.webp"
                  alt="Logo Aux Co'pains Gourmands"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-1">Aux Co'pains Gourmands</h3>
                {/* <p className="text-sm text-gray-600">Boulangerie, pâtisserie, charcuterie</p> */}
              </div>
            </div>

            
          </div>

        </section>

        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nos partenaires institutionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20cloyes-LxZEfiEUZelj4NcJ51UNuTWJdlQpc8.png"
                  alt="Logo Ville de Cloyes"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Ville de Cloyes</h3>
              <p className="text-center text-sm">Soutien logistique et financier</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Logo Département d'Eure-et-Loir"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Département d'Eure-et-Loir</h3>
              <p className="text-center text-sm">Subventions et développement sportif</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Logo Fédération Française de Tennis"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Fédération Française de Tennis</h3>
              <p className="text-center text-sm">Affiliation et support technique</p>
            </div>
          </div>
        </section> */}



{/* (A REVOIR ET A EN PARLER) */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Devenir partenaire </h2>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="mb-4">
              Vous souhaitez associer l'image de votre entreprise à notre club de tennis dynamique ? Nous proposons
              différentes formules de partenariat adaptées à vos objectifs et votre budget.
            </p>

            <h3 className="font-bold mb-2">Les avantages</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Visibilité sur nos supports de communication (site web, réseaux sociaux)</li>
              <li>Affichage publicitaire sur nos terrains</li>
              <li>Présence lors de nos événements sportifs</li>
              <li>Invitations aux tournois et animations du club</li>
            </ul>

            <p className="mb-4">
              Pour plus d'informations, n'hésitez pas à nous contacter par email à
              <a href="mailto:actennis28@gmail.com" className="text-green-600 hover:underline">
                {" "}
                actennis28@gmail.com{" "}
              </a>
               ou par téléphone au 0768428751.
            </p>

            {/* <div className="text-center">
              <a
                href="#"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Télécharger notre dossier de partenariat
              </a>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  )
}
