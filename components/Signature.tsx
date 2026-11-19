"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { Arrow, Check, Star } from "./Icons";
import { CONTACT, IMAGES, formatPrice } from "@/lib/data";

export default function Signature() {
  const { t } = useLang();
  return (
    <section className="section signature">
      <div className="container signature-in">
        <div className="signature-img" data-reveal>
          <Image src={IMAGES.kebab} alt={t.signature.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="signature-card" data-reveal>
          <span className="eyebrow">
            <Star width={14} height={14} /> {t.signature.eyebrow}
          </span>
          <h2 className="h2 big">{t.signature.title}</h2>
          <p>{t.signature.text}</p>
          <ul className="checks">
            {t.signature.points.map((p) => (
              <li key={p}>
                <Check width={16} height={16} /> {p}
              </li>
            ))}
          </ul>
          <div className="signature-foot">
            <div className="sig-price">
              <b>{formatPrice(55000)}</b>
              <span>{t.menu.sum}</span>
            </div>
            <a href={CONTACT.express24} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.signature.cta} <Arrow width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
