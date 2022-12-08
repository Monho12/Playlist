import { useState, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import style from "../styles/Songs.module.css";
import { DataContext } from "./DataProvider";
import { useParams } from "react-router-dom";

export const Songs = (props) => {
  const { accessToken, album } = useContext(DataContext);

  const [songs, setSongs] = useState([]);
  const [poster, setPoster] = useState([]);

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

    var returnedTracks = await fetch(
      "https://api.spotify.com/v1/albums/" + `${id}` + "/tracks" + "?market=us",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("song: ", data.items);
        setSongs(data.items);
        setPoster(album.items.images);
      });
  }
  console.log(poster);

  return (
    <div className={style.container}>
      <h1>Songs list</h1>

      {/* {poster.map((posters) => {
        return (
          posters.images?.length > 0 && <img src={posters.images[0].url} />
        );
      })} */}
      <div className={style.innerContainer}>
        <br />
        {songs.map((song, index) => {
          return (
            <div className={style.card} key={index}>
              <div style={{ color: "grey" }}>{song.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
