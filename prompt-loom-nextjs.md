# Prompt — Landing Loom en Next.js

## Contexto

Tenés un mockup HTML de la landing de **Loom**, una startup de desarrollo de software. El proyecto Next.js 14+ con App Router y TypeScript ya está creado. Tu tarea es replicar fielmente el diseño, efectos y comportamiento del HTML en componentes Next.js, usando Resend para el formulario de contacto y Zod para validación.

---

## Stack

- **Next.js 14+ App Router** (ya creado)
- **TypeScript** — `.tsx` para componentes, `.ts` para lógica
- **Resend** — envío de emails desde el Route Handler
- **React Email** — template del email de notificación
- **Zod** — validación server-side del formulario
- **`next/font`** — Bebas Neue + Montserrat (reemplazar Google Fonts CDN)
- **CSS puro en globals.css** — no usar Tailwind ni CSS Modules; replicar los estilos exactos del HTML
- **i18n sin librería** — `LanguageContext` propio con `useState('es' | 'en')`

---

## Estructura de archivos

```
/app
  layout.tsx              ← fonts, metadata, globals
  page.tsx                ← orquesta todas las secciones
  /api
    /contact
      route.ts            ← POST handler con Zod + Resend
/components
  Loader.tsx              ← pantalla de carga animada
  Nav.tsx                 ← nav flotante con pill on scroll
  HeroSection.tsx         ← hero con reveal animado
  MarqueeSection.tsx      ← banda de métricas infinita
  ServicesSection.tsx     ← índice de servicios con hover fill
  StackSection.tsx        ← chips de tecnologías + galería drag
  ProcessSection.tsx      ← pasos del proceso
  PrinciplesSection.tsx   ← principios con hover bar
  ContactModal.tsx        ← modal de contacto con form
  Footer.tsx
/data
  content.ts              ← todos los datos (servicios, stack, pasos, principios, métricas)
/emails
  ContactNotification.tsx ← template React Email
/lib
  validations.ts          ← schema Zod del formulario
  lang.tsx                ← LanguageContext + useLang hook
```

---

## Datos en `/data/content.ts`

Todos los textos visibles usan la forma `{ es: string; en: string }`. El stack (nombres de tecnologías) y los números no se traducen. El tipo base:

```ts
export type T = { es: string; en: string };
```

