import { useState, useEffect, createContext } from "react";
import axios from "axios";

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
  const [album, setAlbum] = useState("");
  const [list, setList] = useState([]);
  const [create, setCreate] = useState(false);
  const [add, setAdd] = useState(false);
  const [playlistId, setPlaylistId] = useState("");
  const [songId, setSongId] = useState("");

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
      })
      .catch((err) => {
        console.log(err);
      });

    (async () => {
      const res = await axios.get("http://localhost:5000/playlists");
      console.log(res.data);
      setList(res.data);
    })();
  }, []);

  const addToPlaylist = (index) => {
    setAdd(!add);
    axios.get("http://localhost:5000/songs").then((res) => {
      console.log(res.data[index]._id);
      setSongId(res.data[index]._id);
    });
  };

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
      })
      .catch((err) => {
        console.log(err);
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
      })
      .catch((err) => {
        console.log(err);
      });

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album,single&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        console.log(data);
        setAlbum(data);
        setAlbums(data.items);
      })
      .catch((err) => {
        console.log(err);
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
        album,
        list,
        create,
        setCreate,
        setList,
        add,
        setAdd,
        playlistId,
        setPlaylistId,
        addToPlaylist,
        songId,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
