"use client";

import { APIResponse, IPaginationResponse } from "@/shared/types/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IDiploma } from "../types/diploma";
import { useSearchParams } from "next/navigation";
import { DIPLOMA_KEYS } from "../apis/diploma-options";
import { PAGINATION_LIMIT } from "@/shared/constants/api.constant";

export default function useDiplomaList() {
  const searchParams = useSearchParams();

  // variables
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || PAGINATION_LIMIT;

  return useInfiniteQuery({
    queryKey: DIPLOMA_KEYS.list(page, limit),
    queryFn: async ({ pageParam }) => {
      const res = await fetch(`/api/diplomas?page=${pageParam}&limit=${limit}`);
      const data: APIResponse<IPaginationResponse<IDiploma>> = await res.json();

      if (!data.status) throw new Error(data.message);

      return data.payload;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.metadata.page === lastPage.metadata.totalPages)
        return undefined;

      return lastPage.metadata.page + 1;
    },
  });
}
