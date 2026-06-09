import { Navbar } from "@/sections/navbar";
import { Footer } from "@/sections/Footer";
import { PartnersHero } from "@/sections/PartnersHero";
import { PartnerLogos } from "@/sections/PartnerLogos";
import { PartnerAdvantages } from "@/sections/PartnerAdvantages";
import { Certificates } from "@/sections/Certificates";
import { PartnerCollaborationFlow } from "@/sections/PartnerCollaborationFlow";
import { BecomePartner } from "@/sections/BecomePartner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners | GPower",
  description: "Collaborating with industry leaders to drive innovation and deliver best-in-class renewable energy solutions.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PartnersHero />
      <PartnerLogos />
      <PartnerAdvantages />
      <Certificates />
      <PartnerCollaborationFlow />
      <BecomePartner />
      <Footer />
    </main>
  );
}