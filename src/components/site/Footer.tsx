import { useLang } from "@/lib/i18n";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useLang();
  const navs = [
    "nav.about",
    "nav.services",
    "nav.malta",
    "nav.testimonials",
    "nav.faq",
    "nav.blog",
    "nav.careers",
    "nav.contact",
  ];
  const ids = [
    "about",
    "services",
    "malta",
    "testimonials",
    "faq",
    "blog",
    "careers",
    "contact",
  ];
  return (
    <footer className="bg-[#141414] text-[#FAFAF7]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <div
            className="font-serif text-3xl font-bold sm:text-4xl"
            style={{ color: "#A78BD4" }}
          >
            Conecta All Nations
          </div>
          <p className="mt-5 font-serif text-xl text-white/90">
            {t("footer.tagline")}
          </p>
          <p className="mt-4 max-w-sm text-sm text-white/60">
            Conecta LLC · Malta
          </p>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">
            Navigate
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
            {navs.map((n, i) => (
              <li key={n}>
                <a
                  href={`/#${ids[i]}`}
                  className="text-white/80 hover:text-[var(--primary-glow)]"
                >
                  {t(n)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.3em] text-white/50">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="mailto:students.conecta@gmail.com"
                className="text-white/80 hover:text-[var(--primary-glow)]"
              >
                students.conecta@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/35699319746"
                className="text-white/80 hover:text-[var(--primary-glow)]"
              >
                +356 99319746
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Conecta LLC. {t("footer.rights")}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/privacy-policy"
              id="footer-privacy-link"
              className="hover:text-white"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to="/terms-of-service"
              id="footer-terms-link"
              className="hover:text-white"
            >
              {t("footer.terms")}
            </Link>
            <Link
              to="/disclaimer"
              id="footer-disclaimer-link"
              className="hover:text-white"
            >
              {t("footer.disclaimer")}
            </Link>
            <Link
              to="/cookie-policy"
              id="footer-cookie-link"
              className="hover:text-white"
            >
              Cookie Policy
            </Link>
            <a
              href="https://www.instagram.com/students.conecta/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-thörnholm-282053310"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {t("footer.by")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
