// All visible copy lives in the markup as English keys; this file holds the Spanish side.
// `t(key)` returns the key itself for English and `es[key]` for Spanish (falls back to the key).
// Keys keep their leading/trailing spaces on purpose (e.g. "Contact " is followed by an arrow span).

export type Lang = "es" | "en";

export const es: Record<string, string> = {
  // header / hero
  Menu: "Menú",
  "Contact ": "Contacto ",
  "We build digital": "Construimos productos",
  "products ": "digitales ",
  "that work.": "que funcionan.",
  "Websites.": "Sitios web.",
  "Apps.": "Apps.",
  "Automations.": "Automatizaciones.",
  "Designed and built ": "Diseñado y construido ",
  "from scratch.": "desde cero.",
  "Available for new projects": "Disponibles para nuevos proyectos",
  "Recent work": "Trabajos recientes",
  Scroll: "Scroll",

  // manifesto (the three segments are rendered word by word, see the `manifesto` prop)
  "Good software is felt before it's explained.": "El buen software se siente antes de explicarse.",
  "We build it with method: sprint by sprint,": "Lo construimos con método: sprint a sprint,",
  "no shortcuts.": "sin atajos.",

  // full-bleed
  "Every sprint": "Cada sprint",
  "adds up.": "suma.",
  "Fig. 01 — The process": "Fig. 01 — El proceso",

  // services
  "(What we do)": "(Qué hacemos)",
  "What we can help with": "En qué podemos ayudarte",
  "Web development": "Desarrollo web",
  "Mobile apps": "Apps móviles",
  "Desktop apps": "Apps de escritorio",
  "Product design": "Diseño de producto",
  Automations: "Automatizaciones",
  "Software modernization": "Modernización de software",
  "New order": "Nuevo pedido",
  Invoice: "Factura",
  "Email sent": "Email enviado",

  // showcase
  Selected: "Proyectos",
  work: "elegidos",
  "Explore the work ": "Explorar trabajos ",

  // case study
  "Case study": "Caso de estudio",
  Barbershop: "Barbería",
  "Bookings and cash, ": "Turnos y caja, ",
  "in one place.": "en un solo lugar.",
  Client: "Cliente",
  "Local barbershop": "Barbería de barrio",
  Scope: "Alcance",
  "Booking site, agenda, cash register": "Sitio de turnos, agenda y caja registradora",
  Stack: "Stack",
  Timeline: "Plazo",
  "5 weeks": "5 semanas",
  "Booking site · client project": "Sitio de turnos · proyecto de cliente",
  Services: "Servicios",
  Team: "Equipo",
  Location: "Ubicación",
  "Book now": "Reservá ahora",
  "Barbershop · Online booking": "Barbería · Turnos online",
  "Your chair,": "Tu turno,",
  "one tap away.": "a un toque.",
  "Pick a barber, a day and a time. We'll send you a reminder two hours before.":
    "Elegí barbero, día y horario. Te mandamos un recordatorio dos horas antes.",
  "Pick a day": "Elegí un día",
  October: "Octubre",
  Mon: "Lun",
  Tue: "Mar",
  Wed: "Mié",
  Thu: "Jue",
  Fri: "Vie",
  Sat: "Sáb",
  "Available times": "Horarios disponibles",
  "Cut + Beard": "Corte + Barba",
  "45 min · with Tomi": "45 min · con Tomi",
  "Confirm booking": "Confirmar turno",
  from: "desde",
  Haircut: "Corte",
  "Book →": "Reservar →",
  Beard: "Barba",
  "Today ": "Hoy ",
  "Tue 14": "Mar 14",
  "Admin · Agenda": "Admin · Agenda",
  Paid: "Pagado",
  "No-show": "No vino",
  "In chair": "En la silla",
  Confirmed: "Confirmado",
  "Cash register": "Caja",
  Open: "Abierta",
  "Total today": "Total de hoy",
  Cash: "Efectivo",
  Card: "Tarjeta",
  Transfer: "Transferencia",
  "Close the day": "Cerrar el día",
  "Open Tue–Sat · 10–20h": "Abierto mar–sáb · 10–20 h",
  "Step ": "Paso ",
  "Case 01": "Caso 01",
  "The problem": "El problema",
  "Every booking came in over WhatsApp.": "Cada turno entraba por WhatsApp.",
  "Double bookings, no-shows and a cash box on paper.":
    "Turnos duplicados, faltazos y una caja llevada en papel.",
  "The approach": "El enfoque",
  "We spent a day at the shop before designing.": "Pasamos un día en la barbería antes de diseñar.",
  "Then built booking, agenda and cash in weekly sprints.":
    "Después armamos turnos, agenda y caja en sprints semanales.",
  "The result": "El resultado",
  "Clients book in three taps. Reminders go out alone.":
    "Los clientes reservan en tres toques. Los recordatorios salen solos.",
  "The day closes with one button, numbers included.":
    "El día se cierra con un botón, números incluidos.",
  "no-shows with automatic reminders": "faltazos con recordatorios automáticos",
  "from first call to launch": "de la primera llamada al lanzamiento",
  "3 taps": "3 toques",
  "to book a chair, any time": "para reservar, a cualquier hora",
  "You're booked.": "Turno confirmado.",
  "Tue 14 · 16:30": "Mar 14 · 16:30",
  "Cut + Beard with Tomi": "Corte + Barba con Tomi",
  "We'll remind you 2h before. Reply 2 to reschedule.":
    "Te avisamos 2 h antes. Respondé 2 para reprogramar.",
  "Daily close · Tue 14": "Cierre diario · Mar 14",
  "Week 42": "Semana 42",
  "3 barbers · 86 bookings": "3 barberos · 86 turnos",
  "Got something like this in mind? ": "¿Tenés algo así en mente? ",
  "Let's build it.": "Construyámoslo.",
  "View full case": "Ver el caso completo",

  // FAQ
  Frequently: "Preguntas",
  "asked questions": "frecuentes",
  "About Loom IT": "Sobre Loom IT",
  "What is Loom IT?": "¿Qué es Loom IT?",
  "Loom IT is a small digital studio. We design and develop websites, web apps, mobile apps and custom software for businesses. The same people who design your product are the ones who build it, so nothing gets lost between the idea and the final code.":
    "Loom IT es un estudio digital chico. Diseñamos y desarrollamos sitios web, aplicaciones web, apps móviles y software a medida para empresas. Las mismas personas que diseñan tu producto son las que lo construyen, así que nada se pierde entre la idea y el código final.",
  "Who will I be working with?": "¿Con quién voy a trabajar?",
  "Directly with us. There are no account managers or middlemen: you talk to the people designing and writing the code from the first call to launch.":
    "Directamente con nosotros. No hay account managers ni intermediarios: hablás con quienes diseñan y escriben el código desde la primera llamada hasta el lanzamiento.",
  "What kind of projects do you take on?": "¿Qué tipo de proyectos toman?",
  "Websites, online stores, web apps, mobile apps, internal tools, automations and the modernization of existing software. If it lives on a screen and helps a business work better, we probably can help.":
    "Sitios web, tiendas online, aplicaciones web, apps móviles, herramientas internas, automatizaciones y modernización de software existente. Si vive en una pantalla y ayuda a que un negocio funcione mejor, probablemente podamos ayudar.",
  "Projects & process": "Proyectos y proceso",
  "How does a project start?": "¿Cómo empieza un proyecto?",
  "With a short call to understand your business and what you need. Then we send a proposal with scope, timeline and price. Once approved, we design first, review it with you, and only then start building.":
    "Con una llamada corta para entender tu negocio y lo que necesitás. Después te enviamos una propuesta con alcance, plazos y precio. Una vez aprobada, primero diseñamos, lo revisamos con vos y recién ahí empezamos a construir.",
  "How long does a project take?": "¿Cuánto tarda un proyecto?",
  "It depends on the scope. A website usually takes a few weeks; an app or custom platform takes longer. You get a clear timeline in the proposal before we start.":
    "Depende del alcance. Un sitio web suele llevar unas semanas; una app o plataforma a medida lleva más. Antes de empezar, la propuesta incluye un cronograma claro.",
  "Can I see progress while you build?": "¿Puedo ver el avance mientras lo construyen?",
  "Yes. You get a live preview link from early on and regular updates, so you always know where the project stands and can give feedback along the way.":
    "Sí. Tenés un link de vista previa en vivo desde temprano y actualizaciones periódicas, así siempre sabés en qué punto está el proyecto y podés dar tu opinión en el camino.",
  "Pricing & support": "Precios y soporte",
  "How much does a project cost?": "¿Cuánto cuesta un proyecto?",
  "Every project is different, so we quote each one based on its scope. After the first call you receive a fixed price, with no surprises halfway through.":
    "Cada proyecto es distinto, así que cotizamos cada uno según su alcance. Después de la primera llamada recibís un precio fijo, sin sorpresas a mitad de camino.",
  "What happens after launch?": "¿Qué pasa después del lanzamiento?",
  "We stay around. We can handle maintenance, updates and new features, or hand everything over to your team with the code and access you need.":
    "Seguimos cerca. Podemos encargarnos del mantenimiento, las actualizaciones y las nuevas funciones, o entregarle todo a tu equipo con el código y los accesos que necesite.",
  "Do I own the code and the design?": "¿El código y el diseño son míos?",
  "Yes. Once the project is delivered, the code, the design files and the accounts are yours.":
    "Sí. Una vez entregado el proyecto, el código, los archivos de diseño y las cuentas son tuyos.",
  "Still have a question?": "¿Te quedó alguna duda?",
  "Talk to us": "Hablá con nosotros",

  // contact
  "Got an idea?": "¿Tenés una idea?",
  "Let's ": "Vamos a ",
  build: "crearla",
  " it.": ".",
  "Tell us what you have in mind, even if it's just a rough idea. We reply within 24 hours with honest next steps.":
    "Contanos qué tenés en mente, aunque sea una idea a medio armar. Respondemos en menos de 24 horas con próximos pasos claros.",
  "Start a project": "Empezar un proyecto",
  Email: "Email",
  "Back to top ": "Volver arriba ",

  // menu overlay (hand-written JSX, not generated)
  Work: "Trabajos",
  Process: "Proceso",
  About: "Nosotros",
  Contact: "Contacto",
  Close: "Cerrar",
  "Close ": "Cerrar ",
  "Switch language": "Cambiar idioma",

  // form
  "What are we": "¿Qué vamos a",
  "building?": "construir?",
  Website: "Sitio web",
  "Web app": "App web",
  "Mobile app": "App móvil",
  Automation: "Automatización",
  "Not sure yet": "Todavía no sé",
  "Budget and": "Presupuesto",
  "timing.": "y plazos.",
  "Budget (USD)": "Presupuesto (USD)",
  "Under 1k": "Menos de 1k",
  "Let's talk": "Hablemos",
  Launch: "Lanzamiento",
  "As soon as possible": "Lo antes posible",
  "1 – 3 months": "1 – 3 meses",
  Flexible: "Flexible",
  "Tell us": "Contanos",
  "about it.": "de qué se trata.",
  Name: "Nombre",
  "Your name": "Tu nombre",
  "you@company.com": "vos@empresa.com",
  "Your idea": "Tu idea",
  "A few lines are enough.": "Con unas líneas alcanza.",
  "Got it.": "Recibido.",
  "Talk soon": "Hablamos pronto",
  "Your message is on its way. We'll reply within 24 hours.":
    "Tu mensaje ya está en camino. Te respondemos en menos de 24 horas.",
  "← Back": "← Volver",

  // preloader
  "Digital studio": "Estudio digital",
  "We build": "Construimos",

  // /work placeholder page
  "Work is coming soon.": "Los trabajos llegan pronto.",
  "Back to home": "Volver al inicio",
};

