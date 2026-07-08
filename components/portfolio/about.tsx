import { Search, Building2, TrendingUp } from "lucide-react";
import { Section } from "@/components/portfolio/section";
import { profile } from "@/data/profile";

const icons = [Search, Building2, TrendingUp];

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col gap-4">
        {profile.about.paragraphs.map((p) => (
          <p key={p} className="text-sm leading-relaxed sm:text-base">
            {p}
          </p>
        ))}

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          새로운 기능을 개발하기 전에 먼저 다음 세 가지를 고민합니다.
        </p>
        <ul className="flex flex-col gap-1.5 pl-1 text-sm sm:text-base">
          {profile.about.questions.map((q) => (
            <li key={q} className="flex gap-2">
              <span className="text-primary">·</span>
              {q}
            </li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {profile.about.closing}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {profile.coreCompetencies.map((item, i) => {
          const Icon = icons[i] ?? Search;
          return (
            <div key={item.title} className="rounded-xl border p-4">
              <div className="mb-3 flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-4.5" />
              </div>
              <p className="mb-1.5 text-sm font-semibold">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
