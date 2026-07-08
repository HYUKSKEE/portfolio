"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Send, Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "@/components/chat/chat-message";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ChatInterface({ className }: { className?: string }) {
  const { messages, sendMessage, status, error, setMessages } = useChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, status]);

  function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="size-4" />
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">AI 어시스턴트</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {profile.name}님에 대해 물어보세요
            </p>
          </div>
        </div>
        {messages.length > 0 && (
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="대화 초기화"
            onClick={() => setMessages([])}
          >
            <RotateCcw className="size-3.5" />
          </Button>
        )}
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 px-4 py-4">
          {messages.length === 0 && (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                안녕하세요! 저는 {profile.name}님을 대신해 궁금한 점에 답해드리는
                AI입니다. 아래 질문으로 시작해보세요.
              </p>
              <div className="flex flex-col gap-2">
                {profile.suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="rounded-xl border bg-card px-3 py-2 text-left text-sm text-card-foreground transition-colors hover:bg-muted"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {status === "submitted" && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex gap-1">
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </span>
              답변을 생각하는 중...
            </div>
          )}

          {error && (
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
              {error.message?.includes("quota") ||
              error.message?.includes("insufficient_quota")
                ? "OpenAI API 사용 한도가 초과되었습니다. 결제/크레딧 설정 후 API 키를 갱신해주세요."
                : "문제가 발생했어요. 잠시 후 다시 시도해주세요."}
            </p>
          )}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="flex items-center gap-2 border-t p-3"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="궁금한 점을 물어보세요..."
          disabled={isBusy}
          autoComplete="off"
        />
        <Button type="submit" size="icon" disabled={isBusy || !input.trim()}>
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}
