import Hero from "@/components/landing-page/hero";
import Compare from "@/components/landing-page/compare";
import HowItWorks from "@/components/landing-page/how-it-works";
import FeatureOne from "@/components/landing-page/feature-1";
import FeatureTwo from "@/components/landing-page/feature-2";
import Pricing from "@/components/landing-page/pricing";
import Reviews from "@/components/landing-page/reviews";
import FAQ from "@/components/landing-page/faq";

export default async function Home() {
  return (
    <>
      <Hero />
      <Compare />
      <HowItWorks />
      <FeatureOne />
      <FeatureTwo />
      <Pricing />
      <Reviews />
      <FAQ />
    </>
  );
}
