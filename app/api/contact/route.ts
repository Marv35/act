import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const GMAIL_USER = process.env.GMAIL_USER
  const GMAIL_PASS = process.env.GMAIL_PASS || process.env.GMAIL_PASSWORD

  if (!GMAIL_USER || !GMAIL_PASS) {
    console.error("ATTENTION: GMAIL_USER ou GMAIL_PASS manquant")
    return NextResponse.json({ error: "Configuration serveur incomplète" }, { status: 500 })
  }

  try {
    let body: any = {}
    const contentType = (request.headers.get("content-type") || "").toLowerCase()

    if (contentType.includes("application/json")) {
      body = await request.json()
    } else {
      const form = await request.formData()
      body = Object.fromEntries(form.entries())
    }

  const {
    nom, prenom, email, telephone, sujet, message,
    client_ip, client_user_agent, client_device, client_language,
    screen_resolution, client_timezone, client_referer
  } = body

    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Nom, email et message sont requis" }, { status: 400 })
    }

    const referer = client_referer || request.headers.get("referer") || "Non spécifiée"
    const country = request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || ""
    const city = request.headers.get("x-vercel-ip-city") || ""
    const location = country ? (city ? `${city}, ${country}` : country) : "Non disponible"

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_PASS },
    })

    const subject = `Contact ACT - ${sujet || "Nouveau message"}`

    const text = `Nouveau message de contact :

Nom : ${nom} ${prenom || ""}
Email : ${email}
Téléphone : ${telephone || "Non renseigné"}
Sujet : ${sujet || "Non renseigné"}

--- Informations techniques ---
Page d'origine : ${referer}
Adresse IP : ${client_ip || "Non détectée"}
Localisation : ${location}
Écran : ${screen_resolution || "Inconnu"}
Navigateur : ${client_user_agent || "Inconnu"}
Langue & Fuseau : ${client_language || "Inconnue"} (${client_timezone || "Inconnu"})

--- Message ---
${message}`

  const html = `
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom :</strong> ${nom} ${prenom || ""}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
    <p><strong>Sujet :</strong> ${sujet || "Non renseigné"}</p>
    <h3>Message :</h3>
    <p>${(message || "").replace(/\n/g, "<br>")}</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ccc;">
    <h4>Informations techniques</h4>
    <p><strong>Page d'origine :</strong> ${referer}</p>
    <p><strong>Adresse IP :</strong> ${client_ip || "Non détectée"}</p>
    <p><strong>Localisation approx. :</strong> ${location}</p>
    <p><strong>Appareil :</strong> ${client_device || "Inconnu"}</p>
    <p><strong>Écran :</strong> ${screen_resolution || "Inconnu"}</p>
    <p><strong>Navigateur :</strong> ${client_user_agent || "Inconnu"}</p>
    <p><strong>Langue & Fuseau :</strong> ${client_language || "Inconnue"} (${client_timezone || "Inconnu"})</p>
  `

    await transporter.sendMail({
      from: GMAIL_USER,
      to: GMAIL_USER,
      replyTo: email,
      subject,
      text,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Erreur Nodemailer:", error)
    return NextResponse.json({ error: error?.message || "Erreur lors de l'envoi" }, { status: 500 })
  }
}