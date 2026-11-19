"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "./LangContext";
import { Close, Menu, Phone } from "./Icons";
import { CONTACT } from "@/lib/data";

const IDS = ["about", "menu", "banquet", "reviews", "contact"] as const;

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang" role="group" aria-label="Til / Язык">
      {(["uz", "ru"] as const).map((l) => (
        <button key={l} className={lang === l ? "on" : ""} onClick={() => setLang(l)} aria-pressed={lang === l}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      for (const id of IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-in">
        <a href="#top" className="brand" aria-label="O'zbegim Taomlari">
          <Image src="/logo.png" alt="" width={52} height={52} className="brand-logo" priority />
          <span className="brand-name">
            O&apos;zbegim <em>Taomlari</em>
          </span>
        </a>

        <nav className="nav" aria-label="Asosiy">
          {IDS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LangSwitch />
          <a href={`tel:${CONTACT.phones[0]}`} className="icon-btn hide-sm" aria-label={CONTACT.phonesPretty[0]}>
            <Phone width={18} height={18} />
          </a>
          <a href="#booking" className="btn btn-primary btn-sm hide-md">
            {t.book}
          </a>
          <button className="icon-btn burger" onClick={() => setOpen(true)} aria-label="Menu" aria-expanded={open}>
            <Menu width={22} height={22} />
          </button>
        </div>
      </div>
    </header>

    {/* Header'dan tashqarida: backdrop-filter fixed elementni header o'lchamiga qamab qo'ymasligi uchun */}
    <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-backdrop" onClick={() => setOpen(false)} />
        <div className="drawer-panel">
          <button className="icon-btn drawer-close" onClick={() => setOpen(false)} aria-label="Yopish">
            <Close width={22} height={22} />
          </button>
          <Image src="/logo.png" alt="O'zbegim Taomlari" width={120} height={120} className="drawer-logo" />
          <nav>
            {IDS.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <LangSwitch />
          <a href="#booking" className="btn btn-primary" onClick={() => setOpen(false)}>
            {t.book}
          </a>
          <a href={`tel:${CONTACT.phones[0]}`} className="drawer-phone">
            <Phone width={18} height={18} /> {CONTACT.phonesPretty[0]}
          </a>
        </div>
      </div>
    </>
  );
}
