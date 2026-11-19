"use client";

import { useLang } from "./LangContext";
import { Car, Crown, Kids, Tree, Truck, Wifi } from "./Icons";

const ICONS = [Wifi, Car, Kids, Crown, Tree, Truck];

export default function Amenities() {
  const { t } = useLang();
  return (
    <section className="section amen">
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">{t.amenities.eyebrow}</span>
          <h2 className="h2">{t.amenities.title}</h2>
        </div>
        <ul className="amen-grid">
          {t.amenities.items.map((a, i) => {
            const Ic = ICONS[i];
            return (
              <li key={a.t} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="amen-ic"><Ic width={28} height={28} /></span>
                <b>{a.t}</b>
                <small>{a.d}</small>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
