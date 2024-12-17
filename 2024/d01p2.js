const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
        let sum = 0
	const left = [];
	const right = new Map();
        lines.forEach(line => { 
                let arr = line.split('   ')
		left.push(arr[0]);
		let count = right.get(arr[1]) || 0;
		right.set(arr[1], count + 1);
        })
	for (let i = 0; i < left.length; i++) {
		sum += left[i] * (right.get(left[i]) || 0);
	}
        return sum
}

console.log(solve())
