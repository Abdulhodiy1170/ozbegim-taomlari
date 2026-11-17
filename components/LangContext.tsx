"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/data";
import { getDict, type Dict } from "@/lib/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "uz" || saved === "ru") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  return <LangCtx.Provider value={{ lang, setLang, t: getDict(lang) }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("useLang must be used inside LangProvider");
  return c;
}
