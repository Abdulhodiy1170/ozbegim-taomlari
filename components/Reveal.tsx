"use client";

import { useEffect } from "react";

/**
 * [data-reveal] elementlarni scrollda paydo qiladi.
 *
 * - Klass emas, `data-shown` atributi qo'yiladi: React className'ni qayta
 *   yozganda (masalan, FAQ ochilganda) element yo'qolib qolmaydi.
 * - IntersectionObserver o'rniga scroll tekshiruvi: sahifa tez sakraganda
 *   (havola bosilganda) o'tib ketilgan bo'limlar ham albatta ko'rsatiladi.
 */
export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.92;
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])").forEach((el) => {
        // ekranga kirgan yoki undan yuqorida qolgan hamma narsani ko'rsatamiz
        if (reduce || el.getBoundingClientRect().top < limit) el.setAttribute("data-shown", "");
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      mo.disconnect();
    };
  }, []);
  return null;
}
