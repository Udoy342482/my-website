import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { StatsStrip } from "@/components/stats-strip";
import { SelectedWork } from "@/components/selected-work";
import { SkillsBlock } from "@/components/skills-block";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <StatsStrip />
        <SelectedWork />
        <SkillsBlock />
      </main>
      <SiteFooter />
    </div>
  );
}
