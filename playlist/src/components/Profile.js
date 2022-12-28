import { useContext, useEffect } from "react";
import style from "../styles/Profile.module.css";
import { Button } from "react-bootstrap";
import { DataContext } from "../contexts/DataProvider";

export const Profile = () => {
  const { account, Logout } = useContext(DataContext);

  return (
    <div className={style.container}>
      <div className={style.part}>
        <h1>Profile</h1>
        {!account && <div className={style.font}>You must log in</div>}
        {account && (
          <div>
            <h2>Email: {account ? account.email : "not logged in"}</h2>
            <h2>Id: {account ? account.uid : "not logged in"}</h2>
            <Button onClick={Logout}>Log Out</Button>
          </div>
        )}
      </div>
    </div>
  );
};
