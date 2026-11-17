"use client";

import { useEffect, useState } from "react";
import { Phone, Up } from "./Icons";
import { CONTACT } from "@/lib/data";

export default function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 700);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div className={`fab ${show ? "show" : ""}`}>
      <a href={`tel:${CONTACT.phones[0]}`} className="fab-call" aria-label={CONTACT.phonesPretty[0]}>
        <Phone width={22} height={22} />
      </a>
      <button className="fab-up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Yuqoriga">
        <Up width={20} height={20} />
      </button>
    </div>
  );
}
