import { ArrowRight, Globe2, ShieldCheck, Sparkles, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { challenges, highlights, metrics, pillars } from '../data/content';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 rounded-4xl border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-cyan-950/10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
            <Sparkles className="h-4 w-4" />
            Modélisation hydrologique et alertes pour l’Itimbiri
          </div>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              HYDRO-SMART ITIMBIRI : un outil intelligent pour l’eau, l’agriculture et la résilience.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Une plateforme scientifique et communautaire qui convertit des scénarios climatiques GIEC en indicateurs pratiques pour les décideurs, les agriculteurs et les gestionnaires de l’eau.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/results" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
              Résultats clés <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/localisation" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Carte interactive
            </Link>
          </div>
        </div>

        <div className="rounded-4xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-lg shadow-cyan-950/20">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
              <Waves className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Urgence climatique</p>
              <p className="text-xl font-semibold text-white">Le bassin vit des variations hydrologiques extrêmes.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p className="font-medium text-white">Déficit de données</p>
              <p className="mt-1">Les acteurs locaux manquent d’outils de suivi hydrologique en temps réel.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p className="font-medium text-white">Impact agricole</p>
              <p className="mt-1">Le ruissellement et l’humidité du sol sont menacés, avec des pertes majeures attendues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {challenges.map((item) => (
          <div key={item.title} className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-400/30">
            <div className="mb-4 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-4xl border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/20">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon === 'Microscope' ? Sparkles : pillar.icon === 'BarChart3' ? Globe2 : ShieldCheck;
            return (
              <div key={pillar.title} className="rounded-3xl border border-white/10 bg-slate-800/70 p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-4xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Unique</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Une approche scientifique et communautaire</h2>
          </div>
          <Link to="/localisation" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20">
            Voir la carte géographique
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-slate-800/70 p-5 text-sm text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
