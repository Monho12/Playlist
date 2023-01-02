import { Link } from "react-router-dom";
import style from "../styles/Login.module.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useState } from "react";

export const Login = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.container}>
      <h1>Log In</h1>
      <div className={style.innerContainer}>
        <div className="input-group mb-3">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            className="form-control"
            placeholder="enter your username"
            aria-label="Default"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            className="form-control"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <Button
          onClick={() => {
            login(username, password);
          }}
        >
          Log in
        </Button>
        <div>
          Dont have account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
