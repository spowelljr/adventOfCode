const { readLines } = require('../input')

const solve = () => {
	const nums = readLines().map(l => parseInt(l))
	let count = 0
	for (let i = 0; i < nums.length-1; i++) {
		if (nums[i] < nums[i+1]) count++
	}
	return count
}

console.log(solve())
