import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Barranquilla } from "./components/Barranquilla";
import { Cartagena } from "./components/Cartagena";
import { SantaMarta } from "./components/SantaMarta";
import { Monteria } from "./components/Monteria";
import { Riohacha } from "./components/Riohacha";
import { Valledupar } from "./components/Valledupar";
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className="text-center my-3">Gallery Project</h1>
        </div>
        <div className="container d-flex justify-content-center">
          <Routes>
            <Route
              path="/barranquilla"
              element={<Barranquilla className="main-img-container" />}
            />
            <Route
              path="/cartagena"
              element={<Cartagena className="main-img-container" />}
            />
            <Route
              path="/santaMarta"
              element={<SantaMarta className="main-img-container" />}
            />
            <Route
              path="/monteria"
              element={<Monteria className="main-img-container" />}
            />
            <Route
              path="/riohacha"
              element={<Riohacha className="main-img-container" />}
            />
            <Route
              path="/valledupar"
              element={<Valledupar className="main-img-container" />}
            />
          </Routes>
        </div>
        <div className="container">
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
