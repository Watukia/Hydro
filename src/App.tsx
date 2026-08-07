import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Localisation from './pages/Localisation';
import Results from './pages/Results';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-semibold transition ${
    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
  }`;

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_25%),linear-gradient(135deg,#020617_0%,#071120_45%,#111827_100%)] text-slate-100">
      <BrowserRouter>
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">HYDRO SMART ITIMBIRI</p>
              <p className="text-xs text-slate-400">Innovation hydrologique pour la résilience climatique</p>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <NavLink to="/" className={navLinkClass} end>
                Accueil
              </NavLink>
              <NavLink to="/results" className={navLinkClass}>
                Résultats
              </NavLink>
              <NavLink to="/localisation" className={navLinkClass}>
                Carte
              </NavLink>
            </nav>
            <NavLink
              to="/localisation"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Voir la carte
            </NavLink>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/localisation" element={<Localisation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>HYDRO-SMART ITIMBIRI — plateforme d’intelligence hydro-climatique pour le bassin de l’Itimbiri.</p>
            <p>Prévision, adaptation et action au service de la sécurité alimentaire.</p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
