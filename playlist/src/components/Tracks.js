import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "../styles/Tracks.module.css";
export const Tracks = () => {
  const { id } = useParams("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://server-6ch8.onrender.com/playlists/" + id);
      setSongs([res.data.songs]);
    })();
  }, [songs]);

  return (
    <div style={{ padding: "15vh" }}>
      <h1>SOngs</h1>
      {songs.map((thing) => {
        return thing.map((item, index) => {
          return (
            <div className={style.cardContainer} key={index}>
              <div className={style.songSection}>
                <div className={style.trackName}>
                  <div>
                    Artist: {item.artist.length > 0 && item.artist[0].name}
                  </div>
                  <div style={{ fontWeight: "400" }}>
                    Song: {item.name && item.name}
                  </div>
                </div>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};
