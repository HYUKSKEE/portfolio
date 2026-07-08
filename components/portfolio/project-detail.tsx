import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/brand-icons";
import type { Project } from "@/lib/projects";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        {project.period && (
          <p className="text-sm text-muted-foreground">{project.period}</p>
        )}
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-sm text-muted-foreground">{project.role}</p>
        <p className="text-base leading-relaxed">{project.description}</p>
        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {(project.link || project.github) && (
          <div className="flex gap-2 pt-2">
            {project.link && (
              <Button
                size="sm"
                nativeButton={false}
                render={
                  <a href={project.link} target="_blank" rel="noreferrer" />
                }
              >
                <ExternalLink /> 데모 보기
              </Button>
            )}
            {project.github && (
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a href={project.github} target="_blank" rel="noreferrer" />
                }
              >
                <GithubIcon className="size-4" /> 코드 보기
              </Button>
            )}
          </div>
        )}
      </header>

      {project.overview && (
        <section className="flex flex-col gap-2 border-t pt-6">
          <h2 className="text-sm font-semibold text-muted-foreground">
            프로젝트 개요
          </h2>
          <p className="text-sm leading-relaxed sm:text-base">
            {project.overview}
          </p>
        </section>
      )}

      {project.architecture.length > 0 && (
        <section className="flex flex-col gap-3 border-t pt-6">
          <h2 className="text-sm font-semibold text-muted-foreground">
            구조 설계
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.architecture.map((item) => (
              <div key={item.title} className="rounded-xl border p-4">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.phases.length > 0 && (
        <section className="flex flex-col gap-4 border-t pt-6">
          <h2 className="text-sm font-semibold text-muted-foreground">
            진행 과정
          </h2>
          {project.phases.map((phase, index) => (
            <div key={phase.title} className="rounded-xl border p-4 sm:p-5">
              <p className="text-sm font-semibold sm:text-base">
                {index + 1}. {phase.title}
              </p>
              {phase.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              )}
              <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {project.duties.length > 0 && (
        <section className="flex flex-col gap-2 border-t pt-6">
          <h2 className="mb-1 text-sm font-semibold text-muted-foreground">
            주요 구현
          </h2>
          <ul className="flex flex-col gap-1.5 text-base">
            {project.duties.map((duty) => (
              <li key={duty} className="flex gap-2">
                <span className="text-primary">·</span>
                {duty}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.highlights.length > 0 && (
        <section className="flex flex-col gap-3 border-t pt-6">
          <h2 className="text-sm font-semibold text-muted-foreground">
            설계 포인트
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {project.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary">
                {highlight}
              </Badge>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
