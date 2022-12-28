import { Link } from "react-router-dom";
import style from "../styles/Login.module.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export const Login = () => {
  const { check, setPassword, setEmail, Login } = useContext(DataContext);

  return (
    <div className={style.container}>
      <div style={{ fontWeight: "300", color: "red" }}>{check}</div>
      <h1>Log In</h1>
      <div className={style.innerContainer}>
        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            class="form-control"
            placeholder="enter your email"
            aria-label="Default"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            class="form-control"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <Button onClick={Login}>Log in</Button>
        <div>
          Dont have account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
