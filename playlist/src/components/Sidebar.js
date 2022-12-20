import style from "../styles/Sidebar.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";
import { useContext } from "react";
import { Playlist } from "./Playlist";
export const Sidebar = () => {
  const { list, create, setCreate } = useContext(DataContext);
  return (
    <div className={style.sidebar}>
      <Link to="/">
        <div style={{ padding: "25px" }}>
          <img src={Logo} style={{ width: "200px" }} draggable="false" />
        </div>
      </Link>

      <div className={style.sections}>
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "wheat" }}>
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/explore"
            style={{ textDecoration: "none", color: "wheat" }}
          >
            Explore
          </Link>
        </div>
        <div>
          <Link
            to="/library"
            style={{ textDecoration: "none", color: "wheat" }}
          >
            Library
          </Link>
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "wheat" }}
            onClick={() => {
              setCreate(true);
            }}
          >
            Create Playlist
          </Link>
        </div>
        <div>
          <Link to="/about" style={{ textDecoration: "none", color: "wheat" }}>
            About us
          </Link>
        </div>
      </div>

      <div className={style.line} />
      <div className={style.playlistSection}>
        {list.map((item) => {
          return (
            <Link style={{ textDecoration: "none", color: "wheat" }}>
              {item.playlist}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
