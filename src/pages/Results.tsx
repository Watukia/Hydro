import { Globe2, Leaf, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { metrics, subBasins } from '../data/content';

export default function Results() {
  return (
    <div className="space-y-16">
      <section className="rounded-4xl border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-cyan-950/20">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Résultats</p>
          <h1 className="text-4xl font-semibold text-white">Performance du modèle hydrologique et indicateurs clés</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Analyse détaillée de la calibration, de la validation et des impacts futurs sur le cycle hydrologique du bassin de l’Itimbiri.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-lg shadow-slate-950/20">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
              <Waves className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Modélisation</p>
              <h2 className="text-2xl font-semibold text-white">Validation du modèle WEAP</h2>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-slate-300">
            <p>
              Le modèle calibré sur la station d’Aketi affiche un NSE de 0,65 et un R² de 0,75 sur les simulations globales. Les moyennes mensuelles atteignent couramment un NSE de 0,93 et un R² de 0,96.
            </p>
            <p>
              Les performances indiquent une capacité solide à anticiper les régimes d’écoulement, ce qui est essentiel pour la gestion des ressources en eau et la planification des infrastructures.
            </p>
          </div>
        </div>

        <div className="rounded-4xl border border-white/10 bg-emerald-500/10 p-8 shadow-lg shadow-emerald-950/10">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-400/20 p-3 text-emerald-200">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Bilan hydrologique</p>
              <h2 className="text-2xl font-semibold text-white">Observation du sol et du ruissellement</h2>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-slate-300">
            <p>
              L’évapotranspiration potentielle dépasse déjà 1400 mm par an, et les projections SSP1-19 montrent un ruissellement pouvant chuter jusqu’à -77,22 %, ce qui accroît le stress hydrique pour les cultures.
            </p>
            <p>
              Ces tendances rendent l’humidité du sol et les alertes agronomiques indispensables pour réduire les risques de pénurie alimentaire.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/20">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
            <Globe2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Réseau de suivi</p>
            <h2 className="text-2xl font-semibold text-white">Sous-bassins et couverture géographique</h2>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-slate-800/80 text-slate-200">
              <tr>
                <th className="px-4 py-3 font-semibold">Sous-bassin</th>
                <th className="px-4 py-3 font-semibold">Territoire</th>
                <th className="px-4 py-3 font-semibold">Surface</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-900/60 text-slate-300">
              {subBasins.map((sub) => (
                <tr key={sub.name}>
                  <td className="px-4 py-3 font-medium text-white">{sub.name}</td>
                  <td className="px-4 py-3">{sub.territory}</td>
                  <td className="px-4 py-3">{sub.area}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-end">
        <Link to="/localisation" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20">
          Voir la localisation sur carte
        </Link>
      </div>
    </div>
  );
}
