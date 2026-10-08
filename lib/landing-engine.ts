/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// Imperative animation engine of the landing, ported from the Claude Design mockup (handoff/logic.js).
// It only touches the DOM under `root`; React owns the markup and the translated copy.
import { dyn, es } from "@/data/i18n";

const P = { accent: "#CFF27E", showWord: true, dispersion: 4 };

export class LandingEngine {
  sp = 0;
  vh = 0;
  dead = false;
  off = [];
  langHooks = [];
  timers = new Set();
  ac = new AbortController();

  constructor(root, getLang) {
    this.root = root;
    this.getLang = getLang;
    this.lang = getLang();
  }

  d() {
    return dyn[this.getLang()] ?? dyn.es;
  }

  // Listeners and timers die with the engine: React Strict Mode starts it twice on the same DOM.
  on(el, type, fn, opts) {
    el.addEventListener(type, fn, Object.assign({ signal: this.ac.signal }, opts));
  }
  later(fn, ms) {
    const id = setTimeout(() => { this.timers.delete(id); if (!this.dead) fn(); }, ms);
    this.timers.add(id);
    return id;
  }
  every(fn, ms) {
    const id = setInterval(() => { if (!this.dead) fn(); }, ms);
    this.off.push(() => clearInterval(id));
    return id;
  }

  // Stable viewport height: the "small" viewport (100svh), which is what the pinned panels use.
  // window.innerHeight changes every time a phone's URL bar hides or shows, and made the
  // scroll-driven math jump.
  initViewport() {
    const probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;top:0;left:0;width:0;height:100svh;visibility:hidden;pointer-events:none';
    document.body.appendChild(probe);
    const measure = () => { this.vh = probe.offsetHeight || window.innerHeight; };
    measure();
    this.on(window, 'resize', measure);
    this.off.push(() => probe.remove());
  }

  refreshLang() {
    if (this.dead) return;
    const lang = this.getLang();
    if (lang === this.lang) return;
    this.lang = lang;
    this.langHooks.forEach((f) => { try { f(); } catch {} });
  }

  destroy() {
    this.dead = true;
    this.off.forEach((f) => { try { f(); } catch {} });
    this.off = [];
    this.langHooks = [];
    this.ac.abort();
    this.timers.forEach((id) => clearTimeout(id));
    this.timers.clear();
    try { this.root.getAnimations({ subtree: true }).forEach((a) => a.cancel()); } catch {}
    document.documentElement.style.overflow = '';
  }

