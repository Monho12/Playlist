import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, CreatePlaylist, Header } from "./components";
import { DataProvider } from "./contexts/DataProvider";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Songs } from "./components/Songs";
import { About } from "./pages/About";
import { Library } from "./pages/Library";
import { Tracks } from "./components/Tracks";

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
