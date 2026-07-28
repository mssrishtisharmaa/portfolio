import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-emerald)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <LeadershipSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