```ts
export const ui = {
  nav: {
    services:   { es: "Servicios",      en: "Services"    },
    stack:      { es: "Stack",          en: "Stack"       },
    process:    { es: "Proceso",        en: "Process"     },
    principles: { es: "Principios",     en: "Principles"  },
    cta:        { es: "Hablemos",       en: "Let's talk"  },
    langToggle: { es: "EN",             en: "ES"          },
  },
  hero: {
    tagline:    { es: "ESTUDIO DE DESARROLLO — BUENOS AIRES", en: "DEVELOPMENT STUDIO — BUENOS AIRES" },
    line1:      { es: "CONSTRUIMOS",    en: "WE BUILD"    },
    line2:      { es: "PRODUCTOS",      en: "DIGITAL"     },
    line3:      { es: "DIGITALES",      en: "PRODUCTS"    },
    sub:        { es: "Diseño y desarrollo de software para startups y empresas que quieren moverse rápido.", en: "Software design and development for startups and companies that want to move fast." },
    ctaBtn:     { es: "Hablemos",       en: "Let's talk"  },
    ctaLink:    { es: "Ver servicios ↓", en: "See services ↓" },
    scroll:     { es: "Scroll para explorar ↓", en: "Scroll to explore ↓" },
  },
  sections: {
    services:   { es: "SERVICIOS",      en: "SERVICES"    },
    stack:      { es: "TECNOLOGÍAS",    en: "TECHNOLOGIES" },
    process:    { es: "CÓMO TRABAJAMOS", en: "HOW WE WORK" },
    principles: { es: "PRINCIPIOS",     en: "PRINCIPLES"  },
  },
  modal: {
    title:      { es: "Contanos tu proyecto", en: "Tell us about your project" },
    namePh:     { es: "Nombre",         en: "Name"        },
    emailPh:    { es: "Email",          en: "Email"       },
    selectPh:   { es: "¿Qué necesitás?", en: "What do you need?" },
    msgPh:      { es: "Contanos sobre tu proyecto…", en: "Tell us about your project…" },
    submit:     { es: "Enviar mensaje ↗", en: "Send message ↗" },
    sending:    { es: "Enviando…",      en: "Sending…"    },
    reply:      { es: "Te respondemos en menos de 24h", en: "We'll reply within 24h" },
    successTitle: { es: "¡Mensaje enviado!", en: "Message sent!" },
    successSub:   { es: "Te respondemos en menos de 24 horas.", en: "We'll get back to you within 24 hours." },
    close:      { es: "Cerrar",         en: "Close"       },
    error:      { es: "Hubo un error. Intentá de nuevo.", en: "Something went wrong. Please try again." },
  },
};

export const services = [
  { num: "01", title: { es: "DESARROLLO WEB",      en: "WEB DEVELOPMENT"    }, desc: { es: "Plataformas veloces con Next.js y arquitecturas que escalan.", en: "Fast platforms with Next.js and architectures built to scale." } },
  { num: "02", title: { es: "APPS MÓVILES",        en: "MOBILE APPS"        }, desc: { es: "iOS y Android, nativas y multiplataforma.", en: "iOS and Android, native and cross-platform." } },
  { num: "03", title: { es: "APPS DE ESCRITORIO",  en: "DESKTOP APPS"       }, desc: { es: "Software para Windows, macOS y Linux.", en: "Software for Windows, macOS and Linux." } },
  { num: "04", title: { es: "DISEÑO DE PRODUCTO",  en: "PRODUCT DESIGN"     }, desc: { es: "De la idea al prototipo: UX, UI y sistemas de diseño.", en: "From idea to prototype: UX, UI and design systems." } },
  { num: "05", title: { es: "AUTOMATIZACIONES",    en: "AUTOMATION"         }, desc: { es: "Integraciones, flujos e IA aplicada a tu operación.", en: "Integrations, workflows and AI applied to your operation." } },
];

export const principles = [
  { n: "01", title: { es: "PENSAMOS EN SISTEMAS",       en: "WE THINK IN SYSTEMS"      }, desc: { es: "Antes de escribir código diseñamos cómo escala. Componentes, patrones y decisiones que aguantan el crecimiento.", en: "Before writing code we design how it scales. Components, patterns and decisions built for growth." } },
  { n: "02", title: { es: "ENVIAMOS SEGUIDO",           en: "WE SHIP OFTEN"            }, desc: { es: "Sprints cortos con entregas visibles cada semana. Nada de cajas negras: ves el progreso en vivo.", en: "Short sprints with visible deliverables every week. No black boxes — you see the progress live." } },
  { n: "03", title: { es: "EL DETALLE ES EL PRODUCTO",  en: "DETAIL IS THE PRODUCT"    }, desc: { es: "Microinteracciones, performance y accesibilidad. Lo que no se nota es lo que hace que se sienta bien.", en: "Microinteractions, performance and accessibility. What you don't notice is what makes it feel right." } },
  { n: "04", title: { es: "AUTOMATIZAMOS LO ABURRIDO",  en: "WE AUTOMATE THE BORING"   }, desc: { es: "Integraciones e IA aplicada para que tu operación corra sola y el equipo se enfoque en lo que importa.", en: "Integrations and AI so your operation runs itself and the team focuses on what matters." } },
];

// stack no se traduce — son nombres de tecnologías
export const stack = ["React", "Next.js", "TypeScript", "C#", ".NET", "Node", "React Native", "Tailwind", "GSAP", "PostgreSQL", "AWS", "Figma"];

export const steps = [
  { n: "01", title: { es: "Descubrimiento", en: "Discovery"   }, desc: { es: "Entendemos tu producto, usuarios y el problema real.", en: "We understand your product, users and the real problem." } },
  { n: "02", title: { es: "Diseño",         en: "Design"      }, desc: { es: "Prototipos y sistema. Vemos y tocamos antes de construir.", en: "Prototypes and systems. We see and touch before we build." } },
  { n: "03", title: { es: "Desarrollo",     en: "Development" }, desc: { es: "Ingeniería en sprints, con entregas visibles cada semana.", en: "Engineering in sprints, with visible deliverables every week." } },
  { n: "04", title: { es: "Lanzamiento",    en: "Launch"      }, desc: { es: "Salimos a producción y mejoramos con datos reales.", en: "We ship to production and improve with real data." } },
];

export const marqueeItems = [
  { a: "6+",  b: { es: "Proyectos entregados",   en: "Projects delivered"   } },
  { a: "24H", b: { es: "Tiempo de respuesta",    en: "Response time"        } },
  { a: "∞",   b: { es: "Iteraciones sin drama",  en: "Iterations, no drama" } },
  { a: "98%", b: { es: "Clientes que repiten",   en: "Returning clients"    } },
];

export const contact = {
  email: "hola@loom.com.ar", // reemplazar con el real
};
```

