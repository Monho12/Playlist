import { useState, useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import style from "../styles/Songs.module.css";
import { DataContext } from "./DataProvider";
import { useParams } from "react-router-dom";

export const Songs = (props) => {
  const { accessToken, album } = useContext(DataContext);
  const [songs, setSongs] = useState([]);

  const { id } = useParams("");

  useEffect(() => {
    generateSongs();
  }, []);

  async function generateSongs() {
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    fetch(
      "https://api.spotify.com/v1/albums/" + `${id}` + "/tracks" + "?market=us",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("song: ", data.items);
        setSongs(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={style.container}>
      <h1>Songs list</h1>

      <div className={style.innerContainer}>
        <br />
        {songs.map((song) => (
          <Track key={song.name} {...song} />
        ))}
      </div>
    </div>
  );
};

const Track = ({ name, preview_url }) => {
  const [song, setSong] = useState(new Audio(preview_url));

  const [playing, setPlaying] = useState(false);

  return (
    <div className={style.card}>
      <div style={{ color: "grey" }}>{name}</div>

      <Button
        onClick={() => {
          if (song.paused) {
            song.play();
            setPlaying(!playing);
          } else {
            song.pause();
            setPlaying(playing);
          }
        }}
      >
        {playing ? "Pause" : "Play"}
      </Button>
    </div>
  );
};
