import style from "./Playlist.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export const Playlist = ({ index, _id, title, description }) => {
  const baseUrl = "http://localhost:5000";

  const deletePlaylist = () => {
    axios.delete(baseUrl + `/playlists/${_id}`).catch((err) => {
      console.log(err);
    });
    window.location.reload();
  };

  return (
    <div className={style.container}>
      <Link to={`/playlists/${_id}`} style={{ textDecoration: "none" }}>
        <div className={style.card}>
          <div className={style.playlistName}>
            <div>{index + 1}.</div>
            <div>{title}</div>
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
};