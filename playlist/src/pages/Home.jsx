import style from "../styles/Home.module.css";
import { useContext } from "react";
import { ArtistPL } from "../components";
import { DataContext } from "../contexts/DataProvider";

export const Home = () => {
  const { artist } = useContext(DataContext);

  return (
    <div className={style.container}>
      <div className={style.playlistSection}>
        <h1>Trending Artists</h1>
        <div className={style.container2}>
          {artist.map((item, index) => {
            return <ArtistPL {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
