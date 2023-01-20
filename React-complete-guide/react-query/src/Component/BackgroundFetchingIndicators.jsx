import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function BackgroundFetchingIndicators() {
  const users = "";
  const {
    status,
    data: todos,
    error,
    isFetching,
  } = useQuery(
    "todos",
    async () => await axios("https://jsonplaceholder.typicode.com/users")
  );

  if (status === "loading") return <span>Loading...</span>;
  else if (status === "error") return <span>Something went wrong!</span>;
    // else return "";

 

  return (
    <div>
      {todos.map((todo, index) => (
        <span key={index}>{todo.data.name}</span>
      ))}
    </div>
  );
}

export default BackgroundFetchingIndicators;
