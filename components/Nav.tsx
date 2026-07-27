'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/lib/lang';
import { ui } from '@/data/content';

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="navlk meta" data-t={label}>
      <span>{label}</span>
    </a>
  );
}

export default function Nav({ onOpenModal }: { onOpenModal: () => void }) {
  const { t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero');
      const threshold = hero ? hero.offsetHeight - 80 : window.innerHeight - 80;
      const y = window.scrollY;
      const pastHero = y > threshold;
      setScrolled(pastHero);
      if (!pastHero) {
        setHidden(false);
      } else {
        setHidden(y > lastScrollY.current);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const langLabel = t(ui.nav.langToggle);
  const ctaLabel = t(ui.nav.cta);

  return (
    <div className={`nav-shell${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}`}>
      <nav className="nav-inner">
        <div className="bebas" style={{ fontSize: 30, lineHeight: 1 }}>LOOM</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            <NavLink href="#services" label={t(ui.nav.services)} />
            <NavLink href="#stack" label={t(ui.nav.stack)} />
            <NavLink href="#process" label={t(ui.nav.process)} />
            <NavLink href="#principles" label={t(ui.nav.principles)} />
          </div>
          <button onClick={toggle} className="nav-lang-btn" aria-label={langLabel}>
            <span className="navlk meta" data-t={langLabel}><span>{langLabel}</span></span>
          </button>
          <button onClick={onOpenModal} className="nav-pill-btn">
            <span className="navlk meta" data-t={ctaLabel}><span>{ctaLabel}</span></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
