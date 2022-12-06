import style from "../styles/AlbumCards.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AlbumCards = ({ album }) => {
  return (
    <div className={style.container}>
      <Link to="/songs" style={{ textDecoration: "none" }}>
        <div className={style.card}>
          <Card.Img src={album.images[0].url} style={{ borderRadius: "5px" }} />
          <div className={style.albumName}>
            <div>{album.name}</div>
            {/* <div>By: {album.artists[0].name}</div> */}
            <div style={{ color: "grey", fontWeight: "400" }}>
              {album.album_type}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
