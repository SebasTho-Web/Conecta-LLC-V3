import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import {
  Compass,
  GraduationCap,
  Briefcase,
  PlusCircle,
  Crown,
  ArrowRight,
} from "lucide-react";

const cards = [
  { icon: Compass, titleKey: "s1.title", bodyKey: "s1.body" },
  { icon: GraduationCap, titleKey: "s2.title", bodyKey: "s2.body" },
  { icon: Briefcase, titleKey: "s3.title", bodyKey: "s3.body" },
  { icon: PlusCircle, titleKey: "s4.title", bodyKey: "s4.body" },
  { icon: Crown, titleKey: "s5.title", bodyKey: "s5.body" },
];

export function Services() {
  const { t } = useLang();
  return (
    <section
      id="services"
      className="relative bg-[var(--cream)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {t("services.eyebrow")}
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("services.title")}
          </h2>
          <p className="mt-5 text-muted-foreground">{t("services.sub")}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isFeatured = i === 4;
            return (
              <Reveal key={i} delay={i * 80}>
                <article
                  className={`group card-hover relative flex h-full flex-col rounded-2xl border border-border/70 p-8 ${
                    isFeatured
                      ? "bg-gradient-purple text-primary-foreground"
                      : "bg-background"
                  }`}
                >
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      isFeatured ? "bg-white/20" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`font-serif text-2xl leading-snug ${isFeatured ? "text-white" : ""}`}
                  >
                    {t(c.titleKey)}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${isFeatured ? "text-white/85" : "text-muted-foreground"}`}
                  >
                    {t(c.bodyKey)}
                  </p>
                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${
                      isFeatured ? "text-white" : "text-primary"
                    }`}
                  >
                    {t("services.learnMore")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
