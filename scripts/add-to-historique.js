// Script Node.js pour mettre à jour automatiquement l'historique des effectifs chaque semaine

const fs = require('fs');
const path = require('path');

const HISTO_PATH = path.join(__dirname, '../public/tenup-effectif-historique.json');
const CURRENT_PATH = path.join(__dirname, '../public/tenup-effectif.json');

// Détermine la saison en cours (ex : "2024-2025")
function getCurrentSaison() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0 = janvier
  // Saison commence en septembre (mois 9)
  if (month >= 9) {
    return `${year}-${year + 1}`;
  } else {
    return `${year - 1}-${year}`;
  }
}

if (!fs.existsSync(CURRENT_PATH)) {
  console.error('Le fichier tenup-effectif.json est introuvable.');
  process.exit(1);
}

const current = JSON.parse(fs.readFileSync(CURRENT_PATH, 'utf-8'));
const saison = getCurrentSaison();
let historique = [];
if (fs.existsSync(HISTO_PATH)) {
  historique = JSON.parse(fs.readFileSync(HISTO_PATH, 'utf-8'));
}

// Met à jour la saison en cours ou ajoute si nouvelle saison
const index = historique.findIndex(e => e.saison === saison);
if (index !== -1) {
  historique[index] = { saison, ...current };
} else {
  historique.push({ saison, ...current });
}

fs.writeFileSync(HISTO_PATH, JSON.stringify(historique, null, 2), 'utf-8');
console.log('Historique mis à jour dans public/tenup-effectif-historique.json :', historique);
