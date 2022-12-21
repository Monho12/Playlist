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
        .post(baseUrl + "/playlist", { playlist: playlistName })
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
  };

  return (
    <div
      className={
        create ? style.container : `${style.container}  ${style.displayNone}`
      }
    >
      <button onClick={() => setCreate(!create)}>X</button>

      <div style={{ color: "wheat" }}>Creating playlist section</div>

      <input
        placeholder="Enter ur playlist name"
        ref={name}
        className={style.input}
      />

      <Button onClick={setValue}>Create</Button>
    </div>
  );
};
