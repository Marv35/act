"use client"

import { useEffect, useRef, useState } from "react"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // reset status when component mounts
    setSubmitting(false)
    setSuccess(false)
    setError(null)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      if (!formRef.current) throw new Error("Formulaire introuvable")

      const fd = new FormData(formRef.current)

      // Use FormSubmit AJAX endpoint to avoid full page redirect and be faster
      const res = await fetch("https://formsubmit.co/ajax/associationcloysiennetennis.28@gmail.com", {
        method: "POST",
        body: fd,
        headers: {
          Accept: "application/json",
        },
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(true)
        formRef.current.reset()
      } else {
        setError(data?.message || data?.error || "Erreur lors de l'envoi")
      }
    } catch (err: any) {
      setError(err?.message || "Erreur réseau")

      // Fallback: si fetch échoue (CORS / réseau), soumettre le formulaire classiquement
      try {
        if (formRef.current) {
          // s'assurer que l'action cible FormSubmit (non-AJAX)
          formRef.current.action = "https://formsubmit.co/associationcloysiennetennis.28@gmail.com"
          // lancer la soumission native — cela provoquera une redirection par FormSubmit
          formRef.current.submit()
          return
        }
      } catch (e) {
        // ignore
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-4">
      {success && (
        <div className="p-4 rounded-md bg-green-50 text-green-700">Votre message a été envoyé.</div>
      )}
      {error && <div className="p-4 rounded-md bg-red-50 text-red-700">{error}</div>}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nouveau message de contact" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
            Sujet <span className="text-red-500">*</span>
          </label>
          <select
            id="sujet"
            name="sujet"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Sélectionnez un sujet</option>
            <option value="Inscription">Inscription</option>
            <option value="Cours de tennis">Cours de tennis</option>
            <option value="Compétitions">Compétitions</option>
            <option value="Réservation de terrain">Réservation de terrain</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
            J'accepte que mes données soient utilisées pour me recontacter <span className="text-red-500">*</span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Envoi..." : "Envoyer"}
          </button>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
          </p>
        </div>
      </form>
    </div>
  )
}
