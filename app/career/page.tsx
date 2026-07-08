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
import { getAllExperiences } from "@/lib/experience";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Career | ${profile.name}`,
  description: `${profile.name}님의 경력 목록입니다.`,
};

export default function CareerListPage() {
  const experiences = getAllExperiences();

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
          Career
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {profile.name}님의 경력을 자세히 살펴보세요.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((job) => (
          <Link key={job.slug} href={`/career/${job.slug}`}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  {job.company}
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
                </CardTitle>
                <CardDescription>
                  {job.role} · {job.period}
                </CardDescription>
              </CardHeader>
              {job.stack.length > 0 && (
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
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
