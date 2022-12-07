import { useState, useEffect, createContext } from "react";

const CLIENT_ID = "e11d642ed1f642c789a106fb51132da3";
const CLIENT_SECRET = "e7033b13995c49bbae01be2dfb2c5134";
const baseUrl = "https://accounts.spotify.com/api/token";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [artistName, setArtistName] = useState("");
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

  async function search() {
    console.log("Search for " + searchInput);

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
    console.log("Artist ID " + artistID);

    var Profile = await fetch(
      "https://api.spotify.com/v1/artists/" + artistID,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
        setArtistName(searchInput);
        // console.log(data);
      });

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        console.log(data.items);
        setAlbums(data.items);
      });
  }
  return (
    <DataContext.Provider
      value={{
        searchInput,
        accessToken,
        albums,
        artist,
        pressed,
        setSearchInput,
        setPressed,
        search,
        artistName,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
