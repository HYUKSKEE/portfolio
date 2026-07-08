import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/lib/projects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `프로젝트 | ${profile.name}`,
  description: `${profile.name}님이 진행한 프로젝트 목록입니다.`,
};

export default function ProjectListPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10 lg:px-8">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        홈으로
      </Link>

      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          프로젝트
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {profile.name}님이 진행한 프로젝트를 자세히 살펴보세요.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link key={project.slug} href={`/project/${project.slug}`}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  {project.title}
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              {project.stack.length > 0 && (
                <CardContent className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
