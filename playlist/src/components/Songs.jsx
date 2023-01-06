import style from "../styles/Songs.module.css";
import { Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataProvider";
import { AddToPlaylist } from "./addToPlaylist";
import { AuthContext } from "../contexts/AuthProvider";

export const Songs = ({ artist, name, index }) => {
  const { addToPlaylist } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  console.log(artist[0].name, name);

  return (
    <div className={style.cardContainer}>
      <div className={style.songSection}>
        <div className={style.trackName}>
          <div>Artist: {artist[0].name}</div>
          <div style={{ fontWeight: "400" }}>Song: {name && name}</div>
        </div>
        {user && (
          <>
            <Button onClick={() => addToPlaylist(index)}>
              Add to playlist
            </Button>
          </>
        )}
      </div>

      <AddToPlaylist />
    </div>
  );
};
