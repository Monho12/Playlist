import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [searchInput, setSearchInput] = useState(null);
  const [pressed, setPressed] = useState(false);
  const [list, setList] = useState([]);
  const [create, setCreate] = useState(false);
  const [add, setAdd] = useState(false);
  const [playlistId, setPlaylistId] = useState("");
  const [songId, setSongId] = useState("");
  const [artist, setArtist] = useState([]);
  const [songs, setSongs] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://server-6ch8.onrender.com/playlists");
      console.log(res.data);
      setList(res.data);
    })();

    (async () => {
      const res = await axios.get("https://server-6ch8.onrender.com/artists");
      console.log(res.data);
      setArtist(res.data);
    })();

    axios.get("https://server-6ch8.onrender.com/songs").then((res) => {
      console.log(res.data);
      setSongs(res.data);
    });
  }, []);

  const addToPlaylist = (index) => {
    setAdd(!add);
    axios.get("https://server-6ch8.onrender.com/songs").then((res) => {
      console.log(res.data[index].name);
      setSongId(res.data[index]._id);
    });
  };

  return (
    <DataContext.Provider
      value={{
        searchInput,
        pressed,
        setSearchInput,
        setPressed,
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
        artist,
        songs,
        click,
        setClick,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
