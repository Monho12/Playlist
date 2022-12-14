import axios from "axios";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { Header } from "./Header";

export const Library = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:8000");
      console.log(res.data);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Library</h1>
      </div>
    </>
  );
};
