import axios from "axios";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { Header } from "./Header";
import { Playlist } from "./Playlist";

export const Library = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    {
      (async () => {
        const res = await axios.get("http://localhost:8000/playlist");
        console.log(res.data);
        setList(res.data);
      })();
    }
  }, []);
  console.log(list);
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Library</h1>
        <div>
          {list.map((item, index) => {
            return <Playlist {...item} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};
