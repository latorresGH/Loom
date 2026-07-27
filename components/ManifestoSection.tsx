'use client';
import { useLang } from '@/lib/lang';
import { ui } from '@/data/content';

export default function ManifestoSection() {
  const { t } = useLang();

  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: 'min(17vw, 190px) 34px' }}>
      <div className="meta reveal" style={{ color: 'var(--muted)', marginBottom: 52 }}>{t(ui.manifesto.eyebrow)}</div>
      <div className="bebas" style={{ maxWidth: 1200, fontSize: 'clamp(40px, 8vw, 128px)', lineHeight: 0.92, letterSpacing: '0.004em' }}>
        <span className="mline"><span>{t(ui.manifesto.line1)}</span></span>
        <span className="mline"><span>{t(ui.manifesto.line2)}</span></span>
        <span className="mline"><span style={{ color: 'var(--muted)' }}>{t(ui.manifesto.line3)}</span></span>
        <span className="mline"><span style={{ color: 'var(--muted)' }}>{t(ui.manifesto.line4)}</span></span>
      </div>
    </section>
  );
}
