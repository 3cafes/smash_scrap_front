import axios from 'axios';
import SERVER from '../server';

export async function get_smash_players() {
	try {
		const res = await axios.get(`${SERVER}/api/player/all`);
		return res.data;
	} catch (e) {
		console.log(e);
		return [];
	}
}

export async function get_smash_items() {
	try {
		const res = await axios.get(`${SERVER}/api/item/all`);
		return res.data;
	} catch (e) {
		console.log(e);
		return [];
	}
}
