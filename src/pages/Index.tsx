import IntroSection from "@/components/IntroSection";
import CVSection from "@/components/CVSection";
import ProjectSection from "@/components/ProjectSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <IntroSection />
      <CVSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
};

export default Index;