---

## Variables CSS globales — replicar exactas

```css
:root {
  --bg: #f4f5f7;
  --ink: #0c0d0f;
  --line: rgba(12, 13, 15, 0.12);
  --muted: #6b6e73;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-font-smoothing: antialiased; }
body { background: var(--bg); color: var(--ink); font-family: "Montserrat", "Helvetica Neue", sans-serif; overflow-x: hidden; }
a { color: inherit; text-decoration: none; }
::selection { background: var(--ink); color: var(--bg); }
.bebas { font-family: "Bebas Neue", sans-serif; font-weight: 400; letter-spacing: 0.005em; }
.meta { font-size: 11px; font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase; }
```

---

## i18n — `/lib/lang.tsx`

Sin librerías externas. Implementar así:

```tsx
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'es' | 'en';
export type T = { es: string; en: string };

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'es',
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  const toggle = () => setLang(l => l === 'es' ? 'en' : 'es');
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, toggle } = useContext(LangContext);
  const t = (key: T) => key[lang];
  return { lang, toggle, t };
}
```

**Uso en componentes:**
```tsx
const { t, lang, toggle } = useLang();
// textos: t(ui.hero.tagline), t(service.title), etc.
// botón de idioma en Nav: <button onClick={toggle}>{t(ui.nav.langToggle)}</button>
```

**En `layout.tsx`:** envolver con `<LangProvider>` (client boundary). El resto de la app puede ser Server Component.

**Botón en Nav:** esquina superior derecha, junto al CTA. Estilo: mismo que los nav links, texto `"EN"` cuando el idioma es ES y `"ES"` cuando es EN. Aplicarle el efecto `.navlk` (slide vertical) igual que los otros links.

**Regla:** todo texto visible del usuario pasa por `t()`. Los únicos strings hardcodeados permitidos son los del stack tecnológico y el símbolo `©`.

---

## Loader (`Loader.tsx`)

- `position: fixed; inset: 0; z-index: 9999; background: var(--ink); color: var(--bg)`
- Texto gigante `"LOOM"` en Bebas Neue, `clamp(90px, 20vw, 300px)`, `line-height: 0.78`
- Barra de progreso: `height: 1px`, `transform-origin: left`, `animation: barGrow 1.6s cubic-bezier(.5,0,.2,1) forwards`
- Contador CSS con `@property --loomnum`, `counter-reset`, `animation: countUp 1.6s` — replicar exacto
- Salida: `animation: loaderOut 2.4s cubic-bezier(.76,0,.24,1) forwards` que hace `translateY(-100%)`
- Texto de esquina inferior derecha: usar `t({ es: "DESARROLLO DE SOFTWARE — 2025", en: "SOFTWARE DEVELOPMENT — 2025" })` en `.meta`
- Usá `useEffect` para montar/desmontar el loader del DOM después de que termine la animación (`setTimeout` 2600ms)

