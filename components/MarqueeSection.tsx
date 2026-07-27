'use client';
import { useLang } from '@/lib/lang';
import { marqueeItems } from '@/data/content';

export default function MarqueeSection() {
  const { t } = useLang();
  const items = marqueeItems.concat(marqueeItems);

  return (
    <section style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '40px 0', overflow: 'hidden' }}>
      <div className="marquee">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 24,
              flex: '0 0 auto',
              padding: '0 40px',
              borderRight: '1px solid rgba(244,245,247,0.16)',
            }}
          >
            <span className="bebas" style={{ fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 1 }}>{item.a}</span>
            <span className="meta" style={{ maxWidth: 150, lineHeight: 1.5, color: 'rgba(244,245,247,0.6)' }}>{t(item.b)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
