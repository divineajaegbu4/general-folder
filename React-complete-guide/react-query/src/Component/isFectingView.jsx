import axios from "axios";
import React from "react";

import { useIsFetching, useQuery } from "react-query";

function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div>Queries are fetching in the background...</div>
  ) : null;
}

export function Todos() {
  const { isIdle, isLoading, isError, data, error, refetch, isFetching } =
    useQuery(
      "todos",
      async () => {
        const response = await axios("https://random.dog/woof.json", {
          placeholderData: "View my dog images!",
          initialData: "Hello world!",
          staleTime: 1000
        });

        console.log(response);
        return response;
      },
      {
        // enabled: false,
        retry: 6,
      }
    );

  if (isIdle) {
    return "Not ready";
  } else if (isLoading) {
    return <span>Loading...</span>;
  } else if (isError) {
    return <span>Something went wrong!</span>;
  }

  return (
    <>
      <button onClick={() => refetch()}>Fetch Todos</button>
      <img src={data.data.url} alt="todoData dogs" />
      <div>{isFetching ? "Fetching" : null}</div>
    </>
  );
}

export default GlobalLoadingIndicator;
