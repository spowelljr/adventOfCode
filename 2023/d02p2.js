const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
	return isValid(lines)
}

// You play several games and record the information from each game (your puzzle input). Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).
// For example, the record of a few games might look like this:
// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
// The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?
const isValid = lines => {
	let sum = 0
	lines.forEach(line => {
		const [game, cubes] = line.split(':')
		gameID = parseInt(game.split(' ')[1])
		const cubesList = cubes.split(';')
		const maxes = {red: 0, blue: 0, green: 0}
		cubesList.forEach(cur => {
			const sets = cur.trim().split(',')
			sets.forEach(set => {
				const [count, color] = set.trim().split(' ')
				const cc = parseInt(count)
				maxes[color] = maxes[color] < cc ? cc : maxes[color]
			})
		})
		sum += maxes.red * maxes.blue * maxes.green
	})
	return sum
}

console.log(solve())
