"use client";
import { useMemo } from "react";
import useDiplomaList from "../hooks/use-diploma-list";
import DiplomaItem from "./diploma-item";
import InfiniteScroll from "react-infinite-scroll-component";

export default function DiplomaList() {
  //queries
  const {
    data: diplomaPages,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useDiplomaList();

  //variables
  const allDiploma = useMemo(
    () => diplomaPages?.pages.flatMap((page) => page.data) || [],
    [diplomaPages],
  );

  if (isLoading) return <h4 className="text-center p-6 italic">Loading...</h4>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <InfiniteScroll
        dataLength={allDiploma.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4 className="text-center p-6 italic">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>End of list</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allDiploma.map((diploma) => (
            <DiplomaItem key={diploma.id} diploma={diploma} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
