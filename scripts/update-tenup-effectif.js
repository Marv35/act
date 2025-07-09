const fs = require('fs');
const path = require('path');

// Exemple de récupération de données (à remplacer par ta logique réelle)
function fetchEffectifData() {
  // Ici tu peux faire un appel HTTP, lire une base de données, etc.
  // Exemple statique :
  return {
    total: 105,
    jeunes: 48,
    adultes: 57
  };
}

const DATA_PATH = path.join(__dirname, '../public/tenup-effectif.json');
const data = fetchEffectifData();

fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log('Fichier tenup-effectif.json mis à jour automatiquement.');
