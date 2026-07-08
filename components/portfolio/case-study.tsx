import { Section } from "@/components/portfolio/section";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/profile";

export function CaseStudy() {
  const { caseStudy } = profile;

  return (
    <Section id="case-study" title="Featured Case Study">
      <p className="mb-4 text-sm font-semibold sm:text-base">
        {caseStudy.title}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            기존 구조
          </p>
          <pre className="overflow-x-auto rounded-xl border bg-muted/40 p-4 font-mono text-xs leading-relaxed whitespace-pre">
            {caseStudy.before}
          </pre>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            개선 구조
          </p>
          <pre className="overflow-x-auto rounded-xl border border-primary/30 bg-primary/5 p-4 font-mono text-xs leading-relaxed whitespace-pre">
            {caseStudy.after}
          </pre>
        </div>
      </div>
      <div className="mt-4">
        <p className="mb-2 text-xs font-medium text-muted-foreground">
          개선 효과
        </p>
        <div className="flex flex-wrap gap-1.5">
          {caseStudy.effects.map((effect) => (
            <Badge key={effect} variant="outline">
              {effect}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
