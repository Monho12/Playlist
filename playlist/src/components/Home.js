import style from "../styles/Home.module.css";
import { Header } from "./Header";
import img from "../assets/backG.png";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.innerContainer}>
          <img
            src={img}
            alt="backgroundIMG"
            className={style.img}
            draggable="false"
          />
          <div className={style.name}>Welcome to notSpotify</div>
          <Link to="/explore">
            <button className={style.button} to="/explore">
              Start Listen
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
