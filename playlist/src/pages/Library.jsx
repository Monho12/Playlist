import { DataContext } from "../contexts/DataProvider";
import { useContext } from "react";
import style from "../styles/Library.module.css";
import { Playlist } from "../components/Playlist";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export const Library = () => {
  const { list, account } = useContext(DataContext);

  console.log(list);

  return (
    <div className={style.container}>
      <div className={style.part}>
        <h1>My Playlists</h1>
        {!account && (
          <div className={style.font}>
            You dont have playlist because you have not log in to your account
          </div>
        )}
      </div>

      <Row className="mx-2 row row-cols-6">
        {list.map((item, index) => {
          return (
            <>
              {account && (
                <>
                  {list[index].CreatorId == account.uid && (
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
