'use client';
import Image from 'next/image';
import { useLang } from '@/lib/lang';
import { ui } from '@/data/content';

export default function FullBleedSection() {
  const { t } = useLang();

  return (
    <section>
      <div style={{ position: 'relative', height: '112vh', overflow: 'hidden' }}>
        <div className="par" style={{ position: 'absolute', inset: '-16% 0', '--pf': '9%' } as React.CSSProperties}>
          <Image src="/bg-section.png" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(12,13,15,0.24), rgba(12,13,15,0.02) 42%, rgba(12,13,15,0.38))',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'absolute', left: 34, bottom: 34, right: 34, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: '#fff', pointerEvents: 'none' }}>
          <div className="bebas" style={{ fontSize: 'clamp(52px, 10vw, 150px)', lineHeight: 0.86 }}>
            {t(ui.fullbleed.caption1)}<br />{t(ui.fullbleed.caption2)}
          </div>
          <div className="meta" style={{ textAlign: 'right', opacity: 0.85 }}>
            {t(ui.fullbleed.figLabel)}<br />{t(ui.fullbleed.figCaption)}
          </div>
        </div>
      </div>
    </section>
  );
}
