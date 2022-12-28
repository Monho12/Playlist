import { useContext, useEffect } from "react";
import style from "../styles/Profile.module.css";
import { Button } from "react-bootstrap";
import { DataContext } from "../contexts/DataProvider";

export const Profile = () => {
  const { account, Logout } = useContext(DataContext);

  return (
    <div className={style.container}>
      <h1>Profile</h1>
      {!account && <div>You must log in</div>}
      {account && (
        <div className={style.innerContainer}>
          <h2>Email: {account ? account.email : "not logged in"}</h2>
          <h2>Id: {account ? account.uid : "not logged in"}</h2>
          <Button onClick={Logout}>Log Out</Button>
        </div>
      )}
    </div>
  );
};
