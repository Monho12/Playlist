import style from "./Songs.module.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Track = ({ name, preview_url, index, artists, duration_ms }) => {
  const [music, setMusic] = useState(new Audio(preview_url));
  const [playing, setPlaying] = useState(false);

  function msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      minutes = minutes < 10 ? +minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  }

  useEffect(() => {
    msToTime();
  });

  const Player = () => {
    setPlaying(!playing);
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };

  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.leftSection}>
          {index + 1}.
          <div className={style.trackName}>
            <div style={{ fontWeight: "400" }}>{name}</div>
            <div style={{ color: "grey", fontWeight: "500" }}>
              {artists[0].name}
            </div>
          </div>
        </div>
        <div className={style.rightSection}>
          <div style={{ marginRight: "300px" }}>{msToTime(duration_ms)}</div>
          <Button onClick={Player}>{playing ? "Pause" : "Play"}</Button>
        </div>
      </div>
    </>
  );
};
