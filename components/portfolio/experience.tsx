import { Section } from "@/components/portfolio/section";
import { profile } from "@/data/profile";

export function Experience() {
  return (
    <Section id="experience" title="경력">
      <ol className="flex flex-col gap-6 border-l pl-5">
        {profile.experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute top-1.5 -left-[26px] size-2.5 rounded-full border-2 border-background bg-primary" />
            <p className="text-sm font-semibold">{job.role}</p>
            <p className="text-sm text-muted-foreground">
              {job.company} · {job.period}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
