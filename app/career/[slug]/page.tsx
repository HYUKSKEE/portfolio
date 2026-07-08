import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ExperienceDetail } from "@/components/portfolio/experience-detail";
import {
  getAllExperiences,
  getExperienceBySlug,
} from "@/lib/experience";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return getAllExperiences().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getExperienceBySlug(slug);

  if (!job) return {};

  return {
    title: `${job.company} | ${profile.name}`,
    description: `${job.role} · ${job.period}`,
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getExperienceBySlug(slug);

  if (!job) notFound();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 lg:px-8">
      <Link
        href="/career"
        className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        모든 경력
      </Link>

      <ExperienceDetail job={job} />
    </div>
  );
}
