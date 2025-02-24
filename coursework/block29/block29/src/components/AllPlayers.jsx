import { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../api';
import PlayerCard from './PlayerCard';
import styles from '../css/AllPlayers.module.css';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState('');

  useEffect(() => {
    async function getAllPlayers() {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    : players;

  return (
    <div className={styles.container}>
      <label className={styles.search}>
        Search:
        <input
          type="text"
          placeholder="player name"
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
        />
      </label>
      {error && <p>{error}</p>}
      <div className={styles.playersList}>
        {playersToDisplay.length > 0
          ? playersToDisplay.map((player) => {
              return <PlayerCard key={player.id} player={player} />;
            })
          : 'No players match search term.'}
      </div>
    </div>
  );
}