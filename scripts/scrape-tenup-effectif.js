const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Fonction principale de scraping : ouvre la page du club sur TenUp et extrait les effectifs
async function scrapeEffectif() {
  // Lancement du navigateur Puppeteer
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('https://tenup.fft.fr/club/53280682/groupe', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'debug-tenup.png', fullPage: true });

  // DEBUG : Affiche le HTML de la page pour vérifier la présence du sélecteur
  const html = await page.content();
  fs.writeFileSync('debug-tenup.html', html, 'utf-8');

  // Vérifie si le sélecteur existe avant d'attendre
  const selector = '.block-color-wrapper.block-new-ficheclub.block-tags.block-effectif-club .effectif-chiffre';
  const exists = await page.$(selector);
  if (!exists) {
    console.error(`Sélecteur non trouvé : ${selector}. Vérifie debug-tenup.png et debug-tenup.html`);
    await browser.close();
    return { total: null, jeunes: null, adultes: null };
  }
  // Attend le sélecteur 
  await page.waitForSelector(selector, { timeout: 30000 });
  // Récupération des chiffres (total, jeunes, adultes) depuis la page
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

function loadCurrentData(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch {
    return null;
  }
}

function dataChanged(newData, currentData) {
  return !currentData || JSON.stringify(newData) !== JSON.stringify(currentData);
}

// Exécution du script principal : lance le scraping et écrit le résultat dans un fichier JSON
(async () => {
  try {
    const data = await scrapeEffectif();
    const outPath = path.join(__dirname, '../public/tenup-effectif.json');
    const currentData = loadCurrentData(outPath);

    if (dataChanged(data, currentData)) {
      fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf-8');
      console.log('Données modifiées, fichier mis à jour :', data);

      try {
        execSync('node scripts/add-to-historique.js', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
        console.log('Historique mis à jour automatiquement.');
      } catch (err) {
        console.error('Erreur lors de la mise à jour de l\'historique :', err);
      }
    } else {
      console.log('Données identiques, aucune mise à jour.');
    }
  } catch (e) {
    console.error('Erreur lors du scraping :', e);
    process.exit(1);
  }
})();
