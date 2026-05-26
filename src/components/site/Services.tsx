import { useLang } from "@/lib/i18n";

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="font-serif text-3xl">{t("services.title")}</h2>
      <p className="mt-4 text-muted-foreground">{t("services.intro")}</p>
    </section>
  );
}
