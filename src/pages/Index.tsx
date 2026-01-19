import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { CategorySection } from "@/components/home/CategorySection";
import { StoriesSection } from "@/components/home/StoriesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <FeaturedDestinations />
      <CategorySection />
      <StoriesSection />
    </Layout>
  );
};

export default Index;
