import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { CaseStudy } from "@/components/portfolio/case-study";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Interest } from "@/components/portfolio/interest";
import { Footer } from "@/components/portfolio/footer";
import { ChatWidget } from "@/components/chat/chat-widget";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 lg:flex-row lg:items-start lg:gap-10 lg:px-8">
      <main className="min-w-0 flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CaseStudy />
        <Projects />
        <Education />
        <Interest />
        <Footer />
      </main>

      <ChatWidget />
    </div>
  );
}
