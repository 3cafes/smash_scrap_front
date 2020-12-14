import React, { useEffect, useState } from 'react';
import { get_smash_players } from 'api/scrap';
import { PlayerCard } from 'components/cards';

function App() {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		async function fetch_players() {
			const players = await get_smash_players();
			setPlayers(players);
			console.log(players[0]);
		}
		fetch_players();
	}, []);

	return (
		<div className="Page">
			<h1 className="PageTitle">SMASH PLAYERS</h1>
			{players.length <= 0 && <h2>no player found.</h2>}
			{players.length > 0 && (
				<div className="CardGrid">
					{players.map((player, index) => (
						<PlayerCard
							key={index}
							id={player.player_id}
							name={player.name}
							blob={player.img_blob}
						></PlayerCard>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
