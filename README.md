# Cosmic Guardian 2nd Update
 ADDED: 
- spawnAsteriods function,
- rockets (see rockets section)
- Plane/jet can no longer collide with earth .
## ASTERIOD SPEED
- Also added variable which regulates the speed of which the asteriods fall towards Earth on Y-axis. This variable is called "asteriodSpeed"
- This variable can also allow for progressive hardness for the player of the game. As you can already see in the code in the spawnAsteriods function that the asteriod speed is being multiplied.
- Later when collision between the sprites of "rocket" and "asteriod" is coded in, we can also add a line of code which can increase the variable by and increment. This makes the asteriod fall down faster.

## ROCKETS
- In the game story, the rockets are used to destroy the asteriods and "save the earth from doom"
- They can be summoned/spawned into the game by simply pressing the space button.
- They are quite fast.

## SPAWN ASTERIODS FUNCTION
- Spawn asteriods function added.
- Allows for asteriods to be spawned in a random x coordinate.
- WARNING: short wait at start of game as asteriod y coordinate is outside of canvas 
  
