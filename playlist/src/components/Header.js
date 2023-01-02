import style from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={style.header}>
      <div className={style.btns}>
        <div className={style.news}>
          <div className={style.inner}>
            <div className={style.marqueeStyle}>
              Thanks for listening notSpotify®. Also exclusive markiplier nudes
              for sale! Special thanks to duuree for supporting LGBTQ+!!.
            </div>
          </div>
        </div>
        {!user && (
          <>
            <Link to="/signup">
              <button
                className={style.button}
                style={{ backgroundColor: "#D9D9D9", color: "black" }}
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button
                className={style.button}
                style={{ backgroundColor: "#6D6D9E", color: "white" }}
              >
                Log in
              </button>
            </Link>
          </>
        )}
        {user && (
          <div>
            <span>{user && user.username}</span>
          </div>
        )}
      </div>
    </div>
  );
};
