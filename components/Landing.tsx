"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import LandingMarkup from "@/components/LandingMarkup";
import { LandingEngine } from "@/lib/landing-engine";
import { useLang } from "@/lib/lang";
import type { Lang } from "@/lib/lang";

const LINKS = [
  { n: "01", t: "Work", href: "#work" },
  { n: "02", t: "Services", href: "#services" },
  { n: "03", t: "Process", href: "#process" },
  { n: "04", t: "About", href: "#about" },
  { n: "05", t: "Contact", href: "#contact" },
];

const MANIFESTO: { key: string; style?: CSSProperties }[] = [
  { key: "Good software is felt before it's explained." },
  { key: "We build it with method: sprint by sprint,", style: { fontWeight: "300" } },
  { key: "no shortcuts.", style: { color: "var(--acc)" } },
];

export default function Landing() {
  const { lang, toggle, t } = useLang();
  const rootRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<LandingEngine | null>(null);
  const langRef = useRef<Lang>(lang);
  const wasOpen = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const engine = new LandingEngine(root, () => langRef.current);
    engineRef.current = engine;
    engine.start();
    return () => {
      engine.destroy();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    langRef.current = lang;
    engineRef.current?.refreshLang();
  }, [lang]);

  // What the mockup did in componentDidUpdate: menu button bars, menu clip-path and link reveal.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || wasOpen.current === menuOpen) return;
    wasOpen.current = menuOpen;
    const o = menuOpen;
    const A = root.querySelector<HTMLElement>("[data-bar-a]");
    const B = root.querySelector<HTMLElement>("[data-bar-b]");
    const Mb = root.querySelector<HTMLElement>("[data-bar-m]");
    if (A && B && Mb) {
      Object.assign(A.style, { top: o ? "8px" : "1px", transform: o ? "rotate(45deg)" : "none" });
      Mb.style.opacity = o ? "0" : "1";
      Object.assign(B.style, {
        top: o ? "8px" : "15px",
        right: o ? "0px" : "10px",
        transform: o ? "rotate(-45deg)" : "none",
      });
    }
    if (!o) return;
    const ez = "cubic-bezier(.16,1,.3,1)";
    const menu = root.querySelector("[data-menu]");
    if (menu)
      menu.animate([{ clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)" }], {
        duration: 700,
        easing: ez,
        fill: "both",
      });
    root.querySelectorAll("[data-mi]").forEach((el, i) =>
      el.animate([{ transform: "translateY(105%)" }, { transform: "none" }], {
        duration: 900,
        delay: 180 + i * 60,
        easing: ez,
        fill: "both",
      }),
    );
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const menu = menuOpen ? (
    <div
      data-menu="1"
      style={{
        position: "absolute",
        inset: "0",
        zIndex: "15",
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "110px clamp(20px,4vw,56px) clamp(28px,5vh,48px)",
        boxSizing: "border-box",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
        {LINKS.map((l) => (
          <a
            key={l.n}
            href={l.href}
            onClick={closeMenu}
            style={{ display: "flex", alignItems: "baseline", gap: "20px", overflow: "hidden", color: "#F3F2F2" }}
            className="hv5"
          >
            <span data-mi="1" style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#6B6868", width: "28px" }}>{l.n}</span>
              <span
                style={{
                  fontSize: "clamp(48px,8vw,120px)",
                  fontWeight: "600",
                  letterSpacing: "-.05em",
                  lineHeight: "1.02",
                }}
              >
                {t(l.t)}
              </span>
            </span>
          </a>
        ))}
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "24px",
          flexWrap: "wrap",
          borderTop: "1px solid #2A2A2A",
          paddingTop: "20px",
          fontSize: "14px",
          color: "#9B9797",
        }}
      >
        <a href="mailto:loomit.devs@gmail.com" style={{ color: "#F3F2F2" }}>
          {"loomit.devs@gmail.com"}
        </a>
        <div style={{ display: "flex", gap: "28px" }}>
          <a href="https://www.instagram.com/loomit.social/" target="_blank" rel="noopener noreferrer">
            {"Instagram"}
          </a>
        </div>
      </div>
    </div>
  ) : null;

  const photo = <Image src="/bg-section.png" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />;

  const manifesto = MANIFESTO.flatMap((seg, i) =>
    t(seg.key)
      .split(" ")
      .flatMap((w, j) => [
        i + j > 0 ? " " : null,
        <span key={`${i}-${j}`} data-w="1" style={{ opacity: 0.14, ...seg.style }}>
          {w}
        </span>,
      ]),
  );

  return (
    <LandingMarkup
      t={t}
      rootRef={rootRef}
      menu={menu}
      photo={photo}
      manifesto={manifesto}
      toggleMenu={() => setMenuOpen((o) => !o)}
      lang={lang}
      toggleLang={toggle}
    />
  );
}
