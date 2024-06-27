
import AboutUs from "@/components/sections/about-us/AboutUs";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import Metrics from "@/components/sections/metrics/Metrics";
import OurExperts from "@/components/sections/our-experts/OurExperts";
export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <OurExperts />
    </main>
  );
}
