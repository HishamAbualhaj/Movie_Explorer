import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { message, user } = await req.json();
    const { name, favorites = [], watched = [], watchLater = [] } = user || {};

    const systemPrompt = `
You are a professional movie assistant. 
The current user is ${name || "Anonymous"}.
Their favorite movies: ${favorites.join(", ") || "None"}.
Movies they have watched: ${watched.join(", ") || "None"}.
Movies they want to watch later: ${watchLater.join(", ") || "None"}.
Answer their questions in a friendly, personal, and relevant way.
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices?.[0]?.message?.content ?? "No reply";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    if (
      error instanceof Object &&
      "code" in error &&
      error.code === "insufficient_quota"
    ) {
      return NextResponse.json(
        { error: "OpenAI quota exceeded. Please check your plan." },
        { status: 429 }
      );
    }
    if (
      error instanceof Object &&
      "code" in error &&
      error.code === "invalid_api_key"
    ) {
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
