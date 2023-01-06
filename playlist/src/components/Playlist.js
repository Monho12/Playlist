import style from "../styles/Playlist.module.css";
import { Link } from "react-router-dom";
import trsh from "../assets/trsh.png";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import { AuthContext } from "../contexts/AuthProvider";
import playlist from "../assets/playlist.png";
import { Card } from "react-bootstrap";
import play from "../assets/Play.png";

export const Playlist = ({ index, _id, title, description }) => {
  const { list, setList } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const deletePlaylist = () => {
    axios
      .delete("https://notspotify.onrender.com" + `/playlists/${_id}`)
      .then(() => {
        console.log("Deleted");
        axios.get("https://notspotify.onrender.com" + "/playlists").then((res) => {
          setList(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (list[index].Creator == user._id) {
    return (
      <div className={style.container}>
        <div className={style.container}>
          <Link to={`/playlists/${_id}`} style={{ textDecoration: "none" }}>
            <div className={style.card}>
              <div style={{ height: "150px" }}>
                <Card.Img src={playlist} style={{ borderRadius: "5px" }} />
                <img src={play} className={style.play} />
              </div>
              <div className={style.albumName}>
                <div>{title}</div>
                <div style={{ color: "#A7A7CC", fontWeight: "400" }}>
                  {description}
                </div>
              </div>
            </div>
          </Link>
          <img src={trsh} onClick={deletePlaylist} className={style.trash} />
        </div>
      </div>
    );
  }
};
