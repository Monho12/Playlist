import { Card, Button } from "react-bootstrap";
import { useState } from "react";

export const Playlist = ({ songName, songLink }) => {
  const [music] = useState(new Audio(songLink));
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <Card>
        <Card.Img />
        <Card.Body>
          <h1 style={{ color: "black" }}>{songName}</h1>;
        </Card.Body>
      </Card>
      <Button
        onClick={() => {
          setPlaying(!playing);
          if (music.paused) {
            music.play();
          } else if (playing) {
            music.pause();
          }
        }}
      >
        {playing ? "Pause" : "Play"}
      </Button>
    </>
  );
};
