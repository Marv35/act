"use client"
import { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

// Composant principal qui affiche les graphiques d'effectifs (courbes, barres, camembert)
export default function EffectifTabs() {
  // Définition du type de données attendues pour chaque saison
  type Effectif = { saison: string; total: number; jeunes: number; adultes: number };
  // State pour stocker les données récupérées, l'onglet actif et la saison sélectionnée
  const [data, setData] = useState<Effectif[] | null>(null);
  const [tab, setTab] = useState(0);
  const [selectedSaison, setSelectedSaison] = useState("");

  // Récupération des données d'effectif via un appel fetch (données scrappées et stockées en JSON)
  useEffect(() => {
    fetch("/tenup-effectif-historique.json")
      .then((res) => res.json())
      .then((json: Effectif[]) => {
        setData(json);
        if (json && json.length > 0) setSelectedSaison(json[json.length - 1].saison);
      });
  }, []);

  if (!data) return <div>Chargement du graphique...</div>;

  // Préparation des labels et datasets pour les graphiques
  const labels = data.map((e: Effectif) => e.saison);
  const total = data.map((e: Effectif) => e.total);
  const jeunes = data.map((e: Effectif) => e.jeunes);
  const adultes = data.map((e: Effectif) => e.adultes);

  // Pour le camembert : on récupère les données de la saison sélectionnée
  const saisonData = data.find((e: Effectif) => e.saison === selectedSaison) || { jeunes: 0, adultes: 0 };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
    {tab ===0 && (
     <>
           <h3 className="font-bold mb-4 text-black">Historique des licenciés</h3>
     </>
    )}
        {tab ===1 && (
     <>
          <h3 className="font-bold mb-4 text-black">Historique des licenciés</h3>
     </>
    )}
        {tab ===2 && (
     <>
          <h3 className="font-bold mb-4 text-black">Répartition jeunes/adultes</h3>
     </>
    )}
      {/* Onglets pour naviguer entre les différents graphiques */}
      <div className="flex mb-4">
        <button
          className={`px-2 py-2 rounded-t-lg font-semibold mr-2 ${tab === 0 ? "bg-green-600 text-white" : "bg-green-100 text-green-700"}`}
          onClick={() => setTab(0)}
        >
          Courbes
        </button>
        <button
          className={`px-2 py-2 rounded-t-lg font-semibold mr-2 ${tab === 1 ? "bg-green-600 text-white" : "bg-green-100 text-green-700"}`}
          onClick={() => setTab(1)}
        >
          Barres
        </button>
        <button
          className={`px-2 py-2 rounded-t-lg font-semibold ${tab === 2 ? "bg-green-600 text-white" : "bg-green-100 text-green-700"}`}
          onClick={() => setTab(2)}
        >
          Camembert
        </button>
      </div>
      {tab === 0 && (
        <>
          {/* Graphique en courbes de l'historique des effectifs */}
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "Total",
                  data: total,
                  borderColor: "#16a34a",
                  backgroundColor: "#bbf7d0",
                  tension: 0.2,
                },
                {
                  label: "Jeunes",
                  data: jeunes,
                  borderColor: "#2563eb",
                  backgroundColor: "#dbeafe",
                  tension: 0.2,
                },
                {
                  label: "Adultes",
                  data: adultes,
                  borderColor: "#f59e42",
                  backgroundColor: "#fef3c7",
                  tension: 0.2,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" as const },
                title: { display: false },
              },
            }}
          />
        </>
      )}
      {tab === 1 && (
        <>
          {/* Graphique en barres de l'historique des effectifs */}
          <Bar
            data={{
              labels,
              datasets: [
                {
                  label: "Total",
                  data: total,
                  backgroundColor: "#bbf7d0",
                  borderColor: "#16a34a",
                  borderWidth: 2,
                },
                {
                  label: "Jeunes",
                  data: jeunes,
                  backgroundColor: "#dbeafe",
                  borderColor: "#2563eb",
                  borderWidth: 2,
                },
                {
                  label: "Adultes",
                  data: adultes,
                  backgroundColor: "#fef3c7",
                  borderColor: "#f59e42",
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" as const },
                title: { display: false },
              },
            }}
          />
        </>
      )}
      {tab === 2 && (
        <>
          {/* Graphique camembert (Pie) pour la répartition jeunes/adultes de la saison sélectionnée */}
          <div className="mb-2">
            <label htmlFor="saison-select" className="mr-2 font-medium">Saison :</label>
            <select
              id="saison-select"
              value={selectedSaison}
              onChange={e => setSelectedSaison(e.target.value)}
              className="border rounded px-2 py-1"
            >
              {labels.map((saison: string) => (
                <option key={saison} value={saison}>{saison}</option>
              ))}
            </select>
          </div>
          {/* Conteneur pour réduire la taille du camembert */}
          <div className="max-w-xs mx-auto" style={{height: 250}}>
            <Pie
              data={{
                labels: ["Jeunes", "Adultes"],
                datasets: [
                  {
                    data: [saisonData.jeunes, saisonData.adultes],
                    backgroundColor: ["#2563eb", "#f59e42"],
                    borderColor: ["#dbeafe", "#fef3c7"],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { position: "top" as const },
                  title: { display: false },
                },
              }}
              height={250}
            />
          </div>
        </>
      )}
    </div>
  );
}
// Modules nécessaires :
// - react-chartjs-2 : composants React pour Chart.js
// - chart.js : bibliothèque de graphiques JS
// Les données sont récupérées depuis un fichier JSON généré par scraping (voir scripts/scrape-tenup-effectif.js)
