import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="flex flex-col gap-1 border-t py-8 text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p>
        궁금한 점이 있다면 우측 AI 어시스턴트에게 물어보거나{" "}
        <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
          {profile.email}
        </a>
        로 연락해주세요.
      </p>
    </footer>
  );
}
