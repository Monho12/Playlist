import style from "../styles/Home.module.css";
import { useContext } from "react";
import { ArtistPL } from "../components";
import { Row } from "react-bootstrap";
import { DataContext } from "../contexts/DataProvider";

export const Home = () => {
  const { pro } = useContext(DataContext);

  return (
    <div className={style.container}>
      <div className={style.playlistSection}>
        <h1>Trending Artists</h1>
        <Row className="m-2 row row-cols-6">
          {pro.map((item, index) => {
            return <ArtistPL {...item} key={index} />;
          })}
        </Row>
      </div>
    </div>
  );
};