---

## Nav (`Nav.tsx`)

- `position: fixed; top: 0; width: 100%; z-index: 800`
- En el top: texto blanco con `mix-blend-mode: difference`
- Al hacer scroll > 60px, agregar clase `.floating`:
  - `padding: 14px 16px` en el shell
  - Inner: `max-width: 960px`, `border-radius: 100px`, `background: rgba(244,245,247,0.72)`, `backdrop-filter: blur(18px)`, `box-shadow: 0 16px 44px -18px rgba(12,13,15,0.28)`, `color: var(--ink)`, `mix-blend-mode: normal`
  - CTA: `border-radius: 100px; background: var(--ink); color: var(--bg); padding: 9px 20px`
- Links de nav: efecto `.navlk` — el span actual hace `translateY(105%)` y el `::before` (data-t) baja desde arriba al hover
- CTA `t(ui.nav.cta)` abre el modal de contacto
- Botón de idioma: `<button onClick={toggle}>{t(ui.nav.langToggle)}</button>` — mismo estilo `.navlk`, va entre los links y el CTA
- Usá `useEffect` con scroll listener `{ passive: true }` para la clase floating, cleanup en return

---

## HeroSection (`HeroSection.tsx`)

Animaciones de entrada (CSS puro, con `animation-delay`):
- `.hline > span`: `animation: lineUp 1.1s cubic-bezier(.19,1,.22,1) both` con delays 1.8s / 1.9s / 2.0s
- `.r1` y `.r2`: `riseIn .9s` con delays 2.05s / 2.15s
- `.rf`: `fadeIn .9s` con delay 2.3s

Contenido — todos los textos usando `t()`:
- Tagline superior `.meta`: `t(ui.hero.tagline)`
- Título principal Bebas Neue, `clamp(72px, 13vw, 200px)`, 3 líneas: `t(ui.hero.line1)` / `t(ui.hero.line2)` / `t(ui.hero.line3)`
- Subtítulo `.r1`: `t(ui.hero.sub)`
- CTA row `.r2`: botón `t(ui.hero.ctaBtn)` (abre modal) con efecto magnet + link `t(ui.hero.ctaLink)`
- Fila `.rf` inferior: `"©2025"` + `t(ui.hero.scroll)` + texto muted
- Efecto **magnet** en el botón CTA: `pointermove` calcula offset del centro del botón, aplica `translate(mx*0.3, my*0.45)` al outer y `translate(mx*0.16, my*0.24)` al inner `.magnet-inner`, reset en `pointerleave`

---

## MarqueeSection

- Banda completa `overflow: hidden; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line)`
- Contenido: items duplicados del array `marqueeItems` (formato `"6+ — " + t(item.b)`)
- `animation: marqueeX 34s linear infinite` — `translateX(-50%)`
- Separador entre items: `|` o punto en muted

---

## ServicesSection (`ServicesSection.tsx`)

- Título de sección: `t(ui.sections.services)` con `.mline > span` (scroll-driven mask reveal)
- Cada servicio: fila `.idx-row` con:
  - Fondo `.idx-fill`: `position: absolute; inset: 0; background: var(--ink); transform: scaleY(0); transform-origin: bottom; transition: transform .5s cubic-bezier(.22,1,.36,1)`
  - Al hover: `scaleY(1)` en fill, textos `.idx-txt` → `color: var(--bg)`, flecha `.idx-arrow` aparece desde la izquierda
  - Columnas: número (muted), `t(service.title)` (Bebas Neue, grande), `t(service.desc)`, flecha `↗`
  - Separador `border-bottom: 1px solid var(--line)` entre filas

---

## StackSection (`StackSection.tsx`)

