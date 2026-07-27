'use client';
import { useLang } from '@/lib/lang';
import { ui, contact } from '@/data/content';
import { magnetMove, magnetLeave } from '@/lib/magnet';

export default function Footer({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLang();

  return (
    <footer
      id="contacto"
      style={{
        position: 'relative',
        background: 'var(--ink)',
        color: 'var(--bg)',
        padding: 'min(13vw, 140px) 34px 36px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(244,245,247,0.14)',
      }}
    >
      <div className="meta reveal" style={{ color: 'var(--muted)', marginBottom: 36 }}>{t(ui.footer.eyebrow)}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 40, alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 680 }}>
          <h2 className="bebas reveal" style={{ fontSize: 'clamp(56px, 10vw, 180px)', lineHeight: 0.84 }}>
            {t(ui.footer.heading1)}<br />{t(ui.footer.heading2)}
          </h2>
          <button
            onClick={onOpenModal}
            onPointerMove={magnetMove}
            onPointerLeave={magnetLeave}
            className="magnet"
            style={{
              display: 'inline-flex',
              marginTop: 40,
              alignItems: 'center',
              gap: 14,
              padding: '18px 32px',
              borderRadius: 100,
              background: 'var(--bg)',
              color: 'var(--ink)',
              fontSize: 16,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <span className="magnet-inner" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              {contact.email} <span>↗</span>
            </span>
          </button>
        </div>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div>
            <div className="meta" style={{ color: 'rgba(244,245,247,0.4)', marginBottom: 16 }}>{t(ui.footer.studio)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15, color: 'rgba(244,245,247,0.75)' }}>
              <a href="#services" className="lk">{t(ui.nav.services)}</a>
              <a href="#process" className="lk">{t(ui.nav.process)}</a>
              <span>{t(ui.footer.location)}</span>
            </div>
          </div>
          <div>
            <div className="meta" style={{ color: 'rgba(244,245,247,0.4)', marginBottom: 16 }}>{t(ui.footer.social)}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 15, color: 'rgba(244,245,247,0.75)' }}>
              <a href="#" className="lk">Instagram</a>
              <a href="#" className="lk">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bebas drift" style={{ marginTop: 70, fontSize: 'clamp(110px, 30vw, 500px)', lineHeight: 0.72, whiteSpace: 'nowrap' }}>
        LOOM
      </div>
      <div
        className="meta"
        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginTop: 16, paddingTop: 22, borderTop: '1px solid rgba(244,245,247,0.14)' }}
      >
        <span style={{ color: 'rgba(244,245,247,0.5)' }}>© 2025 Loom — {t(ui.footer.rights)}</span>
      </div>
    </footer>
  );
}
