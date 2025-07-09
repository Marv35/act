import type { NextApiRequest, NextApiResponse } from "next"
import { createClient } from "@supabase/supabase-js"

// Création du client Supabase avec les variables d'environnement
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

// Handler de l'API Next.js pour la route /api/tenup-effectif
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Récupère la dernière ligne de la table "tenup_effectif" (la plus récente)
    const { data, error } = await supabase
      .from('tenup_effectif')
      .select('*')
      .order('updated_at', { ascending: false })
      .limit(1)
      .single()
    if (error) {
      // En cas d'erreur de lecture Supabase, retourne une erreur 500
      return res.status(500).json({ error: "Lecture Supabase impossible" })
    }
    // Retourne les données au format JSON avec un code 200 (succès)
    return res.status(200).json(data)
  } catch (e) {
    // En cas d'erreur inattendue, retourne une erreur 500
    res.status(500).json({ error: "Erreur serveur inattendue" })
  }
}
