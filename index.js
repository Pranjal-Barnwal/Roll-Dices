console.log("Welcome developer, to Roll Dices Project");

let btn = document.getElementById("btn");
let result = document.getElementById("result");

let uno = document.getElementById("img1");
let dos = document.getElementById("img2");

function updateImg(tag, num){
    let url = "./images/dice" + num + ".png";
    tag.setAttribute("src", url);
}

btn.addEventListener("click", () => {

    console.log("Button clicked.");

    let unoVal = Math.floor(Math.random() * 6) + 1;
    let dosVal = Math.floor(Math.random() * 6) + 1;

    updateImg(uno, unoVal);
    updateImg(dos, dosVal);
    
    btn.innerText = "Roll Again";

    if(unoVal > dosVal){
        result.innerHTML = "🚩Player 1 Wins"; 
    }
    else if(unoVal < dosVal){
        result.innerHTML = "Player 2 Wins 🚩"; 
    }
    else{
        result.innerHTML = "🏁 Match Draw 🏁"; 
    }
});