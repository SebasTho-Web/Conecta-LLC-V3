import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Calendar, Map, Plane } from "lucide-react";

export function HowItWorks() {
  const { t } = useLang();
  const steps = [
    { icon: Calendar, tk: "how.1.title", bk: "how.1.body" },
    { icon: Map, tk: "how.2.title", bk: "how.2.body" },
    { icon: Plane, tk: "how.3.title", bk: "how.3.body" },
  ];
  return (
    <section id="how" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {t("how.eyebrow")}
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("how.title")}
          </h2>
        </Reveal>
        <div className="relative mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[15%] right-[15%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={i} delay={i * 120} className="relative text-center">
                <div className="relative mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-purple text-primary-foreground shadow-glow">
                  <Icon className="h-8 w-8" />
                  <span className="absolute -top-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold)] text-xs font-semibold text-white shadow-card">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl">{t(s.tk)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(s.bk)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
