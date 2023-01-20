import axios from "axios";
import React from "react";
import { useQueries, useQuery } from "react-query";

function UseQuery({ herodIds }) {
  const dogsUrl = "https://random.dog/woof.json";

  const { status, data, error } = useQuery({
    queryKey: ["todos", dogsUrl],
    queryFn: async () => await axios(dogsUrl),
  });

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Something went wrong!</p>;

  return (
    <div>
      <img src={data.data.url} alt="dog images" />
    </div>
  );
}

export default UseQuery;
