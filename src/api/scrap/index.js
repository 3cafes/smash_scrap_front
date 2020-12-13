import axios from 'axios';

export async function get_smash_player() {
	try {
		const res = await axios.get('http://localhost:3001/api/player/all');
		return res.data;
	} catch (e) {
		console.log(e);
		return [];
	}
}
