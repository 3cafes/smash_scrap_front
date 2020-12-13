import axios from 'axios';
import SERVER from '../server';

export async function get_smash_player() {
	try {
		const res = await axios.get(`${SERVER}/api/player/all`);
		return res.data;
	} catch (e) {
		console.log(e);
		return [];
	}
}
