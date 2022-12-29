import { DataContext } from "../contexts/DataProvider";
import { useContext, useRef } from "react";
import style from "../styles/CreatePlaylist.module.css";
import axios from "axios";

export const CreatePlaylist = () => {
  const { create, setCreate, setList, list, account } = useContext(DataContext);

  let name = useRef();
  let descref = useRef();
  const baseUrl = "http://localhost:5000";

  const setValue = () => {
    const title = name.current.value;
    console.log(name.current.value);
    setCreate(!create);
    if (title)
      axios
        .post(baseUrl + "/playlists", {
          title: title,
          description: descref.current.value,
          CreatorId: account.uid,
        })
        .then((res) => {
          console.log(res.data);
          setList([...list, res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <>
      {!account && (
        <div
          className={
            create
              ? style.container
              : `${style.container}  ${style.displayNone}`
          }
          style={{ color: "white", paddingTop: "10vh" }}
        >
          You must log in to your account before create playlist
        </div>
      )}
      {account && (
        <div
          className={
            create
              ? style.container
              : `${style.container}  ${style.displayNone}`
          }
        >
          <div onClick={() => setCreate(!create)} className={style.close}>
            ❌
          </div>

          <div style={{ color: "wheat", fontSize: "28px" }}>
            Create your holiday playlist
          </div>

          <input
            placeholder="Playlist name"
            ref={name}
            className={style.input}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                setValue();
                setCreate(!create);
              }
            }}
          />

          <input
            placeholder="Description"
            ref={descref}
            className={style.input}
            onKeyPress={(event) => {
              if (event.key == "Enter") {
                setValue();
                setCreate(!create);
              }
            }}
          ></input>

          <button onClick={setValue} className={style.button}>
            Create
          </button>
        </div>
      )}
    </>
  );
};
