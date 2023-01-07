import { DataContext } from "../contexts/DataProvider";
import { useContext, useRef } from "react";
import style from "../styles/CreatePlaylist.module.css";
import axios from "axios";
import close from "../assets/close.png";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export const CreatePlaylist = () => {
  const { create, setCreate, setList, list } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const nav = useNavigate();

  let name = useRef();
  let descref = useRef();

  const setValue = () => {
    const title = name.current.value;
    console.log(name.current.value);
    setCreate(!create);
    axios
      .post("http://localhost:5000/playlists", {
        title: title,
        description: descref.current.value,
        Creator: user._id,
      })
      .then((res) => {
        console.log(res.data);
        setList([...list, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    nav("/library");
  };

  return (
    <>
      {!user && (
        <div
          className={
            create
              ? style.container2
              : `${style.container}  ${style.displayNone}`
          }
          style={{ color: "white", paddingTop: "10vh" }}
        >
          You must log in to your user before create playlist
        </div>
      )}
      {user && (
        <div
          className={
            create
              ? style.container
              : `${style.container}  ${style.displayNone}`
          }
        >
          <div onClick={() => setCreate(!create)} className={style.close}>
            <img src={close} />
          </div>

          <div style={{ color: "white", fontSize: "28px" }}>
            Create your playlist
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
