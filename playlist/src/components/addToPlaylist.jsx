import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { DataContext } from "../contexts/DataProvider";
import style from "../styles/AddToPlaylist.module.css";
import close from "../assets/close.png";
import axios from "axios";

export const AddToPlaylist = (index) => {
  const { add, setAdd, list, playlistId, setPlaylistId, songId } =
    useContext(DataContext);
  const { user } = useContext(AuthContext);
  const [check, setCheck] = useState(true);

  const Check = (index) => {
    if (check) {
      console.log("playlistID: ", list[index]._id);
      setPlaylistId(list[index]._id);
      setCheck(false);
    } else {
      setPlaylistId();
      setCheck(true);
    }
  };

  const push = () => {
    axios
      .put("https://notspotify.onrender.com/playlists/" + playlistId, {
        id: songId,
      })
      .then((res) => {
        console.log(res.data._id);
      });
    setAdd(false);
    alert("added to your playlist");
  };

  return (
    <>
      {!user && (
        <div
          className={
            add ? style.container2 : `${style.container}  ${style.displayNone}`
          }
          style={{ color: "white", paddingTop: "10vh" }}
        >
          You must log in to your user before add songs to playlist
        </div>
      )}
      {user && (
        <div
          className={
            add ? style.container : `${style.container}  ${style.displayNone}`
          }
        >
          <div onClick={() => setAdd(false)} className={style.close}>
            <img src={close} alt="closeImg" />
          </div>
          <div style={{ color: "white", fontSize: "28px" }}>
            Choose your playlist
          </div>

          {list.map((item, index) => {
            return (
              <div key={index}>
                {user && (
                  <>
                    {list[index].Creator === user._id && (
                      <div className={style.div}>
                        <input type="checkbox" onClick={() => Check(index)} />
                        {item.title}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}

          <button className={style.button} onClick={push}>
            Add
          </button>
        </div>
      )}
    </>
  );
};
