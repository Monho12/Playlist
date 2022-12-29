import { useContext, useRef } from "react";
import style from "../styles/Profile.module.css";
import { Button } from "react-bootstrap";
import { DataContext } from "../contexts/DataProvider";
import axios from "axios";

export const Profile = () => {
  const { account, Logout, displayName, Update } = useContext(DataContext);
  let name = useRef();
  const baseUrl = "http://localhost:5000";
  if (name) {
    axios.post(baseUrl + "/playlists", {
      displayName: displayName,
    });
  }
  console.log(account);

  return (
    <div className={style.container}>
      <div className={style.part}>
        <h1>Profile</h1>
        {!account && <div className={style.font}>You must log in</div>}
        {account && (
          <div>
            {/* <div>
              <input ref={name}></input>
              <button onClick={Update}>Update</button>
            </div> */}
            <h2>Email: {account ? account.email : "not logged in"}</h2>
            <h2>Id: {account ? account.uid : "not logged in"}</h2>
            <Button onClick={Logout}>Log Out</Button>
          </div>
        )}
      </div>
    </div>
  );
};
