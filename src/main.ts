import { startREPL } from "./repl.js";
import { State, initState } from './state.js';

function main(){
	let state = initState(); 
	startREPL(state);
}

main();
