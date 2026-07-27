'use client';
import { useState } from 'react';
import { useLang } from '@/lib/lang';
import { ui, modalOptions } from '@/data/content';

export default function ContactModal({
  isOpen,
  sent,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  sent: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('request failed');
      onSuccess();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="md-bg"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 900,
        background: 'rgba(12,13,15,0.6)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        className="md-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          background: 'var(--bg)',
          borderRadius: 24,
        }}
      >
        {sent ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, padding: '24px 0' }}>
            <div className="bebas" style={{ fontSize: 'clamp(44px, 7vw, 72px)', lineHeight: 0.9 }}>{t(ui.modal.successTitle)}</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 360 }}>{t(ui.modal.successSub)}</p>
            <button onClick={onClose} className="btnk" style={{ marginTop: 8, padding: '14px 30px', borderRadius: 100, border: 'none', background: 'var(--ink)', color: 'var(--bg)', fontFamily: 'inherit', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
              {t(ui.modal.close)}
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 26 }}>
              <div className="bebas" style={{ fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 0.9 }}>{t(ui.modal.title)}</div>
              <button
                onClick={onClose}
                aria-label={t(ui.modal.close)}
                className="modal-close"
                style={{ flex: '0 0 auto', width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--line)', background: '#fff', fontSize: 20, lineHeight: 1, color: 'var(--ink)', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <input className="fld" style={{ flex: 1, minWidth: 180 }} name="nombre" placeholder={t(ui.modal.namePh)} required />
                <input className="fld" style={{ flex: 1, minWidth: 180 }} name="email" type="email" placeholder={t(ui.modal.emailPh)} required />
              </div>
              <select className="fld" name="tipo" required defaultValue="">
                <option value="" disabled>{t(ui.modal.selectPh)}</option>
                {modalOptions.map((opt) => (
                  <option key={opt.es} value={opt.es}>{t(opt)}</option>
                ))}
              </select>
              <textarea className="fld" name="mensaje" placeholder={t(ui.modal.msgPh)} rows={4} required style={{ resize: 'vertical' }} />
              <button
                type="submit"
                disabled={loading}
                className="btnk"
                style={{ marginTop: 6, padding: '16px 30px', borderRadius: 100, border: 'none', background: 'var(--ink)', color: 'var(--bg)', fontFamily: 'inherit', fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
              >
                {loading ? t(ui.modal.sending) : t(ui.modal.submit)}
              </button>
              {error && (
                <div className="meta" style={{ textAlign: 'center', color: '#b3413e', marginTop: 4 }}>
                  {t(ui.modal.error)}
                </div>
              )}
              <div className="meta" style={{ textAlign: 'center', color: 'var(--muted)', marginTop: 4, letterSpacing: '0.14em' }}>
                {t(ui.modal.reply)}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
