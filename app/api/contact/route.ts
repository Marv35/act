import { NextResponse } from "next/server"
import nodemailer from "nodemailer"


const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASSWORD

if (!GMAIL_USER || !GMAIL_PASS) {
  console.error("ATTENTION: GMAIL_USER ou GMAIL_PASSWORD manquant dans les variables d'environnement")
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
})

export async function POST(request: Request) {
  try {
    // Accepter JSON ou form-data
    let body: any = {}
    const contentType = (request.headers.get("content-type") || "").toLowerCase()
    if (contentType.includes("application/json")) {
      body = await request.json()
    } else {
      const form = await request.formData()
      body = Object.fromEntries(form.entries())
    }

    const { nom, prenom, email, telephone, sujet, message } = body

    // Validation minimale
    if (!nom || !email || !message) {
      return NextResponse.json({ error: "Nom, email et message sont requis" }, { status: 400 })
    }

    const subject = `Contact ACT - ${sujet || "Nouveau message"}`
    const text = `Nouveau message de contact:\n\nNom : ${nom} ${prenom || ""}\nEmail : ${email}\nTéléphone : ${telephone || "Non renseigné"}\nSujet : ${sujet || "Non renseigné"}\n\nMessage :\n${message}`
    const html = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom :</strong> ${nom} ${prenom || ""}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
      <p><strong>Sujet :</strong> ${sujet || "Non renseigné"}</p>
      <h3>Message :</h3>
      <p>${(message || "").replace(/\n/g, "<br>")}</p>
    `

    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_USER, // envoyer à l'adresse du club (ou remplacer par autre adresse)
      replyTo: email,
      subject,
      text,
      html,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Erreur Nodemailer:", error)
    return NextResponse.json(
      { error: error?.message || "Une erreur s'est produite lors de l'envoi du message" },
      { status: 500 },
    )
  }
}