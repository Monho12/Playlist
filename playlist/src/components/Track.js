import style from "../styles/Songs.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";

export const Track = ({ name, preview_url, index, artists }) => {
  const [music, setMusic] = useState(new Audio(preview_url));
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.shit}>
          {index + 1}.
          <div className={style.trackName}>
            <div style={{fontWeight: "400"}}>{name}</div>
            <div style={{ color: "grey" , fontWeight: "500" }}>{artists[0].name}</div>
          </div>
        </div>
        <Button
          onClick={() => {
            setPlaying(!playing);
            if (music.paused) {
              music.play();
              console.log(playing);
            } else if (playing) {
              music.pause();
              console.log(playing);
            }
          }}
        >
          {playing ? "Pause" : "Play"}
        </Button>
      </div>
    </>
  );
};
