import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Explore,
  Home,
  Library,
  Sidebar,
  Songs,
  DataProvider,
  About,
  CreatePlaylist,
} from "./components";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className="Container">
            {/* <Header/> */}
            <Routes>
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/album">
                <Route path=":id" element={<Songs />} />
              </Route>
              <Route path="/library" element={<Library />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <CreatePlaylist />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
