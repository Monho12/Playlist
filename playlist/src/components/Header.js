import style from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export const Header = () => {
  const { account } = useContext(DataContext);
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
        {!account && (
          <>
            <Link to="/signup">
              <button
                className={style.button}
                style={{ backgroundColor: "#D9D9D9", color: "black" }}
              >
                Sign up
              </button>
            </Link>
            <Link to="login">
              <button
                className={style.button}
                style={{ backgroundColor: "#6D6D9E", color: "white" }}
              >
                Log in
              </button>
            </Link>
          </>
        )}
        <Link
          to={`/profile/${account.uid}`}
          style={{ color: "white", textDecoration: "none" }}
        >
          {account && (
            <div>
              <span>{account && account.email}</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};
