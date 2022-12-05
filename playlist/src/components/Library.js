import style from "../styles/Home.module.css";
import { Header } from "./Header";

export const Library = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Library</h1>
      </div>
    </>
  );
};
