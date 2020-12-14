import React from 'react';

export default function StageCard({ name, blob }) {
	return (
		<div
			className="Card"
			style={{
				backgroundImage: `url("data:image/png;base64,${blob}"`,
			}}
		>
			<p>{name}</p>
		</div>
	);
}
