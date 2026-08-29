import IntroSection from "@/components/IntroSection";
import CVSection from "@/components/CVSection";
import ProjectSection from "@/components/ProjectSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <IntroSection />
      <CVSection />
      <ProjectSection />
      <FooterSection />
    </main>
  );
};

export default Index;
