import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Logo } from "./Logo";

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="glass-nav sticky top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 px-6">
        <div className="flex items-center gap-6">
          <Link to="/" aria-label="Home">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="#home" className="hover:underline">
              {t("nav.home")}
            </a>
            <a href="#about" className="hover:underline">
              {t("nav.about")}
            </a>
            <a href="#services" className="hover:underline">
              {t("nav.services")}
            </a>
            <a href="#malta" className="hover:underline">
              {t("nav.malta")}
            </a>
            <a href="#testimonials" className="hover:underline">
              {t("nav.testimonials")}
            </a>
            <a href="#faq" className="hover:underline">
              {t("nav.faq")}
            </a>
            <a href="#blog" className="hover:underline">
              {t("nav.blog")}
            </a>
            <a href="#careers" className="hover:underline">
              {t("nav.careers")}
            </a>
            <a href="#contact" className="hover:underline">
              {t("nav.contact")}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 py-1 px-2">
            <button
              aria-label="Set English"
              onClick={() => setLang("en")}
              className={`px-2 text-xs ${lang === "en" ? "bg-primary text-primary-foreground rounded-full" : ""}`}
            >
              EN
            </button>
            <button
              aria-label="Set Spanish"
              onClick={() => setLang("es")}
              className={`px-2 text-xs ${lang === "es" ? "bg-primary text-primary-foreground rounded-full" : ""}`}
            >
              ES
            </button>
          </div>

          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full border px-3 py-1 text-sm"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <Link
            to="/"
            className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-purple px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft"
          >
            {t("cta.start")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
