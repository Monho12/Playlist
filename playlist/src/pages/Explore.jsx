import style from "../styles/Explore.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AddToPlaylist } from "../components/addToPlaylist";
import { ArtistPL, Songs } from "../components";
import { DataContext } from "../contexts/DataProvider";

export const Explore = () => {
  const [songs, setSongs] = useState([]);
  const { searchInput, setSearchInput , pro } = useContext(DataContext);
 

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
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className={style.songSecion}>
        {pro.map((item, index) => {
          return (
            searchInput &&
            item.name
              .toLowerCase()
              .includes(searchInput && searchInput.toLowerCase()) && (
              <ArtistPL {...item} key={index} />
            )
          );
        })}
        {songs.map(
          (item, index) =>
            ((searchInput &&
              item.name
                .toLowerCase()
                .includes(searchInput && searchInput.toLowerCase())) ||
              item.artist[0].name
                .toLowerCase()
                .includes(searchInput && searchInput.toLowerCase())) && (
              <Songs {...item} index={index} key={item.name} />
            )
        )}
      </div>
      <AddToPlaylist />
    </div>
  );
};
