import style from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.btns}>
        <button className={style.button}>Sign up</button>
        <button
          className={style.button}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};
