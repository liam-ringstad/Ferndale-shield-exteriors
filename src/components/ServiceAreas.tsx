"use client";

import { useEffect, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const serviceAreas = [
  { name: "Bellingham", lat: 48.7519, lng: -122.4787, neighborhoods: ["Edgemoor", "South Hill", "Fairhaven", "Lettered Streets", "Barkley", "Columbia", "Sehome", "Cornwall Park"] },
  { name: "Ferndale", lat: 48.8468, lng: -122.5906, neighborhoods: ["Downtown Ferndale", "Portal Way"] },
  { name: "Lynden", lat: 48.9468, lng: -122.4520, neighborhoods: ["Downtown Lynden"] },
  { name: "Birch Bay", lat: 48.9143, lng: -122.7631, neighborhoods: ["Birch Bay Village", "Birch Point"] },
  { name: "Sudden Valley", lat: 48.7270, lng: -122.3490, neighborhoods: ["Gate 1–4 Areas"] },
  { name: "Blaine", lat: 48.9937, lng: -122.7474, neighborhoods: ["Semiahmoo", "Downtown Blaine"] },
  { name: "Everson", lat: 48.9199, lng: -122.3383, neighborhoods: [] },
  { name: "Sumas", lat: 48.9988, lng: -122.2640, neighborhoods: [] },
];

function MapComponent() {
  const [mounted, setMounted] = useState(false);
  const [MapContainer, setMapContainer] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [TileLayer, setTileLayer] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [Marker, setMarker] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [Popup, setPopup] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    import("react-leaflet").then((mod) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMapContainer(() => mod.MapContainer as any);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setTileLayer(() => mod.TileLayer as any);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMarker(() => mod.Marker as any);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setPopup(() => mod.Popup as any);
      setMounted(true);
    });

    // Fix default marker icon
    import("leaflet").then((L) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });
    });
  }, []);

  if (!mounted || !MapContainer || !TileLayer || !Marker || !Popup) {
    return (
      <div className="w-full h-[400px] rounded-2xl bg-navy-900/5 flex items-center justify-center">
        <div className="text-silver-400 text-sm">Loading map...</div>
      </div>
    );
  }

  return (
    <MapContainer
      center={[48.82, -122.5]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%", borderRadius: "16px" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {serviceAreas.map((area) => (
        <Marker key={area.name} position={[area.lat, area.lng]}>
          <Popup>
            <strong>{area.name}</strong>
            {area.neighborhoods.length > 0 && (
              <p className="text-xs mt-1">{area.neighborhoods.join(", ")}</p>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default function ServiceAreas() {
  return (
    <section id="areas" className="section-padding bg-silver-50 relative">
      <div className="container-max">
        <AnimateOnScroll className="text-center mb-16">
          <span className="section-badge mb-4 inline-flex">
            📍 Service Areas
          </span>
          <h2 className="heading-lg text-navy-900 mb-4">
            Proudly Serving Whatcom County
          </h2>
          <p className="body-md text-silver-500 max-w-2xl mx-auto">
            From Bellingham to Birch Bay, Lynden to Sudden Valley — we bring premium exterior care to your neighborhood.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <AnimateOnScroll variant="slideLeft">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
            />
            <div className="shadow-xl shadow-navy-900/10 rounded-2xl overflow-hidden border border-silver-200">
              <MapComponent />
            </div>
          </AnimateOnScroll>

          {/* Area List */}
          <AnimateOnScroll variant="slideRight">
            <div className="space-y-4">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="card-elevated p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy-900">{area.name}</h3>
                    {area.neighborhoods.length > 0 && (
                      <p className="text-silver-400 text-sm mt-1">
                        {area.neighborhoods.join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="text-center mt-6">
                <p className="text-silver-400 text-sm">
                  Don&apos;t see your area? <a href="#contact" className="text-forest-600 hover:text-forest-500 font-semibold underline underline-offset-4">Contact us</a> — we likely serve you too!
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
