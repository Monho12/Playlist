import { useContext, useRef } from "react";
import style from "../styles/Profile.module.css";
import { Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthProvider";

export const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user);

  return (
    <div className={style.container}>
      <div className={style.part}>
        <h1>Profile</h1>
        {!user && <div className={style.font}>You must log in</div>}
        {user && (
          <div>
            <h2>Username: {user && user.username}</h2>
            <h2>Id: {user && user._id}</h2>
            <Button onClick={logout}>Log Out</Button>
          </div>
        )}
      </div>
    </div>
  );
};
