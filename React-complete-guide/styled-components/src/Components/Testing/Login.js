import React, { useState } from "react";

function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => console.log(json));
      setUser(data);
    } catch {
      setError(true);
    }
  };

  return (
    <div>
      <span>{user}</span>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="name"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button disabled={!username || !password}>
          {loading ? "please wait" : "Login"}
        </button>
      </form>

      <span
        data-testid="error"
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        Something went wrong
      </span>
    </div>
  );
}

export default Login;
