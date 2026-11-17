"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { Chef, Divider, Flame, Leaf, Shield } from "./Icons";
import { IMAGES } from "@/lib/data";

const ICONS = [Leaf, Flame, Chef, Shield];

export default function About() {
  const { t } = useLang();
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about-media" data-reveal>
          <div className="about-main">
            <Image src={IMAGES.interior} alt="" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="about-small">
            <Image src={IMAGES.breads} alt="" fill sizes="240px" />
          </div>
          <div className="about-years">
            <b className="gold-text">100%</b>
            <span>{t.about.features[3].t}</span>
          </div>
        </div>
        <div className="about-copy">
          <span className="eyebrow" data-reveal>{t.about.eyebrow}</span>
          <h2 className="h2" data-reveal>{t.about.title}</h2>
          <Divider className="left" />
          <p data-reveal>{t.about.p1}</p>
          <p data-reveal>{t.about.p2}</p>
          <ul className="features">
            {t.about.features.map((f, i) => {
              const Ic = ICONS[i];
              return (
                <li key={f.t} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="feat-ic"><Ic width={22} height={22} /></span>
                  <div>
                    <b>{f.t}</b>
                    <small>{f.d}</small>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
