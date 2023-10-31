/* constants */

/* state variables */
let score
let speed
let grid = []
let dogBody = [0, 0, 0]

/* cached elements */
const startScreen = document.querySelector('.start')
const btnStart = document.querySelector('.start button')
const count = document.querySelector('.start span')
const board = document.querySelector('#grid')

/* event listeners */
btnStart.addEventListener('click', handleStartBtn)
document.addEventListener('keydown', handlePressedKey)

/* functions */
function handleStartBtn() {
	startScreen.classList.add('hidden')
	setInterval(setInicialLocationAndMove, 1000)
}

function handlePressedKey(e) {
    if (e.keyCode === 40) {
		console.log('down arrow pressed')
	} else if (e.keyCode === 39) {
		console.log('right arrow pressed')
	} else if (e.keyCode === 38) {
		console.log('up arrow pressed')
	} else if (e.keyCode === 37) {
		console.log('left arrow pressed')
	}
}

init()

function init() {
    render()
}

function render() {
	setGrid()
	setBoard()
	setInicialLocationAndMove()
	
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

function setInicialLocationAndMove() {
    let locations = document.querySelectorAll('#grid div')
    //console.log(locations)
    let cell = 0
    for (const el of locations) {
        el.innerHTML = cell
        cell++
    }

    let tail = dogBody.pop()
    locations[tail].classList.remove('body')
    dogBody.unshift(dogBody[0] + 1)
    locations[dogBody[0]].classList.add('body') 
}




