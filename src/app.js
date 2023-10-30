/* constants */

/* state variables */

let score
let speed
let grid = []

/* cached elements */
const startScreen = document.querySelector('.start')
const btnStart = document.querySelector('.start button')
const count = document.querySelector('.start span')
const board = document.querySelector('#grid')


/* event listeners */
btnStart.addEventListener('click', handleStartBtn)


function handleStartBtn() {
	startScreen.classList.add('hidden')
}

/* functions */
init()

function init() {
    render()
    
    board.addEventListener('click', getCell)
}

function render() {
	setGrid()
	setBoard()
}

function setGrid() {
	while (grid.length < 15) {
		grid.push([])
	}
	for (let i = 0; i < grid.length; i++) {
		while (grid[i].length < 15) {
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

function getCell(e) {
    console.log(e.target.dataset)
}
