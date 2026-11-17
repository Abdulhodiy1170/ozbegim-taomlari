"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { Arrow, Ornament } from "./Icons";
import { IMAGES } from "@/lib/data";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <Image src={IMAGES.hero} alt="" fill priority sizes="100vw" className="hero-img" />
        <div className="hero-shade" />
        <div className="pattern" />
      </div>

      <div className="container hero-in">
        <div className="hero-copy">
          <span className="badge rise" style={{ animationDelay: ".1s" }}>
            <Ornament width={14} height={14} /> {t.hero.badge}
          </span>
          <h1 className="hero-title rise" style={{ animationDelay: ".2s" }}>
            <span>{t.hero.title1}</span>
            <span className="gold-text">{t.hero.title2}</span>
          </h1>
          <p className="hero-slogan rise" style={{ animationDelay: ".35s" }}>
            «{t.hero.slogan}»
          </p>
          <p className="hero-text rise" style={{ animationDelay: ".45s" }}>
            {t.hero.text}
          </p>
          <div className="hero-cta rise" style={{ animationDelay: ".55s" }}>
            <a href="#menu" className="btn btn-gold">
              {t.hero.cta1} <Arrow width={18} height={18} />
            </a>
            <a href="#booking" className="btn btn-ghost">
              {t.hero.cta2}
            </a>
          </div>
          <dl className="hero-stats rise" style={{ animationDelay: ".7s" }}>
            {t.hero.stats.map((s) => (
              <div key={s.l}>
                <dt className="gold-text">{s.n}</dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-emblem rise" style={{ animationDelay: ".3s" }}>
          <div className="emblem-ring" />
          <div className="emblem-ring r2" />
          <Image src="/logo.png" alt="O'zbegim Taomlari logotipi" width={460} height={460} priority className="emblem-img" />
        </div>
      </div>

      <a href="#promo" className="scroll-hint" aria-label="Pastga">
        <span />
      </a>
    </section>
  );
}
