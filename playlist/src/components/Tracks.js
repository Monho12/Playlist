import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useParams } from "react-router-dom";
import style from "../styles/Tracks.module.css";

export const Tracks = () => {
  const { songs } = useContext(DataContext);
  const { id } = useParams("");

  return (
    <>
      <h1>Songs</h1>
      {songs.map((item, index) => {
        if (item.playlistId == id) {
          return (
            <div className={style.cardContainer}>
              <div className={style.songSection}>
                <div className={style.trackName}>
                  <div>Artist: {item.artist}</div>
                  <div style={{ fontWeight: "400" }}>Song: {item.name}</div>
                  <div style={{ color: "grey", fontWeight: "500" }}>
                    ID: {item.playlistId}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
