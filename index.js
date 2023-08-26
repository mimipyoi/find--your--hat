//--- Please copy and paste your GitHub Repo on line 2 (optional) ---//
// <GitHub Repo>

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)

// requirement
// class field endup with 2d array that hold string
// class field had print method that paint whold field (suggest to print string instread if array)
// generated field static method taking width x height and percent argument to determine percent of hole

// step 1 : Function that generate 2 d array
// step 1.1 : 2d array take width and height 
// step 1.2 : random where to place const hold this take number
// step 1.2.1 : isn't take stupid way and take random chance then dice roll everyfield better? and that skip 1.5
// step 1.3 : place character at 0,0 (wait, no need, bruh)
// step 1.4 : place hat at random where it isn't 0,0 (fine if it replace hole?) don't know should i check this or not
// step 1.5 : else is place with fieldCharacter

// step 2 : how to make path move
// step 2.1 : prompt that keep taking W A S D ? (I love WASD so just let i be)
// step 2.2 : something that keep looping to move field[0][0] = pathCharacter or something to else
// step 2.3 : something that check what is on that space now
// step 2.4 : exit condition 

// step 3 : print function that repaint array to string by console log


// JS Assessment: Find your hat //

const prompt = require('prompt-sync')({ sigint: true }); // This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program by press Crtl+c
const clear = require('clear-screen');//every turn clear the screen that meant you will not get new field in time you choose the direction
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.positionX = 0;
    this.positionY = 0;
    // Set the "home" position before the game starts
    this.field[0][0] = pathCharacter;
    this.notDead = true;
  }

  //field generator is ok and tested
  static generateField(width, height, percentage = 0.3) {
    //1.1
    let field = new Array(height);
    for (let i = 0; i < height; i++) field[i] = new Array(width);
    
    //1.2
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            field[i][j] = Math.random() > percentage ? fieldCharacter : hole;
        }
    }
    
    //1.4 place hat
    field[Math.floor((Math.random())*width)][Math.floor((Math.random())*height)] = hat;

    //1.3 
    field[0][0] = pathCharacter;

    return field;
  }

  //print field method to make it eaier 
  print() {
    clear(); 
    // your print map code here
      }
  

  // the rest of your code starts here.

  move(direction) {

    // move hero
    direction = direction.toLowerCase()
    if (direction === 'w') this.positionY -= 1;
    else if (direction === 'a') this.positionX -= 1;
    else if (direction === 's') this.positionY += 1;
    else if (direction === 'd') this.positionX += 1;
    else return 0;

    // check if out of bound
    if (this.positionX < 0 || this.positionX >= this.field[0].length || this.positionY < 0 || this.positionY >= this.field.length ){
      this.notDead = false;
      console.log('Sadly but you jump out from stage!')
      return 0;
    }

    //check if it is hole
    if (this.field[this.positionY][this.positionX] === hole){
      this.notDead = false;
      console.log('You jump in to the hole!!')
      return 0;
    }

    //check if it is hat
    if (this.field[this.positionY][this.positionX] === hat){
      this.notDead = false;
      console.log('You found the hat, YOU WIN!!')
      return 0;
    }

    if (this.field[this.positionY][this.positionX] === fieldCharacter) this.field[this.positionY][this.positionX] = pathCharacter;
  }

  play() {
    this.notDead = true; 
    while(this.notDead){
      this.print()
      /* console.log(playField) */
      const direction = prompt ('Type W A S D and enter to move : ');
      this.move(direction)
  }
}

}


let playField = new Field(Field.generateField(10,10));
/* console.log(playField) */
playField.play()


