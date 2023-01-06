import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Songs } from "./Songs";
export const Tracks = () => {
  const { id } = useParams("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://notspotify.onrender.com/playlists/" + id
      );
      setSongs([res.data.songs]);
    })();
  }, [songs]);

  return (
    <>
      <h1>Songs</h1>
      {songs.map((thing) => {
        return thing.map((item, index) => {
          return (
            <div>
              <Songs {...item} index={index} key={index} />
            </div>
          );
        });
      })}
    </>
  );
};
