"use client";

import { motion } from "framer-motion";
import { Mail, Notebook } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start gap-6 py-10 sm:flex-row sm:items-center sm:py-16"
    >
      <Avatar size="lg" className="size-20 sm:size-24">
        <AvatarImage src={profile.avatarUrl} alt={profile.name} />
        <AvatarFallback className="text-xl">
          {profile.name.slice(0, 1)}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {profile.name}
          </h1>
          <p className="text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={`mailto:${profile.email}`} />}
          >
            <Mail /> 이메일
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={profile.links.github} target="_blank" rel="noreferrer" />}
          >
            <GithubIcon className="size-4" /> GitHub
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={profile.links.linkedin} target="_blank" rel="noreferrer" />}
          >
            <LinkedinIcon className="size-4" /> LinkedIn
          </Button>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<a href={profile.links.blog} target="_blank" rel="noreferrer" />}
          >
            <Notebook /> Blog
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
