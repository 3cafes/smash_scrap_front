import React from 'react';
import './item_card.scss';

export default function ItemCard({ name, blob }) {
	console.log('pr');
	return (
		<div className="Card">
			<p>{name}</p>
			<div
				className="ItemCard_Image"
				style={{
					backgroundImage: `url("data:image/png;base64,${blob}"`,
				}}
			></div>
		</div>
	);
}
