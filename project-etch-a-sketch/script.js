//declare body container reference
const body = document.querySelector("body");



//create box div element
const box = document.createElement("div");
//apply .box class with className --> styles referred to in css
box.className = "box";

//create header div for title of the game
const header = document.createElement("div");
//add header text content
header.textContent = "Etch-A-Sketch";
//append header div to body
body.append(header);
//apply .header class with className --> styles referred to in css
header.className = "header";

//create button to set number of squares
const playButton = document.createElement("button");
//add button text content
playButton.textContent = "Play";
//append play button to header div
header.append(playButton);
//apply .button class with className --> styles referred to in css
playButton.className = "button";

//append box div to body
body.append(box);

//add mouseover event listener to make squares change color
document.addEventListener("mouseover", (event) => {
    
    if(event.target.classList.contains("square")){
    
        //declare variable for mouseout event as false
        let id = event.target.id,
            targetSquare = document.getElementById(id);

        //if statement to check for whether square color changed
        if(id.slice(-1) === "c"){
            let targetStyles = window.getComputedStyle(event.target);
            let targetBackgroundColor = targetStyles.backgroundColor;
            let rgbValues = targetBackgroundColor.match(/\d+/g);
                newRed = parseInt(rgbValues[0]) - (parseInt(rgbValues[0]) * 0.2),
                newGreen = parseInt(rgbValues[1]) - (parseInt(rgbValues[1]) * 0.2),
                newBlue = parseInt(rgbValues[2]) - (parseInt(rgbValues[2]) * 0.2);
            event.target.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
        }
        //else set color
        else{
            let redRand = Math.floor(Math.random() * 161 + 70),
                greenRand = Math.floor(Math.random() * 161 + 70),
                blueRand = Math.floor(Math.random() * 161 + 70);
            //squares set to random color based off red, green, blue variables
            event.target.style.backgroundColor = `rgb(${redRand}, ${greenRand}, ${blueRand})`;
            event.target.id += "c";
        }
    }
});

//add event listener to create grid and start game of etch-a-sketch
playButton.addEventListener("click", () => {

    while(box.firstChild){
        box.removeChild(box.firstChild);
    }
    //browser will prompt user for row*column dimension number that must be a number between 1 and 100
    do{
        let dimensions = parseInt(prompt("Set x for a x*x grid of Etch-A-Sketch squares(Maximum of 100)."));
        if(0 < dimensions <= 100 && typeof dimensions === 'number'){
            i = true;        
            //create user specified number of row div elements *loop
            for(let a = 0; a < dimensions; a++){        
                //createElement call for rows
                let row = document.createElement("div");

                //create user specified number of square div elements *loop
                for(let i = 1; i <= dimensions; i++){
                    //createElement call for squares
                    const square = document.createElement("div");
                    //apply .square class with className --> styles referred to in css
                    square.className = "square";
                    square.id = "square" + i;
                    //append square divs in row div
                    row.append(square);
                    
                }

                //apply .row class with className --> styles referred to in css
                row.className = "row";
                //append all row divs in box div
                box.append(row);       
            }
        }
        else{
            prompt("That is not a valid entry. Choose a number from 1 to 100.");
            i = false;
        }
    }while (i = false)   
});