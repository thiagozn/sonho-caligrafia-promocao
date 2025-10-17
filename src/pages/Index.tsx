import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ChildrenSection from "@/components/ChildrenSection";
import Testimonials from "@/components/Testimonials";
import ExercisePreview from "@/components/ExercisePreview";
import WhatYouLearn from "@/components/WhatYouLearn";
import HowItWorks from "@/components/HowItWorks";
import BonusSection from "@/components/BonusSection";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <ChildrenSection />
      <Testimonials />
      <ExercisePreview />
      <WhatYouLearn />
      <HowItWorks />
      <BonusSection />
      <Pricing />
      <Guarantee />
      <Footer />
    </div>
  );
};

export default Index;
