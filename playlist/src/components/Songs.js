import { useState, useContext, useEffect } from "react";
import style from "../styles/Songs.module.css";
import { DataContext } from "./DataProvider";
import { useParams } from "react-router-dom";
import { Track } from "./Track";

export const Songs = () => {
  const { accessToken } = useContext(DataContext);
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
        {songs.map((song, index) => (
          <Track key={song.name} {...song} index={index} />
        ))}
      </div>
    </div>
  );
};
