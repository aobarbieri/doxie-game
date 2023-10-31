let grid
grid = []

const elPlacement = document.querySelector('#grid')


//create a grid
function startGrid() {
	while (grid.length < 15) {
		grid.push([])
	}
	for (let i = 0; i < grid.length; i++) {
		while (grid[i].length < 15) {
			grid[i].push('0')
		}
	}
}

// append new cells and set color
function setGameArea() {
	for (let column = 0; column < grid.length; column++) {
		for (let row = 0; row < grid[column].length; row++) {
			let newEl = document.createElement('div')
			elPlacement.appendChild(newEl)

			if (column % 2 !== 0) {
				row % 2 === 0 ? newEl.classList.add('dark-green') : newEl.classList.add('light-green')
			} else {
				row % 2 !== 0 ? newEl.classList.add('dark-green') : newEl.classList.add('light-green')
			}
		}
	}
}

// count down after hit the button start
function countDown() {
	let start = 3
	while (start > 0) {
		count.textContent = start
		start--
		start === 0 ? console.log('GO!') : ''
	}
}

function checkGameOver(locations) {
	console.log(dogBody[0])
	let x = dogBody[0] % numOfsquares
	console.log(x)

	/* 
	** example: position on the grid: 299 [dogBody[0]] **
	up ✓ - is 299 less than 0? No -> continue
	down ✓ - is 299 + 20 greater than 400? No -> continue
	left ✓ - is 299 divided by 20 remainder 0? No -> continue
	right ✓ - is 299 divided by 20 remainder 19? Yes
	*/
	if (
		[dogBody[0]] - numOfsquares < 0 ||
		parseInt([dogBody[0]]) + numOfsquares > locations.length ||
		[dogBody[0]] % numOfsquares === 0 ||
		[dogBody[0]] % numOfsquares === numOfsquares - 1
	) {
		return true
	} else return false
}
