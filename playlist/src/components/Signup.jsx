import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import style from "../styles/Signup.module.css";
import { Button } from "react-bootstrap";

export const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
