document.addEventListener("DOMContentLoaded", button);
function button() {
    //create button
    let button = document.createElement("button");
    //add button text
    let btnText =  document.createTextNode("Add square!");
    //set button class
    button.className = "button";
    //put text in button
    button.appendChild(btnText);
    //put button in body
    document.body.appendChild(button);
    //create id counter
    let id = 0;
    let container = document.createElement("div");
    document.body.appendChild(container);

    button.addEventListener("click", buttonClick);
    function buttonClick() {
        id++;
        let square = document.createElement("div");
        square.id = id;
        square.className = "black-square";
        let p = document.createElement("p");
        //create squareText variable and set it to the id
        let squareText = document.createTextNode(id);
        //put square text into p
        p.appendChild(squareText);
        //put p in the div
        square.appendChild(p);
        //put div in the body
        container.appendChild(square);
        //set opacity of p to 0
        p.style.opacity = "0";

        square.addEventListener("mouseenter", hover);
        function hover() {
            p.style.opacity="1";
        }

        //listen for mouse to stop hovering over div
        square.addEventListener("mouseleave", noHover);
        function noHover() {
            p.style.opacity="0";
        }

        square.addEventListener("click", squareClick);
        function squareClick() {
            //generate random int 1 through 5
            let num = Math.floor(Math.random() * 6);
            //set color based on int value
            if (num === 0) {
                square.style.backgroundColor = "blue";
            } else if (num === 1) {
                square.style.backgroundColor = "purple";
            } else if (num === 2) {
                square.style.backgroundColor = "green";
            } else if (num === 3) {
                square.style.backgroundColor = "red";
            } else if (num === 4) {
                square.style.backgroundColor = "yellow";
            } else if (num === 5) {
                square.style.backgroundColor = "orange";
            }
        }

        square.addEventListener("dblclick", squareDoubleClick);
        function squareDoubleClick() {
            //check for odd or even
            if (square.id % 2 === 0) {
                //set variable to current ID + 1
                let elementID = parseInt(square.id) + 1;
                //set variable to element with that ID
                let element = document.getElementById(elementID);
                //delete element or display an alert depending on if element exists
                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    container.removeChild(square.nextSibling);
                }      
            } else {
                let elementID = parseInt(square.id) - 1;
                let element = document.getElementById(elementID);
                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    container.removeChild(square.previousSibling);
                }
            }
        }
    }

}