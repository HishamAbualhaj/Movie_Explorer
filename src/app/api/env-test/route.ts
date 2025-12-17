import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    key: process.env.OPENAI_API_KEY ?? "NOT_FOUND",
    allKeys: Object.keys(process.env).filter(k =>
      k.includes("OPENAI")
    ),
  });
}
