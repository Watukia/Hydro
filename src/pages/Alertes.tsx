import { AlertTriangle, Bell, Mail, MessageCircle, Radio, ShieldAlert } from 'lucide-react';
import { alertFeed } from '../data/content';

export default function Alertes() {
  return (
    <div className="space-y-10">
      <section className="rounded-4xl border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-cyan-950/20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Alertes</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Système d’alertes hydriques</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Le tableau de suivi transforme les indicateurs hydrologiques en recommandations d’action pour les acteurs agricoles et les gestionnaires de l’eau.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/243821839934?text=Bonjour%2C%20je%20souhaite%20signaler%20une%20alerte%20hydrique%20pour%20le%20bassin%20de%20l%27Itimbiri."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-3xl border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 transition hover:bg-emerald-400/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
              aria-label="Contacter le canal terrain sur WhatsApp"
            >
              <MessageCircle className="h-5 w-5 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-100">WhatsApp terrain</span>
            </a>
            <a
              href="mailto:watukiad@gmail.com?subject=Alerte%20hydrique%20%E2%80%94%20Itimbiri&body=Bonjour%2C%0A%0AJe%20souhaite%20signaler%20une%20alerte%20hydrique%20pour%20le%20bassin%20de%20l%27Itimbiri.%0A%0ADetails%20%3A"
              className="inline-flex items-center gap-3 rounded-3xl border border-amber-300/30 bg-amber-400/10 px-5 py-3 transition hover:bg-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
              aria-label="Envoyer un e-mail à watukiad@gmail.com"
            >
              <Mail className="h-5 w-5 text-amber-300" />
              <span className="text-sm font-semibold text-amber-100">E-mail d'alerte</span>
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {alertFeed.map((alert) => (
          <article key={alert.title} className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${
                alert.level === 'Critique'
                  ? 'bg-rose-500/20 text-rose-200 border border-rose-300/30'
                  : alert.level === 'Ã‰levÃ©e'
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-300/30'
                    : 'bg-emerald-500/20 text-emerald-200 border border-emerald-300/30'
              }`}>{alert.level}</span>
              <AlertTriangle className="h-5 w-5 text-cyan-300" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">{alert.title}</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">{alert.area}</p>
            <p className="mt-5 text-sm leading-6 text-slate-300">{alert.description}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-800/60 p-4">
              <div className="flex items-center gap-2 text-cyan-200">
                <Radio className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">Recommandation</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{alert.action}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-4xl border border-cyan-400/20 bg-slate-900/70 p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-400/15 p-3 text-cyan-300">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Protocoles dâ€™intervention</p>
            <h2 className="text-2xl font-semibold text-white">Cycle dâ€™alerte et rÃ©ponse</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-slate-800/60 p-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">01</span>
            <p className="mt-3 font-semibold text-white">Collecte des donnÃ©es</p>
            <p className="mt-2 text-sm text-slate-300">Mesures de pluie, ruissellement et humiditÃ© du sol.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-800/60 p-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">02</span>
            <p className="mt-3 font-semibold text-white">DÃ©clenchement</p>
            <p className="mt-2 text-sm text-slate-300">Analyse de seuil et priorisation de lâ€™urgence.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-800/60 p-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">03</span>
            <p className="mt-3 font-semibold text-white">Diffusion</p>
            <p className="mt-2 text-sm text-slate-300">Messages Ã  destination des coopÃ©ratives et dÃ©cideurs.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-800/60 p-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">04</span>
            <p className="mt-3 font-semibold text-white">Action terrain</p>
            <p className="mt-2 text-sm text-slate-300">Planification culturale et rÃ©ponse locale adaptÃ©e.</p>
          </div>
        </div>
      </section>
    </div>
  );
}




