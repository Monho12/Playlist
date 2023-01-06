import { DataContext } from "../contexts/DataProvider";
import { useContext } from "react";
import style from "../styles/Library.module.css";
import { Playlist } from "../components/Playlist";
import { AuthContext } from "../contexts/AuthProvider";

export const Library = () => {
  const { list } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  return (
    <div className={style.container}>
      <div className={style.part}>
        <h1>My Playlists</h1>
        {!user && (
          <div className={style.font}>
            You dont have playlist because you have not log in to your user
          </div>
        )}
      </div>
      <div className={style.container2}>
        {list.map((item, index) => {
          return (
            <div key={index}>
              {user && (
                <>
                  {list[index].Creator == user._id && (
                    <>
                      <div>
                        <Playlist {...item} index={index} key={index} />
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
