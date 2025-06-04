import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Utilisation de la clé API depuis .env.local
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, telephone, sujet, message } = await request.json()

    // Validation des champs requis
    if (!nom || !prenom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 },
      )
    }

    // Préparation du message sans templateId
    const msg = {
      to: "associationcloysiennetennis.28@gmail.com",
      from: "associationcloysiennetennis.28@gmail.com", // doit être validée sur SendGrid
      replyTo: email,
      subject: `Contact ACT - ${sujet}`,
      text: `
        Nouveau message de contact :

        Nom : ${nom} ${prenom}
        Email : ${email}
        Téléphone : ${telephone || "Non renseigné"}
        Sujet : ${sujet}

        Message :
        ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${nom} ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>
        <h3>Message :</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    if (error?.response?.body) {
      console.error("Erreur SendGrid :", error.response.body)
    } else {
      console.error("Erreur lors de l'envoi du message :", error)
    }
    return NextResponse.json(
      { error: "Une erreur s'est produite lors de l'envoi du message" },
      { status: 500 },
    )
  }
}