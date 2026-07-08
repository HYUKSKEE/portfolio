import { profile } from "@/data/profile";

export type Experience = (typeof profile.experience)[number];

export function getAllExperiences(): Experience[] {
  return [...profile.experience];
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return profile.experience.find((job) => job.slug === slug);
}
