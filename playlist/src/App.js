import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Explore,
  Home,
  Library,
  Sidebar,
  Songs,
  DataProvider,
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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
