import { useState, useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import style from "../styles/Songs.module.css";
import { DataContext } from "./DataProvider";
import { useParams } from "react-router-dom";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const Songs = (props) => {
  const { accessToken, artistName } = useContext(DataContext);

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

    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("Artist ID " + artistID);

    var returnedTracks = await fetch(
      "https://api.spotify.com/v1/albums/" + `${id}` + "/tracks" + "?market=us",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("song: ", data.items);
        setSongs(data.items);
      });
  }

  return (
    <div className={style.container}>
      <h1>Songs list</h1>
      <div className={style.innerContainer}>
        <br />
        {songs.map((song, index) => {
          return (
            <div className={style.card} key={index}>
              <Card.Body>
                <Card style={{ color: "black" }}>{song.name}</Card>
              </Card.Body>
            </div>
          );
        })}
      </div>
    </div>
  );
};
