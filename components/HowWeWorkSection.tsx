'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/lib/lang';
import { ui, principles } from '@/data/content';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HowWeWorkSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hw-heading', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      gsap.from('.hw-row', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '#principles', start: 'top 80%' },
      });

      gsap.from('.hw-left', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--ink)',
        color: 'var(--bg)',
        padding: '140px 34px 60px',
      }}
    >
      <div className="hw-grid" style={{ alignItems: 'center' }}>
        <div className="hw-left" style={{ position: 'relative', minHeight: 140, paddingLeft: 'clamp(20px, 5vw, 100px)' }}>
          {principles.map((p) => (
            <div
              key={p.n}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                opacity: active === p.n ? 1 : 0,
                transform: active === p.n ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity .45s ease, transform .45s ease',
                pointerEvents: 'none',
              }}
            >
              <p style={{ fontSize: 'clamp(20px, 1.9vw, 28px)', lineHeight: 1.6, color: 'rgba(244,245,247,0.8)', maxWidth: 480 }}>
                {t(p.desc)}
              </p>
            </div>
          ))}
          <div
            className="meta"
            style={{
              maxWidth: 300,
              color: 'var(--muted)',
              opacity: active ? 0 : 1,
              transition: 'opacity .45s ease',
            }}
          >
            {t(ui.howWeWork.eyebrow)}
          </div>
        </div>

        <div>
          <h2 className="bebas hw-heading" style={{ fontSize: 'clamp(64px, 9vw, 160px)', lineHeight: 0.86, marginBottom: 44 }}>
            {t(ui.sections.process)}
          </h2>

          <div id="principles" style={{ borderTop: '1px solid rgba(244,245,247,0.16)' }}>
            {principles.map((p) => (
              <div
                key={p.n}
                className="idx-row hw-row"
                onMouseEnter={() => setActive(p.n)}
                onMouseLeave={() => setActive((cur) => (cur === p.n ? null : cur))}
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr',
                  alignItems: 'center',
                  gap: 20,
                  padding: '22px 0',
                  borderBottom: '1px solid rgba(244,245,247,0.16)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                <div className="idx-fill" style={{ position: 'absolute', inset: 0, background: 'rgba(244,245,247,0.06)', zIndex: 0 }} />
                <div className="meta idx-txt" style={{ position: 'relative', zIndex: 1, fontSize: 16, color: 'var(--muted)' }}>{p.n} /</div>
                <div className="bebas idx-txt" style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(40px, 5.4vw, 82px)', lineHeight: 1 }}>
                  {t(p.title)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
