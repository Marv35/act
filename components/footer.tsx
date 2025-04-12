import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-600 to-green-700 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Section principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1: Logo et slogan */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white p-3 rounded-xl mb-4 shadow-md transform transition-transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20ACT%20Couleur%20petit%20%281%29.jpg-ajgbR3Egn4mfWrnKNXhqj13noiwzLl.jpeg"
                alt="Logo ACT"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-3">Association Cloysienne de Tennis</h3>
            <p className="text-center md:text-left mb-4 text-gray-100">
              Rejoignez-nous pour des moments sportifs inoubliables !
            </p>
          </div>

          {/* Colonne 2: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 border-b border-green-400 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="mr-3 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <a href="tel:0768428751" className="hover:text-yellow-300 transition-colors">
                  07 68 42 87 51
                </a>
              </li>
              <li className="flex items-center">
                <div className="mr-3 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:actennis28@gmail.com" className="hover:text-yellow-300 transition-colors">
                  actennis28@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="mr-3 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center shadow-sm mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>
                  6 Rte de Montigny,
                  <br />
                  28220 Cloyes-les-Trois-Rivières
                </span>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Map, réseaux sociaux et logo ville */}
          <div>
            <h3 className="text-xl font-bold mb-5 border-b border-green-400 pb-2">Nous trouver</h3>

            {/* Map */}
            <div className="mb-5 h-40 w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8076440736!2d1.2372195!3d47.9244722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3a1f7f5555555%3A0x5555555555555555!2s6%20Rte%20de%20Montigny%2C%2028220%20Cloyes-les-Trois-Rivi%C3%A8res!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Réseaux sociaux et logo ville */}
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex space-x-3 mb-3">
                <Link
                  href="https://www.instagram.com/association_tennis_cloyes_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com/Tenniscloyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </Link>
              </div>

              <Link
                href="https://www.cloyeslestroisrivieres.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20cloyes-LxZEfiEUZelj4NcJ51UNuTWJdlQpc8.png"
                  alt="Logo Cloyes les Trois Rivières Naturellement"
                  width={160}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-green-500/50 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-200">
          <p>&copy; {new Date().getFullYear()} Association Cloysienne de Tennis - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
