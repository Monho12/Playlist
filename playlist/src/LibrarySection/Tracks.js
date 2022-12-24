import { useContext } from "react";
import { DataContext } from "../components/DataProvider";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import style from "./Tracks.module.css";

export const Tracks = () => {
  const { songs } = useContext(DataContext);
  const { id } = useParams("");

  return (
    <div>
      <div>
        <h1>yooy ashgu ci end irle</h1>

        {songs.map((item) => {
          if (item.playlistId == id) {
            return (
              <Row className="mx-2 row row-cols-6">
                <div className={style.container}>
                  <h1>{item.name}</h1>
                  {/* <h5>{item.playlistId}</h5> */}
                </div>
              </Row>
            );
          }
        })}
      </div>
    </div>
  );
};
