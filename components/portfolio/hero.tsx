import { Mail, Phone } from "lucide-react";
import { ProfileAvatar } from "@/components/portfolio/profile-avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/brand-icons";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="flex animate-in flex-col items-start gap-6 fade-in slide-in-from-bottom-4 py-10 duration-500 sm:flex-row sm:items-center sm:py-16">
      <ProfileAvatar
        src={profile.avatarUrl}
        alt={profile.name}
        fallback={profile.name.slice(0, 1)}
        className="size-20 sm:size-24"
      />

      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {profile.name}
          </h1>
          <p className="text-muted-foreground">{profile.role}</p>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Button
            size="sm"
            nativeButton={false}
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail /> 이메일ㅇ
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={`tel:${profile.phone.replace(/-/g, "")}`} />}
          >
            <Phone /> {profile.phone}
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={profile.links.github} target="_blank" rel="noreferrer" />}
          >
            <GithubIcon className="size-4" /> GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
