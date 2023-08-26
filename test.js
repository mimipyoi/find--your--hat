function generateField(width, height, percentage = 0.20) {
    //1.1
    let field = new Array(height);
    for (i = 0; i < width; i++) field[i] = new Array(width);
    
    //1.2
    let x = 0;
    for (i = 0; i < width; i++) {
        for (j = 0; j < height; j++){
            field[i][j] = Math.random() > percentage ? 0:1;
            x++;
        }
    }

    //1.3 place hat
    field[Math.floor((Math.random())*width)][Math.floor((Math.random())*height)] = '^';

    //1.4 place hero
    field[0][0] = 'x'
    print(field)
    return field;
  }

function print(field) {
    /* clear(); */
    // your print map code here
    let lineDisplay = '';
    for (i = 0; i < field.length; i++){
      lineDisplay = '';
      for (j = 0; j < field[0].length; j++){
        lineDisplay += field[i][j];
      }
      console.log(lineDisplay);
    }
  }


const test = generateField(5,5);
console.log(test)

