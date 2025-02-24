import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/PlayerCard.module.css";

export default function PlayerCard({ player }) {
  const navigate = useNavigate();
  return (
    <div className={styles.puppy}>
      <h3>{player.name}</h3>
      <img src={player.imageUrl} />
      <button
        onClick={() => {
          navigate(`/${player.id}`);
        }}
      >
        See Details
      </button>
    </div>
  );
}