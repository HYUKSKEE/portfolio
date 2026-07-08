import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-8", className)}>
      <h2 className="mb-5 text-lg font-semibold tracking-tight sm:text-xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
