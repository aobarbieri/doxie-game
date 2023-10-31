/* constants */

/* state variables */
let score
let speed
let grid = []
let dogBody = [154, 153, 152]
let direction = 1
let interval 
let numOfsquares

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
	interval = setInterval(setInicialLocation, 1000)
}

function handlePressedKey(e) {
    if (e.keyCode === 40) { //down
        direction = numOfsquares
	} else if (e.keyCode === 39) { //right
        direction = 1
	} else if (e.keyCode === 38) { //up
        direction = -numOfsquares
	} else if (e.keyCode === 37) { //left
        direction = -1
	}
}

init()

function init() {
    numOfsquares = 20
    render()
}

function render() {
	setGrid()
    setBoard()
    setInicialLocation()
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

function setInicialLocation() {
    let locations = document.querySelectorAll('#grid div')
    let cell = 0
    for (const el of locations) {
        el.innerHTML = cell
        cell++
    }
    result = gameOver(locations)
    locations[dogBody[0]].classList.add('body')
    locations[dogBody[1]].classList.add('body')
    locations[dogBody[2]].classList.add('body') 
	
    setDirection(locations)
}

function setDirection(locations) {
    /* Add the first element + the direction of dogBody
    at the beginning of its own array
    (154 + 1) dogBody = [155, 154, 153, 152]
    (154 + 15) dogBody = [169, 154, 153, 152]
    */
    dogBody.unshift(dogBody[0] + direction)
    console.log(dogBody)
    if (result) {
		console.log('Game over - you hit a wall!')
		return clearInterval(interval)
	}
    locations[dogBody[0]].classList.add('body')
    
    /* Grab the last element of the dogBody
    tail -> 152
    Access the tail index -> 152 = div with number 153 on it
    remove the class body from the div 153
    */
    let tail = dogBody.pop()
    locations[tail].classList.remove('body')
}

function gameOver(locations) {
    if ([dogBody[0]] < 0 || [dogBody[0]] > locations.length ||
        [dogBody[0]] % numOfsquares === 0 || [dogBody[0]] % 9 === 9) {
        return true
    } else return false
}




