import style from "../styles/Home.module.css";
import img from "../assets/HomePage.png";
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
