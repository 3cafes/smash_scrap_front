import React from 'react';

export default function PlayerCard({ id, name, blob }) {
	return (
		<div
			className="Card"
			style={{
				backgroundImage: `url("data:image/png;base64,${blob}"`,
			}}
		>
			<p>
				{id} {name}
			</p>
		</div>
	);
}
