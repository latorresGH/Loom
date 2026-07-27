'use client';
import { useLang } from '@/lib/lang';
import { ui } from '@/data/content';
import { magnetMove, magnetLeave } from '@/lib/magnet';

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { t } = useLang();

  return (
    <header
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        padding: '118px 34px 40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
        <div className="r1" style={{ maxWidth: 230 }}>
          <div className="meta" style={{ color: 'var(--muted)', marginBottom: 10 }}>{t(ui.hero.studioLabel)}</div>
          <div style={{ fontSize: 14, lineHeight: 1.5 }}>{t(ui.hero.studioDesc)}</div>
        </div>
        <div className="r2 hero-social" style={{ maxWidth: 230, textAlign: 'right' }}>
          <div className="meta" style={{ color: 'var(--muted)', marginBottom: 10 }}>{t(ui.hero.socialLabel)}</div>
          <div className="hero-social-links" style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14 }}>
            <a href="#" className="lk">Instagram</a>
            <a href="#" className="lk">LinkedIn</a>
          </div>
        </div>
      </div>

      <h1 className="bebas hero-title" style={{ margin: 'auto 0', lineHeight: 0.82, letterSpacing: '0.004em' }}>
        <span className="hline"><span>{t(ui.hero.line1)}</span></span>
        <span className="hline hero-line2" style={{ textAlign: 'right' }}><span>{t(ui.hero.line2)}</span></span>
        <span className="hline"><span>{t(ui.hero.line3)}</span></span>
      </h1>

      <div className="hero-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
        <div className="r2" style={{ maxWidth: 400 }}>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--muted)' }}>{t(ui.hero.sub)}</p>
          <a href="#services" className="lk" style={{ display: 'inline-block', marginTop: 12, fontSize: 14, fontWeight: 600 }}>
            {t(ui.hero.ctaLink)}
          </a>
        </div>
        <button
          onPointerMove={magnetMove}
          onPointerLeave={magnetLeave}
          onClick={onOpenModal}
          className="rf magnet"
          style={{
            flex: '0 0 auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            padding: '16px 28px',
            borderRadius: 100,
            background: 'var(--ink)',
            color: 'var(--bg)',
            fontSize: 14,
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          <span className="magnet-inner" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            {t(ui.hero.ctaBtn)} <span style={{ fontSize: 17 }}>↗</span>
          </span>
        </button>
      </div>
      <div className="meta rf hero-scroll" style={{ position: 'absolute', bottom: 38, left: '50%', transform: 'translateX(-50%)', color: 'var(--muted)' }}>
        {t(ui.hero.scroll)}
      </div>
    </header>
  );
}
