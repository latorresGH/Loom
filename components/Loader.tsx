'use client';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/lang';

export default function Loader() {
  const { t } = useLang();
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setMounted(false), 2600);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="loader"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--ink)',
        color: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'min(6vw, 44px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
        <div className="bebas" style={{ fontSize: 'clamp(90px, 20vw, 300px)', lineHeight: 0.78 }}>LOOM</div>
        <div className="bebas counter" style={{ fontSize: 'clamp(34px, 6vw, 80px)', lineHeight: 0.8 }} />
      </div>
      <div style={{ height: 2, width: '100%', background: 'rgba(244,245,247,0.2)', marginTop: 24, overflow: 'hidden' }}>
        <div className="loader-bar" style={{ height: '100%', width: '100%', background: 'var(--bg)' }} />
      </div>
      <div
        className="meta"
        style={{ position: 'absolute', right: 'min(6vw, 44px)', bottom: 'calc(min(6vw, 44px) + 14px)', color: 'rgba(244,245,247,0.5)' }}
      >
        {t({ es: 'DESARROLLO DE SOFTWARE — 2025', en: 'SOFTWARE DEVELOPMENT — 2025' })}
      </div>
    </div>
  );
}
