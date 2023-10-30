/* constants */

/* state variables */
let score
let speed
let grid = []
let dogBody = [0, 0, 0]
let move = 1

/* cached elements */
const startScreen = document.querySelector('.start')
const btnStart = document.querySelector('.start button')
const count = document.querySelector('.start span')
const board = document.querySelector('#grid')

/* event listeners */
btnStart.addEventListener('click', handleStartBtn)


/* functions */
function handleStartBtn() {
	startScreen.classList.add('hidden')
	//setInterval(setInicialLocation, 1000)
}

init()

function init() {
    render()
}

function render() {
	setGrid()
	setBoard()
	setInicialLocation()
	
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

function setInicialLocation() {
    let locations = document.querySelectorAll('#grid div')
    console.log(locations)
    // let cell = 0
    // for (const el of locations) {
    //     el.innerHTML = cell
    //     cell++
    // }


    let tail = dogBody.pop()
    locations[tail].classList.remove('dog-body')
    dogBody.unshift(dogBody[0] + move)

    locations[dogBody[0]].classList.add('dog-body') 

 
    
    
    
    
    
    //locations[e].classList.add('dog-body')
    
    // for (let el = 0; el < locations.length; el++){
    //     console.log(locations[el])
    // }

}



// let next = 0

// function move() {
//     let locations = document.querySelectorAll('#grid div')
//     console.log(locations[next])
//     locations[next].classList.add('dog-body')

//     next++
// }



// add class to snake body


// remove class from snake body