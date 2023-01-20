import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

function Todo() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isError, setError] = useState(false);
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setError(false);
  //       setIsLoading(true);

  //       try {
  //         const response = await axios("https://random.dog/woof.json");

  //         setData(response.data);
  //       } catch (error) {
  //         setError(true);
  //       }
  //       setIsLoading(false);
  //     };
  //     fetchData();
  //   }, []);

  const {isLoading, isError, data} = useQuery("dogs", () => axios.get("https://random.dog/woof.json"));

  if (isError) return <h1>Error, try again!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <img src={data.data.url} alt="dog images" />
    </div>
  );
}

export default Todo;
