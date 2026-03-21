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

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: March 21, 2026',
    'privacy.intro': 'This Privacy Policy describes how CuriaBots ("we", "us", or "our") collects, uses, and protects your personal data when you use our platform at curiabots.com and related services (the "Service"). We are committed to protecting your privacy in accordance with the General Data Protection Regulation (EU) 2016/679 ("GDPR") and the Spanish Organic Law 3/2018 on Personal Data Protection ("LOPD-GDD").',

    'privacy.controllerTitle': '1. Data Controller',
    'privacy.controllerText': 'The data controller responsible for your personal data is CuriaBots, operated from Spain. For any inquiries regarding your personal data, you can contact us at contact@curiabots.com.',

    'privacy.dataCollectedTitle': '2. Data We Collect',
    'privacy.dataCollectedText': 'We collect and process the following categories of personal data:',
    'privacy.dataCollectedItem1': 'Account data: Name, email address, and profile picture obtained through Google OAuth 2.0 authentication.',
    'privacy.dataCollectedItem2': 'Usage data: Information about how you interact with the Service, including bot configurations, commands, and activity logs.',
    'privacy.dataCollectedItem3': 'Technical data: IP address, browser type, device information, and access timestamps collected automatically when you use the Service.',
    'privacy.dataCollectedItem4': 'Bot data: Content and files you create, upload, or generate through your AI bots, stored in isolated environments.',

    'privacy.purposeTitle': '3. Purpose and Legal Basis',
    'privacy.purposeText': 'We process your personal data for the following purposes:',
    'privacy.purposeItem1': 'Service provision: To create and manage your account, operate your AI bots, and deliver the core functionality of the platform. Legal basis: performance of a contract (Art. 6(1)(b) GDPR).',
    'privacy.purposeItem2': 'Service improvement: To analyze usage patterns, fix bugs, and improve the Service. Legal basis: legitimate interest (Art. 6(1)(f) GDPR).',
    'privacy.purposeItem3': 'Communication: To send you important service-related notifications. Legal basis: legitimate interest (Art. 6(1)(f) GDPR).',
    'privacy.purposeItem4': 'Legal compliance: To comply with applicable legal obligations. Legal basis: legal obligation (Art. 6(1)(c) GDPR).',

    'privacy.sharingTitle': '4. Data Sharing and Third Parties',
    'privacy.sharingText': 'We may share your personal data with the following categories of recipients:',
    'privacy.sharingItem1': 'AI providers: We use third-party AI model providers (such as Google Gemini and GitHub Copilot) to power bot functionality. Queries may be processed by these providers under their respective privacy policies.',
    'privacy.sharingItem2': 'Infrastructure providers: We use Hetzner (Germany/Finland) for server hosting, ensuring your data remains within the EU.',
    'privacy.sharingItem3': 'Authentication: Google OAuth 2.0 is used for account authentication. Google processes data according to their privacy policy.',
    'privacy.sharingNote': 'We do not sell your personal data to third parties.',

    'privacy.retentionTitle': '5. Data Retention',
    'privacy.retentionText': 'We retain your personal data for as long as your account is active and as necessary to provide the Service. When you delete your account, we will delete your personal data and all associated bot data within 30 days, except where retention is required by law.',

    'privacy.rightsTitle': '6. Your Rights',
    'privacy.rightsText': 'Under GDPR and LOPD-GDD, you have the following rights regarding your personal data:',
    'privacy.rightsItem1': 'Right of access: You can request a copy of the personal data we hold about you.',
    'privacy.rightsItem2': 'Right to rectification: You can request correction of inaccurate personal data.',
    'privacy.rightsItem3': 'Right to erasure: You can request deletion of your personal data ("right to be forgotten").',
    'privacy.rightsItem4': 'Right to portability: You can request your data in a structured, machine-readable format.',
    'privacy.rightsItem5': 'Right to restriction: You can request that we limit the processing of your data.',
    'privacy.rightsItem6': 'Right to object: You can object to processing based on legitimate interest.',
    'privacy.rightsExercise': 'To exercise any of these rights, contact us at contact@curiabots.com. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) at www.aepd.es.',

    'privacy.cookiesTitle': '7. Cookies',
    'privacy.cookiesText': 'We use strictly necessary cookies for authentication and session management. These cookies are essential for the Service to function and cannot be disabled. We do not use tracking or advertising cookies.',

    'privacy.securityTitle': '8. Security',
    'privacy.securityText': 'We implement appropriate technical and organizational measures to protect your personal data, including encrypted communications (TLS), isolated bot environments with Zero Trust network policies, and secure secret management.',

    'privacy.changesTitle': '9. Changes to This Policy',
    'privacy.changesText': 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date.',

    'privacy.contactTitle': '10. Contact',
    'privacy.contactText': 'For any questions about this Privacy Policy or your personal data, please contact us at contact@curiabots.com.',

    // Terms of Service
    'terms.title': 'Terms of Service',
    'terms.lastUpdated': 'Last updated: March 21, 2026',
    'terms.intro': 'These Terms of Service ("Terms") govern your access to and use of CuriaBots at curiabots.com and related services (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.',

    'terms.serviceTitle': '1. Service Description',
    'terms.serviceText': 'CuriaBots is a platform for managing autonomous AI bots. Each bot operates in an isolated environment and can perform tasks such as agenda management, reminders, and workflow automation on your behalf.',

    'terms.accountTitle': '2. Account Terms',
    'terms.accountText1': 'You must authenticate using Google OAuth 2.0 to create an account. You are responsible for maintaining the security of your Google account used to access the Service.',
    'terms.accountText2': 'You must be at least 16 years old to use the Service.',
    'terms.accountText3': 'You are responsible for all activity that occurs under your account and for all content created by your bots.',

    'terms.useTitle': '3. Acceptable Use',
    'terms.useText': 'You agree not to use the Service to:',
    'terms.useItem1': 'Violate any applicable law, regulation, or third-party rights.',
    'terms.useItem2': 'Generate, store, or distribute harmful, abusive, fraudulent, or illegal content.',
    'terms.useItem3': 'Attempt to gain unauthorized access to other users\' bots, data, or accounts.',
    'terms.useItem4': 'Interfere with or disrupt the integrity or performance of the Service.',
    'terms.useItem5': 'Use bots to send spam, phishing messages, or engage in any form of automated abuse.',
    'terms.useNote': 'We reserve the right to suspend or terminate accounts that violate these terms without prior notice.',

    'terms.ipTitle': '4. Intellectual Property',
    'terms.ipText1': 'The Service, including its design, code, and branding, is owned by CuriaBots and protected by intellectual property laws.',
    'terms.ipText2': 'You retain ownership of all content you create or upload through the Service. By using the Service, you grant us a limited license to host, store, and process your content solely to provide the Service to you.',

    'terms.availabilityTitle': '5. Service Availability',
    'terms.availabilityText': 'We strive to maintain high availability of the Service but do not guarantee uninterrupted or error-free operation. The Service is provided "as is" and "as available". We may modify, suspend, or discontinue any part of the Service at any time with reasonable notice.',

    'terms.liabilityTitle': '6. Limitation of Liability',
    'terms.liabilityText': 'To the maximum extent permitted by applicable law, CuriaBots shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of the Service. Our total aggregate liability shall not exceed the amount paid by you to CuriaBots in the twelve (12) months preceding the claim.',

    'terms.terminationTitle': '7. Termination',
    'terms.terminationText1': 'You may terminate your account at any time by contacting us at contact@curiabots.com or through the account settings in the application.',
    'terms.terminationText2': 'We may terminate or suspend your access to the Service at any time, with or without cause, upon reasonable notice. Upon termination, your right to use the Service ceases immediately, and we will delete your data in accordance with our Privacy Policy.',

    'terms.lawTitle': '8. Governing Law',
    'terms.lawText': 'These Terms are governed by and construed in accordance with the laws of Spain and applicable European Union regulations. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Spain.',

    'terms.changesTitle': '9. Changes to These Terms',
    'terms.changesText': 'We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on this page with a new "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the updated Terms.',

    'terms.contactTitle': '10. Contact',
    'terms.contactText': 'For any questions about these Terms of Service, please contact us at contact@curiabots.com.',
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

    // Política de Privacidad
    'privacy.title': 'Política de Privacidad',
    'privacy.lastUpdated': 'Última actualización: 21 de marzo de 2026',
    'privacy.intro': 'Esta Política de Privacidad describe cómo CuriaBots ("nosotros", "nos" o "nuestro") recopila, utiliza y protege sus datos personales cuando utiliza nuestra plataforma en curiabots.com y servicios relacionados (el "Servicio"). Estamos comprometidos con la protección de su privacidad de acuerdo con el Reglamento General de Protección de Datos (UE) 2016/679 ("RGPD") y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales ("LOPD-GDD").',

    'privacy.controllerTitle': '1. Responsable del Tratamiento',
    'privacy.controllerText': 'El responsable del tratamiento de sus datos personales es CuriaBots, operado desde España. Para cualquier consulta relativa a sus datos personales, puede contactarnos en contact@curiabots.com.',

    'privacy.dataCollectedTitle': '2. Datos que Recopilamos',
    'privacy.dataCollectedText': 'Recopilamos y tratamos las siguientes categorías de datos personales:',
    'privacy.dataCollectedItem1': 'Datos de cuenta: Nombre, dirección de correo electrónico y foto de perfil obtenidos a través de la autenticación Google OAuth 2.0.',
    'privacy.dataCollectedItem2': 'Datos de uso: Información sobre cómo interactúa con el Servicio, incluyendo configuraciones de bots, comandos y registros de actividad.',
    'privacy.dataCollectedItem3': 'Datos técnicos: Dirección IP, tipo de navegador, información del dispositivo y marcas de tiempo de acceso recopilados automáticamente cuando utiliza el Servicio.',
    'privacy.dataCollectedItem4': 'Datos de bots: Contenido y archivos que crea, sube o genera a través de sus bots de IA, almacenados en entornos aislados.',

    'privacy.purposeTitle': '3. Finalidad y Base Legal',
    'privacy.purposeText': 'Tratamos sus datos personales para las siguientes finalidades:',
    'privacy.purposeItem1': 'Prestación del servicio: Para crear y gestionar su cuenta, operar sus bots de IA y ofrecer la funcionalidad principal de la plataforma. Base legal: ejecución de un contrato (Art. 6(1)(b) RGPD).',
    'privacy.purposeItem2': 'Mejora del servicio: Para analizar patrones de uso, corregir errores y mejorar el Servicio. Base legal: interés legítimo (Art. 6(1)(f) RGPD).',
    'privacy.purposeItem3': 'Comunicación: Para enviarle notificaciones importantes relacionadas con el servicio. Base legal: interés legítimo (Art. 6(1)(f) RGPD).',
    'privacy.purposeItem4': 'Cumplimiento legal: Para cumplir con las obligaciones legales aplicables. Base legal: obligación legal (Art. 6(1)(c) RGPD).',

    'privacy.sharingTitle': '4. Compartición de Datos y Terceros',
    'privacy.sharingText': 'Podemos compartir sus datos personales con las siguientes categorías de destinatarios:',
    'privacy.sharingItem1': 'Proveedores de IA: Utilizamos proveedores externos de modelos de IA (como Google Gemini y GitHub Copilot) para las funciones de los bots. Las consultas pueden ser procesadas por estos proveedores bajo sus respectivas políticas de privacidad.',
    'privacy.sharingItem2': 'Proveedores de infraestructura: Utilizamos Hetzner (Alemania/Finlandia) para el alojamiento de servidores, asegurando que sus datos permanezcan dentro de la UE.',
    'privacy.sharingItem3': 'Autenticación: Se utiliza Google OAuth 2.0 para la autenticación de cuentas. Google procesa los datos de acuerdo con su política de privacidad.',
    'privacy.sharingNote': 'No vendemos sus datos personales a terceros.',

    'privacy.retentionTitle': '5. Conservación de Datos',
    'privacy.retentionText': 'Conservamos sus datos personales mientras su cuenta esté activa y sea necesario para prestar el Servicio. Cuando elimine su cuenta, borraremos sus datos personales y todos los datos asociados a sus bots en un plazo de 30 días, salvo cuando la conservación sea exigida por ley.',

    'privacy.rightsTitle': '6. Sus Derechos',
    'privacy.rightsText': 'En virtud del RGPD y la LOPD-GDD, usted tiene los siguientes derechos sobre sus datos personales:',
    'privacy.rightsItem1': 'Derecho de acceso: Puede solicitar una copia de los datos personales que conservamos sobre usted.',
    'privacy.rightsItem2': 'Derecho de rectificación: Puede solicitar la corrección de datos personales inexactos.',
    'privacy.rightsItem3': 'Derecho de supresión: Puede solicitar la eliminación de sus datos personales ("derecho al olvido").',
    'privacy.rightsItem4': 'Derecho a la portabilidad: Puede solicitar sus datos en un formato estructurado y legible por máquina.',
    'privacy.rightsItem5': 'Derecho a la limitación: Puede solicitar que limitemos el tratamiento de sus datos.',
    'privacy.rightsItem6': 'Derecho de oposición: Puede oponerse al tratamiento basado en interés legítimo.',
    'privacy.rightsExercise': 'Para ejercer cualquiera de estos derechos, contáctenos en contact@curiabots.com. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en www.aepd.es.',

    'privacy.cookiesTitle': '7. Cookies',
    'privacy.cookiesText': 'Utilizamos cookies estrictamente necesarias para la autenticación y gestión de sesiones. Estas cookies son esenciales para el funcionamiento del Servicio y no pueden desactivarse. No utilizamos cookies de seguimiento ni publicitarias.',

    'privacy.securityTitle': '8. Seguridad',
    'privacy.securityText': 'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales, incluyendo comunicaciones cifradas (TLS), entornos de bots aislados con políticas de red Zero Trust y gestión segura de secretos.',

    'privacy.changesTitle': '9. Cambios en esta Política',
    'privacy.changesText': 'Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio significativo publicando la política actualizada en esta página con una nueva fecha de "Última actualización".',

    'privacy.contactTitle': '10. Contacto',
    'privacy.contactText': 'Para cualquier pregunta sobre esta Política de Privacidad o sus datos personales, contáctenos en contact@curiabots.com.',

    // Términos de Servicio
    'terms.title': 'Términos de Servicio',
    'terms.lastUpdated': 'Última actualización: 21 de marzo de 2026',
    'terms.intro': 'Estos Términos de Servicio ("Términos") regulan su acceso y uso de CuriaBots en curiabots.com y servicios relacionados (el "Servicio"). Al acceder o utilizar el Servicio, usted acepta quedar vinculado por estos Términos. Si no está de acuerdo con estos Términos, no utilice el Servicio.',

    'terms.serviceTitle': '1. Descripción del Servicio',
    'terms.serviceText': 'CuriaBots es una plataforma de gestión de bots de IA autónomos. Cada bot opera en un entorno aislado y puede realizar tareas como gestión de agenda, recordatorios y automatización de flujos de trabajo en su nombre.',

    'terms.accountTitle': '2. Condiciones de la Cuenta',
    'terms.accountText1': 'Debe autenticarse mediante Google OAuth 2.0 para crear una cuenta. Usted es responsable de mantener la seguridad de la cuenta de Google utilizada para acceder al Servicio.',
    'terms.accountText2': 'Debe tener al menos 16 años para utilizar el Servicio.',
    'terms.accountText3': 'Usted es responsable de toda la actividad que ocurra bajo su cuenta y de todo el contenido creado por sus bots.',

    'terms.useTitle': '3. Uso Aceptable',
    'terms.useText': 'Usted se compromete a no utilizar el Servicio para:',
    'terms.useItem1': 'Violar cualquier ley, regulación o derechos de terceros aplicables.',
    'terms.useItem2': 'Generar, almacenar o distribuir contenido dañino, abusivo, fraudulento o ilegal.',
    'terms.useItem3': 'Intentar obtener acceso no autorizado a los bots, datos o cuentas de otros usuarios.',
    'terms.useItem4': 'Interferir o interrumpir la integridad o el rendimiento del Servicio.',
    'terms.useItem5': 'Usar bots para enviar spam, mensajes de phishing o participar en cualquier forma de abuso automatizado.',
    'terms.useNote': 'Nos reservamos el derecho de suspender o cancelar cuentas que infrinjan estos términos sin previo aviso.',

    'terms.ipTitle': '4. Propiedad Intelectual',
    'terms.ipText1': 'El Servicio, incluyendo su diseño, código y marca, es propiedad de CuriaBots y está protegido por las leyes de propiedad intelectual.',
    'terms.ipText2': 'Usted conserva la propiedad de todo el contenido que cree o suba a través del Servicio. Al utilizar el Servicio, nos otorga una licencia limitada para alojar, almacenar y procesar su contenido exclusivamente para prestarle el Servicio.',

    'terms.availabilityTitle': '5. Disponibilidad del Servicio',
    'terms.availabilityText': 'Nos esforzamos por mantener una alta disponibilidad del Servicio, pero no garantizamos un funcionamiento ininterrumpido o libre de errores. El Servicio se proporciona "tal cual" y "según disponibilidad". Podemos modificar, suspender o discontinuar cualquier parte del Servicio en cualquier momento con un aviso razonable.',

    'terms.liabilityTitle': '6. Limitación de Responsabilidad',
    'terms.liabilityText': 'En la medida máxima permitida por la legislación aplicable, CuriaBots no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo pero no limitado a la pérdida de beneficios, datos u oportunidades de negocio, derivados de su uso del Servicio. Nuestra responsabilidad total acumulada no excederá la cantidad que usted haya pagado a CuriaBots en los doce (12) meses anteriores a la reclamación.',

    'terms.terminationTitle': '7. Resolución',
    'terms.terminationText1': 'Puede cancelar su cuenta en cualquier momento contactándonos en contact@curiabots.com o a través de los ajustes de cuenta en la aplicación.',
    'terms.terminationText2': 'Podemos cancelar o suspender su acceso al Servicio en cualquier momento, con o sin causa, previo aviso razonable. Tras la cancelación, su derecho a utilizar el Servicio cesa inmediatamente y eliminaremos sus datos de acuerdo con nuestra Política de Privacidad.',

    'terms.lawTitle': '8. Legislación Aplicable',
    'terms.lawText': 'Estos Términos se rigen e interpretan de acuerdo con las leyes de España y la normativa aplicable de la Unión Europea. Cualquier controversia derivada de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de España.',

    'terms.changesTitle': '9. Cambios en estos Términos',
    'terms.changesText': 'Podemos actualizar estos Términos periódicamente. Le notificaremos cualquier cambio significativo publicando los Términos actualizados en esta página con una nueva fecha de "Última actualización". El uso continuado del Servicio después de dichos cambios constituye la aceptación de los Términos actualizados.',

    'terms.contactTitle': '10. Contacto',
    'terms.contactText': 'Para cualquier pregunta sobre estos Términos de Servicio, contáctenos en contact@curiabots.com.',
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
