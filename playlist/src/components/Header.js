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
            Happy Holidays. Thanks for listening notSpotify®. Happy Holidays.
            Also exclusive mariplier nudes for sale! Special thanks to duuree
            for supporting LGBTQ+!! Thanks for listening notSpotify®. Happy
            Holidays. Thanks for listening notSpotify®. Happy Holidays. Thanks
            for listening notSpotify® Happy Holidays. Thanks for listening
            notSpotify®. Happy Holidays. Thanks for listening notSpotify®.
          </div>
        </div>
        {!account && (
          <>
            <Link to="/signup">
              <button
                className={style.button}
                style={{ backgroundColor: "#f4f0bb", color: "black" }}
              >
                Sign up
              </button>
            </Link>
            <Link to="login">
              <button
                className={style.button}
                style={{ backgroundColor: "#226f54", color: "white" }}
              >
                Log in
              </button>
            </Link>
          </>
        )}
        {account && (
          <div>
            <span>{account && account.email}</span>
          </div>
        )}
      </div>
    </div>
  );
};
