import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ProjectsCta() {
  return (
    <section className="py-[56px] sm:py-[64px] lg:py-[100px] bg-[#121010] px-4 sm:px-6 md:px-[60px] lg:px-[80px] relative overflow-hidden">
      {/* ... */}
      <div className="mx-auto max-w-[1150px] text-center relative z-10">
        <FadeIn delay={100} direction="up">
          {/* ... */}
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Start Your Project
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
