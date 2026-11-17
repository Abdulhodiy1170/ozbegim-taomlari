"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { Arrow, Clock, Divider, Phone, Pin } from "./Icons";
import { CONTACT } from "@/lib/data";

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
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="h2">{t.contact.title}</h2>
          <Divider />
        </div>
        <div className="contact">
          <ul className="contact-cards">
            <li data-reveal>
              <span className="c-ic"><Pin width={22} height={22} /></span>
              <div>
                <small>{t.contact.address}</small>
                <b>{CONTACT.address[lang]}</b>
                <a href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer" className="link">
                  {t.contact.route} <Arrow width={14} height={14} />
                </a>
              </div>
            </li>
            <li data-reveal>
              <span className="c-ic"><Phone width={22} height={22} /></span>
              <div>
                <small>{t.contact.phone}</small>
                {CONTACT.phones.map((p, i) => (
                  <a key={p} href={`tel:${p}`} className="phone">{CONTACT.phonesPretty[i]}</a>
                ))}
              </div>
            </li>
            <li data-reveal>
              <span className="c-ic"><Clock width={22} height={22} /></span>
              <div>
                <small>{t.contact.hours}</small>
                <b>{t.contact.hoursVal}</b>
                {open !== null && (
                  <span className={`status ${open ? "on" : "off"}`}>
                    <i /> {open ? t.contact.open : t.contact.closed}
                  </span>
                )}
              </div>
            </li>
          </ul>
          <div className="map" data-reveal>
            <iframe
              src={CONTACT.mapEmbed}
              title="Xarita"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
