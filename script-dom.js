let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function computerPlay(){ //picks a random number
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convert(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You win!`
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You lose!`
}

function tie(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} equals ${convert(computerChoice)}!`
}

function game(userChoice) {
    const computerChoice = computerPlay();
    switch (userChoice + computerChoice){
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie();
            break;
    }
}

function main() {
rock_div.addEventListener("click", function() {
    game("r")
})
paper_div.addEventListener("click", function() {
    game("p")
})
scissor_div.addEventListener("click", function() {
    game("s")
})
}

main();
