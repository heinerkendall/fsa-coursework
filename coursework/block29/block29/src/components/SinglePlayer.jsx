import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchSinglePlayer, deletePlayer } from "../api";
import styles from "../css/SinglePlayer.module.css";

export default function SinglePlayer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSinglePlayer() {
      const APIResponse = await fetchSinglePlayer(id);
      if (APIResponse.success) {
        setPlayer(APIResponse.data.player);
      } else {
        setError(error.message);
      }
    }
    getSinglePlayer();
  }, []);

  async function handleDelete() {
    try {
      const result = await deletePlayer(player.id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      {player && (
        <div>
          <figure>
            <img
              className={styles.img}
              src={player.imageUrl}
              alt="A pic of a furry player"
            />
            <figcaption>
              <h3>Puppy Details</h3>
              <p>Name: {player.name}</p>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
            </figcaption>
          </figure>
          <button onClick={handleDelete}>Delete Player</button>

          <div>
            <hr />
            <h3>Team Details</h3>
            {player.teamId ? (
              <>
                <p>Team ID: {player.teamId}</p>
                <p>Team Name: {player.team.name}</p>
                <p>Team Members: </p>
                <div className={styles.teamPlayers}>
                  {player.team.players.map((teamPlayer) => {
                    if (player.id !== teamPlayer.id) {
                      return (
                        <div key={teamPlayer.id}>
                          <img
                            src={teamPlayer.imageUrl}
                            height="50"
                            width="50"
                          />
                          <p>{teamPlayer.name}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            ) : (
              "Player does not belong to a team."
            )}
          </div>
        </div>
      )}
    </>
  );
}