import SpotifyWebPlayer from "react-spotify-web-playback/lib";

export const Player = () => {
  if (!accessToken) return null;
  
  return (
    <SpotifyWebPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
    />
  );
};
