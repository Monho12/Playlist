import { useState, useEffect } from "react";
import style from "../styles/Songs.module.css";

export const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [albumID, setAlbumID] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const CLIENT_ID = "e11d642ed1f642c789a106fb51132da3";
  const CLIENT_SECRET = "e7033b13995c49bbae01be2dfb2c5134";
  const baseUrl = "https://accounts.spotify.com/api/token";

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch(baseUrl, authParameters)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
        console.log(data.access_token);
      });
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
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("artist id ",artistID);

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=single,album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => data.items[0].id);

    console.log("album id ",returnedAlbums);

    var returnedTracks = await fetch(
      "https://api.spotify.com/v1/albums/" +
        returnedAlbums +
        "/tracks" +
        "?market=us",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("song: ", data);
        setSongs(data);
      });
  }

  console.log();

  return (
    <div className={style.container}>
      <h1>Songs list</h1>
      <input
        placeholder="Search ur favorite artist 🔍"
        type="input"
        onKeyPress={(event) => {
          if (event.key == "Enter") {
            generateSongs();
          }
        }}
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </div>
  );
};
