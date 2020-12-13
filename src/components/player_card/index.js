import React from 'react';
import './player_card.scss';

export default function PlayerCard({ id, name, blob }) {
	return (
		<div
			className="PlayerCard"
			style={{
				backgroundImage: `url("data:image/png;base64,${blob}"`,
			}}
		>
			<p>{id}</p>
			<p>{name}</p>
		</div>
	);
}
