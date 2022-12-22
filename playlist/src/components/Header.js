import style from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.btns}>
        <div className={style.news}>
          <div className={style.inner}>
            Happy Holidays. Thanks for listening notSpotify®. Happy Holidays. Thanks
            for listening notSpotify®. Happy Holidays. Thanks for listening notSpotify®.
            Happy Holidays. Thanks for listening notSpotify® Happy Holidays. Thanks
            for listening notSpotify®. Happy Holidays. Thanks for listening notSpotify®.
          </div>
        </div>
        <button
          className={style.button}
          style={{ backgroundColor: "#f4f0bb", color: "black" }}
        >
          Sign up
        </button>
        <button
          className={style.button}
          style={{ backgroundColor: "#226f54", color: "white" }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};
