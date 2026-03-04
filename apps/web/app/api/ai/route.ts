import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Placeholder: In production, this would call the Claude API
    // with the directory data as context to provide personalized recommendations
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          response:
            "The AI recommendation feature requires an Anthropic API key to be configured. Please set ANTHROPIC_API_KEY in your environment variables. In the meantime, use the search and filter tools on the homepage to find your ideal component library!",
        },
        { status: 200 }
      );
    }

    // TODO: Integrate with Claude API for real recommendations
    return NextResponse.json({
      response:
        "AI recommendations are coming soon! For now, check out our directory with search and filters to find the perfect component library.",
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
