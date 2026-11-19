"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { Arrow, Clock, Phone, Pin } from "./Icons";
import { BRANCHES } from "@/lib/data";

/** Toshkent vaqti bo'yicha ochiq/yopiqligini aniqlaydi (08:00–23:00) */
function useOpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const check = () => {
      const h = Number(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hour12: false, timeZone: "Asia/Tashkent" }).format(new Date()));
      setOpen(h >= 8 && h < 23);
    };
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);
  return open;
}

export default function Contact() {
  const { t, lang } = useLang();
  const open = useOpenNow();
  const [active, setActive] = useState(BRANCHES[0].id);
  // Yangi xarita yuklanguncha oldingisi pastki qatlamda ko'rinib turadi
  const [prevId, setPrevId] = useState(BRANCHES[0].id);
  const [loaded, setLoaded] = useState(false);
  const b = BRANCHES.find((x) => x.id === active)!;
  const prev = BRANCHES.find((x) => x.id === prevId)!;

  const select = (id: string) => {
    if (id === active) return;
    setPrevId(loaded ? active : prevId);
    setActive(id);
    setLoaded(false);
  };

  const onMapLoad = (id: string) => {
    setLoaded(true);
    // animatsiya tugagach eski qatlamni olib tashlaymiz
    window.setTimeout(() => setPrevId((p) => (id === p ? p : id)), 900);
  };

  return (
    <section className="section branches" id="contact">
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="h2">{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>

        <div className="branch-tabs" role="tablist" data-reveal>
          {BRANCHES.map((x) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={active === x.id}
              className={`branch-tab ${active === x.id ? "on" : ""}`}
              onClick={() => select(x.id)}
            >
              <Pin width={20} height={20} />
              <span>
                <b>{x.city[lang]}</b>
                <small>{x.label[lang]}</small>
              </span>
            </button>
          ))}
        </div>

        <div className="branch-view" data-reveal>
          <div className="branch-info" key={b.id}>
            <h3>{b.city[lang]}</h3>
            <span className="branch-label">{b.label[lang]}</span>
            <ul>
              <li>
                <Pin width={20} height={20} />
                <div>
                  <small>{t.contact.address}</small>
                  <b>{b.address[lang]}</b>
                </div>
              </li>
              <li>
                <Phone width={20} height={20} />
                <div>
                  <small>{t.contact.phone}</small>
                  <a href={`tel:${b.phone}`} className="phone">{b.phonePretty}</a>
                </div>
              </li>
              <li>
                <Clock width={20} height={20} />
                <div>
                  <small>{t.contact.hours}</small>
                  <b>{b.hours[lang]}</b>
                  {open !== null && (
                    <span className={`status ${open ? "on" : "off"}`}>
                      <i /> {open ? t.contact.open : t.contact.closed}
                    </span>
                  )}
                </div>
              </li>
            </ul>
            <div className="branch-cta">
              <a href={`tel:${b.phone}`} className="btn btn-primary">
                <Phone width={18} height={18} /> {t.contact.call}
              </a>
              <a href={b.map.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                {t.contact.route} <Arrow width={18} height={18} />
              </a>
            </div>
          </div>

          <div className="map">
            {prevId !== active && (
              <iframe
                key={`prev-${prev.id}`}
                src={prev.map.embed}
                title={`${prev.city[lang]} — xarita`}
                className="map-layer prev"
                tabIndex={-1}
                aria-hidden
              />
            )}
            <iframe
              key={b.id}
              src={b.map.embed}
              title={`${b.city[lang]} — xarita`}
              className={`map-layer ${loaded ? "in" : ""}`}
              onLoad={() => onMapLoad(b.id)}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className={`map-loader ${loaded ? "" : "on"}`} aria-hidden>
              <span className="map-pin">
                <Pin width={26} height={26} />
              </span>
              <b>{b.city[lang]}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
