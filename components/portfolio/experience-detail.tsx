import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/experience";

export function ExperienceDetail({ job }: { job: Experience }) {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{job.period}</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {job.company}
        </h1>
        <p className="text-sm text-muted-foreground">{job.role}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {job.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </header>

      {job.services.length > 0 && (
        <section className="flex flex-col gap-3 border-t pt-6">
          <h2 className="text-sm font-semibold text-muted-foreground">
            담당 서비스
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {job.services.map((service) => (
              <div key={service.name} className="rounded-xl border p-3.5">
                <p className="text-sm font-semibold">{service.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {service.description}
                </p>
                {service.details.length > 0 && (
                  <ul className="mt-2 flex flex-col gap-0.5 text-xs text-muted-foreground">
                    {service.details.map((detail) => (
                      <li key={detail}>· {detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="flex flex-col gap-2 border-t pt-6">
        <h2 className="mb-1 text-sm font-semibold text-muted-foreground">
          담당 업무
        </h2>
        <ul className="flex flex-col gap-1.5 text-base">
          {job.duties.map((duty) => (
            <li key={duty} className="flex gap-2">
              <span className="text-primary">·</span>
              {duty}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4 border-t pt-6">
        <h2 className="text-sm font-semibold text-muted-foreground">
          주요 성과
        </h2>
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
              <p className="text-xs font-medium text-muted-foreground">해결</p>
              <ul className="mt-1 flex flex-col gap-0.5 text-sm">
                {achievement.solution.map((solution) => (
                  <li key={solution}>· {solution}</li>
                ))}
              </ul>
            </div>

            <div className="mt-3">
              <p className="text-xs font-medium text-muted-foreground">결과</p>
              <ul className="mt-1 flex flex-col gap-0.5 text-sm font-medium">
                {achievement.result.map((result) => (
                  <li key={result} className="flex gap-2">
                    <span className="text-primary">·</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {job.improvements.length > 0 && (
        <section className="flex flex-col gap-4 border-t pt-6">
          <h2 className="text-sm font-semibold text-muted-foreground">
            개선 경험
          </h2>
          {job.improvements.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <p className="text-sm font-semibold sm:text-base">{item.title}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs font-medium text-muted-foreground">
                    기존 구조
                  </p>
                  <pre className="overflow-x-auto rounded-xl border bg-muted/40 p-4 font-mono text-xs leading-relaxed whitespace-pre">
                    {item.before}
                  </pre>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium text-muted-foreground">
                    개선 구조
                  </p>
                  <pre className="overflow-x-auto rounded-xl border border-primary/30 bg-primary/5 p-4 font-mono text-xs leading-relaxed whitespace-pre">
                    {item.after}
                  </pre>
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  개선 효과
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.effects.map((effect) => (
                    <Badge key={effect} variant="outline">
                      {effect}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
