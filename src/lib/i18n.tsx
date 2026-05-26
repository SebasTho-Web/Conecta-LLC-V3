import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.malta": "Why Malta",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.blog": "Blog",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "cta.start": "Start Your Journey",
    "hero.title": "Your Next Chapter Starts Here",
    "hero.sub":
      "We connect Latin American students and professionals with world-class academic programs, internships, and career opportunities in Malta and beyond.",
    "hero.cta1": "Explore Our Programs",
    "hero.cta2": "Talk to Us on WhatsApp",
    "about.eyebrow": "About Conecta",
    "about.title": "We Opened Doors. Now We Open Them For You",
    "about.body":
      "Conecta All Nations is an international team based in Malta. We help Latin American students and young professionals aged 20 to 40, currently from Colombia and Mexico, study in Europe and start their international careers. We work directly with Maltese companies to connect our students with real opportunities.",
    "about.stat1": "Countries Served",
    "about.stat2": "Service Packages",
    "about.stat3": "Malta Based",
    "services.eyebrow": "Our Services",
    "services.title": "How We Can Help You",
    "services.sub":
      "Five carefully designed pathways for every stage of your journey abroad.",
    "s1.title": "Initial Mobility & Career Assessment",
    "s1.body":
      "Not sure where to start? We assess your academic and professional profile and build you a personal roadmap for your journey abroad.",
    "s2.title": "Academic Pathway Package",
    "s2.body":
      "Access international universities and English language programs at all levels. We are proud partners of the London School of Commerce, offering MBA and Bachelor programs in Business.",
    "s3.title": "Professional & Career Mobility Package",
    "s3.body":
      "Find internships, traineeships, and graduate programmes abroad. We build your international profile, write your CV and cover letter, and match you with employers.",
    "s4.title": "Add-On Services",
    "s4.body":
      "Language preparation, interview coaching, and post-arrival career mentoring. Complementary support at every stage of your journey.",
    "s5.title": "End-to-End Premium Package",
    "s5.body":
      "Our complete solution. From your first assessment all the way to post-arrival support, we handle everything so you can focus entirely on your future.",
    "services.learnMore": "Learn More",
    "malta.eyebrow": "Why Malta",
    "malta.title": "A Mediterranean Door to Europe",
    "malta.1.title": "English-Speaking Island",
    "malta.1.body":
      "An English-speaking country in the heart of the Mediterranean.",
    "malta.2.title": "Affordable Lifestyle",
    "malta.2.body":
      "Affordable cost of living compared to the UK or mainland Europe.",
    "malta.3.title": "Growing Job Market",
    "malta.3.body":
      "A growing international job market with strong connections to Maltese companies.",
    "how.eyebrow": "How It Works",
    "how.title": "Three Steps to Your Next Chapter",
    "how.1.title": "Book a Free Assessment",
    "how.1.body": "Tell us about your goals in a relaxed conversation.",
    "how.2.title": "Get Your Personal Roadmap",
    "how.2.body": "We design a step-by-step plan made for you.",
    "how.3.title": "Start Your Journey",
    "how.3.body": "We walk with you from departure to arrival and beyond.",
    "test.eyebrow": "Stories",
    "test.title": "What Our Students Say",
    "test.soon.title": "Testimonials Coming Soon",
    "test.soon.body":
      "We are just getting started and our first students are on their way. Check back soon to hear their stories! 🌍",
    "faq.eyebrow": "Frequently Asked",
    "faq.title": "Questions, Answered",
    "faq.q1": "Who are Conecta's services for?",
    "faq.a1":
      "Latin American students and young professionals (ages 20–40), primarily from Colombia and Mexico, who want to study, intern, or build a career abroad.",
    "faq.q2": "Do I need to speak English already?",
    "faq.a2":
      "No. Conecta offers English language programs at all levels, from beginner to business English, through our academic partners.",
    "faq.q3": "How long does the process take?",
    "faq.a3":
      "It depends on the program and your profile. After your initial assessment we will give you a clear roadmap with realistic timelines.",
    "faq.q4": "What is the London School of Commerce partnership?",
    "faq.a4":
      "Conecta is a partner of the London School of Commerce, giving our students access to MBA and Bachelor programs in Business, as well as English language courses at all levels.",
    "faq.q5": "Will I get support after I arrive?",
    "faq.a5":
      "Yes. Our Add-On Services include post-arrival career mentoring to support you once you are settled.",
    "faq.q6": "How do I get started?",
    "faq.a6":
      "Fill out the contact form below or message us on WhatsApp and we will book your free initial assessment.",
    "blog.eyebrow": "Journal",
    "blog.title": "Insights for Your Journey",
    "blog.soon.title": "Articles Coming Soon",
    "blog.soon.body":
      "We are working on guides, tips, and stories to help you prepare for your journey abroad. Check back soon!",
    "careers.eyebrow": "Careers",
    "careers.title": "Join Our Team",
    "careers.body":
      "We are an international team in Malta passionate about opening doors. If you share our mission, we would love to hear from you.",
    "careers.cta": "Send Your CV",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's Talk About Your Future",
    "contact.sub": "Fill out the form and we'll be in touch soon.",
    "form.name": "Full Name",
    "form.email": "Email Address",
    "form.country": "Country of Origin",
    "form.country.co": "Colombia",
    "form.country.mx": "Mexico",
    "form.country.other": "Other",
    "form.country.placeholder": "Select your country",
    "form.service": "Service Interest",
    "form.service.placeholder": "Select a service",
    "form.service.assess": "Initial Assessment",
    "form.service.academic": "Academic Pathway",
    "form.service.career": "Career Package",
    "form.service.addons": "Add-Ons",
    "form.service.premium": "Premium Package",
    "form.service.unsure": "Not Sure Yet",
    "form.message": "Message",
    "form.agree":
      "I agree to be contacted by Conecta All Nations regarding my inquiry and have read the Privacy Policy.",
    "form.submit": "Send Message",
    "form.success":
      "Thank you for reaching out! The Conecta team will be in touch with you very soon. 😊",
    "footer.tagline": "Connecting talent. Opening doors.",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.disclaimer": "Disclaimer",
    "footer.by": "Website by Sebastian Thörnholm",
    "cookie.banner.text":
      "We use cookies to remember your preferences and improve your website experience.",
    "cookie.banner.readOur": "Read our",
    "cookie.banner.cookiePolicy": "cookie policy",
    "cookie.banner.and": "and",
    "cookie.banner.privacyPolicy": "privacy policy",
    "cookie.banner.decline": "Decline",
    "cookie.banner.accept": "Accept",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.malta": "Por qué Malta",
    "nav.testimonials": "Testimonios",
    "nav.faq": "Preguntas",
    "nav.blog": "Blog",
    "nav.careers": "Empleo",
    "nav.contact": "Contacto",
    "cta.start": "Comienza Tu Viaje",
    "hero.title": "Tu Próximo Capítulo Comienza Aquí",
    "hero.sub":
      "Conectamos a estudiantes y profesionales latinoamericanos con programas académicos, prácticas y oportunidades laborales de clase mundial en Malta y más allá.",
    "hero.cta1": "Explora Nuestros Programas",
    "hero.cta2": "Háblanos por WhatsApp",
    "about.eyebrow": "Sobre Conecta",
    "about.title": "Abrimos Puertas. Ahora Las Abrimos Para Ti",
    "about.body":
      "Conecta All Nations es un equipo internacional con sede en Malta. Ayudamos a estudiantes y jóvenes profesionales latinoamericanos de 20 a 40 años, actualmente de Colombia y México, a estudiar en Europa y comenzar sus carreras internacionales. Trabajamos directamente con empresas maltesas para conectar a nuestros estudiantes con oportunidades reales.",
    "about.stat1": "Países Atendidos",
    "about.stat2": "Paquetes de Servicio",
    "about.stat3": "Basados en Malta",
    "services.eyebrow": "Nuestros Servicios",
    "services.title": "Cómo Podemos Ayudarte",
    "services.sub":
      "Cinco caminos diseñados con cuidado para cada etapa de tu viaje al extranjero.",
    "s1.title": "Evaluación Inicial de Movilidad y Carrera",
    "s1.body":
      "¿No sabes por dónde empezar? Evaluamos tu perfil académico y profesional y diseñamos una hoja de ruta personalizada para tu viaje al extranjero.",
    "s2.title": "Paquete de Ruta Académica",
    "s2.body":
      "Accede a universidades internacionales y programas de inglés en todos los niveles. Somos socios oficiales de la London School of Commerce, con programas MBA y de Negocios.",
    "s3.title": "Paquete de Movilidad Profesional",
    "s3.body":
      "Encuentra prácticas, traineeships y programas para graduados en el extranjero. Construimos tu perfil internacional, redactamos tu CV y carta, y te conectamos con empleadores.",
    "s4.title": "Servicios Complementarios",
    "s4.body":
      "Preparación de idiomas, coaching para entrevistas y mentoría profesional tras tu llegada. Apoyo integral en cada etapa.",
    "s5.title": "Paquete Premium Integral",
    "s5.body":
      "Nuestra solución completa. Desde tu evaluación inicial hasta el soporte post-llegada, nos encargamos de todo para que te enfoques en tu futuro.",
    "services.learnMore": "Saber Más",
    "malta.eyebrow": "Por qué Malta",
    "malta.title": "Una Puerta Mediterránea a Europa",
    "malta.1.title": "Isla de Habla Inglesa",
    "malta.1.body": "Un país de habla inglesa en el corazón del Mediterráneo.",
    "malta.2.title": "Costo de Vida Accesible",
    "malta.2.body":
      "Costo de vida accesible comparado con el Reino Unido o Europa continental.",
    "malta.3.title": "Mercado Laboral en Crecimiento",
    "malta.3.body":
      "Un mercado laboral internacional en crecimiento con fuertes conexiones empresariales.",
    "how.eyebrow": "Cómo Funciona",
    "how.title": "Tres Pasos Hacia Tu Próximo Capítulo",
    "how.1.title": "Reserva una Evaluación Gratuita",
    "how.1.body": "Cuéntanos tus metas en una conversación relajada.",
    "how.2.title": "Recibe Tu Hoja de Ruta",
    "how.2.body": "Diseñamos un plan paso a paso a tu medida.",
    "how.3.title": "Comienza Tu Viaje",
    "how.3.body":
      "Caminamos contigo desde la partida hasta la llegada y más allá.",
    "test.eyebrow": "Historias",
    "test.title": "Lo Que Dicen Nuestros Estudiantes",
    "test.soon.title": "Próximamente",
    "test.soon.body":
      "Apenas estamos comenzando y nuestros primeros estudiantes están en camino. ¡Vuelve pronto para conocer sus historias! 🌍",
    "faq.eyebrow": "Preguntas Frecuentes",
    "faq.title": "Resolvemos Tus Dudas",
    "faq.q1": "¿Para quién son los servicios de Conecta?",
    "faq.a1":
      "Estudiantes y jóvenes profesionales latinoamericanos (20–40 años), principalmente de Colombia y México, que quieren estudiar, hacer prácticas o construir una carrera en el extranjero.",
    "faq.q2": "¿Necesito hablar inglés?",
    "faq.a2":
      "No. Conecta ofrece programas de inglés en todos los niveles, desde principiante hasta inglés de negocios, a través de nuestros socios académicos.",
    "faq.q3": "¿Cuánto dura el proceso?",
    "faq.a3":
      "Depende del programa y de tu perfil. Después de tu evaluación inicial te entregaremos una hoja de ruta clara con plazos realistas.",
    "faq.q4": "¿Qué es la alianza con la London School of Commerce?",
    "faq.a4":
      "Conecta es socio de la London School of Commerce, lo que da a nuestros estudiantes acceso a programas MBA y de Licenciatura en Negocios, así como a cursos de inglés en todos los niveles.",
    "faq.q5": "¿Tendré apoyo al llegar?",
    "faq.a5":
      "Sí. Nuestros Servicios Complementarios incluyen mentoría profesional post-llegada para apoyarte una vez que estés instalado.",
    "faq.q6": "¿Cómo comienzo?",
    "faq.a6":
      "Completa el formulario de contacto o escríbenos por WhatsApp y reservaremos tu evaluación inicial gratuita.",
    "blog.eyebrow": "Diario",
    "blog.title": "Ideas Para Tu Viaje",
    "blog.soon.title": "Artículos Próximamente",
    "blog.soon.body":
      "Estamos preparando guías, consejos e historias para ayudarte a prepararte para tu viaje al extranjero. ¡Vuelve pronto!",
    "careers.eyebrow": "Empleo",
    "careers.title": "Únete a Nuestro Equipo",
    "careers.body":
      "Somos un equipo internacional en Malta apasionado por abrir puertas. Si compartes nuestra misión, queremos conocerte.",
    "careers.cta": "Envía Tu CV",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos de Tu Futuro",
    "contact.sub": "Completa el formulario y te contactaremos pronto.",
    "form.name": "Nombre Completo",
    "form.email": "Correo Electrónico",
    "form.country": "País de Origen",
    "form.country.co": "Colombia",
    "form.country.mx": "México",
    "form.country.other": "Otro",
    "form.country.placeholder": "Selecciona tu país",
    "form.service": "Servicio de Interés",
    "form.service.placeholder": "Selecciona un servicio",
    "form.service.assess": "Evaluación Inicial",
    "form.service.academic": "Ruta Académica",
    "form.service.career": "Paquete de Carrera",
    "form.service.addons": "Complementos",
    "form.service.premium": "Paquete Premium",
    "form.service.unsure": "Aún No Estoy Seguro",
    "form.message": "Mensaje",
    "form.agree":
      "Acepto ser contactado por Conecta All Nations y he leído la Política de Privacidad.",
    "form.submit": "Enviar Mensaje",
    "form.success":
      "¡Gracias por escribirnos! El equipo de Conecta se pondrá en contacto contigo muy pronto. 😊",
    "footer.tagline": "Conectando talento. Abriendo puertas.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.disclaimer": "Descargo de Responsabilidad",
    "footer.by": "Sitio web por Sebastian Thörnholm",
    "cookie.banner.text":
      "Utilizamos cookies para recordar sus preferencias y mejorar su experiencia en el sitio.",
    "cookie.banner.readOur": "Lea nuestra",
    "cookie.banner.cookiePolicy": "política de cookies",
    "cookie.banner.and": "y",
    "cookie.banner.privacyPolicy": "política de privacidad",
    "cookie.banner.decline": "Rechazar",
    "cookie.banner.accept": "Aceptar",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("conecta-lang") as Lang | null;
    if (stored === "en" || stored === "es") setLangState(stored);
    else if (navigator.language?.toLowerCase().startsWith("es"))
      setLangState("es");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined")
      window.localStorage.setItem("conecta-lang", l);
  };

  const t = (k: string) => translations[lang][k] ?? k;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
