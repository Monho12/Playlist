import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, DataProvider, CreatePlaylist, Header } from "./components";
import { Home } from "./HomeSection/Home";
import { Explore } from "./ExploreSection";
import { Songs } from "./ExploreSection/Songs";
import { About } from "./AboutSection/About";
import { Library } from "./LibrarySection/Library";
import { Tracks } from "./LibrarySection/Tracks";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className="Container">
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/album">
                <Route path=":id" element={<Songs />} />
              </Route>
              <Route path="/library" element={<Library />} />
              <Route path="/about" element={<About />} />
              <Route path="/playlists">
                <Route path=":id" element={<Tracks />} />
              </Route>
            </Routes>
          </div>
          <CreatePlaylist />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
