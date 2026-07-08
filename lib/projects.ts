import { profile } from "@/data/profile";

export type Project = (typeof profile.projects)[number];

export function getAllProjects(): Project[] {
  return [...profile.projects];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return profile.projects.find((project) => project.slug === slug);
}
