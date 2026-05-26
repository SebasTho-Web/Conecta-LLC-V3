import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "services", key: "nav.services" },
  { id: "malta", key: "nav.malta" },
  { id: "testimonials", key: "nav.testimonials" },
  { id: "faq", key: "nav.faq" },
  { id: "blog", key: "nav.blog" },
  { id: "careers", key: "nav.careers" },
  { id: "contact", key: "nav.contact" },
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollTo("home")}
          className="hidden md:flex items-center lg:mr-6"
          aria-label="Conecta home"
        >
          <span
            className={`whitespace-nowrap font-serif font-bold tracking-tight transition-all ${
              scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
            }`}
            style={{ color: "#A78BD4" }}
          >
            Conecta
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7 lg:mr-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm tracking-wide text-foreground transition-colors hover:text-primary"
            >
              {t(l.key)}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/70 p-0.5 text-xs font-medium">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-3 py-1 transition-all ${
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-foreground/70"
              }`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-3 py-1 transition-all ${
                lang === "es"
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-foreground/70"
              }`}
              aria-pressed={lang === "es"}
            >
              ES
            </button>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground transition-colors hover:bg-background"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-gradient-purple px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:scale-[1.03]"
          >
            {t("cta.start")}
          </button>
        </div>

        <button
          className="md:hidden ml-auto bg-transparent p-0 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-nav mt-3 mx-4 rounded-2xl p-5">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left text-base"
              >
                {t(l.key)}
              </button>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1 rounded-full border border-border/60 p-0.5 text-xs">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 ${lang === "en" ? "bg-primary text-primary-foreground" : ""}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`rounded-full px-3 py-1 ${lang === "es" ? "bg-primary text-primary-foreground" : ""}`}
              >
                ES
              </button>
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-gradient-purple px-4 py-2 text-sm text-primary-foreground"
            >
              {t("cta.start")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
