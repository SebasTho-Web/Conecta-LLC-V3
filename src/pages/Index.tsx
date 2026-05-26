import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyMalta } from "@/components/site/WhyMalta";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Blog } from "@/components/site/Blog";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CookieBanner } from "@/components/site/CookieBanner";

export default function Index() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyMalta />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <Blog />
          <Careers />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFab />
        <CookieBanner />
      </LanguageProvider>
    </ThemeProvider>
  );
}
