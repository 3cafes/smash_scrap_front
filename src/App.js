import './App.scss';
import React, { useEffect, useState } from 'react';
import { get_smash_player } from './api/scrap';

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
		<div className="App">
			{players.map((player) => (
				<div
					style={{
						backgroundImage: `url("data:image/png;base64,${player.img_blob}"`,
					}}
				>
					<p>{player.id}</p>
					<p>{player.name}</p>
				</div>
			))}
		</div>
	);
}

export default App;
