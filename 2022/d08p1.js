const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let count = 0
	const rows = lines.map(line => line.split('').map(n => parseInt(n)))
	const isVisible = lines.map(line => line.split('').map(n => false))
	for (let i = 0; i < rows.length; i++) {
		let max = -1
		for (let j = 0; j < rows[0].length; j++) {
			const curr = rows[i][j]
			if (curr <= max) continue
			max = curr
			if (isVisible[i][j]) continue
			isVisible[i][j] = true
			count++
		}
		max = -1
		for (let j = 0; j < rows[0].length; j++) {
                        const curr = rows[j][i]
                        if (curr <= max) continue
                        max = curr
                        if (isVisible[j][i]) continue
                        isVisible[j][i] = true
                        count++
                }
		max = -1
		for (let j = rows[0].length-1; j >= 0; j--) {
			const curr = rows[i][j]
                        if (curr <= max) continue
                        max = curr
			if (isVisible[i][j]) continue
                        isVisible[i][j] = true
			count++
		}
		max = -1
		for (let j = rows[0].length-1; j >= 0; j--) {
                        const curr = rows[j][i]
                        if (curr <= max) continue
                        max = curr
			if (isVisible[j][i]) continue
                        isVisible[j][i] = true
			count++
                }
	}
	return count
}

console.log(solve())
