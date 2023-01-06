import style from "../styles/Explore.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AddToPlaylist } from "../components/addToPlaylist";
import { ArtistPL, Songs } from "../components";
import { DataContext } from "../contexts/DataProvider";

export const Explore = () => {
  const { searchInput, setSearchInput, artist, songs } =
    useContext(DataContext);

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
        {artist.map((item, index) => {
          return (
            searchInput &&
            item.name &&
            item.name
              .toLowerCase()
              .includes(searchInput && searchInput.toLowerCase()) && (
              <ArtistPL {...item} key={index} />
            )
          );
        })}
        {songs.map((item, index) => {
          return (
            <div>
              <Songs key={index} {...item} />
            </div>
          );
        })}
      </div>
      <AddToPlaylist />
    </div>
  );
};
