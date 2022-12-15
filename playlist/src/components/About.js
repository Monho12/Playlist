import style from "../styles/About.module.css";
import { Header } from "./Header";
import img from "../assets/us.png";

export const About = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.aboutContainer}>
          <img src={img} className={style.img} />
          <div className={style.info}>
            Hi im developer of this site. You can call me "GUSTAVO". We're hirin
            UI & UX Designer. We need graphic designers. Also we need ps5's ,
            xbox's , high performance pc's.
          </div>
          <div className={style.info}>
            notSpotify is a digital music, podcast, and video service that gives
            you access to millions of songs and other content from creators all
            over the world for free. Basic functions such as playing music are
            totally free, but you can also choose to upgrade to notSpotify
            Premium. Whether you have Premium or not, you can: Get
            recommendations based on your taste Build collections of music and
            podcasts And more!notSpotify is available across a range of devices,
            including computers, phones, tablets, speakers, TVs, and cars, and
            you can easily transition from one to another with notSpotify
            Connect.
          </div>
          <div className={style.info}>
            With notSpotify, it’s easy to find the right music or podcast for
            every moment – on your phone, your computer, your tablet and more.
            There are millions of tracks and episodes on notSpotify. So whether
            you’re behind the wheel, working out, partying or relaxing, the
            right music or podcast is always at your fingertips. Choose what you
            want to listen to, or let notSpotify surprise you. You can also
            browse through the collections of friends, artists, and celebrities,
            or create a radio station and just sit back. Soundtrack your life
            with notSpotify. Subscribe or listen for free.
          </div>
          <div className={style.info}>
            Play Your Favorites Songs, Find New Music, and See What Friends are
            Listening to. Listen to Your Favorite Artists, Songs and Albums for
            Free. Try notSpotify® Today! Find Your Favorite Albums. Listen on
            Several Devices. Curated Playlists. Discover Great New Music.
          </div>

          <div className={style.info}>
            Owner of notSpotify is Mnholovesnobody
          </div>
        </div>
      </div>
    </>
  );
};
