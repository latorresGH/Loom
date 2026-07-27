'use client';
import Image from 'next/image';
import { useLang } from '@/lib/lang';
import { ui, steps } from '@/data/content';

export default function SplitEditorialSection() {
  const { t } = useLang();

  return (
    <section id="process" style={{ padding: 'min(13vw, 150px) 34px' }}>
      <div className="meta reveal" style={{ color: 'var(--muted)', marginBottom: 52 }}>{t(ui.editorial.eyebrow)}</div>
      <div className="grid12" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, alignItems: 'start' }}>
        <div className="cspan" style={{ gridColumn: '1 / span 6' }}>
          <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
            <div className="par" style={{ position: 'absolute', inset: '-14% 0', '--pf': '7%' } as React.CSSProperties}>
              <Image src="/fig-02.png" alt="" fill sizes="(max-width: 820px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="meta" style={{ marginTop: 14, color: 'var(--muted)' }}>{t(ui.editorial.figLabel)}</div>
        </div>
        <div className="cspan" style={{ gridColumn: '8 / span 5', paddingTop: 34 }}>
          <div className="bebas" style={{ fontSize: 'clamp(38px, 4.5vw, 72px)', lineHeight: 0.94 }}>
            <span className="mline"><span>{t(ui.editorial.heading1)}</span></span>
            <span className="mline"><span>{t(ui.editorial.heading2)}</span></span>
            <span className="mline"><span style={{ color: 'var(--muted)' }}>{t(ui.editorial.heading3)}</span></span>
            <span className="mline"><span style={{ color: 'var(--muted)' }}>{t(ui.editorial.heading4)}</span></span>
          </div>
          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column' }}>
            {steps.map((s) => (
              <div key={s.n} className="reveal" style={{ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 16, padding: '22px 0', borderTop: '1px solid var(--line)' }}>
                <div className="meta">{s.n}</div>
                <div>
                  <div style={{ fontSize: 19, fontWeight: 600 }}>{t(s.title)}</div>
                  <div style={{ marginTop: 6, fontSize: 15, color: 'var(--muted)', lineHeight: 1.5 }}>{t(s.desc)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
