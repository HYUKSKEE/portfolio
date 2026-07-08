"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChatInterface } from "@/components/chat/chat-interface";

/**
 * 데스크톱(lg 이상)에서는 우측에 고정된 채팅 패널을,
 * 모바일/태블릿에서는 우측 하단 플로팅 버튼 + Sheet 형태로 채팅을 보여줍니다.
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-[380px] shrink-0 overflow-hidden rounded-2xl border bg-card shadow-sm lg:flex">
        <ChatInterface className="w-full" />
      </aside>

      <div className="fixed right-4 bottom-4 z-40 lg:hidden">
        <Button
          size="icon-lg"
          className="size-12 rounded-full shadow-lg"
          onClick={() => setOpen(true)}
          aria-label="AI 챗봇 열기"
        >
          <MessageCircle className="size-5" />
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-full gap-0 p-0 sm:max-w-md"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>AI 어시스턴트</SheetTitle>
          </SheetHeader>
          <div className="flex h-full flex-col">
            <div className="flex justify-end border-b p-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setOpen(false)}
                aria-label="닫기"
              >
                <X className="size-4" />
              </Button>
            </div>
            <ChatInterface className="flex-1" />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
