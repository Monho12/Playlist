import { useState } from "react";
import style from "../styles/Songs.module.css";

export const Songs = ({ accessToken, artistID }) => {
  const [songs, setSongs] = useState([]);

  async function generateSongs() {
    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var returnedTracks = await fetch(
      "https://api.spotify.com/v1/albums/" +
        artistID +
        "/tracks" +
        "?&market=limit=20",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("song: ", data);
        setSongs(data);
      });
  }

  console.log(songs);

  return (
    <div className={style.container}>
      <h1>Songs list</h1>
    </div>
  );
};
