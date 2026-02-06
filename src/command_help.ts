import { getCommands } from './command_registry.js';

export function commandHelp(){
	console.log("Welcome to the Pokedex!");
	console.log("Usage:\n");

	for(let i of Object.values(getCommands())){
		console.log(`${i.name}: ${i.description}`);
	}

	return; 
}
