import { createInterface } from 'node:readline'; 
import { commandExit } from './command_exit.js';
import { getCommands } from './command_registry.js';
import { State } from './state.js';



export async function startREPL(state: State){
	let rl = state.interface;
	let commands = state.commands;
	rl.prompt();
	let callback = "";
	rl.on("line", async (callback) => {
		const arr = cleanInput(callback);
		if(arr.length == 0){
			rl.prompt();
			return; 
		}
		else{
			const command = commands[arr[0]];

			if(!command){
				console.log("Unknown command");
				rl.prompt();
				return;
			}

			try {
				await command.callback(state);
			} catch (err) {
				console.error("Error executing command: ", (err as Error).message);
			}
		}
		rl.prompt();
		return;
	});
}

export function cleanInput(input: string): string[]{
	const arr = input.toLowerCase().split(" ");
	const new_arr = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] != ''){
			new_arr.push(arr[i]);
		}
	}

	return new_arr;
}
