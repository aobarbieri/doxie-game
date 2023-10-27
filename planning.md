# Choice of Game: SNAKE (Dachshund as a character)

# App's functionality

- As a player, I want to guide the dog to eat the treat so it can grow longer.
- As a player, I want the character to move faster each time it eats so it can fill up the space available.
- As a player, I want to control the character using the keyboard arrow.

* Rules
  -> Do not let the character hit a wall
  -> Do not bite your own body
  -> Your score is calculated based on the number of treats you eat

* Win/Lose
  Win -> You win the game when there is no more room for your dog to grow
  Lose -> You lose the game if the dog bites its body or hit a wall


# Pseudocode 

- Player click on a button to start the game -> make the dog move
- Player can use keyboard to go -> Up, Down, Left, Right
- Check if player let the dog hit the wall or bite itself
  - Game over -> bite itself or hit the wall
- Display treats on the grid based on random location
- Allow the dog to eat the treats
  - Treats disappear 
  - Count how many treats was eaten so far
- Show te score to the player so they know how many treats they ate.
  
  