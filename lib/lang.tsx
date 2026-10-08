"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { es } from "@/data/i18n";
import type { Lang } from "@/data/i18n";

export type { Lang };

const STORAGE_KEY = "loom-lang";
const DEFAULT_LANG: Lang = "es";

// The stored language is an external store: the server (and hydration) always sees "es",
// and the client switches to the saved value right after, without a hydration mismatch.
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => {
  listeners.add(fn);
  window.addEventListener("storage", fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", fn);
  };
};
const readLang = (): Lang => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
};
const writeLang = (lang: Lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  listeners.forEach((fn) => fn());
};

type LangValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  toggle: () => {},
  t: (key) => es[key] ?? key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);
  const setLang = useCallback((l: Lang) => writeLang(l), []);
  const toggle = useCallback(() => writeLang(readLang() === "es" ? "en" : "es"), []);
  const t = useCallback((key: string) => (lang === "es" ? (es[key] ?? key) : key), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
