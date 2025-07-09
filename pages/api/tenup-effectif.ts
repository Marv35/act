import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import path from "path"

const CACHE_PATH = path.join(process.cwd(), "public", "tenup-effectif.json")

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (fs.existsSync(CACHE_PATH)) {
      const data = JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"))
      return res.status(200).json(data)
    } else {
      return res.status(500).json({ error: "Aucune donnée d'effectif disponible (cache manquant)" })
    }
  } catch (e) {
    res.status(500).json({ error: "Lecture du cache impossible" })
  }
}