  runPreloader(root) {
    const pre = root.querySelector('[data-pre]'); if (!pre) return 0;
    const q = (k) => pre.querySelector(k), ez = 'cubic-bezier(.16,1,.3,1)', ezIn = 'cubic-bezier(.7,0,.84,0)', io = 'cubic-bezier(.76,0,.24,1)';
    const a = q('[data-pre-a]'), b = q('[data-pre-b]'), w = q('[data-pre-w]'), n = q('[data-pre-n]'), bar = q('[data-pre-bar]'), word = q('[data-pre-word]');
    const top = q('[data-pre-top]'), bot = q('[data-pre-bot]'), ui = q('[data-pre-ui]'), metas = Array.from(pre.querySelectorAll('[data-pre-m]'));
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = 'hidden';
    n.textContent = '000'; word.textContent = ' ';
    const T = 3600, an = (el, k, o) => el.animate(k, Object.assign({ fill: 'forwards' }, o));
    an(a, [{ opacity: 0, transform: 'translateY(-60px)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0px)' }], { duration: 1200, delay: 150, easing: ez });
    an(b, [{ opacity: 0, transform: 'translateY(60px)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0px)' }], { duration: 1200, delay: 260, easing: ez });
    an(w, [{ transform: 'translateX(-110%)' }, { transform: 'none' }], { duration: 1200, delay: 850, easing: ez });
    an(n, [{ transform: 'translateY(105%)' }, { transform: 'none' }], { duration: 1000, delay: 100, easing: ez });
    metas.forEach((m, i) => an(m, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 900, delay: 300 + i * 90, easing: ez }));
    let wi = 0, shown = -1;
    const swap = () => {
      const out = word.animate([{ transform: 'none' }, { transform: 'translateY(-100%)' }], { duration: 260, easing: ezIn, fill: 'forwards' });
      out.onfinish = () => { const words = this.d().preWords; shown = wi++ % words.length; word.textContent = words[shown]; out.cancel(); word.animate([{ transform: 'translateY(100%)' }, { transform: 'none' }], { duration: 420, easing: ez, fill: 'backwards' }); };
    };
    this.langHooks.push(() => { if (shown >= 0) word.textContent = this.d().preWords[shown]; });
    this.later(swap, 380); const wt = this.every(swap, 760);
    const t0 = performance.now(); let r = 0;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / T), e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      n.textContent = String(Math.round(e * 100)).padStart(3, '0'); bar.style.transform = `scaleX(${e.toFixed(4)})`;
      if (p < 1 && !this.dead) r = requestAnimationFrame(step);
    };
    r = requestAnimationFrame(step);
    this.later(() => {
      clearInterval(wt);
      an(w, [{ transform: 'none' }, { transform: 'translateX(-110%)' }], { duration: 550, easing: ezIn });
      an(n, [{ transform: 'none' }, { transform: 'translateY(-105%)' }], { duration: 550, easing: ezIn });
      an(word, [{ transform: 'none' }, { transform: 'translateY(-100%)' }], { duration: 400, easing: ezIn });
      metas.forEach((m) => an(m, [{ opacity: 1 }, { opacity: 0 }], { duration: 400, easing: 'ease' }));
      an(bar.parentNode, [{ opacity: 1 }, { opacity: 0 }], { duration: 400, easing: 'ease' });
      an(a.parentNode, [{ opacity: 1, transform: 'none', filter: 'blur(0px)' }, { opacity: 0, transform: 'scale(.9)', filter: 'blur(6px)' }], { duration: 500, delay: 0, easing: ezIn });
    }, T - 1500);
    this.later(() => {
      const D = 1450, L = 0;
      ui.style.visibility = 'hidden';
      an(top, [{ transform: 'none' }, { transform: 'translateY(-101%)' }], { duration: D, delay: L + 40, easing: io });
      const out = an(bot, [{ transform: 'none' }, { transform: 'translateY(101%)' }], { duration: D, delay: L + 40, easing: io });
      out.onfinish = () => { pre.style.display = 'none'; document.documentElement.style.overflow = ''; if (this.lenis) this.lenis.start(); };
    }, T - 500);
    const t2 = this.every(() => { if (this.lenis) { this.lenis.stop(); clearInterval(t2); } }, 50);
    this.later(() => clearInterval(t2), T);
    this.off.push(() => { cancelAnimationFrame(r); document.documentElement.style.overflow = ''; });
    return T - 500 + 300;
  }

  start() {
    this.dead = false;
    this.initViewport();
    import('lenis').then((mod) => {
      if (this.dead) return;
      const Lenis = mod.default || mod.Lenis;
      const lenis = new Lenis({ duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
      this.lenis = lenis;
      let lr = 0;
      const lf = (t) => { lenis.raf(t); lr = requestAnimationFrame(lf); };
      lr = requestAnimationFrame(lf);
      const onA = (e) => {
        const a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a) return;
        const href = a.getAttribute('href'); if (href.length < 2) return;
        const t = document.querySelector(href); if (t) { e.preventDefault(); lenis.scrollTo(t, { duration: 1.8 }); }
      };
      document.addEventListener('click', onA);
      this.off.push(() => { cancelAnimationFrame(lr); document.removeEventListener('click', onA); lenis.destroy(); this.lenis = null; });
    }).catch(() => {});
    const root = this.root;
    if (!root) return;
    const ez = 'cubic-bezier(.16,1,.3,1)';
    const PD = this.runPreloader(root);
    this.introAt = performance.now() + PD;
    root.querySelectorAll('[data-in]').forEach((el, i) => el.animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 1200, delay: PD + 350 + i * 110, easing: ez, fill: 'both' }));
    root.querySelectorAll('[data-fade]').forEach((el, i) => el.animate([{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'none' }], { duration: 1000, delay: PD + 550 + i * 80, easing: ez, fill: 'both' }));

    const title = root.querySelector('[data-title]'), hint = root.querySelector('[data-hint]'), end = root.querySelector('[data-end]');
    const words = Array.from(root.querySelectorAll('[data-word]'));
    const heroSec = root.querySelector('[data-herosec]'), man = root.querySelector('[data-manifesto]');
    let mw = Array.from(root.querySelectorAll('[data-w]'));
    const rev = root.querySelector('[data-reveal]'), revImg = root.querySelector('[data-reveal-img]');
    const svc = root.querySelector('[data-svc]');
    const sNames = Array.from(root.querySelectorAll('[data-sname]')), sDesc = root.querySelector('[data-sdesc]');
    const sList = root.querySelector('[data-slist]'), sCard = root.querySelector('[data-sprev-card]'), sStack = root.querySelector('[data-sstack]');
    const sCount = root.querySelector('[data-scount]'), sProgEl = root.querySelector('[data-sprog]'), sGrid = root.querySelector('[data-sgrid]'), sLeftCol = root.querySelector('[data-sleft]');
    const NS = sNames.length;
    let sIdx = -1, sTok = 0;
    const revealDesc = (text) => {
      const tok = ++sTok;
      const old = Array.from(sDesc.querySelectorAll('[data-ln]'));
      old.forEach((el, k) => el.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-105%)', opacity: 0 }], { duration: 320, delay: k * 25, easing: 'cubic-bezier(.7,0,.84,0)', fill: 'forwards' }));
      this.later(() => {
        if (tok !== sTok) return;
        sDesc.innerHTML = '';
        const words = text.split(' ').map((w) => { const s = document.createElement('span'); s.textContent = w + ' '; sDesc.appendChild(s); return s; });
        const lines = []; let lastTop = null;
        words.forEach((w) => { const t = w.offsetTop; if (lastTop === null || Math.abs(t - lastTop) > 4) { lines.push([]); lastTop = t; } lines[lines.length - 1].push(w.textContent); });
        sDesc.innerHTML = '';
        lines.forEach((ws, k) => {
          const o = document.createElement('span'); o.style.cssText = 'display:block;overflow:hidden;padding-bottom:.06em;margin-bottom:-.06em';
          const n = document.createElement('span'); n.dataset.ln = '1'; n.style.display = 'block'; n.textContent = ws.join('').trimEnd();
          o.appendChild(n); sDesc.appendChild(o);
          n.animate([{ transform: 'translateY(105%)' }, { transform: 'translateY(0)' }], { duration: 900, delay: k * 70, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
        });
      }, old.length ? 300 : 0);
    };
    const setActive = (k) => {
      k = (k + NS) % NS;
      if (k === sIdx) return;
      sIdx = k;
      sNames.forEach((n, j) => { n.style.color = j === k ? '#F3F2F2' : '#3A3A3A'; });
      sStack.style.transform = `translateY(-${k * 16.6667}%)`;
      sCount.textContent = '0' + (k + 1);
      revealDesc(this.d().descs[k]);
    };
    const reActive = () => { if (sIdx >= 0) { const k = sIdx; sIdx = -1; setActive(k); } };
    sDesc.innerHTML = '';
    setActive(0);
    const DUR = 5000;
    let sT0 = 0, sOn = false, sHold = false;
    // The markup already ships the inner <span style="display:block"> of each name.
    const sNameInner = sNames.map((n) => n.firstElementChild);
    const sIns = Array.from(root.querySelectorAll('[data-sin]'));
    [...sIns, ...sNameInner, sDesc].forEach((el) => { el.style.opacity = '0'; });
    const sIO = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting || sOn) return;
      sOn = true; sIO.disconnect();
      const ez = 'cubic-bezier(.16,1,.3,1)';
      sIns.forEach((el, k) => el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 1000, delay: k * 90, easing: ez, fill: 'forwards' }));
      sNameInner.forEach((el, k) => el.animate([{ opacity: 1, transform: 'translateY(105%)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 1100, delay: 200 + k * 80, easing: ez, fill: 'forwards' }));
      sDesc.style.opacity = '1';
      const k0 = sIdx; sIdx = -1; setActive(k0);
      sT0 = performance.now();
    }, { threshold: 0.25 });
    sIO.observe(svc); this.off.push(() => sIO.disconnect());
    const cp = { x: 0, y: 0, tx: 0, ty: 0, show: 0, tshow: 0 };
    sNames.forEach((n, k) => {
      this.on(n, 'pointerenter', (e) => { if (k !== sIdx) { setActive(k); sT0 = performance.now(); } sHold = true; if (e.pointerType === 'mouse') cp.tshow = 1; });
      this.on(n, 'pointerleave', () => { sHold = false; sT0 = performance.now(); });
      this.on(n, 'click', () => { setActive(k); sT0 = performance.now(); });
    });
    this.on(sList, 'pointermove', (e) => { const r = sList.getBoundingClientRect(); cp.tx = e.clientX - r.left; cp.ty = e.clientY - r.top; if (cp.show < 0.01) { cp.x = cp.tx; cp.y = cp.ty; } });
    this.on(sList, 'pointerleave', () => { cp.tshow = 0; });
    const sMq = matchMedia('(max-width: 860px)');
    const sApply = () => { const m = sMq.matches; sGrid.style.gridTemplateColumns = m ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,2.2fr)'; sLeftCol.style.position = m ? 'relative' : 'sticky'; sLeftCol.style.top = m ? 'auto' : 'clamp(80px,14vh,140px)'; sCard.style.display = m ? 'none' : 'block'; };
    sApply(); this.on(sMq, 'change', sApply);
    let sResize = 0;
    const sRO = new ResizeObserver(() => { clearTimeout(sResize); sResize = this.later(reActive, 200); });
    sRO.observe(sDesc); this.off.push(() => sRO.disconnect());
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!this.dead) reActive(); });
    this.langHooks.push(reActive);
    const svcTick = () => {
      if (sOn) {
        const now = performance.now();
        if (sHold) sT0 = now - Math.min(now - sT0, DUR * 0.999);
        const pr = Math.min(1, (now - sT0) / DUR);
        sProgEl.style.transform = `scaleX(${pr})`;
        if (pr >= 1) { setActive(sIdx + 1); sT0 = now; }
      }
      cp.x += (cp.tx - cp.x) * 0.12; cp.y += (cp.ty - cp.y) * 0.12; cp.show += (cp.tshow - cp.show) * 0.12;
      const dx = cp.tx - cp.x;
      const chh = sCard.offsetHeight;
      sCard.style.opacity = cp.show.toFixed(3);
      sCard.style.transform = `translate(${cp.x + 28}px, ${cp.y - chh / 2}px) rotate(${Math.max(-8, Math.min(8, dx * 0.06))}deg) scale(${0.85 + 0.15 * cp.show})`;
    };
    mw.forEach((w) => { w.style.opacity = 0.14; });
    // The manifesto words are re-rendered by React when the language changes.
    this.langHooks.push(() => { mw = Array.from(root.querySelectorAll('[data-w]')); });
    const sides = Array.from(root.querySelectorAll('[data-side]'));
    const outs = Array.from(root.querySelectorAll('[data-out]'));
    const clock = root.querySelector('[data-clock]');
    const setClock = () => { try { clock.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Argentina/Buenos_Aires' }).format(new Date()) + this.d().localTime; } catch {} };
    setClock(); this.every(setClock, 30000); this.langHooks.push(setClock);
    const outMq = matchMedia('(max-width: 700px)');
    const outApply = () => { const c = root.querySelector('a[data-out]'); if (c) c.style.display = outMq.matches ? 'none' : 'flex'; };
    outApply(); this.on(outMq, 'change', outApply);
    this.startReel(root);
    outs.forEach((el, i) => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, delay: 1100 + i * 140, easing: ez, fill: 'backwards' }));
    const sideMq = matchMedia('(max-width: 900px)');
    const sideApply = () => sides.forEach((el) => { el.style.display = sideMq.matches ? 'none' : 'flex'; });
    sideApply(); this.on(sideMq, 'change', sideApply);
    const sideIn = [];
    sides.forEach((el, i) => sideIn.push(el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, delay: 1100 + i * 120, easing: ez, fill: 'backwards' })));
    const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    let raf = 0;
    const tick = () => {
      if (this.dead) return;
      raf = requestAnimationFrame(tick);
      const r = heroSec.getBoundingClientRect(), span = r.height - this.vh;
      const target = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
      this.sp += (target - this.sp) * 0.12;
      const p = Math.min(1, this.sp / 0.76), ex = ss(0.78, 0.98, this.sp);
      const tOut = ss(0, 0.18, p);
      title.style.opacity = 1 - tOut;
      if (tOut > 0) sideIn.forEach((an) => { if (an.playState !== 'finished') an.finish(); });
      title.style.transform = `translateY(${tOut * 60}px)`;
      hint.style.opacity = 1 - tOut;
      hint.style.transform = `translate(-50%, ${tOut * 60}px)`;
      hint.style.pointerEvents = tOut > 0.5 ? 'none' : 'auto';
      outs.forEach((el) => { el.style.opacity = 1 - tOut; el.style.transform = `translateY(${tOut * 60}px)`; el.style.pointerEvents = tOut > 0.5 ? 'none' : ''; });
      sides.forEach((el) => { el.style.opacity = 1 - tOut; el.style.transform = `translateY(calc(-50% + ${tOut * 60}px))`; });
      words.forEach((w, i) => {
        const a = ss(0.4 + i * 0.06, 0.52 + i * 0.06, p), b = ss(0.68 + i * 0.04, 0.78 + i * 0.04, p);
        w.style.opacity = a * (1 - b);
        w.style.transform = `translateY(${(1 - a) * 50 - b * 50}px)`;
        w.style.filter = `blur(${(1 - a) * 8 + b * 8}px)`;
      });
      const e = ss(0.84, 0.97, p);
      end.style.opacity = e;
      end.style.transform = `translateY(${(1 - e) * 30 - ex * this.vh * 0.95}px)`;
      const mr = man.getBoundingClientRect(), vh = this.vh;
      const mpT = Math.min(1, Math.max(0, (vh * 0.75 - mr.top) / (mr.height + vh * 0.15)));
      this.mp = (this.mp ?? 0) + (mpT - (this.mp ?? 0)) * 0.08;
      const mp = this.mp;
      svcTick();
      const rr = rev.getBoundingClientRect();
      const rpT = Math.min(1, Math.max(0, (vh * 0.9 - rr.top) / (vh * 0.8)));
      this.rp = (this.rp ?? 0) + (rpT - (this.rp ?? 0)) * 0.08;
      const ie = this.rp;
      rev.style.clipPath = `inset(${12 * (1 - ie)}% ${9 * (1 - ie)}% ${12 * (1 - ie)}% ${9 * (1 - ie)}%)`;
      revImg.style.transform = `scale(${1.25 - 0.25 * ie})`;
      const span3 = 3, n = mw.length;
      mw.forEach((w, i) => { const k = Math.min(1, Math.max(0, (mp * (n + span3) - i) / span3)); w.style.opacity = (0.14 + 0.86 * k).toFixed(3); });
    };
    raf = requestAnimationFrame(tick);
    this.off.push(() => cancelAnimationFrame(raf));
    this.initThree(root, ss);
    this.initShowcase(root, ss);
    this.initFaq(root);
    this.initContact(root);
    this.initCase(root);
  }

  initCase(root) {
    const sec = root.querySelector('[data-case]'); if (!sec) return;
    const ez = 'cubic-bezier(.16,1,.3,1)', ezIn = 'cubic-bezier(.7,0,.84,0)';
    const cl = (v) => Math.min(1, Math.max(0, v));
    const eio = (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const masks = Array.from(sec.querySelectorAll('[data-cm]')), fades = Array.from(sec.querySelectorAll('[data-cf]')), nums = Array.from(sec.querySelectorAll('[data-cnum]')), revs = Array.from(sec.querySelectorAll('[data-crev]'));
    masks.forEach((m) => { m.firstElementChild.style.transform = 'translateY(110%)'; });
    fades.forEach((f) => { f.style.opacity = '0'; });
    // " wks" is the only translated suffix; counters keep their state so a language switch can repaint them.
    const cState = new Map();
    const cText = (el, v) => { const suf = el.dataset.csuf || ''; return (el.dataset.cpre || '') + v + (suf === ' wks' ? this.d().weeks : suf); };
    nums.forEach((el) => { cState.set(el, 0); el.textContent = cText(el, 0); });
    this.langHooks.push(() => nums.forEach((el) => { const s = cState.get(el); if (s !== 1) el.textContent = cText(el, s === 2 ? +el.dataset.cnum : 0); }));
    const count = (el) => {
      const to = +el.dataset.cnum, t0 = performance.now(), d = 1800;
      cState.set(el, 1);
      const st = (t) => { if (this.dead) return; const k = cl((t - t0) / d), e = 1 - Math.pow(2, -10 * k); el.textContent = cText(el, Math.round(to * e)); if (k < 1) requestAnimationFrame(st); else cState.set(el, 2); };
      requestAnimationFrame(st);
    };
    const io = new IntersectionObserver((ens) => ens.forEach((en) => {
      if (!en.isIntersecting) return; io.unobserve(en.target);
      const el = en.target;
      if (el.dataset.cm != null) el.firstElementChild.animate([{ transform: 'translateY(110%) skewY(6deg)' }, { transform: 'none' }], { duration: 1300, delay: +el.dataset.cm * 120, easing: ez, fill: 'forwards' });
      else if (el.dataset.cpar != null) { const rv = el.querySelector('[data-crev]'); rv.animate([{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 1400, easing: ez, fill: 'forwards' }); rv.firstElementChild.animate([{ transform: 'scale(1.35)' }, { transform: 'scale(1.2)' }], { duration: 1800, easing: ez, fill: 'forwards' }); }
      else { el.animate([{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'none' }], { duration: 1000, delay: (+el.dataset.cf || 0) * 90, easing: ez, fill: 'forwards' }); el.querySelectorAll('[data-cnum]').forEach(count); }
    }), { threshold: 0.2 });
    [...masks, ...fades, ...revs.map((r) => r.parentNode)].forEach((el) => io.observe(el));
    const pin = sec.querySelector('[data-cpin]'), frame = sec.querySelector('[data-cframe]'), shot = sec.querySelector('[data-cshot]'), shotIn = sec.querySelector('[data-cshot-in]');
    const panel = sec.querySelector('[data-cpanel]'), bar = sec.querySelector('[data-cbar]'), cnt = sec.querySelector('[data-ccount]');
    const steps = Array.from(sec.querySelectorAll('[data-cstep]')).map((s) => Array.from(s.querySelectorAll('[data-cl]')));
    const par = Array.from(sec.querySelectorAll('[data-cpar]')), imgs = Array.from(sec.querySelectorAll('[data-crev-img]'));
    steps.forEach((ls) => ls.forEach((l) => { l.style.transform = 'translateY(110%)'; }));
    cnt.textContent = '01';
    let cur = -1;
    const show = (i) => {
      if (cur >= 0) steps[cur].forEach((l, j) => { l.getAnimations().forEach((a) => a.cancel()); l.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-110%)' }], { duration: 450, delay: j * 40, easing: ezIn, fill: 'forwards' }); });
      steps[i].forEach((l, j) => { l.getAnimations().forEach((a) => a.cancel()); l.animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 950, delay: 260 + j * 80, easing: ez, fill: 'forwards' }); });
      cnt.textContent = '0' + (i + 1); cur = i;
    };
    let sm = 0, raf = 0, lastY = scrollY, vel = 0;
    const tick = () => {
      if (this.dead) return;
      raf = requestAnimationFrame(tick);
      const vh = this.vh, r = pin.getBoundingClientRect(), span = Math.max(1, r.height - vh);
      const p = cl(-r.top / span);
      sm += (p - sm) * 0.14;
      const a = eio(cl(sm / 0.28));
      frame.style.transform = `scale(${(0.56 + 0.44 * a).toFixed(4)})`;
      frame.style.borderRadius = `${(14 * (1 - a)).toFixed(1)}px`;
      shotIn.style.transform = `scale(${(1.08 - 0.08 * a).toFixed(4)})`;
      const b = eio(cl((sm - 0.3) / 0.68));
      shot.style.transform = `translate3d(0,${(-(shot.offsetHeight - (frame.offsetHeight - 40)) * b).toFixed(1)}px,0)`;
      bar.style.transform = `scaleX(${cl((sm - 0.2) / 0.8).toFixed(4)})`;
      const pv = cl((sm - 0.16) / 0.1);
      panel.style.opacity = pv.toFixed(3);
      panel.style.transform = `translateY(${((1 - pv) * 24).toFixed(1)}px)`;
      const i = sm < 0.48 ? 0 : sm < 0.74 ? 1 : 2;
      if (sm > 0.18 && i !== cur) show(i);
      const y = scrollY; vel += ((y - lastY) - vel) * 0.12; lastY = y;
      const tilt = Math.max(-2.5, Math.min(2.5, vel * 0.06));
      par.forEach((el, k) => {
        const rr = el.getBoundingClientRect(), c = (rr.top + rr.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0,${(c * +el.dataset.cpar * 120).toFixed(1)}px,0) rotate(${(tilt * (k % 2 ? -1 : 1)).toFixed(2)}deg)`;
        imgs[k].style.translate = `0 ${(-c * 40).toFixed(1)}px`;
      });
    };
    const vio = new IntersectionObserver(([en]) => { if (en.isIntersecting && !raf) { lastY = scrollY; raf = requestAnimationFrame(tick); } else if (!en.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; } }, { rootMargin: '200px 0px' });
    vio.observe(sec);
    this.off.push(() => { io.disconnect(); vio.disconnect(); cancelAnimationFrame(raf); });
  }

  initContact(root) {
    const sec = root.querySelector('[data-contact]'); if (!sec) return;
    const ez = 'cubic-bezier(.16,1,.3,1)', ezIn = 'cubic-bezier(.7,0,.84,0)';
    const cl = (v) => Math.min(1, Math.max(0, v));
    const eo = (t) => 1 - Math.pow(1 - t, 3);
    const panel = sec.querySelector('[data-ct-panel]');
    const masks = Array.from(sec.querySelectorAll('[data-ctm]')), fades = Array.from(sec.querySelectorAll('[data-ctf]'));
    masks.forEach((m) => { m.firstElementChild.style.transform = 'translateY(110%)'; });
    fades.forEach((f) => { f.style.opacity = '0'; });
    const io = new IntersectionObserver((ens) => ens.forEach((en) => {
      if (!en.isIntersecting) return; io.unobserve(en.target); const el = en.target;
      if (el.dataset.ctm != null) el.firstElementChild.animate([{ transform: 'translateY(110%) skewY(5deg)' }, { transform: 'none' }], { duration: 1300, delay: +el.dataset.ctm * 120, easing: ez, fill: 'forwards' });
      else el.animate([{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'none' }], { duration: 1000, delay: (+el.dataset.ctf || 0) * 90, easing: ez, fill: 'forwards' });
    }), { threshold: 0.2 });
    [...masks, ...fades].forEach((el) => io.observe(el));
    sec.querySelectorAll('[data-ctl]').forEach((a) => {
      const u = a.querySelector('[data-ctu]'), r = a.querySelector('[data-ctr]');
      this.on(a, 'mouseenter', () => { u.style.transform = 'scaleX(1)'; r.style.transform = 'translate(3px,-3px) rotate(45deg)'; });
      this.on(a, 'mouseleave', () => { u.style.transformOrigin = '100% 50%'; u.style.transform = 'scaleX(0)'; r.style.transform = ''; this.later(() => { u.style.transformOrigin = '0 50%'; }, 500); });
    });
    const openBtn = sec.querySelector('[data-ct-open]'), wipe = sec.querySelector('[data-ct-wipe]'), ar = sec.querySelector('[data-ct-ar]');
    this.on(openBtn, 'mouseenter', () => { wipe.style.transformOrigin = '0 50%'; wipe.style.transform = 'scaleX(1)'; ar.style.transform = 'translateX(6px)'; });
    this.on(openBtn, 'mouseleave', () => { wipe.style.transformOrigin = '100% 50%'; wipe.style.transform = 'scaleX(0)'; ar.style.transform = ''; });
    const fclock = sec.querySelector('[data-ftclock]');
    const fset = () => { try { fclock.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Argentina/Buenos_Aires' }).format(new Date()); } catch {} };
    fset(); this.every(fset, 30000);
    const xs = Array.from(sec.querySelectorAll('[data-ctx]')), wm = sec.querySelector('[data-ct-wm]'), word = sec.querySelector('[data-ct-word]');
    const pa = sec.querySelector('[data-ct-pa]'), pb = sec.querySelector('[data-ct-pb]'), mk = sec.querySelector('[data-ct-mark]');
    const wl = Array.from(sec.querySelectorAll('[data-wl]')), lift = wl.map(() => 0), hv = { x: -1e4, y: 0, on: 0, t: 0 };
    let mg = 0;
    this.on(wm, 'mousemove', (e) => { hv.x = e.clientX; hv.y = e.clientY; hv.t = 1; });
    this.on(wm, 'mouseleave', () => { hv.t = 0; });
    let sk = 0, sq = 0, sc = 0, raf = 0;
    const tick = () => {
      if (this.dead) return;
      raf = requestAnimationFrame(tick);
      const vh = this.vh, r = sec.getBoundingClientRect();
      const c = cl((vh - r.top) / (vh * 0.9));
      sc += (c - sc) * 0.1;
      const ce = eo(sc);
      panel.style.clipPath = `inset(0 ${(3 * (1 - ce)).toFixed(3)}vw 0 ${(3 * (1 - ce)).toFixed(3)}vw round ${(24 * (1 - ce)).toFixed(1)}px)`;
      const k = cl((vh - r.top) / (vh * 1.5));
      sk += (k - sk) * 0.1;
      xs.forEach((x) => { x.style.transform = `translate3d(${(+x.dataset.ctx * (1 - eo(sk)) * 16).toFixed(3)}vw,0,0)`; });
      const wr = wm.getBoundingClientRect();
      const q = cl((vh - wr.top) / (wr.height * 0.95));
      sq += (q - sq) * 0.1;
      const qe = eo(sq);
      hv.on += (hv.t - hv.on) * 0.06;
      wl.forEach((l, i) => {
        const b = l.getBoundingClientRect(), d = (hv.x - (b.left + b.width / 2)) / (b.width * 1.5), g = Math.exp(-d * d) * hv.on;
        lift[i] += (g - lift[i]) * 0.12;
        l.style.transform = `translate3d(0,${(-lift[i] * 12).toFixed(2)}%,0)`;
        l.style.color = lift[i] > 0.01 ? `color-mix(in oklab, var(--acc) ${(lift[i] * 85).toFixed(1)}%, #F3F2F2)` : '';
      });
      const mb = mk.getBoundingClientRect(), md = (hv.x - (mb.left + mb.width / 2)) / (mb.width * 1.6), mgT = Math.exp(-md * md) * hv.on;
      mg += (mgT - mg) * 0.1;
      pa.style.transform = `translate(${(-mg * 3).toFixed(2)}px,${(-70 * (1 - qe) - mg * 7).toFixed(2)}px)`;
      pb.style.transform = `translate(${(mg * 3).toFixed(2)}px,${(70 * (1 - qe) + mg * 7).toFixed(2)}px)`;
      pa.style.opacity = pb.style.opacity = (0.15 + 0.85 * qe).toFixed(3);
      word.style.transform = `translate3d(0,${(42 * (1 - qe)).toFixed(2)}%,0)`;
    };
    const vio = new IntersectionObserver(([en]) => { if (en.isIntersecting && !raf) raf = requestAnimationFrame(tick); else if (!en.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; } }, { rootMargin: '300px 0px' });
    vio.observe(sec);
    // form
    const form = root.querySelector('[data-form]'), acc = form.querySelector('[data-fm-acc]'), bg = form.querySelector('[data-fm-bg]'), body = form.querySelector('[data-fm-body]');
    const steps = Array.from(form.querySelectorAll('[data-fstep]')), nEl = form.querySelector('[data-fm-n]'), barEl = form.querySelector('[data-fm-bar]');
    const back = form.querySelector('[data-fm-back]'), next = form.querySelector('[data-fm-next]'), label = form.querySelector('[data-fm-label]'), nwipe = form.querySelector('[data-fm-wipe]');
    const name = form.querySelector('[data-fin-name]'), mail = form.querySelector('[data-fin-mail]'), msg = form.querySelector('[data-fin-msg]'), err = form.querySelector('[data-fm-err]');
    const chips = Array.from(form.querySelectorAll('[data-chip]'));
    // Picks hold the English key (data-value), so a selection survives a language switch.
    const picks = { type: new Set(), budget: new Set(), when: new Set() };
    let step = 0, isOpen = false, busy = false, sending = false, failed = false;
    const paint = (b, on) => { b.style.background = on ? 'var(--acc)' : 'transparent'; b.style.color = on ? '#0A0A0A' : '#F3F2F2'; b.style.borderColor = on ? 'var(--acc)' : '#3A3A3A'; };
    const valid = () => step === 0 ? picks.type.size > 0 : step === 1 ? true : step === 2 ? name.value.trim().length > 1 && /\S+@\S+\.\S+/.test(mail.value) : true;
    const refresh = () => { const v = valid() && !sending; next.style.opacity = v ? '1' : '.45'; next.style.cursor = v ? 'pointer' : 'not-allowed'; };
    const paintLabel = () => { const d = this.d(); label.textContent = sending ? d.sending : step === 2 ? d.send : step === 3 ? d.close : d.next; };
    const paintErr = () => { if (!err) return; err.textContent = failed ? this.d().error : ''; err.style.display = failed ? 'block' : 'none'; };
    nEl.textContent = '01'; paintLabel(); paintErr();
    this.langHooks.push(() => { paintLabel(); paintErr(); });
    chips.forEach((b) => {
      this.on(b, 'mouseenter', () => { if (!picks[b.dataset.chip].has(b.dataset.value)) b.style.borderColor = '#F3F2F2'; });
      this.on(b, 'mouseleave', () => { if (!picks[b.dataset.chip].has(b.dataset.value)) b.style.borderColor = '#3A3A3A'; });
      this.on(b, 'click', () => {
        const g = picks[b.dataset.chip], t = b.dataset.value;
        if (b.dataset.single) { chips.filter((x) => x.dataset.chip === b.dataset.chip).forEach((x) => paint(x, false)); const had = g.has(t); g.clear(); if (!had) g.add(t); }
        else if (g.has(t)) g.delete(t); else g.add(t);
        paint(b, g.has(t));
        b.animate([{ transform: 'scale(.94)' }, { transform: 'scale(1)' }], { duration: 450, easing: ez });
        refresh();
      });
    });
    [name, mail, msg].forEach((i) => this.on(i, 'input', () => { if (failed) { failed = false; paintErr(); } refresh(); }));
    this.on(next, 'mouseenter', () => { if (valid() && !sending) { nwipe.style.transformOrigin = '0 50%'; nwipe.style.transform = 'scaleX(1)'; } });
    this.on(next, 'mouseleave', () => { nwipe.style.transformOrigin = '100% 50%'; nwipe.style.transform = 'scaleX(0)'; });
    const enter = (s, d0) => {
      s.style.visibility = 'visible';
      s.querySelectorAll('[data-fm]').forEach((el, j) => { el.getAnimations().forEach((a) => a.cancel()); el.animate([{ transform: 'translateY(110%)' }, { transform: 'none' }], { duration: 1000, delay: d0 + j * 90, easing: ez, fill: 'backwards' }); });
      s.querySelectorAll('[data-fu]').forEach((el, j) => { el.getAnimations().forEach((a) => a.cancel()); el.animate([{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: d0 + 180 + j * 45, easing: ez, fill: 'backwards' }); });
    };
    const leave = (s, dir) => new Promise((res) => {
      const els = [...s.querySelectorAll('[data-fm]'), ...s.querySelectorAll('[data-fu]')];
      els.forEach((el, j) => el.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: `translateY(${dir * -30}px)` }], { duration: 380, delay: j * 18, easing: ezIn, fill: 'forwards' }));
      this.later(() => { s.style.visibility = 'hidden'; els.forEach((el) => el.getAnimations().forEach((a) => a.cancel())); res(); }, 380 + Math.min(els.length, 12) * 18);
    });
    const go = async (to, dir) => {
      if (busy) return; busy = true;
      await leave(steps[step], dir);
      if (this.dead) return;
      step = to;
      nEl.textContent = '0' + Math.min(3, step + 1);
      barEl.style.transform = `scaleX(${step >= 3 ? 1 : (step + 1) / 3})`;
      back.style.visibility = step > 0 && step < 3 ? 'visible' : 'hidden';
      paintLabel();
      enter(steps[step], 0);
      if (step === 3) {
        form.querySelector('[data-fd-a]').animate([{ transform: 'translate(0px,-60px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 1100, easing: 'cubic-bezier(.34,1.3,.64,1)', fill: 'backwards' });
        form.querySelector('[data-fd-b]').animate([{ transform: 'translate(0px,60px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 1100, delay: 80, easing: 'cubic-bezier(.34,1.3,.64,1)', fill: 'backwards' });
      }
      refresh(); busy = false;
    };
    // The team reads the mail in Spanish, whatever language the visitor is browsing in.
    const tr = (k) => es[k] ?? k;
    const send = async () => {
      sending = true; failed = false; next.disabled = true;
      paintErr(); paintLabel(); refresh();
      const budget = [...picks.budget][0], when = [...picks.when][0];
      const payload = {
        nombre: name.value.trim().slice(0, 100),
        email: mail.value.trim(),
        tipo: [...picks.type].map(tr).join(', ') || 'Sin definir',
        mensaje: [msg.value.trim().slice(0, 1800) || 'Sin descripción.', '', 'Presupuesto (USD): ' + (budget ? tr(budget) : '-'), 'Lanzamiento: ' + (when ? tr(when) : '-')].join('\n'),
      };
      let ok = false;
      try { const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); ok = res.ok; } catch {}
      if (this.dead) return;
      sending = false; next.disabled = false;
      if (ok) { go(3, 1); return; }
      failed = true; paintErr(); paintLabel(); refresh();
    };
    this.on(next, 'click', () => {
      if (!valid() || busy || sending) return;
      if (step === 2) send();
      else if (step === 3) close();
      else go(step + 1, 1);
    });
    this.on(back, 'click', () => { if (step > 0 && step < 3 && !sending) go(step - 1, -1); });
    const open = () => {
      if (isOpen) return; isOpen = true;
      if (this.lenis) this.lenis.stop();
      document.documentElement.style.overflow = 'hidden';
      steps.forEach((s, i) => { s.style.visibility = i === step ? 'visible' : 'hidden'; });
      form.style.display = 'block';
      body.style.opacity = '1';
      acc.animate([{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 750, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
      bg.animate([{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 750, delay: 140, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
      enter(steps[step], 620);
      form.querySelectorAll(':scope [data-fm-body] > div:first-child [data-fu], [data-fm-nav] [data-fu], [data-fm-body] > div:last-child > [data-fu]').forEach((el, j) => el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: 700 + j * 60, easing: ez, fill: 'backwards' }));
      refresh();
      this.later(() => { const f = steps[step].querySelector('button,input'); if (f) f.focus({ preventScroll: true }); }, 900);
    };
    const close = () => {
      if (!isOpen) return; isOpen = false;
      body.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'ease', fill: 'forwards' });
      bg.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 100% 0)' }], { duration: 700, delay: 150, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
      const a = acc.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 100% 0)' }], { duration: 700, delay: 280, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
      a.onfinish = () => {
        form.style.display = 'none';
        body.getAnimations().forEach((x) => x.cancel());
        document.documentElement.style.overflow = '';
        if (this.lenis) this.lenis.start();
        if (step === 3) { steps[3].style.visibility = 'hidden'; step = 0; picks.type.clear(); picks.budget.clear(); picks.when.clear(); chips.forEach((b) => paint(b, false)); name.value = mail.value = msg.value = ''; nEl.textContent = '01'; barEl.style.transform = 'scaleX(.333)'; paintLabel(); back.style.visibility = 'hidden'; }
        openBtn.focus({ preventScroll: true });
      };
    };
    this.on(openBtn, 'click', open);
    this.on(form.querySelector('[data-fm-close]'), 'click', close);
    this.on(document, 'keydown', (e) => { if (e.key === 'Escape' && isOpen) close(); });
    this.off.push(() => { io.disconnect(); vio.disconnect(); cancelAnimationFrame(raf); form.style.display = 'none'; document.documentElement.style.overflow = ''; });
  }

  initFaq(root) {
    const sec = root.querySelector('[data-faq]'); if (!sec) return;
    const items = Array.from(sec.querySelectorAll('[data-fq]'));
    const set = (it, o) => {
      it.dataset.open = o ? '1' : '0';
      it.querySelector('[data-fqa]').style.gridTemplateRows = o ? '1fr' : '0fr';
      it.querySelector('[data-fqb]').style.color = o ? '#0A0A0A' : '#A8A5A3';
      it.querySelector('[data-fqv]').style.transform = `scaleY(${o ? 0 : 1})`;
    };
    items.forEach((it) => this.on(it.querySelector('[data-fqb]'), 'click', () => {
      const o = it.dataset.open !== '1';
      items.forEach((x) => { if (x !== it && x.dataset.open === '1') set(x, false); });
      set(it, o);
    }));
    const ez = 'cubic-bezier(.16,1,.3,1)';
    const hs = Array.from(sec.querySelectorAll('[data-fh]')), ins = Array.from(sec.querySelectorAll('[data-fin]'));
    hs.forEach((el) => { el.style.transform = 'translateY(105%)'; });
    ins.forEach((el) => { el.style.opacity = '0'; });
    hs.forEach((el) => { el.parentNode.dataset.fhp = '1'; });
    const io2 = new IntersectionObserver((ens) => ens.forEach((en) => { if (!en.isIntersecting) return; io2.unobserve(en.target); const el = en.target.firstElementChild; const k = hs.indexOf(el); el.animate([{ transform: 'translateY(105%)' }, { transform: 'translateY(0)' }], { duration: 1100, delay: k * 90, easing: ez, fill: 'forwards' }); }), { threshold: 0.2 });
    const io3 = new IntersectionObserver((ens) => ens.forEach((en) => { if (!en.isIntersecting) return; io3.unobserve(en.target); en.target.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 900, easing: ez, fill: 'forwards' }); }), { threshold: 0.15 });
    hs.forEach((el) => io2.observe(el.parentNode));
    ins.forEach((el) => io3.observe(el));
    this.off.push(() => { io2.disconnect(); io3.disconnect(); });
  }

  async initShowcase(root, ss) {
    const sec = root.querySelector('[data-show]'), host = root.querySelector('[data-show-gl]');
    if (!sec || !host) return;
    let THREE;
    try { THREE = await import('three'); } catch { return; }
    if (this.dead) return;
    try { this.buildShowcase(THREE, sec, host, ss); } catch (e) { console.warn('Showcase 3D unavailable:', e && e.message); }
  }

  buildShowcase(THREE, sec, host, ss) {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setClearColor(0x000000, 0);
    const _scc = renderer.setClearColor.bind(renderer);
    renderer.setClearColor = (c, a) => (a === 0.5 && (c === 0xffffff || (c && c.isColor && c.getHex() === 0xffffff)) ? _scc(0x0a0a0a, 1) : _scc(c, a));
    const wordsEl = sec.querySelector('[data-show-words]'), swL = sec.querySelector('[data-sw="1"]'), swR = sec.querySelector('[data-sw="-1"]');
    const darkEl = sec.querySelector('[data-show-dark]'), vigEl = sec.querySelector('[data-show-vig]'), ctaEl = sec.querySelector('[data-show-cta]'), svcEl = sec.parentNode.querySelector('[data-svc]'), blurEl = sec.querySelector('[data-show-blur]');
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.5, 400);

    const ec = document.createElement('canvas'); ec.width = 1024; ec.height = 512;
    const ex = ec.getContext('2d');
    ex.fillStyle = '#050505'; ex.fillRect(0, 0, 1024, 512);
    ex.filter = 'blur(12px)';
    const box = (x, y, w, h, c) => { ex.fillStyle = c; ex.fillRect(x, y, w, h); };
    box(330, 18, 360, 70, '#ffffff'); box(90, 120, 46, 260, '#e8e8e8'); box(880, 140, 40, 240, '#d6d6d6'); box(470, 200, 90, 120, '#9a9a9a'); box(600, 400, 260, 26, '#5a5a5a'); box(160, 410, 120, 18, P.accent ?? '#CFF27E');
    ex.filter = 'blur(40px)'; box(0, 0, 1024, 60, 'rgba(255,255,255,.18)');
    const envTex0 = new THREE.CanvasTexture(ec);
    envTex0.mapping = THREE.EquirectangularReflectionMapping; envTex0.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromEquirectangular(envTex0).texture;
    scene.environment = envTex;

    // cylinder of project photos
    const RAD = 80, PH = 13.5, PW = 10.8, PER = 23;
    const ac = document.createElement('canvas'); ac.width = 216; ac.height = 270;
    const ax = ac.getContext('2d'); ax.fillStyle = '#000'; ax.fillRect(0, 0, 216, 270); ax.fillStyle = '#fff';
    ax.beginPath(); ax.roundRect(0, 0, 216, 270, 9); ax.fill();
    const alphaTex = new THREE.CanvasTexture(ac);
    const backdrop = new THREE.Mesh(new THREE.SphereGeometry(160, 24, 16), new THREE.MeshBasicMaterial({ color: 0x050505, side: THREE.BackSide, toneMapped: false }));
    backdrop.visible = false; scene.add(backdrop);
    const files = ['/assets/work/work-1.png', '/assets/work/work-2.png', '/assets/work/work-3.png', '/assets/work/work-4.png'];
    const loader = new THREE.TextureLoader();
    const texs = files.map((f) => loader.load(f, (t) => {
      const ia = t.image.width / t.image.height, A = PW / PH;
      let rx = 1, ry = 1;
      if (ia > A) rx = A / ia; else ry = ia / A;
      t.repeat.set(-rx, ry); t.offset.set((1 + rx) / 2, (1 - ry) / 2);
      t.needsUpdate = true;
    }));
    texs.forEach((t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; });
    const geos = [], mats = [];
    const rowsCfg = [{ y: 33, dir: 1, sp: 0.028 }, { y: 0, dir: -1, sp: 0.02 }, { y: -33, dir: 1, sp: 0.024 }];
    const rows = rowsCfg.map((rc, ri) => {
      const g = new THREE.Group(); g.position.y = rc.y;
      const th = PW / RAD;
      for (let k = 0; k < PER; k++) {
        const geo = new THREE.CylinderGeometry(RAD, RAD, PH, 12, 1, true, (k * Math.PI * 2) / PER + ri * 0.22, th);
        const mat = new THREE.MeshBasicMaterial({ map: texs[(k + ri) % texs.length], side: THREE.BackSide, toneMapped: false, color: new THREE.Color(0, 0, 0), alphaMap: alphaTex, alphaTest: 0.5 });
        geos.push(geo); mats.push(mat);
        g.add(new THREE.Mesh(geo, mat));
      }
      scene.add(g);
      return { g, ...rc };
    });

    // glass logo
    const rounded = (pts, r) => {
      const s = new THREE.Shape(), n = pts.length, V = pts.map(([x, y]) => new THREE.Vector2(x, -y));
      for (let i = 0; i < n; i++) {
        const p0 = V[(i - 1 + n) % n], p1 = V[i], p2 = V[(i + 1) % n];
        const a = p0.clone().sub(p1), b = p2.clone().sub(p1);
        const ra = Math.min(r, a.length() / 2), rb = Math.min(r, b.length() / 2);
        const Aa = p1.clone().add(a.normalize().multiplyScalar(ra)), Bb = p1.clone().add(b.normalize().multiplyScalar(rb));
        if (i === 0) s.moveTo(Aa.x, Aa.y); else s.lineTo(Aa.x, Aa.y);
        s.quadraticCurveTo(p1.x, p1.y, Bb.x, Bb.y);
      }
      s.closePath(); return s;
    };
    const ext = { depth: 7, bevelEnabled: true, bevelThickness: 3.4, bevelSize: 2.2, bevelSegments: 12, curveSegments: 16 };
    const gTop = new THREE.ExtrudeGeometry(rounded([[13, 0], [27, 0], [14, 27], [0, 27]], 3.6), ext);
    const gBot = new THREE.ExtrudeGeometry(rounded([[26, 33], [40, 33], [27, 64], [13, 64]], 3.6), ext);
    gTop.translate(-13.5, 13.5, -3.5); gBot.translate(-26.5, 48.5, -3.5);
    gTop.computeVertexNormals(); gBot.computeVertexNormals();
    const cubeRT = new THREE.WebGLCubeRenderTarget(512, { type: THREE.HalfFloatType, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
    const cubeCam = new THREE.CubeCamera(0.5, 400, cubeRT);
    const gm = new THREE.MeshPhysicalMaterial({ color: 0xf2f3f6, metalness: 1, roughness: 0.03, envMap: cubeRT.texture, envMapIntensity: 2.6, clearcoat: 1, clearcoatRoughness: 0.02 });
    const top = new THREE.Mesh(gTop, gm), bot = new THREE.Mesh(gBot, gm);
    top.position.set(-6.5, 15.5, 0); bot.position.set(6.5, -13.5, 0);
    const logo = new THREE.Group(); logo.add(top, bot); logo.position.z = -36; scene.add(logo);
    cubeCam.position.set(0, 0, -36); scene.add(cubeCam);
    const key = new THREE.DirectionalLight(0xffffff, 2); key.position.set(-30, 40, 20); scene.add(key);

    const layout = () => {
      const w = host.clientWidth || 1, hh = host.clientHeight || 1;
      renderer.setSize(w, hh, false);
      camera.aspect = w / hh; camera.fov = camera.aspect < 0.8 ? 70 : 60; camera.updateProjectionMatrix();
    };
    layout(); window.addEventListener('resize', layout);

    let raf = 0, vis = false, last = performance.now(), spin = 0, sm = 0;
    const rowA = rows.map(() => 0);
    const loop = () => {
      raf = 0;
      if (!vis || this.dead) return;
      const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now;
      const vh = this.vh, r = sec.getBoundingClientRect();
      const s = Math.max(0, -r.top);
      sm += (s - sm) * 0.1;
      const u = sm / vh, w = Math.max(0, u - 0.45) * 1.6;
      const PIN = 0.45 * vh, pin = s <= 0 ? 0 : s < 2 * PIN ? (s * s) / (4 * PIN) : s - PIN;
      const eo = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return 1 - Math.pow(1 - t, 3); };
      const rise = eo(0.2, 1.4, w);
      const dark = eo(0.35, 1.55, w);
      if (svcEl) {
        if (pin > 0 && dark < 0.999) {
          svcEl.style.transformOrigin = `50% ${svcEl.offsetHeight - vh / 2}px`;
          const ex = eo(0.15, 1.35, w);
          svcEl.style.transform = `translateY(${pin - ex * vh * 0.1}px) scale(${1 - 0.18 * ex})`;
          svcEl.style.filter = `blur(${(ex * 8).toFixed(2)}px)`;
          svcEl.style.opacity = (1 - ex * 0.5).toFixed(3);
          svcEl.style.visibility = 'visible';
        } else if (pin > 0) { svcEl.style.visibility = 'hidden'; }
        else { svcEl.style.transform = ''; svcEl.style.filter = ''; svcEl.style.opacity = ''; svcEl.style.visibility = 'visible'; }
      }
      darkEl.style.opacity = dark.toFixed(3);
      vigEl.style.opacity = dark.toFixed(3);
      const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 36;
      const sc = Math.min(0.21, (halfH * 2 * 0.42) / 70, (halfH * camera.aspect * 2 * 0.5) / 46);
      logo.scale.setScalar(sc * (1 + (1 - rise) * 0.35));
      logo.position.y = (1 - rise) * -(halfH + 70 * sc * 0.9);
      spin += dt * 0.25;
      logo.rotation.y = u * 1.15 - 1.2 + Math.sin(spin) * 0.12;
      logo.rotation.x = (1 - rise) * 0.25;
      const show = ss(0.4, 1.15, w);
      const lum = 0.6 * show;
      mats.forEach((mt) => { mt.color.setRGB(lum, lum, lum); });
      rows.forEach((rw, i) => { rw.g.visible = show > 0.002; rw.g.scale.setScalar(1); rw.g.position.y = rowsCfg[i].y - (1 - rise) * 40; });
      const cta = eo(1.3, 1.85, w);
      const wv = eo(1.0, 1.75, w);
      const et = Math.min(1, Math.max(0, 1 - (r.bottom - vh) / (0.9 * vh))), endE = et * et * (3 - 2 * et);
      wordsEl.style.visibility = wv > 0.001 && endE < 0.999 ? 'visible' : 'hidden';
      swL.style.transform = `translate3d(calc(${((1 - wv) * 105).toFixed(2)}% - ${(endE * 16).toFixed(2)}vw),0,0)`;
      swR.style.transform = `translate3d(calc(${(-(1 - wv) * 105).toFixed(2)}% + ${(endE * 16).toFixed(2)}vw),0,0)`;
      swL.style.opacity = swR.style.opacity = (1 - endE).toFixed(3);
      top.position.set(-6.5 - endE * 34, 15.5 + endE * 24, 0); bot.position.set(6.5 + endE * 34, -13.5 - endE * 24, 0);
      top.rotation.z = bot.rotation.z = endE * 0.22;
      blurEl.style.opacity = show.toFixed(3);
      ctaEl.style.opacity = (cta * (1 - endE)).toFixed(3);
      ctaEl.style.transform = `translateY(${(1 - cta) * 30}px)`;
      ctaEl.style.visibility = cta > 0.01 ? 'visible' : 'hidden';
      rows.forEach((rw, i) => { rowA[i] += dt * rw.sp * rw.dir; rw.g.rotation.y = rowA[i]; });
      logo.visible = false; scene.background = envTex0; cubeCam.update(renderer, scene); scene.background = null; logo.visible = true;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([en]) => { vis = en.isIntersecting; last = performance.now(); if (vis && !raf) raf = requestAnimationFrame(loop); }, { rootMargin: '20% 0px' });
    io.observe(sec);

    this.off.push(() => {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener('resize', layout);
      if (svcEl) { svcEl.style.transform = ''; svcEl.style.filter = ''; svcEl.style.opacity = ''; svcEl.style.visibility = ''; }
      geos.forEach((g) => g.dispose()); mats.forEach((mt) => mt.dispose()); texs.forEach((t) => t.dispose()); alphaTex.dispose();
      gTop.dispose(); gBot.dispose(); gm.dispose(); cubeRT.dispose(); backdrop.geometry.dispose(); backdrop.material.dispose(); envTex0.dispose(); envTex.dispose(); pmrem.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    });
  }

  startReel(root) {
    const reel = root.querySelector('[data-reel]'), cur = root.querySelector('[data-cur]'), ring = root.querySelector('[data-ring]'), lab = root.querySelector('[data-reel-label]');
    if (!reel) return;
    const D = 9000, ez = 'cubic-bezier(.76,0,.24,1)';
    const anims = [];
    anims.push(reel.animate([
      { transform: 'translateY(0)', offset: 0 }, { transform: 'translateY(0)', offset: 0.28, easing: ez },
      { transform: 'translateY(-33.333%)', offset: 0.36 }, { transform: 'translateY(-33.333%)', offset: 0.61, easing: ez },
      { transform: 'translateY(-66.666%)', offset: 0.69 }, { transform: 'translateY(-66.666%)', offset: 0.93, easing: ez },
      { transform: 'translateY(0)', offset: 1 },
    ], { duration: D, iterations: Infinity }));
    const pts = [[22, 70, 0], [30, 66, 0.12], [30, 66, 0.2], [72, 52, 0.4], [55, 70, 0.5], [55, 70, 0.55], [80, 40, 0.75], [80, 40, 0.85], [22, 70, 1]];
    anims.push(cur.animate(pts.map(([x, y, o]) => ({ left: x + '%', top: y + '%', offset: o, easing: 'cubic-bezier(.45,0,.2,1)' })), { duration: D, iterations: Infinity }));
    anims.push(cur.animate([
      { transform: 'scale(1)', offset: 0 }, { transform: 'scale(1)', offset: 0.17 }, { transform: 'scale(.7)', offset: 0.18 }, { transform: 'scale(1)', offset: 0.2 },
      { transform: 'scale(1)', offset: 0.52 }, { transform: 'scale(.7)', offset: 0.53 }, { transform: 'scale(1)', offset: 0.55 }, { transform: 'scale(1)', offset: 1 },
    ], { duration: D, iterations: Infinity }));
    anims.push(ring.animate([
      { left: '30%', top: '66%', opacity: 0, transform: 'scale(.4)', offset: 0 }, { left: '30%', top: '66%', opacity: 0, transform: 'scale(.4)', offset: 0.18 },
      { left: '30%', top: '66%', opacity: 0.9, transform: 'scale(.6)', offset: 0.185 }, { left: '30%', top: '66%', opacity: 0, transform: 'scale(1.4)', offset: 0.25 },
      { left: '55%', top: '70%', opacity: 0, transform: 'scale(.4)', offset: 0.53 }, { left: '55%', top: '70%', opacity: 0.9, transform: 'scale(.6)', offset: 0.535 },
      { left: '55%', top: '70%', opacity: 0, transform: 'scale(1.4)', offset: 0.6 }, { left: '55%', top: '70%', opacity: 0, transform: 'scale(.4)', offset: 1 },
    ], { duration: D, iterations: Infinity }));
    root.querySelectorAll('[data-barg]').forEach((b, i) => anims.push(b.animate([
      { transform: 'scaleY(0)', offset: 0 }, { transform: 'scaleY(0)', offset: 0.66 + i * 0.012 }, { transform: 'scaleY(1)', offset: 0.74 + i * 0.012, easing: 'cubic-bezier(.16,1,.3,1)' }, { transform: 'scaleY(1)', offset: 1 },
    ], { duration: D, iterations: Infinity })));
    const marks = [0, 0.32, 0.65];
    let last = 0;
    lab.textContent = this.d().reel[0];
    this.langHooks.push(() => { lab.textContent = this.d().reel[last]; });
    const tl = () => {
      const t = ((anims[0].currentTime || 0) % D) / D;
      const i = t >= marks[2] ? 2 : t >= marks[1] ? 1 : 0;
      if (i !== last) { last = i; lab.textContent = this.d().reel[i]; lab.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 400, easing: 'cubic-bezier(.16,1,.3,1)' }); }
    };
    this.every(tl, 100);
    this.off.push(() => { anims.forEach((a) => a.cancel()); });
  }

  async initThree(root, ss) {
    let THREE;
    try { THREE = await import('three'); } catch { return; }
    try { await Promise.all([document.fonts.load('600 400px Poppins'), document.fonts.load('300 400px Poppins')]); } catch {}
    if (this.dead) return;
    try { this.buildScene(THREE, root, ss); } catch (e) { console.warn('Hero 3D unavailable:', e && e.message); }
  }

  buildScene(THREE, root, ss) {
    const host = root.querySelector('[data-gl]');

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 1, 2000);
    camera.position.set(0, 0, 170);

    const ec = document.createElement('canvas'); ec.width = 1024; ec.height = 512;
    const ex = ec.getContext('2d');
    ex.fillStyle = '#060606'; ex.fillRect(0, 0, 1024, 512);
    ex.filter = 'blur(10px)';
    const box = (x, y, w, h, c) => { ex.fillStyle = c; ex.fillRect(x, y, w, h); };
    box(330, 18, 360, 70, '#ffffff');
    box(90, 120, 46, 260, '#e8e8e8');
    box(880, 140, 40, 240, '#d6d6d6');
    box(470, 200, 90, 120, '#9a9a9a');
    box(600, 400, 260, 26, '#5a5a5a');
    box(160, 410, 120, 18, P.accent ?? '#CFF27E');
    ex.filter = 'blur(40px)';
    box(0, 0, 1024, 60, 'rgba(255,255,255,.18)');
    const envTex0 = new THREE.CanvasTexture(ec);
    envTex0.mapping = THREE.EquirectangularReflectionMapping;
    envTex0.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromEquirectangular(envTex0).texture;
    scene.environment = envTex;

    const bgMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uWord: { value: P.showWord === false ? 0 : 1 }, uFade: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: `
        uniform float uTime; uniform float uWord; uniform float uFade; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
        void main(){
          vec2 p = vUv;
          float t = 0.0;
          vec3 col = vec3(0.036);
          col += t * vec3(0.07);
          col += (h(gl_FragCoord.xy + floor(uTime * 24.0)) - 0.5) * 0.02;
          gl_FragColor = vec4(col, 1.0);
        }`,
      depthWrite: false, toneMapped: false,
    });
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), bgMat);
    bg.position.z = -70;
    scene.add(bg);

    const rounded = (pts, r) => {
      const s = new THREE.Shape(), n = pts.length;
      const V = pts.map(([x, y]) => new THREE.Vector2(x, -y));
      for (let i = 0; i < n; i++) {
        const p0 = V[(i - 1 + n) % n], p1 = V[i], p2 = V[(i + 1) % n];
        const a = p0.clone().sub(p1), b = p2.clone().sub(p1);
        const ra = Math.min(r, a.length() / 2), rb = Math.min(r, b.length() / 2);
        const A = p1.clone().add(a.normalize().multiplyScalar(ra)), B = p1.clone().add(b.normalize().multiplyScalar(rb));
        if (i === 0) s.moveTo(A.x, A.y); else s.lineTo(A.x, A.y);
        s.quadraticCurveTo(p1.x, p1.y, B.x, B.y);
      }
      s.closePath();
      return s;
    };
    const ext = { depth: 7, bevelEnabled: true, bevelThickness: 3.4, bevelSize: 2.2, bevelSegments: 14, curveSegments: 18 };
    const gTop = new THREE.ExtrudeGeometry(rounded([[13, 0], [27, 0], [14, 27], [0, 27]], 3.6), ext);
    const gBot = new THREE.ExtrudeGeometry(rounded([[26, 33], [40, 33], [27, 64], [13, 64]], 3.6), ext);
    gTop.translate(-13.5, 13.5, -3.5); gBot.translate(-26.5, 48.5, -3.5);
    gTop.computeVertexNormals(); gBot.computeVertexNormals();
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff, metalness: 0, roughness: 0.04, transmission: 1, thickness: 16, ior: 1.46,
      dispersion: P.dispersion ?? 4, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 2.4, specularIntensity: 1,
      iridescence: 0.22, iridescenceIOR: 1.3, iridescenceThicknessRange: [200, 520],
    });
    const top = new THREE.Mesh(gTop, mat), bot = new THREE.Mesh(gBot, mat);
    const grp = new THREE.Group(); grp.add(top, bot); scene.add(grp);
    const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(-60, 90, 120); scene.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 1.4); rim.position.set(80, -30, -60); scene.add(rim);

    let base = { y: 0, sc: 0.6 };
    const layout = () => {
      const w = host.clientWidth || 1, h = host.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
      const vh = 2 * 170 * Math.tan(THREE.MathUtils.degToRad(15)), vw = vh * camera.aspect;
      base = { y: vh * 0.06, sc: Math.min(0.62, (vh * 0.46) / 70, (vw * 0.7) / 46) };
      const bh = 2 * 240 * Math.tan(THREE.MathUtils.degToRad(15)), bw = bh * camera.aspect;
      const W = Math.max(bw * 1.04, bh * 2.08);
      bg.scale.set(W, W / 2, 1);
    };
    layout();
    window.addEventListener('resize', layout);
    const m = { x: 0, y: 0, tx: 0, ty: 0 };
    const pm = (e) => { m.tx = (e.clientX / window.innerWidth) * 2 - 1; m.ty = (e.clientY / window.innerHeight) * 2 - 1; };
    window.addEventListener('pointermove', pm);
    const easeOut = (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * Math.max(0, x)));
    const clamp = (x) => Math.min(1, Math.max(0, x));
    let raf = 0, vis = true;
    const t0 = this.introAt || performance.now();
    const loop = () => {
      raf = 0;
      if (!vis || this.dead) return;
      const t = (performance.now() - t0) / 1000, p = Math.min(1, this.sp / 0.76), ex = ss(0.78, 0.98, this.sp);
      m.x += (m.tx - m.x) * 0.06; m.y += (m.ty - m.y) * 0.06;
      const iT = easeOut(clamp((t - 0.15) / 1.4)), iB = easeOut(clamp((t - 0.4) / 1.4)), iR = easeOut(clamp((t - 0.1) / 2.2));
      const grow = ss(0, 0.35, p), shrink = ss(0.72, 1, p);
      const split = 34 * ss(0.28, 0.5, p) * (1 - ss(0.7, 0.88, p));
      grp.position.set(0, base.y * (1 - shrink * 0.55), 0);
      grp.scale.setScalar(base.sc * (1 + grow * 0.35) * (1 - shrink * 0.5));
      grp.rotation.y = (1 - iR) * -1.4 + Math.sin(t * 0.4) * 0.22 + m.x * 0.4 + ss(0, 1, p) * Math.PI * 2;
      grp.rotation.x = Math.cos(t * 0.33) * 0.08 + m.y * 0.2;
      const out = ex * ex * 260;
      top.position.set(-6.5 - out, 15.5 + (1 - iT) * 130 + split, 0);
      bot.position.set(6.5 + out, -13.5 - (1 - iB) * 130 - split, 0);
      top.rotation.z = ex * 0.35; bot.rotation.z = -ex * 0.35;
      bgMat.uniforms.uTime.value = t;
      bgMat.uniforms.uFade.value = ss(0.15, 0.4, p);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([en]) => { vis = en.isIntersecting; if (vis && !raf) raf = requestAnimationFrame(loop); });
    io.observe(host);
    raf = requestAnimationFrame(loop);

    this.off.push(() => {
      cancelAnimationFrame(raf); io.disconnect();
      window.removeEventListener('resize', layout); window.removeEventListener('pointermove', pm);
      gTop.dispose(); gBot.dispose(); mat.dispose(); bgMat.dispose(); bg.geometry.dispose(); envTex0.dispose(); envTex.dispose(); pmrem.dispose(); renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    });
  }
}
