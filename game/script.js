
let user = 0;
let comp = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const users = document.querySelector("#user");
const comps = document.querySelector("#comp");

const gameChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        user++;
        users.innerText = user;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You Lose");
        comp++;
        comps.innerText = comp;
        msg.innerText = `You Lost!${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = gameChoice();
    console.log(compChoice);
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
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});