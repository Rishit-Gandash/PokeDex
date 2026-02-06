import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
	{
		input: "   hello  world  ",
		expected: ["hello", "world"],
	},
	{
		input: "123123",
		expected: ["123123"],
	},
	{ 
		input: " WE are kirk ", 
		expected: ["we", "are", "kirk"],
	},
	{
		input: "            ", 
		expected: [],
	}

	// More test cases go here 
])("cleanInput($input)", ({ input, expected }) => {
	test(`Expected: ${expected}`, () => {
		const actual = cleanInput(input);
		// The expect and tohavelength function are from vitest and will fail if they dont
		// get the expected values 

		expect(actual).toHaveLength(expected.length);
		for(const i in expected){
			expect(actual[i]).toBe(expected[i]);
		}
	});
});
