const { createClient } = require('@supabase/supabase-js')

// Configure tes variables d'environnement ou remplace par tes clés Supabase
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Exemple de récupération de données (à remplacer par ta logique réelle)
function fetchEffectifData() {
  // Ici tu peux faire un appel HTTP, lire une base de données, etc.
  // Exemple statique :
  return {
    total: 105,
    jeunes: 48,
    adultes: 57
  }
}

async function updateEffectif() {
  const data = fetchEffectifData()
  // Insère ou met à jour la ligne dans la table "tenup_effectif"
  const { error } = await supabase
    .from('tenup_effectif')
    .upsert([data], { onConflict: ['id'] }) // suppose une colonne "id" unique
  if (error) {
    console.error('Erreur Supabase:', error)
  } else {
    console.log('Effectif mis à jour dans Supabase:', data)
  }
}

updateEffectif()
