import style from "../styles/Explore.module.css";
import { DataContext } from "../contexts/DataProvider";
import { useContext, useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AddToPlaylist } from "../components/addToPlaylist";

export const Explore = () => {
  const [songs, setSongs] = useState([]);
  const { addToPlaylist } = useContext(DataContext);
  const [searchInput, setSearchInput] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/songs").then((res) => {
      console.log(res.data);
      setSongs(res.data);
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.inputSection}>
        <input
          className={style.input}
          placeholder="Search ur favorite artist or songs"
          type="input"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <div className={style.songs}>
        {songs.map(
          (item, index) =>
            searchInput &&
            (item.name
              .toLowerCase()
              .includes(searchInput && searchInput.toLowerCase()) ||
              item.artist[0].name
                .toLowerCase()
                .includes(searchInput && searchInput.toLowerCase())) && (
              <div className={style.cardContainer}>
                <div className={style.songSection}>
                  <div className={style.trackName}>
                    <div>Artist: {item.artist[0].name}</div>
                    <div style={{ fontWeight: "400" }}>Song: {item.name}</div>
                  </div>
                  <Button onClick={() => addToPlaylist(index)}>
                    Add to playlist
                  </Button>
                </div>
              </div>
            )
        )}
      </div>
      <AddToPlaylist />
    </div>
  );
};
