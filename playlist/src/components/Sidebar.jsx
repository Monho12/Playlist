import style from "../styles/Sidebar.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import { useContext } from "react";
import add from "../assets/Add.png";
import lib from "../assets/Library.png";
import exp from "../assets/explore.png";
import hom from "../assets/Home.png";
import log from "../assets/Spotify.png";
import profile from "../assets/user.png";
import { AuthContext } from "../contexts/AuthProvider";
export const Sidebar = () => {
  const { list, create, setCreate } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  return (
    <div className={style.sidebar}>
      <Link to="/">
        <div style={{ padding: "25px" }}>
          <img
            src={Logo}
            style={{ width: "200px" }}
            draggable="false"
            alt="logo"
          />
        </div>
      </Link>

      <div className={style.sections}>
        <Link to="/" style={{ textDecoration: "none", color: "wheat" }}>
          <div className={style.innerSection}>
            <img src={hom} className={style.img} alt="home" />
            Home
          </div>
        </Link>

        <Link to="/explore" style={{ textDecoration: "none", color: "wheat" }}>
          <div className={style.innerSection}>
            <img src={exp} className={style.img} alt="explore" /> Explore
          </div>
        </Link>

        <Link to="/library" style={{ textDecoration: "none", color: "wheat" }}>
          <div className={style.innerSection}>
            <img src={lib} className={style.img} alt="library" /> Library
          </div>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "wheat" }}
          onClick={() => setCreate(!create)}
        >
          <div className={style.innerSection}>
            <img src={add} className={style.img} alt="addPlaylist" />
            Create Playlist
          </div>
        </Link>

        <Link
          to={`/profile/${user ? user._id : "id"}`}
          style={{ textDecoration: "none", color: "wheat" }}
        >
          <div className={style.innerSection}>
            <img src={profile} className={style.img} alt="user" />
            Profile
          </div>
        </Link>

        <Link to="/about" style={{ textDecoration: "none", color: "wheat" }}>
          <div className={style.innerSection}>
            <img src={log} className={style.img} alt="about" />
            About us
          </div>
        </Link>
      </div>

      <div className={style.line} />
      <div className={style.playlistSection}>
        {list.map((item, index) => {
          return (
            <>
              {user && (
                <>
                  {list[index].Creator === user._id && (
                    <Link
                      style={{ textDecoration: "none", color: "wheat" }}
                      to={`/playlists/${item._id}`}
                    >
                      {item.title}
                    </Link>
                  )}
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
