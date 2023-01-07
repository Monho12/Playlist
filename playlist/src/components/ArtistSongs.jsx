import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import { Songs } from "./Songs";
import style from "../styles/ArtistSongs.module.css";

export const ArtistSongs = () => {
  const { id } = useParams();
  const { artist, songs } = useContext(DataContext);

  return (
    <div className={style.container}>
      {artist.map((item, index) => {
        if (id === item._id) {
          return (
            <div key={index}>
              <img
                src={item.image[1]}
                style={{ width: "83vw", height: "50vh" }}
              />
              <h1 className={style.text}>{item.name}'s songs</h1>
            </div>
          );
        }
      })}
      <div className={style.songs}>
        {songs.map((item, index) => {
          if (item.artist.length > 0 && id === item.artist[0]._id) {
            return (
              <div key={index}>
                <Songs {...item} index={index} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
