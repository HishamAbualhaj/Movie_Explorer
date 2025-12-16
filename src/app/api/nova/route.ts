import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are Nova, a friendly movie assistant.
You recommend movies, explain plots without spoilers,
and help users discover films based on mood and genre.
`;
export async function POST(req: NextRequest) {
    console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { error: "Nova failed to respond" },
      { status: 500 }
    );
  }
}
