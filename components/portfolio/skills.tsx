import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/portfolio/section";
import { profile } from "@/data/profile";

export function Skills() {
  return (
    <Section id="skills" title="기술 스택">
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.skills.map((group) => (
          <div key={group.category} className="rounded-xl border p-4">
            <p className="mb-2.5 text-sm font-medium text-muted-foreground">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
