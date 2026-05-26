import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Mail } from "lucide-react";

export function Careers() {
  const { t } = useLang();
  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[var(--sky)]/25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {t("careers.eyebrow")}
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("careers.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            {t("careers.body")}
          </p>
          <a
            href="mailto:students.conecta@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:scale-[1.03] hover:bg-primary"
          >
            <Mail className="h-4 w-4" /> {t("careers.cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
