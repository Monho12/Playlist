import { useEffect, useState } from "react";
import { FormControl, Button, Card, Row } from "react-bootstrap";
import style from "../styles/Explore.module.css";
import axios from "axios";
import { AlbumCards } from "./AlbumCards";

const CLIENT_ID = "e11d642ed1f642c789a106fb51132da3";
const CLIENT_SECRET = "e7033b13995c49bbae01be2dfb2c5134";
const baseUrl = "https://accounts.spotify.com/api/token";

export const Explore = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch(baseUrl, authParameters)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
        console.log(data.access_token);
      });
  }, []);

  async function search() {
    console.log("Search for " + searchInput);

    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    console.log("Artist ID " + artistID);

    var Profile = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => data.artists.items[0]);
    setProfile(Profile);

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAlbums(data.items);
      });
    // console.log(Profile);
  }

  console.log(albums);
  console.log(profile);

  return (
    <div className={style.container}>
      <div className={style.inputSection}>
        <FormControl
          style={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
          placeholder="Search ur artist "
          type="inpur"
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              search();
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Button
          onClick={console.log("watchu doin son")}
          style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
        >
          Search
        </Button>
      </div>

      <div className={style.profileSection}>
        <Row className="mx-2 row row-cols-5">
          <Card>
            <Card.Img src={props.images} />
            <Card.Body>
              <Card style={{ color: "black" }}>{profile.name}</Card>
            </Card.Body>
          </Card>
        </Row>
      </div>

      {/* <div className={style.cardSection}>
        <Row className="mx-2 row row-cols-6">
          {albums.map((album, id) => {
            console.log(album);
            return <AlbumCards album={album} key={id} />;
          })}
        </Row>
      </div> */}
    </div>
  );
};
