let user =  0;
let comp =  0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const users = document.querySelector("#user");
const comps = document.querySelector("#comp");

users.innerText = user;
comps.innerText = comp;

const clickSound = new Audio("sound/click.mp3");
const winSound = new Audio("sound/win.mp3");
const loseSound = new Audio("sound/loose.mp3");

const gameChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a draw! Play again";
    msg.style.backgroundColor = "black";
    msg.classList.add("fade-in");
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        user++;
        users.innerText = user;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        winSound.play();
    } else {
        comp++;
        comps.innerText = comp;
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        loseSound.play();
    }


};

const playGame = (userChoice) => {
    clickSound.play();
    const compChoice = gameChoice();
    
    msg.classList.add("shake");
    setTimeout(() => {
        msg.classList.remove("shake");
    }, 500);
    
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