**Chips:**
- Grid/flex wrap de chips con `border: 1px solid var(--line); border-radius: 100px; padding: 10px 20px`
- Hover: `translateY(-4px); background: var(--ink); color: var(--bg); border-color: var(--ink)`
- Transition: `transform .35s cubic-bezier(.19,1,.22,1), background .3s, color .3s`

**Galería horizontal drag:**
- Contenedor `overflow-x: auto; cursor: grab; scrollbar-width: none`
- Drag con pointer events: `pointerdown` guarda `startX` y `scrollLeft`, `pointermove` mueve, `pointerup` suelta
- Wheel vertical dentro del elemento hace scroll horizontal (con `preventDefault` si no está al límite)
- Usar `useRef` para el contenedor, `useEffect` para los event listeners, cleanup en return

---

## StackSection (`StackSection.tsx`)

- Título de sección: `t(ui.sections.stack)`

## ProcessSection (`ProcessSection.tsx`)

- Título: `t(ui.sections.process)` con mask reveal
- 4 pasos en grid 2 columnas (desktop) / 1 columna (mobile)
- Cada paso: número grande en Bebas Neue (muted), `t(step.title)`, `t(step.desc)`
- `.reveal` scroll-driven: `animation-timeline: view(); animation-range: entry 4% entry 60%`

---

## PrinciplesSection (`PrinciplesSection.tsx`)

- Título: `t(ui.sections.principles)` con mask reveal
- Cada fila `.prow`:
  - `position: relative; padding: 24px 0 24px 0; border-bottom: 1px solid var(--line)`
  - Al hover: `padding-left: 20px` (transition .45s)
  - `.p-bar`: `position: absolute; left: 0; width: 2px; background: var(--ink); transform: scaleY(0); transform-origin: top` → hover: `scaleY(1)`
  - Número muted, `t(principle.title)` en Bebas Neue (grande), `t(principle.desc)`
- `.reveal` en cada fila

---

## ContactModal (`ContactModal.tsx`)

Estado: `modalOpen: boolean`, `sent: boolean` — manejado en `page.tsx` con `useState` y pasado por props.

**Estructura del modal:**
- Backdrop: `position: fixed; inset: 0; z-index: 900; background: rgba(12,13,15,0.6); backdrop-filter: blur(8px)` — click cierra
- Card: `position: relative; background: var(--bg); border-radius: 24px; padding: 40px; max-width: 540px; width: 90%`
- `animation: mdBgIn .35s ease both` en backdrop, `mdCardIn .5s cubic-bezier(.19,1,.22,1) both` en card
- Botón cerrar `✕` en esquina superior derecha, hover: `background: #eceef1`
- `e.stopPropagation()` en el card para no cerrar al clickear adentro

**Formulario (estado `notSent`) — todos los textos con `t()`:**
```
t(ui.modal.namePh) + t(ui.modal.emailPh) (flex row, gap 12px)
Select t(ui.modal.selectPh) con opciones bilingües según lang:
  es: Desarrollo web / App móvil / App de escritorio / Diseño de producto / Automatización / Otra cosa
  en: Web development / Mobile app / Desktop app / Product design / Automation / Something else
Textarea t(ui.modal.msgPh) rows=4
Botón submit: t(ui.modal.submit) — mientras carga: t(ui.modal.sending)
Texto muted: t(ui.modal.reply)
```

Inputs `.fld`: `padding: 15px 20px; border: 1px solid var(--line); border-radius: 14px; background: #fff; font-size: 15px`
Focus: `border-color: var(--ink); box-shadow: 0 0 0 3px rgba(12,13,15,0.08)`

**Submit:**
- El botón hace `POST /api/contact` con los datos del form como JSON
- Mientras espera: deshabilitar botón, texto `"Enviando…"`
- En success: `setSent(true)` → mostrar estado de confirmación
- En error: mostrar mensaje de error inline sin cerrar el modal

**Estado `sent`:**
- Ícono de check grande
- `t(ui.modal.successTitle)` en Bebas Neue
- `t(ui.modal.successSub)` en muted
- Botón `t(ui.modal.close)` que hace `closeModal()`

