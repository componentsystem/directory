"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "The AI feature requires a Claude API key to be configured. Check back soon!",
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "The AI feature is coming soon. In the meantime, use our search and filter tools to find the perfect component library!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Messages */}
      <div className="min-h-[300px] p-6">
        {messages.length === 0 ? (
          <div className="flex h-[300px] items-center justify-center text-center">
            <div>
              <p className="text-lg font-medium text-gray-400">
                Describe your ideal component library
              </p>
              <p className="mt-1 text-sm text-gray-300">
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
                      ? "bg-brand-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-gray-100 px-4 py-3">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.2s]" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your project and requirements..."
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
