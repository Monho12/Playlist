import { DataContext } from "../contexts/DataProvider";
import { useContext } from "react";
import style from "../styles/Library.module.css";
import { Playlist } from "../components/Playlist";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthProvider";

export const Library = () => {
  const { list } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  console.log(list);

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

      <Row className="mx-2 row row-cols-6">
        {list.map((item, index) => {
          return (
            <>
              {user && (
                <>
                  {list[index].Creator == user._id && (
                    <Link style={{ textDecoration: "none" }}>
                      <Playlist {...item} index={index} key={index} />
                    </Link>
                  )}
                </>
              )}
            </>
          );
        })}
      </Row>
    </div>
  );
};
