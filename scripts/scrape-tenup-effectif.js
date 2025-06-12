// Script Node.js à lancer en local pour scraper les effectifs TenUp et générer le fichier public/tenup-effectif.json

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function scrapeEffectif() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('https://tenup.fft.fr/club/53280682/groupes', { waitUntil: 'networkidle2' });
  await page.waitForSelector('.block-color-wrapper.block-new-ficheclub.block-tags.block-effectif-club .effectif-chiffre', { timeout: 10000 });
  const chiffres = await page.$$eval(
    '.block-color-wrapper.block-new-ficheclub.block-tags.block-effectif-club .effectif-chiffre',
    els => els.map(el => parseInt(el.textContent?.trim() || '0', 10))
  );
  await browser.close();
  if (chiffres.length < 3) {
    return { total: null, jeunes: null, adultes: null };
  }
  return {
    total: chiffres[0],
    jeunes: chiffres[1],
    adultes: chiffres[2],
  };
}

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
