import style from "../styles/Home.module.css";
import img from "../assets/HomePage.png";

export const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <img
          src={img}
          alt="backgroundIMG"
          className={style.img}
          draggable="false"
        />
      </div>
    </div>
  );
};
