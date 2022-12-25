import { useContext } from "react";
import { DataContext } from "../components/DataProvider";
import { useParams } from "react-router-dom";
import style from "./Tracks.module.css";

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
                {!index && <div>{index + 1}.</div>}
                {index && <div>{index - (index - index)}.</div>}
                <div className={style.trackName}>
                  <div style={{ fontWeight: "400" }}>{item.name}</div>
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
