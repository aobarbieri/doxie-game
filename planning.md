# Game: SNAKE (Dachshund as a character)


# Wireframe
https://www.figma.com/file/lOJ2dlLjrZpje13gi3NXQi/Dachshund-Game-(Snake)?type=design&node-id=0%3A1&mode=design&t=Zufn8p0i9zKF93FT-1


# Pseudocode 
$ Player clicks on a button to start the game 
   - The dog starts moving

$ Player uses the keyboard to navigate the dog towards the treat
  * Up, Down, Left, Right
  
$ Boundaries -> walls, dog body and backwards movements

$ Check if the dog hits its own body or the edges of the playing area (every time before each movement on the grid)
  * Game over 
      * hits its own body or the edges
      * Show the button Play Again -> a new game starts

$ Display treats on the grid based on a random location

$ Allow the dog to eat the treats
  - Treats disappear, and reappear on a random location
  - Updates the score -> treat count increases on the board


* Rules
  * Do not let the dog hit the edges of the playing area.
  * Do not let the dog hit its own body.
  * Your score is calculated based on the number of treats you eat.

* Win/Lose
  * Win - You win the game when there is no more room for the dog to grow.
    * For a quick and temporary demonstration of the win screen, the player can win when reaches score 70.
  * Lose - You lose the game if the dog hits its own body or the edges.


# App's functionality
- As a player, I want to have my score visible above the grid.
- As a SE, I want the game to end when the dog hits the edges of the playing area or its own body.
- As a player, I want to control the character using the keyboard arrows.
- As a SE, I want the treats to be placed randomly on the screen. 
- As a player, I want to play again after winning or losing.
- As a player, I want to guide the dog to eat the treat so it can grow longer.