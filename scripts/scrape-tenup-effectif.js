// Script Node.js à lancer en local pour scraper les effectifs TenUp et générer le fichier public/tenup-effectif.json

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Fonction principale de scraping : ouvre la page du club sur TenUp et extrait les effectifs
async function scrapeEffectif() {
  // Lancement du navigateur Puppeteer (mode sans sandbox pour compatibilité serveur/local)
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  // Accès à la page du club (remplacer l'URL si besoin)
  await page.goto('https://tenup.fft.fr/club/53280682/groupes', { waitUntil: 'networkidle2' });
  // Attente que les chiffres d'effectif soient chargés dans le DOM
  await page.waitForSelector('.block-color-wrapper.block-new-ficheclub.block-tags.block-effectif-club .effectif-chiffre', { timeout: 10000 });
  // Récupération des chiffres (total, jeunes, adultes) depuis la page
  const chiffres = await page.$$eval(
    '.block-color-wrapper.block-new-ficheclub.block-tags.block-effectif-club .effectif-chiffre',
    els => els.map(el => parseInt(el.textContent?.trim() || '0', 10))
  );
  await browser.close();
  // Vérification que les données sont bien présentes
  if (chiffres.length < 3) {
    return { total: null, jeunes: null, adultes: null };
  }
  // Retourne un objet avec les effectifs
  return {
    total: chiffres[0],
    jeunes: chiffres[1],
    adultes: chiffres[2],
  };
}

// Exécution du script principal : lance le scraping et écrit le résultat dans un fichier JSON
(async () => {
  try {
    const data = await scrapeEffectif();
    const outPath = path.join(__dirname, '../public/tenup-effectif.json');
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf-8');
    console.log('Effectifs TenUp mis à jour dans public/tenup-effectif.json :', data);
  } catch (e) {
    console.error('Erreur lors du scraping :', e);
    process.exit(1);
  }
})();
