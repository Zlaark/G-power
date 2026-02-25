import { Navbar } from "@/sections/navbar";
import { Hero3 } from "@/sections/Hero3";
import { SaveOnBills } from "@/sections/SaveOnBills";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero3 />
      <SaveOnBills />
      <Footer />
    </main>
  );
}


