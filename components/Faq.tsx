"use client";

import { useState } from "react";
import { useLang } from "./LangContext";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section faq-sec">
      <div className="container faq-in">
        <div className="sec-head left" data-reveal>
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="h2">{t.faq.title}</h2>
        </div>
        <ul className="faq">
          {t.faq.items.map((it, i) => {
            const on = open === i;
            return (
              <li key={it.q} className={on ? "on" : ""} data-reveal>
                <button onClick={() => setOpen(on ? null : i)} aria-expanded={on}>
                  <span>{it.q}</span>
                  <i aria-hidden />
                </button>
                <div className="faq-a">
                  <div>
                    <p>{it.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
