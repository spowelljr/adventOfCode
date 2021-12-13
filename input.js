const fs = require('fs')

const readLines = () => {
	const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
	lines.pop()
	return lines
}

module.exports = { readLines }
