import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
const CLIENT_ID = "e11d642ed1f642c789a106fb51132da3";
const CLIENT_SECRET = "e7033b13995c49bbae01be2dfb2c5134";
const baseUrl = "https://accounts.spotify.com/api/token";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [album, setAlbum] = useState("");
  const [list, setList] = useState([]);
  const [create, setCreate] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [check, setCheck] = useState(null);
  const [account, setAccount] = useState(null);
  // const navigate = useNavigate(); (Temuugenees asuuh)

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
      })
      .catch((err) => {
        console.log(err);
      });

    (async () => {
      const res = await axios.get("http://localhost:5000/playlists");
      console.log(res.data);
      setList(res.data);
    })();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const profile = user;
        console.log(profile);
        setAccount(profile);
      } else {
        setAccount("");
      }
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      // navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const Login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("log in to ", user.uid);
        // navigate(`/profile/${user.uid}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setCheck(errorCode);
        console.log(errorCode, errorMessage);
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        // navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Artist ID " + artistID);

    var Profile = await fetch(
      "https://api.spotify.com/v1/artists/" + artistID,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
        setArtistName(searchInput);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album,single&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        console.log(data);
        setAlbum(data);
        setAlbums(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <DataContext.Provider
      value={{
        searchInput,
        accessToken,
        albums,
        artist,
        pressed,
        setSearchInput,
        setPressed,
        search,
        artistName,
        album,
        list,
        create,
        setCreate,
        setList,
        onSubmit,
        setEmail,
        setPassword,
        Login,
        check,
        account,
        Logout,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
