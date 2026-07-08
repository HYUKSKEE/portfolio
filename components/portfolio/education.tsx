import { Section } from "@/components/portfolio/section";
import { profile } from "@/data/profile";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-5">
        {profile.education.map((edu) => (
          <div key={edu.school}>
            <p className="text-sm font-semibold sm:text-base">{edu.school}</p>
            {edu.period && (
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            )}
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              {edu.highlights.map((h) => (
                <li key={h} className="flex gap-1.5">
                  <span className="text-primary">·</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
