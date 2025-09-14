// Script Node.js pour mettre à jour automatiquement l'historique des effectifs chaque semaine

const fs = require('fs');
const path = require('path');

const HISTO_PATH = path.join(__dirname, '../public/tenup-effectif-historique.json');
const CURRENT_PATH = path.join(__dirname, '../public/tenup-effectif.json');

// Nouvelle donnée à ajouter (à adapter selon ton flux, ici on lit depuis CURRENT_PATH si dispo)
let current = null;
if (fs.existsSync(CURRENT_PATH)) {
  current = JSON.parse(fs.readFileSync(CURRENT_PATH, 'utf-8'));
} else {
  console.error('Aucune nouvelle donnée trouvée pour mise à jour.');
  process.exit(1);
}

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

// Met à jour le fichier tenup-effectif.json avec la dernière valeur de l'historique
const last = historique[historique.length - 1];
fs.writeFileSync(CURRENT_PATH, JSON.stringify({ total: last.total, jeunes: last.jeunes, adultes: last.adultes }, null, 2), 'utf-8');

console.log('Historique mis à jour dans public/tenup-effectif-historique.json :', historique);
console.log('Dernière valeur copiée dans public/tenup-effectif.json :', last);
