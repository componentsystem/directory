import { NextResponse } from "next/server";
import { systems } from "@componentsystem/data";

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const DEFAULT_MODEL = "claude-sonnet-4-20250514";

type AnthropicMessageResponse = {
  content?: Array<{ type: string; text?: string }>;
};

function buildDirectoryContext() {
  return systems
    .map((system) => {
      const components =
        system.components.length > 0
          ? ` Components: ${system.components
              .slice(0, 20)
              .map((component) => component.name)
              .join(", ")}.`
          : "";

      return [
        system.name,
        `slug: ${system.slug}`,
        `frameworks: ${system.frameworks.join(", ")}`,
        `styling: ${system.styling.join(", ") || "not listed"}`,
        `category: ${system.category.join(", ")}`,
        `maturity: ${system.maturity}`,
        `latest version: ${system.latestVersion}`,
        `description: ${system.description}`,
        components.trim(),
      ]
        .filter(Boolean)
        .join("; ");
    })
    .join("\n");
}

function extractText(data: AnthropicMessageResponse) {
  return (
    data.content
      ?.filter((item) => item.type === "text" && item.text)
      .map((item) => item.text)
      .join("\n")
      .trim() ?? ""
  );
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "The AI recommendation feature requires ANTHROPIC_API_KEY to be configured.",
        },
        { status: 503 }
      );
    }

    const anthropicResponse = await fetch(ANTHROPIC_API_URL, {
      method: "POST",
      headers: {
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL ?? DEFAULT_MODEL,
        max_tokens: 900,
        system:
          "You recommend UI component systems from the provided directory. Answer concisely, explain tradeoffs, and only recommend libraries that appear in the directory context.",
        messages: [
          {
            role: "user",
            content: `Directory context:\n${buildDirectoryContext()}\n\nUser request:\n${message}`,
          },
        ],
      }),
    });

    if (!anthropicResponse.ok) {
      return NextResponse.json(
        { error: "The AI provider request failed." },
        { status: 502 }
      );
    }

    const data = (await anthropicResponse.json()) as AnthropicMessageResponse;
    const response = extractText(data);

    if (!response) {
      return NextResponse.json(
        { error: "The AI provider returned an empty response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ response });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
