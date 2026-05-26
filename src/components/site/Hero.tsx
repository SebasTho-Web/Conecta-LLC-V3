import { useEffect, useState } from "react";
import malta from "@/assets/malta-hero.png";
import girls from "@/assets/girls-illustration.png";
import { useLang } from "@/lib/i18n";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  const { t, lang } = useLang();
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const title = t("hero.title");
  const words = title.split(" ");

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${y * 0.35}px, 0) scale(${1 + Math.min(y, 600) * 0.0004})`,
          backgroundImage: `url(${malta})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pt-24 sm:pt-0 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7 text-white">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur">
              Conecta · All Nations
            </span>
            <h1
              key={lang}
              className="word-fade mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {words.map((w, i) => (
                <span key={i} style={{ animationDelay: `${i * 110}ms` }}>
                  {w}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              {t("hero.sub")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-purple px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
              >
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/35699319746"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                {t("hero.cta2")}
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end mt-10 md:mt-0">
            <div
              className="relative rounded-3xl border border-white/25 bg-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl"
              style={{ transform: `translateY(${Math.sin(y * 0.005) * 8}px)` }}
            >
              <img
                src={girls}
                alt="Conecta All Nations, two students with backpacks"
                className="w-[220px] sm:w-[260px] md:w-[280px] h-auto drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <div className="h-10 w-[2px] animate-pulse bg-white/60 mx-auto" />
      </div>
    </section>
  );
}
