import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/portfolio/section";
import { profile } from "@/data/profile";

export function Experience() {
  return (
    <Section id="experience" title="Career">
      <div className="flex flex-col gap-10">
        {profile.experience.map((job) => (
          <div key={job.company} className="flex flex-col gap-5">
            <div>
              <h3 className="text-base font-semibold sm:text-lg">
                {job.company}
              </h3>
              <p className="text-sm text-muted-foreground">
                {job.role} · {job.period}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {job.services.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-3">
                {job.services.map((service) => (
                  <div key={service.name} className="rounded-xl border p-3.5">
                    <p className="text-sm font-semibold">{service.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {service.description}
                    </p>
                    {service.details.length > 0 && (
                      <ul className="mt-2 flex flex-col gap-0.5 text-xs text-muted-foreground">
                        {service.details.map((d) => (
                          <li key={d}>· {d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">
                담당 업무
              </p>
              <ul className="flex flex-col gap-1 text-sm">
                {job.duties.map((duty) => (
                  <li key={duty} className="flex gap-2">
                    <span className="text-primary">·</span>
                    {duty}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground">
                주요 성과
              </p>
              {job.achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="rounded-xl border p-4 sm:p-5"
                >
                  <p className="text-sm font-semibold sm:text-base">
                    {achievement.title}
                  </p>

                  {achievement.problem && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-muted-foreground">
                        문제
                      </p>
                      <p className="mt-1 text-sm leading-relaxed">
                        {achievement.problem}
                      </p>
                    </div>
                  )}

                  <div className="mt-3">
                    <p className="text-xs font-medium text-muted-foreground">
                      해결
                    </p>
                    <ul className="mt-1 flex flex-col gap-0.5 text-sm">
                      {achievement.solution.map((s) => (
                        <li key={s}>· {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium text-muted-foreground">
                      결과
                    </p>
                    <ul className="mt-1 flex flex-col gap-0.5 text-sm font-medium">
                      {achievement.result.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="text-primary">·</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
