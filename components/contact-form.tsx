"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react"

interface FormErrors {
  nom?: string
  prenom?: string
  email?: string
  telephone?: string
  message?: string
}

interface ClientInfo {
  ip: string
  userAgent: string
  acceptLanguage: string
  device: string
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [clientInfo, setClientInfo] = useState<ClientInfo | null>(null)

  // Détecter le type d'appareil
  const getDeviceType = (ua: string): string => {
    if (/mobile|android|iphone|ipad|phone/i.test(ua)) return "Mobile/Tablette"
    if (/tablet|ipad/i.test(ua)) return "Tablette"
    return "Ordinateur"
  }

  // Récupérer les infos client au chargement
  useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const res = await fetch("/api/infos-client")
        if (res.ok) {
          const data = await res.json()
          setClientInfo({
            ip: data.ip,
            userAgent: data.userAgent,
            acceptLanguage: data.acceptLanguage,
            device: getDeviceType(data.userAgent),
          })
        }
      } catch (err) {
        console.error("Erreur récupération infos client:", err)
      }
    }
    fetchClientInfo()
  }, [])

  // Validation en temps réel
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "nom":
      case "prenom":
        if (!value.trim()) return "Ce champ est obligatoire"
        if (value.length < 2) return "Minimum 2 caractères"
        break
      case "email":
        if (!value.trim()) return "Ce champ est obligatoire"
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Email invalide"
        break
      case "telephone":
        if (value.trim() && !/^[\d\s\-+()]{10,}$/.test(value)) return "Numéro de téléphone invalide"
        break
      case "message":
        if (!value.trim()) return "Ce champ est obligatoire"
        if (value.length < 10) return "Minimum 10 caractères"
        break
    }
    return undefined
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const err = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: err }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (touched[name]) {
      const err = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: err }))
    }
  }

  const validateForm = (): boolean => {
    if (!formRef.current) return false
    const formData = new FormData(formRef.current)
    const newErrors: FormErrors = {}
    let isValid = true

    const fields = ["nom", "prenom", "email", "message"]
    fields.forEach((field) => {
      const value = (formData.get(field) as string) || ""
      const err = validateField(field, value)
      if (err) {
        newErrors[field as keyof FormErrors] = err
        isValid = false
      }
    })

    const telephone = (formData.get("telephone") as string) || ""
    if (telephone) {
      const telError = validateField("telephone", telephone)
      if (telError) {
        newErrors.telephone = telError
        isValid = false
      }
    }

    setErrors(newErrors)
    setTouched({ nom: true, prenom: true, email: true, telephone: true, message: true })
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setSubmitting(true)
    setError(null)

    try {
      if (!formRef.current) throw new Error("Formulaire introuvable")

      const fd = new FormData(formRef.current)

      // Construction d'un objet JSON propre pour l'API
      const payload = {
        nom: fd.get("nom"),
        prenom: fd.get("prenom"),
        email: fd.get("email"),
        telephone: fd.get("telephone"),
        sujet: fd.get("sujet"),
        message: fd.get("message"),

        // Informations techniques du client
        client_ip: clientInfo?.ip || "",
        client_user_agent: clientInfo?.userAgent || navigator.userAgent,
        client_device: clientInfo?.device || getDeviceType(navigator.userAgent),
        client_language: clientInfo?.acceptLanguage || navigator.language,
        screen_resolution: typeof window !== "undefined" ? `${window.screen.width}x${window.screen.height}` : "",
        client_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        client_referer: typeof document !== "undefined" ? document.referrer || window.location.href : "",
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(true)
        formRef.current.reset()
        setTouched({})
        setErrors({})
      } else {
        setError(data?.error || "Erreur lors de l'envoi du message.")
      }
    } catch (err: any) {
      setError(err?.message || "Erreur réseau lors de l'envoi.")
    } finally {
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setSuccess(false)
    setError(null)
    setErrors({})
    setTouched({})
  }

  return (
    <div className="space-y-4">
      {success && (
        <div className="p-6 rounded-lg bg-green-50 border border-green-200">
          <div className="flex items-center justify-center mb-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <p className="text-green-800 text-center font-semibold text-lg">Message envoyé avec succès !</p>
          <p className="text-green-700 text-center text-sm mt-2">
            Nous vous répondrons dans les plus brefs délais.
          </p>
          <button
            onClick={resetForm}
            className="mt-4 w-full flex justify-center items-center py-2 px-4 border border-green-600 rounded-md text-green-600 hover:bg-green-50 transition-colors"
          >
            <Send className="h-4 w-4 mr-2" />
            Envoyer un autre message
          </button>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                errors.nom && touched.nom ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {errors.nom && touched.nom && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />{errors.nom}
              </p>
            )}
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
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                errors.prenom && touched.prenom ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {errors.prenom && touched.prenom && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />{errors.prenom}
              </p>
            )}
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
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                errors.email && touched.email ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />{errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              onBlur={handleBlur}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                errors.telephone && touched.telephone ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
            />
            {errors.telephone && touched.telephone && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />{errors.telephone}
              </p>
            )}
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
            onBlur={handleBlur}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
              errors.message && touched.message ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && touched.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />{errors.message}
            </p>
          )}
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
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Envoyer
              </>
            )}
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