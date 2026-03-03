export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const translations = {
  en: {
    'common.appName': 'CuriaBots',
    'nav.experience': 'Experience',
    'nav.vision': 'Vision',
    'nav.logIn': 'Log In',
    'hero.badge': 'The Evolution of Agency',
    'hero.titleLine1': 'DELEGATE',
    'hero.titleLine2': 'EVERYTHING.',
    'hero.subtitle': 'Your personal AI agents for agenda, reminders, and absolute life order. Stop managing. Start living.',
    'hero.cta': 'Deploy Your Bot',
    'hero.watchFilm': 'Watch Film',
    'hero.scroll': 'Scroll',
    'features.agendaLabel': 'Smart Agenda Management',
    'features.totalControl': 'Total Control',
    'features.totalControlDesc': 'Your bot handles every invite, conflict, and reschedule. You just show up.',
    'features.reminders': 'Intelligent Reminders',
    'features.remindersDesc': 'Context-aware notifications that hit exactly when you can act on them.',
    'features.automationLabel': 'Autonomous Workflows',
    'features.automationQuote': '"Bot, handle my inbox and filter high-priority leads."',
    'features.lifeOrder': 'LIFE ORDER, ARCHITECTED.',
    'features.lifeOrderDesc': 'A unified operating system for your existence. No more fragmented apps. Just one intelligent interface.',
    'features.habits': 'Habits',
    'features.goals': 'Goals',
    'features.tasks': 'Tasks',
    'vision.title': 'SEE THE FUTURE.',
    'vision.subtitle': 'How we redefine human productivity through artificial agency.',
    'vision.chapters': 'Chapters of the Vision',
    'vision.filmLabel': 'Concept Film: The First 24 Hours',
    'cta.title': 'TIME IS THE ONLY CURRENCY.',
    'cta.button': 'CLAIM YOURS NOW',
    'cta.earlyAccess': 'Available for Early Access',
    'cta.version': 'v1.0.4 stable',
    'cta.globalNetwork': 'Global Node Network',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.twitter': 'Twitter',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 Built for the ambitious',
    'seo.title': 'CuriaBots — AI Agents That Manage Your Life',
    'seo.description': 'Deploy personal AI agents for agenda, reminders, and life automation. Stop managing. Start living.',
  },
  es: {
    'common.appName': 'CuriaBots',
    'nav.experience': 'Experiencia',
    'nav.vision': 'Visión',
    'nav.logIn': 'Iniciar Sesión',
    'hero.badge': 'La Evolución de la Agencia',
    'hero.titleLine1': 'DELEGA',
    'hero.titleLine2': 'TODO.',
    'hero.subtitle': 'Tus agentes personales de IA para agenda, recordatorios y orden absoluto. Deja de gestionar. Empieza a vivir.',
    'hero.cta': 'Despliega Tu Bot',
    'hero.watchFilm': 'Ver Video',
    'hero.scroll': 'Desplazar',
    'features.agendaLabel': 'Gestión Inteligente de Agenda',
    'features.totalControl': 'Control Total',
    'features.totalControlDesc': 'Tu bot maneja cada invitación, conflicto y reprogramación. Tú solo apareces.',
    'features.reminders': 'Recordatorios Inteligentes',
    'features.remindersDesc': 'Notificaciones contextuales que llegan justo cuando puedes actuar.',
    'features.automationLabel': 'Flujos Autónomos',
    'features.automationQuote': '"Bot, gestiona mi bandeja y filtra los leads prioritarios."',
    'features.lifeOrder': 'ORDEN VITAL, ARQUITECTADO.',
    'features.lifeOrderDesc': 'Un sistema operativo unificado para tu existencia. Sin apps fragmentadas. Solo una interfaz inteligente.',
    'features.habits': 'Hábitos',
    'features.goals': 'Metas',
    'features.tasks': 'Tareas',
    'vision.title': 'MIRA EL FUTURO.',
    'vision.subtitle': 'Cómo redefinimos la productividad humana mediante agencia artificial.',
    'vision.chapters': 'Capítulos de la Visión',
    'vision.filmLabel': 'Film Conceptual: Las Primeras 24 Horas',
    'cta.title': 'EL TIEMPO ES LA ÚNICA MONEDA.',
    'cta.button': 'RECLAMA EL TUYO',
    'cta.earlyAccess': 'Disponible en Acceso Anticipado',
    'cta.version': 'v1.0.4 estable',
    'cta.globalNetwork': 'Red Global de Nodos',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.twitter': 'Twitter',
    'footer.contact': 'Contacto',
    'footer.copyright': '© 2026 Hecho para los ambiciosos',
    'seo.title': 'CuriaBots — Agentes de IA que Gestionan tu Vida',
    'seo.description': 'Despliega agentes personales de IA para agenda, recordatorios y automatización. Deja de gestionar. Empieza a vivir.',
  },
} as const;

type TranslationKey = keyof typeof translations.en;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

/** Returns the alternate-language URL for the current page. */
export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  const path = url.pathname;

  // Remove current lang prefix if present
  let stripped = path;
  if (currentLang !== defaultLang) {
    stripped = path.replace(`/${currentLang}`, '') || '/';
  }

  // Add target lang prefix (skip for default lang)
  if (targetLang === defaultLang) return stripped;
  return `/${targetLang}${stripped}`;
}
