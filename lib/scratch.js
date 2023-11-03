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

function render() {
	setGrid()
	setBoard()
	startPosition()
	const locations = document.querySelectorAll('#grid div')
	for (const el of locations) {
		//el.classList.add('dog')
	}
	setTreatLocation(locations)
}


/*
Rotate the head and tail

Key codes:
left 37 
right 39
up 38
down 40 

numOfSquares = 20

Directions: 
20 goes down
1 goes right
-1 goes left
-20 goes up


Direction 1 and -1
If going RIGHT or LEFT and hit to:
- go down 40 -> 90d
- go up 38 -> -90d

Direction 20 and -20
If going DOWN or UP and hit to:
- go left 37 -> 180
- go right 39 - 0
*/