var numSquares = 6;
var colors = [];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.getElementById("newColor");
var modeButton = document.querySelectorAll(".mode");
//ustvarimo funkcijo ki se bo zagnala ko se stran zloada.
init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}
    //mode buttons event listeners:
function setupModeButtons() {
    for(var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
        });
    };
}
function setupSquares() {
    for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
        squares[i].style.background = colors[i];
            //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if ( clickedColor === pickedColor) {
                changeColors(clickedColor);
                messageDisplay.textContent = "Correct!";
                newColors.textContent = "Play Again?";
                h1.style.background = clickedColor;
                
            }else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    };
}
function reset(){
     //generate all new colors
    colors = generateRandomColors(numSquares);
    newColors.textContent = "New Colors";
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }else {
            squares[i].style.display="none";
        }
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
}

newColors.addEventListener("click", function(){
    /*//generate all new colors
    colors = generateRandomColors(numSquares);
    this.textContent = "New Colors";
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";*/
    reset();
});


/*easy.addEventListener("click", function(){
    hard.classList.remove("selected");
    this.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.background = colors[i];
            h1.style.background = "steelblue";
            messageDisplay.textContent = "";
        }else {
            squares[i].style.display = "none";
        }

    }
});
hard.addEventListener("click", function(){
    easy.classList.remove("selected");
    this.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
        h1.style.background = "steelblue";
        messageDisplay.textContent = "";
    }
});*/


function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
  
};
function pickColor (){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    //pick red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};








               