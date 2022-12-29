import style from "../styles/Playlist.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataProvider";

export const Playlist = ({ index, _id, title, description }) => {
  const baseUrl = "http://localhost:5000";

  const { list, account, setList } = useContext(DataContext);
  const deletePlaylist = () => {
    axios
      .delete(baseUrl + `/playlists/${_id}`)
      .then((res) => {
        axios.get(baseUrl + "/playlists").then((res) => {
          setList(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (list[index].CreatorId == account.uid) {
    return (
      <div className={style.container}>
        <Link to={`/playlists/${_id}`} style={{ textDecoration: "none" }}>
          <div className={style.card}>
            <div className={style.playlistName}>
              <div>{title}</div>
            </div>
            <div
              style={{ color: "green", fontWeight: "400", fontSize: "14px" }}
            >
              {description}
            </div>
          </div>
        </Link>
        <Button
          onClick={deletePlaylist}
          variant="danger"
          style={{ position: "absolute", bottom: "35px", left: "57px" }}
        >
          Delete Playlist
        </Button>
      </div>
    );
  }
};
