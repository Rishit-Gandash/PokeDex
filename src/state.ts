import { getCommands } from './command_registry.js';
import { createInterface, type Interface } from 'readline';


export type CLICommand = { 
	name: string;
	description: string;
	callback: (state: State) => void; 
};

export type State = { 
	commands: Record<string, CLICommand>;
	interface: Interface;
};

export function initState(): State {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: "Pokedex >  ",
	});

	return { 
		commands: getCommands(), 
		interface: rl
	}; 
}

