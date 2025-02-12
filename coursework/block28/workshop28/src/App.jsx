import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue"
import Red  from "./components/Red";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>

      <div id="main-section">
        <Routes>
          <Route path="/blue" element={< Blue />}/>
          <Route path="/red" element={ <Red />}/>
          <Route path="/" element={ <Home />}/>
        </Routes>
      </div>
      <Navigation/>
    </>
  );
}

export default App;
