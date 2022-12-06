import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Explore, Header, Tracks } from "./components";
import { Home } from "./components/Home";
import { Library } from "./components/Library";
import { Sidebar } from "./components/Sidebar";
import { Songs } from "./components/Songs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="Container">
          {/* <Header/> */}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
