let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const users = document.querySelector("#user");
const comps = document.querySelector("#comp");

const clickSound = new Audio("sound/click.mp3");
const winSound = new Audio("sound/win.mp3");
const loseSound = new Audio("sound/lose.mp3");


const gameChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "It's a Draw! Play again.";
    msg.style.backgroundColor = "black";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        user++;
        users.innerText = user;
        msg.innerText = ` You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        winSound.play(); 
    } else {
        console.log("You Lose");
        comp++;
        comps.innerText = comp;
        msg.innerText = ` You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        loseSound.play(); 
    }
};

const playGame = (userChoice) => {
    clickSound.play(); 
    console.log(`User Choice: ${userChoice}`);
    
    const compChoice = gameChoice();
    console.log(`Computer Choice: ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

window.onload = () => {
    user = 0;
    comp = 0;
    users.innerText = user;
    comps.innerText = comp;
    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "black";
};
