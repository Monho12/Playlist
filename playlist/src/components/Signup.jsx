import { Link } from "react-router-dom";
import style from "../styles/Signup.module.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export const Signup = () => {
  const { setEmail, setPassword, onSubmit } = useContext(DataContext);

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
        <Button onClick={onSubmit}>Sign Up</Button>
        <div>
          Already have account? <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};
