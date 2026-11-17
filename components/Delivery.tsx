"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { Arrow, Phone, Truck } from "./Icons";
import { CONTACT, IMAGES } from "@/lib/data";

export default function Delivery() {
  const { t } = useLang();
  return (
    <section className="delivery-wrap">
      <div className="container">
        <div className="delivery" data-reveal>
          <div className="delivery-copy">
            <span className="delivery-ic"><Truck width={30} height={30} /></span>
            <h2 className="h2">{t.delivery.title}</h2>
            <p>{t.delivery.text}</p>
            <div className="delivery-cta">
              <a href={CONTACT.express24} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                {t.delivery.cta} <Arrow width={18} height={18} />
              </a>
              <a href={`tel:${CONTACT.phones[0]}`} className="btn btn-ghost">
                <Phone width={18} height={18} /> {t.delivery.call}
              </a>
            </div>
          </div>
          <div className="delivery-img">
            <Image src={IMAGES.lagman} alt="" fill sizes="(max-width: 800px) 100vw, 40vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