// Strings written by the animation engine (not part of the markup).
export type Dyn = {
  preWords: string[];
  descs: string[];
  reel: string[];
  localTime: string;
  weeks: string;
  next: string;
  send: string;
  sending: string;
  close: string;
  error: string;
};

export const dyn: Record<Lang, Dyn> = {
  en: {
    preWords: ["Websites", "Web apps", "Automation", "Products"],
    descs: [
      "We design and build websites and web apps with Next.js and React. Fast, responsive on every screen and ready for SEO from day one.",
      "Apps for iOS and Android, native or cross-platform. One codebase, two stores, and we handle the publishing for you.",
      "Software for Windows, macOS and Linux that works offline, updates itself and installs like any native program.",
      "From the first idea to a clickable prototype. User flows, interface design and a design system your team can keep using.",
      "We connect your tools and build the APIs in between, so the repetitive tasks run on their own and your team can focus.",
      "We audit old code, plan a step-by-step migration and refresh the experience without stopping your business.",
    ],
    reel: ["Websites", "Apps", "Dashboards"],
    localTime: " local time",
    weeks: " wks",
    next: "Next",
    send: "Send",
    sending: "Sending…",
    close: "Close",
    error: "Something went wrong. Please try again.",
  },
  es: {
    preWords: ["Sitios web", "Apps web", "Automatización", "Productos"],
    descs: [
      "Diseñamos y desarrollamos sitios y aplicaciones web con Next.js y React. Rápidos, adaptables a cualquier pantalla y listos para SEO desde el primer día.",
      "Apps para iOS y Android, nativas o multiplataforma. Un solo código, dos tiendas, y nos encargamos de la publicación.",
      "Software para Windows, macOS y Linux que funciona sin conexión, se actualiza solo y se instala como cualquier programa nativo.",
      "De la primera idea a un prototipo clickeable. Flujos de usuario, diseño de interfaz y un sistema de diseño que tu equipo puede seguir usando.",
      "Conectamos tus herramientas y construimos las APIs que las unen, para que las tareas repetitivas corran solas y tu equipo se enfoque.",
      "Auditamos código viejo, planificamos una migración paso a paso y renovamos la experiencia sin frenar tu negocio.",
    ],
    reel: ["Sitios web", "Apps", "Dashboards"],
    localTime: " hora local",
    weeks: " sem",
    next: "Siguiente",
    send: "Enviar",
    sending: "Enviando…",
    close: "Cerrar",
    error: "Algo salió mal. Probá de nuevo.",
  },
};
