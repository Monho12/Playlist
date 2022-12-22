import { DataContext } from "./DataProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import style from "../styles/CreatePlaylist.module.css";
import axios from "axios";

export const CreatePlaylist = () => {
  const { create, setCreate } = useContext(DataContext);
  const [playlistName, setPlaylistName] = useState();
  let name = useRef();
  const baseUrl = "http://localhost:5000";

  useEffect(() => {
    if (playlistName != null) {
      axios
        .post(baseUrl + "/playlists", { playlist: playlistName })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [playlistName]);

  const setValue = () => {
    setPlaylistName(name.current.value);
    console.log(name.current.value);
    alert("created u fuck");
    window.onload();
  };

  return (
    <div
      className={
        create ? style.container : `${style.container}  ${style.displayNone}`
      }
    >
      <div onClick={() => setCreate(!create)} className={style.close}>
        ❌
      </div>

      <div style={{ color: "wheat", fontSize: "28px" }}>
        Create your holiday playlist
      </div>

      <input
        placeholder="Enter your playlist name"
        ref={name}
        className={style.input}
      />

      <button onClick={setValue} className={style.button}>
        Create
      </button>
    </div>
  );
};
