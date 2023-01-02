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
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
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
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/playlists">
                  <Route path=":id" element={<Tracks />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
            <CreatePlaylist />
          </div>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
