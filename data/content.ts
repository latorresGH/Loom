export type T = { es: string; en: string };

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
    studioLabel: { es: "Estudio",       en: "Studio"      },
    studioDesc: { es: "Software de producto, diseño e ingeniería. Santa Fe — 2025.", en: "Product software, design and engineering. Santa Fe — 2025." },
    socialLabel: { es: "Social",        en: "Social"      },
    line1:      { es: "CONSTRUIMOS",    en: "WE BUILD"    },
    line2:      { es: "PRODUCTOS",      en: "DIGITAL"     },
    line3:      { es: "DIGITALES",      en: "PRODUCTS"    },
    sub:        { es: "Diseño y desarrollo de software para startups y empresas que quieren moverse rápido.", en: "Software design and development for startups and companies that want to move fast." },
    ctaBtn:     { es: "Hablemos",       en: "Let's talk"  },
    ctaLink:    { es: "Ver servicios ↓", en: "See services ↓" },
    scroll:     { es: "Scroll ↓",       en: "Scroll ↓"    },
  },
  manifesto: {
    eyebrow:    { es: "(01) / Manifiesto", en: "(01) / Manifesto" },
    line1:      { es: "El buen software se siente", en: "Good software feels right" },
    line2:      { es: "antes de explicarse.", en: "before it needs explaining." },
    line3:      { es: "Lo construimos con método:", en: "We build it with method:" },
    line4:      { es: "sprint a sprint, sin atajos.", en: "sprint by sprint, no shortcuts." },
  },
  fullbleed: {
    caption1:   { es: "CADA SPRINT",    en: "EVERY SPRINT" },
    caption2:   { es: "SUMA",           en: "COUNTS"        },
    figLabel:   { es: "Fig. 01",        en: "Fig. 01"        },
    figCaption: { es: "El proceso",     en: "The process"    },
  },
  sections: {
    services:        { es: "SERVICIOS",      en: "SERVICES"    },
    servicesEyebrow: { es: "(02) / Un índice de capacidades que se combinan a tu medida.", en: "(02) / An index of capabilities that combine to fit your needs." },
    stack:      { es: "TECNOLOGÍAS",    en: "TECHNOLOGIES" },
    process:    { es: "CÓMO TRABAJAMOS", en: "HOW WE WORK" },
    principles: { es: "PRINCIPIOS",     en: "PRINCIPLES"  },
  },
  howWeWork: {
    eyebrow:    { es: "(03) / El stack y los principios que sostienen cada proyecto.", en: "(03) / The stack and principles behind every project." },
  },
  editorial: {
    eyebrow:    { es: "(04) / Enfoque", en: "(04) / Approach" },
    heading1:   { es: "NO ENTREGAMOS UN", en: "WE DON'T HAND OVER A" },
    heading2:   { es: "ARCHIVO Y NOS VAMOS.", en: "FILE AND WALK AWAY." },
    heading3:   { es: "TRABAJAMOS CONTIGO,", en: "WE WORK WITH YOU," },
    heading4:   { es: "EN ABIERTO.",    en: "IN THE OPEN."  },
    figLabel:   { es: "Fig. 02 — El proceso", en: "Fig. 02 — The process" },
  },
  footer: {
    eyebrow:   { es: "(05) / Contacto", en: "(05) / Contact" },
    heading1:  { es: "¿HABLAMOS",       en: "LET'S TALK"  },
    heading2:  { es: "DE TU PROYECTO?", en: "ABOUT IT?"   },
    studio:    { es: "Estudio",         en: "Studio"      },
    social:    { es: "Social",          en: "Social"      },
    location:  { es: "Santa Fe, AR", en: "Santa Fe, AR" },
    rights:    { es: "Todos los derechos reservados.", en: "All rights reserved." },
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

export const modalOptions: T[] = [
  { es: "Desarrollo web",       en: "Web development" },
  { es: "App móvil",            en: "Mobile app"       },
  { es: "App de escritorio",    en: "Desktop app"      },
  { es: "Diseño de producto",   en: "Product design"   },
  { es: "Automatización",       en: "Automation"       },
  { es: "Otra cosa",            en: "Something else"   },
];

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
  email: "hola@loom.com.ar",
};
