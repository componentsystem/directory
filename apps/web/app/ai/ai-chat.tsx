"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
      {
        role: "assistant",
        content:
          "AI recommendations are disabled in the static version for now. Use the directory search, filters, and comparison tools to narrow down component systems.",
      },
    ]);
  }

  return (
    <div className="theme-card overflow-hidden rounded-lg">
      {/* Messages */}
      <div className="min-h-[300px] p-6">
        {messages.length === 0 ? (
          <div className="flex h-[300px] items-center justify-center text-center">
            <div>
              <p className="theme-muted-strong text-lg font-medium">
                Describe your ideal component library
              </p>
              <p className="theme-muted mt-1 text-sm">
                Include your framework, styling preferences, and project type
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === "user"
                      ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]"
                      : "theme-chip"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-[color:var(--border)] p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your project and requirements..."
            className="theme-input flex-1 rounded-md px-4 py-2.5 text-sm"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="theme-button-primary rounded-md px-6 py-2.5 text-sm font-semibold disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
