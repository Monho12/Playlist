import style from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.btns}>
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
