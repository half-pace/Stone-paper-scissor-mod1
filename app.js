let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was a draw!");
}

const showWinner = () => {
    if (userWin) {
        console.log("You Won!");
    }else {
        console.log("Computer Won!");
    }
}

const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    //Generate computer choice 
    const compChoice = genCompChoice();
    console.log("Computer Choice: ", compChoice);

    //to check who won
    if (userChoice === compChoice) {
        //draw condition
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            //scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //stone or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //stone or paper
            userWin = compChoice === "stone"? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach(choice => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});