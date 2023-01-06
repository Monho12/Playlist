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
      <div className={style.songSection}>
        <div className={style.card}>
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
        </div>
        {songs.map((item, index) => {
          return (
            ((item.name &&
              item.name
                .toLowerCase()
                .includes(searchInput && searchInput.toLowerCase())) ||
              (item.artist.length > 0 &&
                item.artist[0].name
                  .toLowerCase()
                  .includes(searchInput && searchInput.toLowerCase()))) && (
              <Songs key={index} {...item} />
            )
          );
        })}
      </div>
      <AddToPlaylist />
    </div>
  );
};
