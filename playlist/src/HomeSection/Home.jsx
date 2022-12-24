import style from "./Home.module.css";
import img from "../assets/Holiday.png";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.innerContainer}>
          <img
            src={img}
            alt="backgroundIMG"
            className={style.img}
            draggable="false"
          />
          {/* <div className={style.name}>Welcome to notSpotify</div> */}
          <Link to="/explore">
            <button className={style.button} to="/explore">
              Start Jingle
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};