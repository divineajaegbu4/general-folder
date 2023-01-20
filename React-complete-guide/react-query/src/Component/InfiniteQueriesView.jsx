import axios from "axios";
import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";

function InfiniteQueriesView() {
  //   const fetchProjects = ({ pageParam = 0 }) =>
  //     fetch("https://random.dog/woof.json" + pageParam);

  //   const {
  //     data,
  //     error,
  //     fetchNextPage,
  //     hasNextPage,
  //     isFetching,
  //     isFetchingNextPage,
  //     status,
  //   } = useInfiniteQuery("projects", fetchProjects, {
  //     getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  //   });

  //   return status === "loading" ? (
  //     <p>Loading...</p>
  //   ) : status === "error" ? (
  //     <p>Error: {error.message}</p>
  //   ) : (
  //     <>
  //       <img src={data.data.url} />
  //       <div>
  //         <button
  //           onClick={() => fetchNextPage()}
  //           disabled={!hasNextPage || isFetchingNextPage}
  //         >
  //           {isFetchingNextPage
  //             ? "Loading more..."
  //             : hasNextPage
  //             ? "Load More"
  //             : "Nothing more to load"}
  //         </button>
  //       </div>
  //       <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
  //     </>
  //   );

  const userFetchList = () => {
    return axios.get("http://localhost/api/article-list");
  };

  function Home() {
    const onSuccess = (data) => {
      console.log("Success", data);
    };

    const onError = (error) => {
      console.log("Success", error);
    };

    const urlId = 16;
    const { data, isLoading, isError, error, isFetching } = useQuery(
      "userFetch",
      userFetchList,
      {
        initialData: () => {
          return { data: { name: "dummy data" } };
        },
      }
    );
  }
}

export default InfiniteQueriesView;
