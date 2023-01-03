import style from "../styles/AlbumCards.module.css";
import { Card } from "react-bootstrap";
import play from "../assets/Play.png";

export const AlbumCards = ({ album }) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div style={{ height: "200px" }}>
          <Card.Img src={album.images[0].url} style={{ borderRadius: "5px" }} />
          <img src={play} className={style.play} />
        </div>
        <div className={style.albumName}>
          <div>{album.name}</div>
          <div style={{ color: "#A7A7CC", fontWeight: "400" }}>
            • {album.album_type}
          </div>
        </div>
      </div>
     
    </div>
  );
};
