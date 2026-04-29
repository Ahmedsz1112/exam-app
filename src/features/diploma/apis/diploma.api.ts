import { APIResponse, IPaginationResponse } from "@/shared/types/api";
import { IDiploma } from "../types/diploma";
import { HEADERS, PAGINATION_LIMIT } from "@/shared/constants/api.constant";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { RESPONSE } from "@/features/auth/constants/response.constant";

export async function getDiploma(req: NextRequest) {
  //Token
  const token = await getToken({ req });

  const page = Number(req.nextUrl.searchParams.get("page")) || 1;
  const limit =
    Number(req.nextUrl.searchParams.get("limit")) || PAGINATION_LIMIT;

  if (!token) return RESPONSE.unauthorized;

  const response = await fetch(
    `${process.env.API}/api/diplomas?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        ...HEADERS.authorization(token.token),
      },
    },
  );
  if (!response.ok) throw new Error("Failed to fetch diploma");

  const payload: APIResponse<IPaginationResponse<IDiploma[]>> =
    await response.json();

  return payload;
}
