import { State } from './state.js';

export async function commandHelp(state: State){
	console.log("Welcome to the Pokedex!");
	console.log("Usage:\n");

	for(let i of Object.values(state.commands)){
		console.log(`${i.name}: ${i.description}`);
	}

	return; 
}
