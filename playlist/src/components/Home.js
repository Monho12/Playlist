import style from "../styles/Home.module.css";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h1>Home</h1>
      </div>
    </>
  );
};
