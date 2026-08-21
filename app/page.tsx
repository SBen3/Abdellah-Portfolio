import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { FeaturedProject } from "@/components/featured-project";
import { OtherProjects } from "@/components/other-projects";
import { Skills } from "@/components/skills";
import { Engagements } from "@/components/engagements";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-dot-grid">
        <Hero />
        <Marquee />
        <FeaturedProject />
        <OtherProjects />
        <Skills />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
