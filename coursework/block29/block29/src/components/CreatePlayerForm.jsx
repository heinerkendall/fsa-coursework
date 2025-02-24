import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPlayer } from "../api";
import styles from "../css/CreatePlayerForm.module.css";

export default function CreatePlayerForm() {
  const [playerObj, setPlayerObj] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    status: "bench",
    teamId: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setPlayerObj({ ...playerObj, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await createPlayer(playerObj);
    if (APIData.success) {
      console.log("New Player: ", APIData.data.newPlayer);

      // Navigate to home
      navigate("/");
    } else {
      setError(APIData.error.message);
    }
  }

  return (
    <div className={styles.container}>
      <h2>Create a new player:</h2>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}

        <label>
          Name:
          <input
            value={playerObj.name}
            type="text"
            name="name"
            placeholder="Name, i.e. Spot"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Breed:
          <input
            value={playerObj.breed}
            type="text"
            name="breed"
            placeholder="Breed, i.e. Golden Retriever"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Image URL:
          <input
            value={playerObj.image}
            type="text"
            name="imageUrl"
            placeholder="Image URL, i.e. https://puppy.com/image.jpg "
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Choose a status:
          <select
            value={playerObj.status}
            name="status"
            onChange={handleChange}
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>

        <label>
          Optional Team ID:
          <input
            value={playerObj.teamId}
            type="text"
            name="teamId"
            placeholder="Optional ID, i.e. 1"
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}