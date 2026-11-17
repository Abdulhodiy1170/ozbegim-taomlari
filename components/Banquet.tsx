"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangContext";
import { Arrow, Briefcase, Cake, Divider, Rings, Users } from "./Icons";
import { IMAGES } from "@/lib/data";

const ICONS = [Rings, Cake, Briefcase, Users];

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / 1600);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

export default function Banquet() {
  const { t } = useLang();
  const pickType = () => window.dispatchEvent(new CustomEvent("booking:type", { detail: 2 }));
  return (
    <section className="section banquet" id="banquet">
      <div className="container banquet-in">
        <div className="banquet-copy">
          <span className="eyebrow" data-reveal>{t.banquet.eyebrow}</span>
          <h2 className="h2" data-reveal>{t.banquet.title}</h2>
          <Divider className="left" />
          <p data-reveal>{t.banquet.text}</p>
          <div className="event-types">
            {t.banquet.types.map((x, i) => {
              const Ic = ICONS[i];
              return (
                <div key={x.t} className="event" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <Ic width={26} height={26} />
                  <b>{x.t}</b>
                  <small>{x.d}</small>
                </div>
              );
            })}
          </div>
          <a href="#booking" className="btn btn-gold" onClick={pickType} data-reveal>
            {t.banquet.cta} <Arrow width={18} height={18} />
          </a>
        </div>

        <div className="banquet-media" data-reveal>
          <div className="bq-img">
            <Image src={IMAGES.banquet} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="bq-cap">
            <b className="gold-text">
              <Counter to={500} />
            </b>
            <span>{t.banquet.capacity}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
