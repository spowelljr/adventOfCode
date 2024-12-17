const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
        let sum = 0
	const left = [];
	const right = [];
        lines.forEach(line => { 
                let arr = line.split('   ')
		left.push(arr[0]);
		right.push(arr[1]);
        })
	left.sort((a, b) => a - b);
	right.sort((a, b) => a - b);
	for (let i = 0; i < left.length; i++) {
		sum += Math.abs(left[i] - right[i]);
	}
        return sum
}

console.log(solve())
