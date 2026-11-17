"use client";

import { useLang } from "./LangContext";
import { Divider, Quote, Star } from "./Icons";
import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  const { t, lang } = useLang();
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">{t.reviews.eyebrow}</span>
          <h2 className="h2">{t.reviews.title}</h2>
          <Divider />
          <div className="rating">
            <span className="stars">{[0, 1, 2, 3, 4].map((i) => <Star key={i} width={18} height={18} />)}</span>
            <b>5.0</b>
          </div>
        </div>
        <ul className="review-grid">
          {REVIEWS.map((r, i) => (
            <li key={r.name} className="review" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <Quote width={34} height={34} className="q" />
              <p>{r.text[lang]}</p>
              <div className="who">
                <span className="avatar">{r.name.split(" ").map((w) => w[0]).join("")}</span>
                <div>
                  <b>{r.name}</b>
                  <span className="stars sm">{[0, 1, 2, 3, 4].map((k) => <Star key={k} width={12} height={12} />)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
