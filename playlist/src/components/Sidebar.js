import style from "../styles/Sidebar.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import { useContext, useEffect, useState } from "react";
import add from "../assets/Add.png";
import lib from "../assets/Library.png";
import exp from "../assets/explore.png";
import hom from "../assets/Home.png";
import log from "../assets/Spotify.png";
import pfp from "../assets/pfp.png";
import { AuthContext } from "../contexts/AuthProvider";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Sidebar = () => {
  const { create, setCreate } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  return (
    <Navbar
      style={{
        backgroundColor: "#202020",
        position: "fixed",
        width: "100%",
        zIndex: "999",
      }}
      expand="lg"
    >
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

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ backgroundColor: "wheat", marginRight: "10px" }}
        onClick={() => setToggle(!toggle)}
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={style.sections}>
          <Link to="/" style={{ textDecoration: "none", color: "wheat" }}>
            <div className={style.innerSection}>
              <img src={hom} className={style.img} alt="home" />
              Home
            </div>
          </Link>
          <Link
            to="/explore"
            style={{ textDecoration: "none", color: "wheat" }}
          >
            <div className={style.innerSection}>
              <img src={exp} className={style.img} alt="explore" /> Explore
            </div>
          </Link>
          <Link
            to="/library"
            style={{ textDecoration: "none", color: "wheat" }}
          >
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

          <Link to="/about" style={{ textDecoration: "none", color: "wheat" }}>
            <div className={style.innerSection}>
              <img src={log} className={style.img} alt="about" />
              About us
            </div>
          </Link>
        </Nav>

        <Link
          to={`/profile/${user ? user._id : "id"}`}
          style={{
            textDecoration: "none",
            color: "white",
            position: toggle && "absolute",
            right: "0",
          }}
        >
          {!user && (
            <>
              <Link to="/signup">
                <button
                  className={style.button}
                  style={{ backgroundColor: "#D9D9D9", color: "black" }}
                >
                  Sign up
                </button>
              </Link>
              <Link to="/login">
                <button
                  className={style.button}
                  style={{ backgroundColor: "#6D6D9E", color: "white" }}
                >
                  Log in
                </button>
              </Link>
            </>
          )}
          {user && (
            <div className={style.profile}>
              <img src={pfp} style={{ height: "30px", width: "30px" }} />
              <div>{user.username}</div>
            </div>
          )}
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
