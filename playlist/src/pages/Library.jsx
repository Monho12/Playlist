import { DataContext } from "../contexts/DataProvider";
import { useContext } from "react";
import style from "../styles/Library.module.css";
import { Playlist } from "../components/Playlist";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

export const Library = () => {
  const { list, account } = useContext(DataContext);

  console.log(account);
  return (
    <div className={style.container}>
      <div className={style.part}>
        <h1>My Playlists</h1>
      </div>
      <div className={style.cardSection}>
        <Row className="mx-2 row row-cols-6">
          {!account && (
            <div>
              <h1>You dont have playlist because you dont have account</h1>
            </div>
          )}
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
    </div>
  );
};
