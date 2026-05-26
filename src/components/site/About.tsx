import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import girls from "@/assets/girls-illustration.png";

export function About() {
  const { t } = useLang();
  const stats = [
    { n: "2", k: "about.stat1" },
    { n: "5", k: "about.stat2" },
  ];
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">
            {t("about.eyebrow")}
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {t("about.title")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("about.body")}
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 border-primary/40 pl-4">
                <div className="font-serif text-3xl text-primary sm:text-4xl">
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {t(s.k)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-warm p-12 shadow-card">
            <img
              src={girls}
              alt="Students"
              className="h-full w-full object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[var(--sky)]/40 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
