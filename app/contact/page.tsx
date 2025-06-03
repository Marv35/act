import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Contactez-nous</h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Formulaire de contact */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-green-600">Envoyez-nous un message</h2>
            <ContactForm />
          </div>

          {/* Informations de contact */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-green-600">Nos coordonnées</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p>Association Cloysienne de Tennis</p>
                    <p>6, route de Montigny</p>
                    <p>28220 Cloyes-les-Trois-Rivières</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p>
                      <a href="tel:0768428751" className="hover:text-green-600 transition-colors">
                        07 68 42 87 51
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>
                      <a href="mailto:actennis28@gmail.com" className="hover:text-green-600 transition-colors">
                        actennis28@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Suivez-nous</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/Tenniscloyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/association_tennis_cloyes_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Nous trouver</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8076440736!2d1.2372195!3d47.9244722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3a1f7f5555555%3A0x5555555555555555!2s6%20Rte%20de%20Montigny%2C%2028220%20Cloyes-les-Trois-Rivi%C3%A8res!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Association Cloysienne de Tennis"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Logo de la ville */}
        {/*<div className="flex justify-center mb-12">
          <Link
            href="https://www.cloyeslestroisrivieres.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20cloyes-LxZEfiEUZelj4NcJ51UNuTWJdlQpc8.png"
              alt="Logo Cloyes les Trois Rivières Naturellement"
              width={300}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>*/}
      </div>
    </div>
  )
}
