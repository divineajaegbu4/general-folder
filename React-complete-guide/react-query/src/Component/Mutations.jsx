import React, { useState } from "react";
import { useMutation } from "react-query";

function Mutations() {
  const [title, setTitle] = useState("");
  const mutation = useMutation(() => {
    return fetch(
      "https://fetch-https-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    );
  });

  const onCreateTodo = (e) => {
    e.preventDefault();
    mutation.mutate({ title });
  };
  return (
    <div>
      <form onSubmit={onCreateTodo}>
        {mutation.error && (
          <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
        )}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default Mutations;
