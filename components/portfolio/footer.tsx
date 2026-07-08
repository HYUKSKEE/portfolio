import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="flex flex-col gap-5 border-t py-10">
      <div>
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          함께 성장할 수 있는 좋은 기회를 기다리고 있습니다. 🚀
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex w-fit items-center gap-2 transition-colors hover:text-primary"
        >
          <Mail className="size-4" /> {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/-/g, "")}`}
          className="inline-flex w-fit items-center gap-2 transition-colors hover:text-primary"
        >
          <Phone className="size-4" /> {profile.phone}
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 transition-colors hover:text-primary"
        >
          <GithubIcon className="size-4" /> {profile.links.github}
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
