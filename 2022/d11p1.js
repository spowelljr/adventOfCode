const solve = () => {
	const monkeys = [{
		input: [50, 70, 89, 75, 66, 66],
		divis: 2,
		ifTrue: 2,
		ifFalse: 1,
		count: 0
	},
	{
		input: [85],
		divis: 7,
		ifTrue: 3,
		ifFalse: 6,
		count: 0
	},
	{
		input: [66, 51, 71, 76, 58, 55, 58, 60],
		divis: 13,
		ifTrue: 1,
		ifFalse: 3,
		count: 0
	},
	{
		input: [79, 52, 55, 51],
		divis: 3,
		ifTrue: 6,
		ifFalse: 4,
		count: 0
	},
	{
		input: [69, 92],
		divis: 19,
		ifTrue: 7,
		ifFalse: 5,
		count: 0
	},
	{
		input: [71, 76, 73, 98, 67, 79, 99],
		divis: 5,
		ifTrue: 0,
		ifFalse: 2,
		count: 0
	},
	{
		input: [82, 76, 69, 69, 57],
		divis: 11,
		ifTrue: 7,
		ifFalse: 4,
		count: 0
	},
	{
		input: [65, 79, 86],
		divis: 17,
		ifTrue: 5,
		ifFalse: 0,
		count: 0
	}]
	const counts = [0,0,0,0,0,0,0,0]
	for (let i = 0; i < 20; i++) {
		monkeys.forEach((monkey, j) => {
			console.log(monkey)
			while (monkey.input.length) {
				let item = monkey.input.shift()
				counts[j]++
				switch (j) {
					case 0:
						item *= 5
						break
					case 1:
						item *= item
						break
					case 2:
						item += 1
						break
					case 3:
						item += 6
						break
					case 4:
						item *= 17
						break
					case 5:
						item += 8
						break
					case 6:
						item += 7
						break
					case 7:
						item += 5
						break
				}
				item = Math.floor(item/3)
				if (item % monkey.divis === 0) {
					monkeys[monkey.ifTrue].input.push(item)
				} else {
					monkeys[monkey.ifFalse].input.push(item)
				}
			}
		})
	}
	console.log(counts)
	counts.sort((a,b) => b-a)
	return counts[0]*counts[1]
}

console.log(solve())
