import { DataContext } from "../components/DataProvider";
import { useContext } from "react";
import style from "./Library.module.css";
import { Playlist } from "./Playlist";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export const Library = () => {
  const { list } = useContext(DataContext);

  return (
    <div className={style.container}>
      <h1>My Playlists</h1>
      <div className={style.cardSection}>
        <Row className="mx-2 row row-cols-6">
          {list.map((item, index) => {
            return (
              <Link style={{ textDecoration: "none" }}>
                <Playlist {...item} index={index} />
              </Link>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
