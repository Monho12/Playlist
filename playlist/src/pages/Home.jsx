import style from "../styles/Home.module.css";
import img from "../assets/HomePage.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { AddToPlaylist } from "../components/addToPlaylist";
export const Home = () => {
  const [songs, setSongs] = useState([]);
  const { addToPlaylist } = useContext(DataContext);

  useEffect(() => {
    axios.get("http://localhost:5000/songs").then((res) => {
      console.log(res.data);
      setSongs(res.data);
    });
  }, []);

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
          <div>
            <h1>Trending songs</h1>
            {songs.map((item, index) => {
              return (
                <div className={style.cardContainer}>
                  <div className={style.songSection}>
                    <div className={style.trackName}>
                      <div>Artist: {item.artist[0].name}</div>
                      <div style={{ fontWeight: "400" }}>Song: {item.name}</div>
                    </div>
                    <Button onClick={() => addToPlaylist(index)}>
                      Add to playlist
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AddToPlaylist />
    </>
  );
};
