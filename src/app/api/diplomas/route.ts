import { getDiploma } from "@/features/diploma/apis/diploma.api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const payload = await getDiploma(req);

  return NextResponse.json(payload);
}
