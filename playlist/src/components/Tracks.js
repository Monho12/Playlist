import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/Tracks.module.css";
import axios from "axios";
export const Tracks = () => {
  const { id } = useParams("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:5000/playlists/" + id);
      console.log(res.data.songs[0]);
      setSongs([res.data.songs]);
    })();
  }, []);

  return (
    <>
      <h1>Songs</h1>
      {songs.map((thing, index) => {
        return thing.map((item, index) => {
          return (
            <div className={style.cardContainer}>
              <div className={style.songSection}>
                <div className={style.trackName}>
                  <div>Artist: {item.artist[0].name}</div>
                  <div style={{ fontWeight: "400" }}>Song: {item.name}</div>
                </div>
              </div>
            </div>
          );
        });
      })}
    </>
  );
};
