import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { BookOpen } from "lucide-react";

export function Blog() {
  const { t } = useLang();
  return (
    <section id="blog" className="relative bg-[var(--cream)] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {t("blog.eyebrow")}
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("blog.title")}
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-card p-10 text-center shadow-card sm:p-14">
            <BookOpen
              className="mx-auto mb-4 h-16 w-16 text-[var(--gold)]/40 sm:absolute sm:-top-2 sm:left-6 sm:mx-0 sm:mb-0 sm:h-24 sm:w-24 sm:text-[var(--gold)]/25"
              aria-hidden
            />
            <h3 className="relative font-serif text-2xl sm:text-3xl text-primary">
              {t("blog.soon.title")}
            </h3>
            <p className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
              {t("blog.soon.body")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
