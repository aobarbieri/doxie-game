/* constants */

/* state variables */
let score
let speed
const grid = []
let dogBody = [284, 283, 282]
let direction
let interval
const numOfsquares = 20

/* cached elements */
const startScreen = document.querySelector('.start')
const btnStart = document.querySelector('.start button')
const count = document.querySelector('.start span')
const board = document.querySelector('#grid')
const endScreen = document.querySelector('.end')
const btnPlayAgain = document.querySelector('.end button')

/* event listeners */
btnStart.addEventListener('click', handleStartBtn)
document.addEventListener('keydown', handlePressedKey)
btnPlayAgain.addEventListener('click', handlePlayAgain)

/* functions */
function handleStartBtn() {
	startScreen.classList.add('hidden')
	interval = setInterval(checkNextStep, speed)
}

function handlePressedKey(e) {
	if (e.keyCode === 40) {
		//down
		direction = numOfsquares
	} else if (e.keyCode === 39) {
		//right
		direction = 1
	} else if (e.keyCode === 38) {
		//up
		direction = -numOfsquares
	} else if (e.keyCode === 37) {
		//left
		direction = -1
	}
}

function handlePlayAgain() {
    endScreen.classList.add('hidden')
    restart()
    interval = setInterval(checkNextStep, speed)
}

init()

function init() {
    speed = 800
    direction = 1
	render()
}

function render() {
	setGrid()
    setBoard()
	startPosition()
}

function setGrid() {
	while (grid.length < numOfsquares) {
		grid.push([])
	}
	for (let i = 0; i < grid.length; i++) {
		while (grid[i].length < numOfsquares) {
			grid[i].push('0')
		}
	}
}

function setBoard() {
	for (let column = 0; column < grid.length; column++) {
		for (let row = 0; row < grid[column].length; row++) {
			let newEl = document.createElement('div')
			board.appendChild(newEl)
			if (column % 2 !== 0) {
				row % 2 === 0 ? newEl.classList.add('dark-green') : newEl.classList.add('light-green')
			} else {
				row % 2 !== 0 ? newEl.classList.add('dark-green') : newEl.classList.add('light-green')
			}
		}
	}
}

function startPosition() {
    const startPosition = document.querySelectorAll('#grid div')
	startPosition[dogBody[0]].classList.add('body')
	startPosition[dogBody[1]].classList.add('body')
	startPosition[dogBody[2]].classList.add('body')
	// let cell = 0
	// for (const el of startPosition) {
	// 	el.innerHTML = cell
	// 	cell++
	// }
}

function checkNextStep() {
    const locations = document.querySelectorAll('#grid div')

	if (checkGameOver(locations)) {
        console.log('Game over - you hit a wall!')
        clearInterval(interval)
        showPlayAgain()
        return 
        
	} else {
		setDirection(locations)
	}
}

function setDirection(locations) {
	/* Grab the last element of the dogBody
    tail -> 152
    Access the tail index -> 152 = div with number 153 on it
    remove the class body from the div 153
    */
	let tail = dogBody.pop()
	locations[tail].classList.remove('body')
	/* Add the first element + the direction of dogBody
    at the beginning of its own array
    (154 + 1) dogBody = [155, 154, 153, 152]
    (154 + 15) dogBody = [169, 154, 153, 152]
    */
	dogBody.unshift(dogBody[0] + direction)
	console.log(dogBody)

	locations[dogBody[0]].classList.add('body')
}

function checkGameOver(locations) {
	if ([dogBody[0]] < 0 || [dogBody[0]] > locations.length || [dogBody[0]] % numOfsquares === 0 || [dogBody[0]] % 9 === 9) {
		return true
	} else return false
}

function showPlayAgain() {
	endScreen.classList.remove('hidden')
}

function restart() {
	direction = 1
	dogBody = [284, 283, 282]
	const locations = document.querySelectorAll('#grid div')
	for (const element of locations) {
		element.classList.remove('body')
	}
	startPosition(locations)
}
