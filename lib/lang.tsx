'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'es' | 'en';
export type T = { es: string; en: string };

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'es',
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  const toggle = () => setLang((l) => (l === 'es' ? 'en' : 'es'));
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, toggle } = useContext(LangContext);
  const t = (key: T) => key[lang];
  return { lang, toggle, t };
}
