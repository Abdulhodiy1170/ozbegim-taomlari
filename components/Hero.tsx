"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { Arrow, Star } from "./Icons";
import { IMAGES, PROMO_PERCENT } from "@/lib/data";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" id="top">
      <div className="container hero-in">
        <div className="hero-copy">
          <span className="badge rise" style={{ animationDelay: ".1s" }}>
            {t.hero.badge}
          </span>
          <h1 className="hero-title rise" style={{ animationDelay: ".2s" }}>
            {t.hero.title1} <span className="accent-text">{t.hero.title2}</span>
          </h1>
          <p className="hero-slogan rise" style={{ animationDelay: ".3s" }}>
            «{t.hero.slogan}»
          </p>
          <p className="hero-text rise" style={{ animationDelay: ".4s" }}>
            {t.hero.text}
          </p>
          <div className="hero-cta rise" style={{ animationDelay: ".5s" }}>
            <a href="#menu" className="btn btn-primary">
              {t.hero.cta1} <Arrow width={18} height={18} />
            </a>
            <a href="#booking" className="btn btn-outline">
              {t.hero.cta2}
            </a>
          </div>
          <dl className="hero-stats rise" style={{ animationDelay: ".6s" }}>
            {t.hero.stats.map((s) => (
              <div key={s.l}>
                <dt>{s.n}</dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual rise" style={{ animationDelay: ".25s" }}>
          <div className="hero-photo">
            <Image src={IMAGES.hero} alt="Toshkent oshi" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
          <div className="hero-logo">
            <Image src="/logo.png" alt="O'zbegim Taomlari logotipi" width={150} height={150} priority />
          </div>
          <div className="hero-chip chip-rating">
            <span className="stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} width={14} height={14} />)}</span>
            <b>5.0</b>
          </div>
          <a href="#menu" className="hero-chip chip-promo">
            <b>−{PROMO_PERCENT}%</b>
            <span>{t.promo.title}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
