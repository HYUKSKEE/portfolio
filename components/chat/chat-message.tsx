import type { UIMessage } from "ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ProfileAvatar } from "@/components/portfolio/profile-avatar";
import { Bot, User } from "lucide-react";
import { profile } from "@/data/profile";

function getMessageText(message: UIMessage): string {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("");
}

export function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";
  const text = getMessageText(message);

  if (!text) return null;

  return (
    <div className={cn("flex items-start gap-2.5", isUser && "flex-row-reverse")}>
      {isUser ? (
        <Avatar className="size-7 shrink-0 border">
          <AvatarFallback>
            <User className="size-3.5" />
          </AvatarFallback>
        </Avatar>
      ) : (
        <ProfileAvatar
          src={profile.avatarUrl}
          alt={profile.name}
          fallback={<Bot className="size-3.5" />}
          className="size-7 shrink-0 border"
        />
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed break-words",
          isUser
            ? "rounded-tr-sm bg-primary font-bold text-white"
            : "rounded-tl-sm bg-muted text-foreground"
        )}
      >
        {isUser ? (
          text
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-headings:my-1.5">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
