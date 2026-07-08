import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Footer } from "@/components/portfolio/footer";
import { ChatWidget } from "@/components/chat/chat-widget";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 lg:flex-row lg:items-start lg:gap-10 lg:px-8">
      <main className="min-w-0 flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </main>

      <ChatWidget />
    </div>
  );
}
