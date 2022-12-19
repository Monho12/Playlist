import { DataContext } from "./DataProvider";
import { useContext } from "react";
import style from "../styles/Library.module.css";
import { Header } from "./Header";
import { Playlist } from "./Playlist";

export const Library = () => {
  const { list } = useContext(DataContext);

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Library</h1>
        <div className={style.cardSection}>
          {list.map((item, index) => {
            return <Playlist {...item} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};
