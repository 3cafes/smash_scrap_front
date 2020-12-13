import './App.scss';
import React, { useEffect, useState } from 'react';
import { get_smash_player } from './api/scrap';
import PlayerCard from './components/player_card';

function App() {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		async function fetch_players() {
			const players = await get_smash_player();
			setPlayers(players);
			console.log(players[0]);
		}
		fetch_players();
	}, []);

	return (
		<div className="CardGrid">
			{players.map((player) => (
				<PlayerCard
					id={player.player_id}
					name={player.name}
					blob={player.img_blob}
				></PlayerCard>
			))}
		</div>
	);
}

export default App;
