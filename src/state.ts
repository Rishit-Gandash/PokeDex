import { getCommands } from './command_registry.js';
import { PokeAPI } from './pokeapi.js';
import { createInterface, type Interface } from "readline";

export type CLICommand = { 
	name: string;
	description: string;
	callback: (state: State) => Promise<void>; 
};

export type State = { 
	commands: Record<string, CLICommand>;
	interface: Interface;
	pokeAPI: PokeAPI;
	nextLocationsURL: string;
	prevLocationsURL: string;
};

export function initState(): State {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: "Pokedex >  ",
	});

	return { 
		commands: getCommands(), 
		interface: rl,
		pokeAPI: new PokeAPI(),
		nextLocationsURL: "",
		prevLocationsURL: "",
	}; 
}

