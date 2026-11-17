"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangContext";
import { Divider } from "./Icons";
import { MENU, PROMO_PERCENT, formatPrice, promoPrice } from "@/lib/data";

export default function MenuSection() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState(MENU[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const current = MENU.find((c) => c.id === cat)!;

  useEffect(() => {
    const h = (e: Event) => setCat((e as CustomEvent<string>).detail);
    window.addEventListener("menu:select", h);
    return () => window.removeEventListener("menu:select", h);
  }, []);

  useEffect(() => {
    // Faqat tablar qatorini gorizontal suramiz (sahifani emas)
    const box = tabsRef.current;
    const el = box?.querySelector<HTMLElement>(`[data-id="${cat}"]`);
    if (box && el) {
      box.scrollTo({ left: el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
    }
  }, [cat]);

  return (
    <section className="section menu-sec" id="menu">
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">{t.menu.eyebrow}</span>
          <h2 className="h2">{t.menu.title}</h2>
          <Divider />
          <p>{t.menu.text}</p>
        </div>

        <div className="tabs" ref={tabsRef} role="tablist" data-reveal>
          {MENU.map((c) => (
            <button
              key={c.id}
              data-id={c.id}
              role="tab"
              aria-selected={cat === c.id}
              className={cat === c.id ? "on" : ""}
              onClick={() => setCat(c.id)}
            >
              {c.name[lang]}
              {c.dishes.some((d) => d.promo) && <i className="tab-dot">−{PROMO_PERCENT}%</i>}
            </button>
          ))}
        </div>

        <div className="menu-grid" key={cat}>
          <div className="menu-visual">
            <Image src={current.image} alt={current.name[lang]} fill sizes="(max-width: 900px) 100vw, 40vw" />
            <div className="menu-visual-cap">
              <small>{current.dishes.length} {lang === "uz" ? "taom" : "блюд"}</small>
              <h3>{current.name[lang]}</h3>
            </div>
          </div>

          <ul className="dishes" role="tabpanel">
            {current.dishes.map((d, i) => (
              <li key={d.name.uz} className="dish" style={{ animationDelay: `${i * 70}ms` }}>
                <div className="dish-top">
                  <h4>
                    {d.name[lang]}
                    {d.hit && <span className="chip">{t.menu.hit}</span>}
                    {d.promo && <span className="chip chip-red">−{PROMO_PERCENT}%</span>}
                  </h4>
                  <span className="dots" />
                  <span className="price">
                    {d.promo && <s>{formatPrice(d.price)}</s>}
                    <b>{formatPrice(d.promo ? promoPrice(d.price) : d.price)}</b>
                    <small>
                      {t.menu.sum}
                      {d.unit ? ` / ${d.unit[lang]}` : ""}
                    </small>
                  </span>
                </div>
                <p>{d.desc[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="menu-note">{t.menu.note}</p>
      </div>
    </section>
  );
}
