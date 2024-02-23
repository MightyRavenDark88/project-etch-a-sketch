//declare body container reference
const body = document.querySelector("body");



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
square.addEventListener("mouseover", () => {
    //declare variable for mouseout event as false
    let id = target.id,
        targetSquare = document.getElementById(id);

    //if statement to check for whether square color changed
    if(id.slice(-1) === "c"){
        let targetStyles = window.getComputedStyle(targetSquare),
            targetBackgroundColor = targetStyles.backgroundColor,
            rgbValues = targetBackgroundColor.match(/\d+/g),
            newRed = Math.max(0, rgbValues[0] * 0.9),
            newGreen = Math.max(0, rgbValues[1] * 0.9),
            newBlue = Math.max(0, rgbValues[2] * 0.9);
        targetSquare.style.backgroundColor = 'rgb(${newRed}, ${newGreen}, ${newBlue})';
    }
    //else set color
    else{
        let red = Math.floor(Math.random() * 161 + 70),
            green = Math.floor(Math.random() * 161 + 70),
            blue = Math.floor(Math.random() * 161 + 70);
        //squares set to random color based off red, green, blue variables
        targetSquare.style.backgroundColor = 'rgb(${red}, ${green}, ${blue})';
        target.id += "c";
    }
});
//add mouseout event listener to set status of color change
    //set mouseout variable to true

//add event listener to create grid and start game of etch-a-sketch
playButton.addEventListener("click", () => {

    //browser will prompt user for row*column dimension number that must be a number between 1 and 100
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
    for(i = 0; i < dimensions; i++){        
        //createElement call for rows
        let row = document.createElement("div");

        //create user specified number of square div elements *loop
        for(i = 1; i <= dimensions; i++){
            //createElement call for squares
            let square = document.createElement("div");
            //apply .square class with classlist --> styles referred to in css
            square.classList("square");
            square.id = "square" + i;
            //append square divs in row div
            row.append(square);
        }

        //apply .row class with classlist --> styles referred to in css
        row.classList("row");
        //append all row divs in box div
        box.append(row);       
    }
});