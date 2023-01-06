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
  const [pro, setPro] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:5000/playlists");
      console.log(res.data);
      setList(res.data);
    })();

    (async () => {
      const res = await axios.get("http://localhost:5000/artists");
      console.log(res.data);
      setArtist(res.data);
    })();

    axios.get("http://localhost:5000/artists").then((res) => {
      console.log(res.data);
      setPro(res.data);
    });
  }, []);

  const addToPlaylist = (index) => {
    setAdd(!add);
    axios.get("http://localhost:5000/songs").then((res) => {
      console.log(res.data[index]._id);
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
        pro
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
