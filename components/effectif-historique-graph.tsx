'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function EffectifHistoriqueGraph() {
  type Effectif = { saison: string; total: number; jeunes: number; adultes: number };
  const [data, setData] = useState<Effectif[] | null>(null);

  useEffect(() => {
    fetch('/tenup-effectif-historique.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <div>Chargement du graphique...</div>;

  const labels = data.map((e: any) => e.saison);
  const total = data.map((e: any) => e.total);
  const jeunes = data.map((e: any) => e.jeunes);
  const adultes = data.map((e: any) => e.adultes);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h3 className="font-bold mb-4 text-green-700">Historique des effectifs du club</h3>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: 'Total',
              data: total,
              borderColor: '#16a34a',
              backgroundColor: '#bbf7d0',
              tension: 0.2,
            },
            {
              label: 'Jeunes',
              data: jeunes,
              borderColor: '#2563eb',
              backgroundColor: '#dbeafe',
              tension: 0.2,
            },
            {
              label: 'Adultes',
              data: adultes,
              borderColor: '#f59e42',
              backgroundColor: '#fef3c7',
              tension: 0.2,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' as const },
            title: { display: false },
          },
        }}
      />
    </div>
  );
}
