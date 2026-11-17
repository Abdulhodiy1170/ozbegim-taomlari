"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { Close, Divider } from "./Icons";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % GALLERY.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <section className="section">
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">{t.gallery.eyebrow}</span>
          <h2 className="h2">{t.gallery.title}</h2>
          <Divider />
        </div>
        <div className="gallery">
          {GALLERY.map((g, i) => (
            <button key={g.src} className={`g-item ${g.span}`} onClick={() => setOpen(i)} data-reveal aria-label={`${i + 1}`}>
              <Image src={g.src} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button className="icon-btn lb-close" aria-label="Yopish">
            <Close width={24} height={24} />
          </button>
          <div className="lb-img" onClick={(e) => e.stopPropagation()}>
            <Image src={GALLERY[open].src.replace("w=1200", "w=1800")} alt="" fill sizes="90vw" />
          </div>
        </div>
      )}
    </section>
  );
}
