import style from "../styles/Sidebar.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Link to="/">
        <div style={{ padding: "25px" }}>
          <img src={Logo} style={{ width: "200px" }} draggable="false" />
        </div>
      </Link>
      <div className={style.sections}>
        <Link to="/" style={{ textDecoration: "none", color: "wheat" }}>
          Home
        </Link>
        <Link to="/explore" style={{ textDecoration: "none", color: "wheat" }}>
          Explore
        </Link>
        <Link to="/library" style={{ textDecoration: "none", color: "wheat" }}>
          Library
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "wheat" }}>
          About us
        </Link>
      </div>
    </div>
  );
};
