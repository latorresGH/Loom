'use client';
import { useLang } from '@/lib/lang';
import { ui, services } from '@/data/content';

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" style={{ padding: 'min(13vw, 140px) 0 min(9vw, 110px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 34px', marginBottom: 20, flexWrap: 'wrap', gap: 20 }}>
        <h2 className="bebas reveal" style={{ fontSize: 'clamp(48px, 8vw, 130px)', lineHeight: 0.86 }}>{t(ui.sections.services)}</h2>
        <div className="meta reveal" style={{ maxWidth: 250, lineHeight: 1.8, color: 'var(--muted)' }}>{t(ui.sections.servicesEyebrow)}</div>
      </div>
      <div style={{ borderTop: '1px solid var(--line)' }}>
        {services.map((svc) => (
          <div
            key={svc.num}
            className="idx-row"
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: '72px 1fr auto 40px',
              alignItems: 'center',
              gap: 20,
              padding: '28px 34px',
              borderBottom: '1px solid var(--line)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <div className="idx-fill" style={{ position: 'absolute', inset: 0, background: 'var(--ink)', zIndex: 0 }} />
            <div className="meta idx-txt" style={{ position: 'relative', zIndex: 1, color: 'var(--muted)' }}>{svc.num}</div>
            <div className="bebas idx-txt" style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(30px, 5vw, 68px)', lineHeight: 1 }}>{t(svc.title)}</div>
            <div className="idx-txt" style={{ position: 'relative', zIndex: 1, maxWidth: 300, textAlign: 'right', fontSize: 14, color: 'var(--muted)' }}>{t(svc.desc)}</div>
            <div className="idx-arrow idx-txt" style={{ position: 'relative', zIndex: 1, fontSize: 22, textAlign: 'right' }}>↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
