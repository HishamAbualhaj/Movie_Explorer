import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Use your environment variable here
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const systemPrompt = `
You are a professional movie assistant.
You recommend movies, explain plots without spoilers,
compare films, and answer cinema-related questions.
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    // Safe access to avoid empty reply
    const reply = completion.choices?.[0]?.message?.content ?? "No reply";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    if (error instanceof Object && "code" in error && error.code === "insufficient_quota") {
      return NextResponse.json(
        { error: "OpenAI quota exceeded. Please check your plan." },
        { status: 429 }
      );
    }
    if (error instanceof Object && "code" in error && error.code === "invalid_api_key") {
      return NextResponse.json(
        { error: "OpenAI invalid API key. Please check your api key." },
        { status: 430 }
      );
    }
    return NextResponse.json(
      { error: "Failed to process AI request" },
      { status: 500 }
    );
  }
}
