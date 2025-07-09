import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"

// Définition du chemin absolu vers le fichier de cache contenant les données d'effectif
const CACHE_PATH = path.join(process.cwd(), "public", "tenup-effectif.json")

// Handler de l'API Next.js pour la route /api/tenup-effectif
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Vérifie si le fichier de cache existe
    if (fs.existsSync(CACHE_PATH)) {
      // Lit le contenu du fichier JSON et le parse en objet JavaScript
      const data = JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"))
      // Retourne les données au format JSON avec un code 200 (succès)
      return res.status(200).json(data)
    } else {
      // Si le fichier n'existe pas, retourne une erreur 500 avec un message explicite
      return res.status(500).json({ error: "Aucune donnée d'effectif disponible (cache manquant)" })
    }
  } catch (e) {
    // En cas d'erreur de lecture ou de parsing, retourne une erreur 500
    res.status(500).json({ error: "Lecture du cache impossible" })
  }
}
