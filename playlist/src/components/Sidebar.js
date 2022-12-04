import style from "../styles/Sidebar.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.logoContainer}>
        <img src={Logo} style={{width: "35px" ,height : "35px"}} />
        <h4 style={{ color: "white" , marginTop : "5px" }}>notSpotify</h4>
      </div>
      <div className={style.sections}>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/library">Library</Link>
      </div>
    </div>
  );
};
