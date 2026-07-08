import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/portfolio/section";
import { profile } from "@/data/profile";

export function Projects() {
  return (
    <Section id="projects" title="프로젝트">
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.projects.map((project) => (
          <Card key={project.slug}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.period}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="pt-1">
                <Button
                  variant="ghost"
                  size="sm"
                  nativeButton={false}
                  render={<Link href={`/project/${project.slug}`} />}
                >
                  자세히 보기 <ArrowRight />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
