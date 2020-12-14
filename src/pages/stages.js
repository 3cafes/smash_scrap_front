import React, { useEffect, useState } from 'react';
import { get_smash_stages } from 'api/scrap';
import { StageCard } from 'components/cards';

function App() {
	const [stages, setStages] = useState([]);

	useEffect(() => {
		async function fetch_stages() {
			const stages = await get_smash_stages();
			setStages(stages);
			console.log(stages[0]);
		}
		fetch_stages();
	}, []);

	return (
		<div className="Page">
			<h1 className="PageTitle">SMASH STAGES</h1>
			{stages.length <= 0 && <h2>no stage found.</h2>}
			{stages.length > 0 && (
				<div className="CardGrid">
					{stages.map((stage, index) => (
						<StageCard
							key={index}
							id={stage.stage_id}
							name={stage.name}
							blob={stage.img_blob}
						></StageCard>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
