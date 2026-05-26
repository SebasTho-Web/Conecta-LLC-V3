import { useLang } from "@/lib/i18n";

export function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="font-serif text-3xl">{t("how.title")}</h2>
      <p className="mt-4 text-muted-foreground">{t("how.intro")}</p>
    </section>
  );
}
