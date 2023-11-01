/* constants */

/* state variables */
let score
let speed
const grid = []
let dogBody = [284, 283, 282]
let direction
let interval
const numOfsquares = 20
let treatPlacement
let tail

/* cached elements */
const startScreen = document.querySelector('.start')
const btnStart = document.querySelector('.start button')
const count = document.querySelector('.start span')
const board = document.querySelector('#grid')
const endScreen = document.querySelector('.end')
const btnPlayAgain = document.querySelector('.end button')
const food = document.createElement('img')
const scoreEl = document.getElementById('score')
const headEl = document.createElement('img')
const tailEl = document.createElement('img')

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
		direction = numOfsquares
	} else if (e.keyCode === 39) {
		direction = 1
	} else if (e.keyCode === 38) {
		direction = -numOfsquares
	} else if (e.keyCode === 37) {
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
	speed = 300
	direction = 1
	score = 0
    food.src = './images/food.png'
    food.alt = 'Dog treat'
	food.classList.add('food')
	headEl.src = './images/doxie-head.svg'
	headEl.alt = 'Dog head'
	headEl.classList.add('head')
	tailEl.src = './images/doxie-tail.svg'
	tailEl.alt = 'Dog tail'
	tailEl.classList.add('tail')
	render()
}

function render() {
	setGrid()
	setBoard()
    startPosition()
    setTreatLocation()
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
	// head
	let parentHead = startPosition[dogBody[0]]
	parentHead.classList.add('relative')
	parentHead.appendChild(headEl)

	// body
	let parentBody = startPosition[dogBody[1]]
	parentBody.classList.add('body')

	// tail
	let parentTail = startPosition[dogBody[dogBody.length - 1]]
	parentTail.classList.add('relative')
	parentTail.appendChild(tailEl)

}

function checkNextStep() {
	const locations = document.querySelectorAll('#grid div')
	if (checkGameOver(locations)) {
		clearInterval(interval)
		showPlayAgain()
		return
	} else {
		setDirection(locations)
	}
}

function setDirection(locations) {
	tail = dogBody.pop()
	locations[tail].classList.remove('body')
	dogBody.unshift(dogBody[0] + direction)

	//head
	let parentHead = locations[dogBody[0]]
	parentHead.classList.add('relative')
	parentHead.appendChild(headEl)
	
	//body
	let parentBody = locations[dogBody[0] - direction]
	parentBody.classList.add('body')
	
	//tail
	let parentTail = locations[dogBody[dogBody.length - 1]]
	parentTail.classList.add('relative')
	parentTail.classList.remove('body')
	parentTail.appendChild(tailEl)
	
	growAndUpdateScore()
}

function checkGameOver(locations) {
	if (
		[dogBody[0]] - numOfsquares < 0 && direction === -numOfsquares ||
		parseInt([dogBody[0]]) + numOfsquares >= locations.length && direction === numOfsquares ||
		[dogBody[0]] % numOfsquares === 0 && direction === -1 ||
		[dogBody[0]] % numOfsquares === numOfsquares - 1 && direction === 1||
		locations[dogBody[0] + direction].classList.contains('body')
	) {
		return true
	} else return false
}

function showPlayAgain() {
	endScreen.classList.remove('hidden')
}

function restart() {
	direction = 1
	score = 0
	scoreEl.textContent = score
	dogBody = [284, 283, 282]
	const locations = document.querySelectorAll('#grid div')
	for (const element of locations) {
		element.classList.remove('body')
	}
	startPosition(locations)
	setTreatLocation()
}

function generateRandom(locations) {
	const randomIndex = Math.floor(Math.random() * (locations.length + 1))
	return randomIndex
}

function setTreatLocation() {
	const locations = document.querySelectorAll('#grid div')
	do {
		treatPlacement = generateRandom(locations)
	} while (locations[treatPlacement].classList.contains('body'))
	locations[treatPlacement].classList.add('relative')
	locations[treatPlacement].append(food)
}

function growAndUpdateScore() {
	if (dogBody[0] === treatPlacement) {
		dogBody.push(tail)
		score++
		scoreEl.textContent = score
		setTreatLocation()
	}
}

/*
Rotate the head
-> Difference between Head index and the Next location Index:
if the difference is greater than 1: rotate 90deg

if the difference is less than 1: rotate

*/
