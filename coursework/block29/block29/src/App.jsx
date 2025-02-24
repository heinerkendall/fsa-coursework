import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Navbar from "./components/Navbar";
import CreatePlayerForm from "./components/CreatePlayerForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
        <Route path="/add-player" element={<CreatePlayerForm />} />
      </Routes>
    </div>
  );
}

export default App;