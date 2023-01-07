import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import style from "../styles/Explain.module.css";

export const Explain = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        Hello {user && user.username}, welcome to notSpotify.
        <div className={style.text}>
          This is "notSpotify". It means we cant play songs . Our web app is
          just create playlist and add some songs to your playlist. And we dont
          have too muchs songs and artists. This songs are admin's favorite
          artists and songs. Thanks for your attention and enjoy notSpotify:)
        </div>
      </div>
    </div>
  );
};
