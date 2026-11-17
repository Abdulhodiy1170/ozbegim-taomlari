"use client";

import { useEffect } from "react";

/** Elementlarni [data-reveal] atributi orqali scrollda chiroyli paydo qiladi */
export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const observe = () =>
      document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => {
        if (reduce) el.classList.add("in");
        else io.observe(el);
      });
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
