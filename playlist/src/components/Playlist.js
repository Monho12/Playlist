import style from "../styles/AlbumCards.module.css";

export const Playlist = ({ playlist, index }) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.playlistName}>
          <div>{index + 1}.</div>
          <div>{playlist}</div>
        </div>
      </div>
    </div>
  );
};
