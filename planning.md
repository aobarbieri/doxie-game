# Choice of Game: SNAKE (Dachshund as a character)

# Wireframe
https://www.figma.com/file/lOJ2dlLjrZpje13gi3NXQi/Dachshund-Game-(Snake)?type=design&node-id=0%3A1&mode=design&t=Zufn8p0i9zKF93FT-1


* Rules
  * Do not let the dog hit a wall
  * Do not let the dog bite its own body
  * Your score is calculated based on the number of treats you eat

* Win/Lose
  * Win - You win the game when there is no more room for the dog to grow
  * Lose - You lose the game if the dog bites its body or hit a wall


# App's functionality
- As a player, I want to guide the dog to eat the treat so it can grow longer.
- As a player, I want to have my score visibile above the grid.
- As a SE, I want the user to win when there is not more room for the dog to grow.

- DONE - As a SE, I want the game to end when the player hits the wall or bites the body.
- DONE - As a player, I want to control the character using the keyboard arrow.
- DONE - As a SE, I want the treats to be placed randomly on the screen 
- DONE - As a player, I want to play again after winning or losing.


# Pseudocode 
$ Allow the dog to eat the treats
  - Treats disappear, and reappear on a random location
  - Updates the score -> treat count increases on the board
  
$ DONE - Player clicks on a button to start the game 
  DONE - The dog starts moving

$ DONE - Player uses the keyboard to navigate the dog towards the treat
  * Up, Down, Left, Right
  
$ DONE - Set boundaries -> walls, dog body and backwards movements

$ DONE - Check if the dog hit a wall or bite itself (every time before each movement on the grid)
  * Game over 
      * bite itself or hit the wall
      * Show the button Play Again -> a new game starts

$ DONE - Display treats on the grid based on random location



# ICEBOX 
- As a aplayer, I want to be shown a count down to the start of the game.
- As a player, I want the dog to move faster each time it eats so the game becomes more challenging.
- As a player, I want to select which dog I want to play with (Tyler of Taylor).