import { Link } from "react-router-dom";
import style from "../styles/Signup.module.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export const Signup = () => {
  const { setUsername, setPassword, onSubmit } = useContext(AuthContext);

  return (
    <div className={style.container}>
      <h1>Sign Up</h1>
      <div className={style.innerContainer}>
        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
          <input
            type="text"
            class="form-control"
            placeholder="enter your email"
            aria-label="Default"
            onChange={(e) => setUsername(e.target.value)}
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
        <Button onClick={onSubmit}>Sign Up</Button>
        <div>
          Already have account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};
