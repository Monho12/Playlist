import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import style from "../styles/ArtistPL.module.css";
import play from "../assets/Play.png";

export const ArtistPL = ({ _id, name, image }) => {
  return (
    <div className={style.container}>
      <Link to={`/artist/${_id}`} style={{ textDecoration: "none" }}>
        <div className={style.card}>
          <div style={{ height: "150px" }}>
            <Card.Img src={image[0]} style={{ borderRadius: "5px" }} />
            <img src={play} className={style.play} />
          </div>
          <div className={style.albumName}>
            <div>This is {name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
