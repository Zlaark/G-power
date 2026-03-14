import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { ProjectsHero } from "@/sections/ProjectsHero";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { ProjectImpact } from "@/sections/ProjectImpact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | GPower",
  description: "Explore our portfolio of successful clean energy projects across India, from utility-scale installations to residential solutions.",
};

export default function OurProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectImpact />
      <Footer />
    </main>
  );
}