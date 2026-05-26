import { useLang } from "@/lib/i18n";

export function Blog() {
  const { t } = useLang();
  return (
    <section id="blog" className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="font-serif text-3xl">{t("blog.title")}</h2>
      <p className="mt-4 text-muted-foreground">{t("blog.intro")}</p>
    </section>
  );
}
