import axios from "axios";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import style from "../styles/Profile.module.css";
import { Button } from "react-bootstrap";

export const Profile = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const profile = user;
        console.log(profile);
        setAccount(profile);
      } else {
        setAccount("");
      }
    });
  }, []);

  const navigate = useNavigate();

  const Logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // const CreatePlaylist = () => {
  //   axios
  //     .post("http://localhost:5000/playlists", {
  //       title: "yolol",
  //       description: "String",
  //       CreatorId: account.uid,
  //       isPrivate: true,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <div className={style.container}>
      <h1>Profile</h1>
      {!account && <div>You must log in</div>}
      {account && (
        <div className={style.innerContainer}>
          <h2>Email: {account ? account.email : "not logged in"}</h2>
          <h2>Id: {account ? account.uid : "not logged in"}</h2>
          <Button onClick={Logout}>Log Out</Button>
          {/* <button onClick={CreatePlaylist}>Create ur future</button> */}
        </div>
      )}
    </div>
  );
};
