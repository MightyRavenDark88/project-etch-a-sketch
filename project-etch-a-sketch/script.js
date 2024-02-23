//declare body container reference
const body = document.querySelector("body");

//declare variable for mouseout event as false
let isColorChanged = false;

//create box div element
const box = document.createElement("div");
//apply .box class with classlist --> styles referred to in css
box.classList("box");

//create header div for title of the game
const header = document.createElement("div");
//add header text content
header.textContent = "Etch-A-Sketch";
//append header div to body
body.append(header);
//apply .header class with classlist --> styles referred to in css
header.classList("header");

//create button to set number of squares
const playButton = document.createElement("button");
//add button text content
playButton.textContent = "Play";
//append play button to header div
header.append(playButton);
//apply .button class with classlist --> styles referred to in css
playButton.classList("button");

//append box div to body
body.append(box);

//add mouseover event listener to make squares change color

    //declare red, green, and blue variables using Math.random to randomize color value for background color rgb input

    //if statement to check for whether square color changed
        //squares set to random color based off red, green, blue variables
    //else color darkening per interaction

//add mouseout event listener to set status of color change
    //set mouseout variable to true

//add event listener to create grid and start game of etch-a-sketch
playButton.addEventListener("click", () => {

    //browser will prompt user for row*column dimension number
    do{
        let dimensions = prompt("Set x for a x*x grid of Etch-A-Sketch squares(Maximum of 100).");
        if(0 < dimensions <= 100 && typeof dimensions === 'number'){
            i = true;
        }
        else{
            prompt("That is not a valid entry. Choose a number from 1 to 100.");
            i = false;
        }
    }while (i = false)
    //create user specified number of row div elements *loop
            
            //create user specified number of square div elements *loop
                //createElement call for squares
                //append square divs in row div
                //apply .square class with classlist --> styles referred to in css
        
        //createElement call for rows
        //append all row divs in box div
        //apply .row class with classlist --> styles referred to in css
})