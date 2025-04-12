import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

// Configurer SendGrid avec la clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nom, prenom, email, telephone, sujet, message } = body

    // Vérifier que tous les champs requis sont présents
    if (!nom || !prenom || !email || !sujet || !message) {
      return NextResponse.json({ error: "Tous les champs requis doivent être remplis" }, { status: 400 })
    }

    // Créer le message à envoyer
    const msg = {
      to: "associationcloysiennetennis.28@gmail.com", // Adresse email du club
      from: "no-reply@tennis-cloyes.fr", // Doit être une adresse vérifiée dans votre compte SendGrid
      replyTo: email, // Pour que le club puisse répondre directement à l'expéditeur
      subject: `Contact ACT - ${sujet}`,
      text: `
        Nouveau message de contact:
        
        Nom: ${nom} ${prenom}
        Email: ${email}
        Téléphone: ${telephone || "Non renseigné"}
        Sujet: ${sujet}
        
        Message:
        ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${nom} ${prenom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || "Non renseigné"}</p>
        <p><strong>Sujet:</strong> ${sujet}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Envoyer l'email via SendGrid
    await sgMail.send(msg)

    console.log("Email envoyé avec succès")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error)
    return NextResponse.json({ error: "Une erreur s'est produite lors de l'envoi du message" }, { status: 500 })
  }
}
