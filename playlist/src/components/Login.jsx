import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import style from "../styles/Login.module.css";
import { Button } from "react-bootstrap";

export const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState(null);
  const [check, setCheck] = useState(null);

  const Login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("log in to ", user.uid);
        navigate(`/profile/${user.uid}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setCheck(errorCode);
        console.log(errorCode, errorMessage);
      });
  };

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
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                Login();
              }
            }}
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
