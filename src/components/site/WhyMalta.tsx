import { useEffect, useRef, useState } from "react";
import malta from "@/assets/malta-streets.png";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Globe2, Wallet, TrendingUp } from "lucide-react";

export function WhyMalta() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const update = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setOffset(center * -0.25);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const items = [
    { icon: Globe2, tk: "malta.1.title", bk: "malta.1.body" },
    { icon: Wallet, tk: "malta.2.title", bk: "malta.2.body" },
    { icon: TrendingUp, tk: "malta.3.title", bk: "malta.3.body" },
  ];
  return (
    <section
      ref={sectionRef}
      id="malta"
      className="relative isolate overflow-hidden py-32 sm:py-40"
    >
      <div
        className="absolute inset-x-0 -top-24 -bottom-24 will-change-transform"
        style={{
          transform: `translate3d(0, ${offset}px, 0)`,
          backgroundImage: `url(${malta})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--sky)]">
            {t("malta.eyebrow")}
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            {t("malta.title")}
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="card-hover h-full rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--sky)]/30 text-[var(--sky)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl">{t(it.tk)}</h3>
                  <p className="mt-3 text-sm text-white/85 leading-relaxed">
                    {t(it.bk)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
