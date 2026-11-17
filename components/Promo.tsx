"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { Arrow } from "./Icons";
import { IMAGES, PROMO_PERCENT } from "@/lib/data";

export default function Promo() {
  const { t } = useLang();
  const goPlov = () => window.dispatchEvent(new CustomEvent("menu:select", { detail: "palov" }));
  return (
    <section className="promo-wrap" id="promo">
      <div className="container">
        <div className="promo" data-reveal>
          <div className="promo-img">
            <Image src={IMAGES.plov} alt="" fill sizes="(max-width: 800px) 100vw, 40vw" />
          </div>
          <div className="promo-body">
            <span className="promo-tag">{t.promo.tag}</span>
            <h2>
              {t.promo.title}
              <span className="promo-big">
                <b className="gold-text">−{PROMO_PERCENT}%</b> {t.promo.off}
              </span>
            </h2>
            <p>{t.promo.text}</p>
            <a href="#menu" className="btn btn-gold" onClick={goPlov}>
              {t.promo.cta} <Arrow width={18} height={18} />
            </a>
          </div>
          <div className="promo-seal" aria-hidden>
            <span>−{PROMO_PERCENT}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
