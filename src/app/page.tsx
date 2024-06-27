
import NewsLetter from "@/components/newsletter/NewsLetter";
import AboutUs from "@/components/sections/about-us/AboutUs";
import Blog from "@/components/sections/blog/Blog";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import Metrics from "@/components/sections/metrics/Metrics";
import OurExperts from "@/components/sections/our-experts/OurExperts";
import Testimonial from "@/components/sections/testimonial/Testimonial";
export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <div className="p-2 md:p-4">
        <Testimonial />
      </div>
      <OurExperts />
      <div className="p-4 bg-secondary-950">
        <NewsLetter />
      </div>
      <Blog />
    </main>
  );
}
