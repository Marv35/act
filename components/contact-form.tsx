"use client"

import type React from "react"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    })

    try {
      // Envoyer les données du formulaire à l'API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Réinitialiser le formulaire après l'envoi réussi
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          sujet: "",
          message: "",
        })

        setStatus({
          submitted: true,
          submitting: false,
          info: {
            error: false,
            msg: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
          },
        })
      } else {
        throw new Error(data.error || "Une erreur s'est produite")
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer.",
        },
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
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
            value={formData.prenom}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.telephone}
            onChange={handleChange}
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
          value={formData.sujet}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        ></textarea>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="consent"
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
          disabled={status.submitting}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.submitting ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Envoyer
            </>
          )}
        </button>
      </div>

      {status.info.msg && (
        <div
          className={`p-4 rounded-md ${status.info.error ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}
        >
          {status.info.msg}
        </div>
      )}

      <div className="text-sm text-gray-500">
        <p>
          Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
        </p>
      </div>
    </form>
  )
}
