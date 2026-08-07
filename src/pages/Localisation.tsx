import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { localisationPoints } from '../data/content';

const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Localisation() {
  return (
    <div className="space-y-10">
      <section className="rounded-4xl border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-cyan-950/20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Localisation</p>
            <h1 className="text-4xl font-semibold text-white">Carte interactive du bassin de l’Itimbiri</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Explorez les lieux clés du projet, y compris la station d’Aketi et le territoire du bassin, avec une carte interactive simple et responsive.
            </p>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Retour à l’accueil
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
          <div className="relative h-[480px] overflow-hidden rounded-3xl border border-white/10">
            <MapContainer center={[2.5, 23.5]} zoom={8} scrollWheelZoom={true} className="h-full w-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {localisationPoints.map((point) => (
                <Marker key={point.title} position={point.position} icon={markerIcon}>
                  <Popup>
                    <strong>{point.title}</strong>
                    <br />
                    {point.description}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="rounded-4xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20">
          <div className="inline-flex items-center gap-3 rounded-3xl bg-cyan-400/10 p-4 text-cyan-200">
            <MapPin className="h-5 w-5" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Focus régional</p>
              <p className="font-semibold text-white">Bas-Uele, Mongala, Tshopo et Nord-Ubangi</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-slate-300">
            <p>
              Cette carte montre les points de référence du projet HYDRO-SMART ITIMBIRI et situe le bassin dans le nord-est de la République Démocratique du Congo.
            </p>
            <p>
              Elle permet de visualiser la proximité entre la station d’Aketi et les sous-bassins clés, pour mieux comprendre le périmètre d’action du projet.
            </p>
            <div className="grid gap-3">
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Station d’Aketi</p>
                <p className="mt-2 text-sm text-slate-200">Centre de calibration et de validation hydrologique du modèle.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Bassin de l’Itimbiri</p>
                <p className="mt-2 text-sm text-slate-200">Zone d’intervention principale pour l’analyse des scénarios climatiques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
