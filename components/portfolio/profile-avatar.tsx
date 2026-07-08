"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ProfileAvatar({
  src,
  alt,
  fallback,
  className,
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <span
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full bg-muted after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
        className
      )}
    >
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="size-full rounded-full object-cover"
        />
      ) : (
        <span className="flex size-full items-center justify-center rounded-full text-xl text-muted-foreground">
          {fallback}
        </span>
      )}
    </span>
  );
}
