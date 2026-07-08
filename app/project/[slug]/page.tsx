import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/brand-icons";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 lg:px-8">
      <Link
        href="/project"
        className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        모든 프로젝트
      </Link>

      <header className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{project.period}</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-sm text-muted-foreground">{project.role}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          <Button
            size="sm"
            nativeButton={false}
            render={<a href={project.link} target="_blank" rel="noreferrer" />}
          >
            <ExternalLink /> 데모 보기
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={project.github} target="_blank" rel="noreferrer" />}
          >
            <GithubIcon className="size-4" /> 코드 보기
          </Button>
        </div>
      </header>

      <section className="flex flex-col gap-6 border-t pt-6">
        <div>
          <h2 className="mb-2 text-sm font-semibold text-muted-foreground">
            문제
          </h2>
          <p className="text-base leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold text-muted-foreground">
            해결
          </h2>
          <p className="text-base leading-relaxed">{project.solution}</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold text-muted-foreground">
            결과
          </h2>
          <p className="text-base leading-relaxed">{project.result}</p>
        </div>
      </section>
    </div>
  );
}
