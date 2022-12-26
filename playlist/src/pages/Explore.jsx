import style from "../styles/Explore.module.css";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AlbumCards } from "../components/AlbumCards";
import { DataContext } from "../contexts/DataProvider";

export const Explore = (props) => {
  const { albums, artist, pressed, search, setSearchInput, setPressed } =
    useContext(DataContext);

  return (
    <div className={style.container}>
      <div className={style.inputSection}>
        <input
          className={style.input}
          placeholder="Search ur favorite artists album and singles 🔍"
          type="input"
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              search();
              console.log(artist);
              setPressed(true);
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <div style={{ overflowY: "scroll" }}>
        {pressed && (
          <div className={style.profileSection}>
            {artist.images?.length > 0 && (
              <img src={artist.images[0].url} alt="pfp" className={style.img} />
            )}
            <div className={style.name}>
              <div style={{ fontSize: "30px" }}>{artist.name}</div>
              <div className={style.typeDesign}>
                <div>{artist.type}</div>
              </div>
            </div>
          </div>
        )}

        <div className={style.cardSection}>
          <Row className="mx-2 row row-cols-6">
            {!pressed && (
              <div>
                <div>Search Something BOI</div>
              </div>
            )}
            {albums.map((album, id) => {
              return (
                <Link
                  to={`/album/${album.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <AlbumCards album={album} key={id} />
                </Link>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};