**Estado de error:** mostrar `t(ui.modal.error)` inline en rojo muted debajo del botón, sin cerrar el modal.

**IMPORTANTE:** No usar `<form>` con action — usar `onSubmit` con `e.preventDefault()` y fetch manual al Route Handler.

---

## Route Handler — `/app/api/contact/route.ts`

```ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { ContactEmail } from '@/emails/ContactNotification';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  tipo: z.string().min(1),
  mensaje: z.string().min(10).max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from: 'Loom Contact <onboarding@resend.dev>', // cambiar por dominio verificado
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo contacto: ${data.tipo} — ${data.nombre}`,
      react: ContactEmail({ ...data }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Datos inválidos', issues: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 });
  }
}
```

---

## Email template — `/emails/ContactNotification.tsx`

Template React Email limpio con:
- Asunto visual: nombre + tipo de proyecto
- Cuerpo: nombre, email, tipo, mensaje
- Footer: `"Loom — loom.com.ar"`
- Sin estilos complejos; solo layout table básico compatible con clientes de email

---

## Variables de entorno

Crear `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hola@loom.com.ar
```

Agregar `.env.local` al `.gitignore` si no está ya.

---

## Efectos CSS — replicar exactos

### Scroll-driven (CSS puro, sin JS)
```css
/* Reveal de elementos al entrar al viewport */
.reveal {
  animation: revealUp both cubic-bezier(.19,1,.22,1);
  animation-timeline: view();
  animation-range: entry 4% entry 60%;
}
@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: none; }
}

/* Mask reveal para títulos grandes */
.mline { display: block; overflow: hidden; }
.mline > span {
  display: block;
  animation: maskUp both cubic-bezier(.19,1,.22,1);
  animation-timeline: view();
  animation-range: entry 2% entry 56%;
}
@keyframes maskUp {
  from { transform: translateY(112%); }
  to { transform: translateY(0); }
}

/* Parallax */
.par {
  animation: parY linear both;
  animation-timeline: view();
  animation-range: cover;
}
@keyframes parY {
  from { transform: translateY(calc(var(--pf, 8%) * -1)); }
  to { transform: translateY(var(--pf, 8%)); }
}
```

### Link underline sweep
```css
.lk { position: relative; display: inline-block; }
.lk::after {
  content: ""; position: absolute; left: 0; bottom: -2px;
  width: 100%; height: 1px; background: currentColor;
  transform: scaleX(0); transform-origin: right;
  transition: transform .45s cubic-bezier(.19,1,.22,1);
}
.lk:hover::after { transform: scaleX(1); transform-origin: left; }
```

---

## Responsive

- `@media (max-width: 820px)`: grids de 2 columnas pasan a 1 columna
- Nav en mobile: simplificar — solo logo + botón CTA
- Hero: título a `clamp(56px, 14vw, 200px)`, bajá los paddings
- Modal: `width: 95%; padding: 28px`

---

## Instalación de dependencias

```bash
npm install resend @react-email/components zod
```

---

## Notas finales

- Todos los componentes con hooks de browser (`window`, `document`) deben ser `'use client'`
- El `page.tsx` puede ser Server Component — solo pasa el estado del modal como prop a los client components que lo necesiten
- Los datos de `/data/content.ts` se importan directamente, sin fetch
- No hardcodear el email de destino en el código — siempre desde `process.env`
- El loader debe desaparecer del DOM (no solo con `visibility: hidden`) para no bloquear interacciones
- **i18n:** el `LangProvider` va en `layout.tsx` envolviendo todo. Cada componente que muestre texto llama `useLang()` y usa `t()`. Nunca hardcodear strings visibles fuera de `content.ts`
- El cambio de idioma es instantáneo (sin recarga). El idioma no se persiste en localStorage — vuelve a `'es'` al recargar (se puede agregar después si se necesita)
- El stack tecnológico (`stack[]`) no se traduce — son nombres propios
