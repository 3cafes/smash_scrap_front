import React, { useEffect, useState } from 'react';
import { get_smash_items } from 'api/scrap';
import ItemCard from 'components/cards/item_card';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetch_items() {
			const items = await get_smash_items();
			setItems(items);
			console.log(items[0]);
		}
		fetch_items();
	}, []);

	return (
		<div className="Page">
			<h1 className="PageTitle">SMASH ITEMS</h1>
			{items.length <= 0 && <h2>no item found.</h2>}
			{items.length > 0 && (
				<div className="CardGrid">
					{items.map((item, index) => (
						<ItemCard
							key={index}
							name={item.name}
							blob={item.img_blob}
						></ItemCard>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
