"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { Facebook, Instagram, Telegram } from "./Icons";
import { BRANCHES, CONTACT } from "@/lib/data";

export default function Footer() {
  const { t, lang } = useLang();
  const socials = [
    { href: CONTACT.telegram, Ic: Telegram, l: "Telegram" },
    { href: CONTACT.instagram, Ic: Instagram, l: "Instagram" },
    { href: CONTACT.facebook, Ic: Facebook, l: "Facebook" },
  ];
  return (
    <footer className="footer">
      <div className="container footer-in">
        <div className="f-brand">
          <Image src="/logo.png" alt="O'zbegim Taomlari" width={110} height={110} />
          <p className="f-slogan">«{t.hero.slogan}»</p>
          <p>{t.footer.text}</p>
        </div>
        <div>
          <h4>{t.footer.nav}</h4>
          <ul>
            {(["about", "menu", "banquet", "reviews", "contact"] as const).map((id) => (
              <li key={id}><a href={`#${id}`}>{t.nav[id]}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t.nav.contact}</h4>
          <ul>
            {BRANCHES.map((b) => (
              <li key={b.id}><a href="#contact">{b.city[lang]}</a> — {b.label[lang].toLowerCase()}</li>
            ))}
            {CONTACT.phones.map((p, i) => (
              <li key={p}><a href={`tel:${p}`}>{CONTACT.phonesPretty[i]}</a></li>
            ))}
            <li>{t.contact.hoursVal}</li>
          </ul>
        </div>
        <div>
          <h4>{t.footer.follow}</h4>
          <div className="socials">
            {socials.map(({ href, Ic, l }) => (
              <a key={l} href={href} target="_blank" rel="noopener noreferrer" aria-label={l}>
                <Ic width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container f-bottom">
        <span>© {new Date().getFullYear()} O&apos;zbegim Taomlari. {t.footer.rights}</span>
      </div>
    </footer>
  );
}
