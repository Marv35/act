import type { NextApiRequest, NextApiResponse } from "next"
import puppeteer from "puppeteer"
import fs from "fs"
import path from "path"

const CACHE_PATH = path.join(process.cwd(), "public", "tenup-effectif.json")
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 jours en ms

async function scrapeEffectif() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  const page = await browser.newPage()
  await page.goto("https://tenup.fft.fr/club/53280682/groupes", { waitUntil: "networkidle2" })
  await page.waitForSelector(".block-color-wrapper.block-new-ficheclub.block-tags.block-effectif-club .effectif-chiffre", { timeout: 10000 })
  const chiffres = await page.$$eval(
    ".block-color-wrapper.block-new-ficheclub.block-tags.block-effectif-club .effectif-chiffre",
    els => els.map(el => parseInt(el.textContent?.trim() || "0", 10))
  )
  await browser.close()
  if (chiffres.length < 3) {
    return { total: null, jeunes: null, adultes: null }
  }
  return {
    total: chiffres[0],
    jeunes: chiffres[1],
    adultes: chiffres[2],
  }
}

// On ne fait le scraping QUE en local (jamais sur Vercel)
function isVercel() {
  return !!process.env.VERCEL || process.env.NODE_ENV === "production";
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let data = null;
    if (fs.existsSync(CACHE_PATH)) {
      data = JSON.parse(fs.readFileSync(CACHE_PATH, "utf-8"));
    }
    // En production (Vercel), on ne fait JAMAIS de scraping, on sert toujours le cache
    if (isVercel()) {
      if (data) {
        return res.status(200).json(data);
      } else {
        return res.status(500).json({ error: "Aucune donnée d'effectif disponible (cache manquant)" });
      }
    }
    // En local, on peut rafraîchir le cache si besoin
    const refresh = req.query.refresh === "1";
    let cacheValid = false;
    if (fs.existsSync(CACHE_PATH)) {
      const stat = fs.statSync(CACHE_PATH);
      cacheValid = Date.now() - stat.mtimeMs < CACHE_DURATION;
    }
    if (!data || refresh || !cacheValid) {
      data = await scrapeEffectif();
      fs.writeFileSync(CACHE_PATH, JSON.stringify(data), "utf-8");
    }
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Scraping or cache failed" });
  }
}
