import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { StatsStrip } from "@/components/stats-strip";
import { SelectedWork } from "@/components/selected-work";
import { SkillsBlock } from "@/components/skills-block";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getSiteContent } from "@/lib/site-content";

export default async function Home() {
  const { stats } = await getSiteContent();

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <StatsStrip stats={stats} />
        <ScrollReveal>
          <SelectedWork />
        </ScrollReveal>
        <ScrollReveal>
          <SkillsBlock />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
}
