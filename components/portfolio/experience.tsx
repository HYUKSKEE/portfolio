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

export function Experience() {
  return (
    <Section id="experience" title="Career">
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.experience.map((job) => (
          <Card key={job.slug}>
            <CardHeader>
              <CardTitle>{job.company}</CardTitle>
              <CardDescription>
                {job.role} · {job.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {job.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="pt-1">
                <Button
                  variant="ghost"
                  size="sm"
                  nativeButton={false}
                  render={<Link href={`/career/${job.slug}`} />}
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
