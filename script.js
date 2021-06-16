function computerPlay(){ //picks a random number
    let number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0){
        return "Rock";
    } else if (number % 3 === 1){
        return "Paper"
    }else if (number % 3 === 2) {
        return "Scissor"
    }
}

function playRound(playerSelection, computerSelection){ //plays a round
    playerSelection = prompt("Rock, paper or scissor?");
    computerSelection = computerPlay();

    let playerPoints = 0;
    let pcPoints = 0;

    if (computerSelection === "Rock"){
        if (playerSelection.toLowerCase() === "rock"){
            return `Tie! ${playerPoints} to ${pcPoints}`
        }else if (playerSelection.toLowerCase() === "scissor"){
            pcPoints++
            return `Rock beats scissor! ${playerPoints} to ${pcPoints}`
        }else if (playerSelection.toLowerCase() === "paper"){
            playerPoints++
                return `Paper beats rock! ${playerPoints} to ${pcPoints}`
        }
    }else if (computerSelection === "Paper"){
        if (playerSelection.toLowerCase() === "rock"){
            pcPoints++
            return `Paper beats rock! ${playerPoints} to ${pcPoints}`
        }else if (playerSelection.toLowerCase() === "paper"){
            return `Tie! ${playerPoints} to ${pcPoints}`
        }else if (playerSelection.toLowerCase() === "scissor"){
            playerPoints++
            return `Scissor beats paper! ${playerPoints} to ${pcPoints}`
        }
    }else if (computerSelection === "Scissor"){
        if (playerSelection.toLowerCase() === "rock"){
            playerPoints++
            return `Rock beats scissor! ${playerPoints} to ${pcPoints}`
        }else if (playerSelection.toLowerCase() === "paper"){
            pcPoints++
            return `Scissor beats paper! ${playerPoints} to ${pcPoints}`
        }else if (playerSelection.toLowerCase() === "scissor"){
                return `Tie! ${playerPoints} to ${pcPoints}`
        };
    };
};

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper, or scissor?");
        playerSelection = playerSelection.toLowerCase(); 
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))      
    }
    if(pcPoints < playerPoints){
        console.log(`You won! The score is: ${playerPoints} to ${pcPoints}`)
    }else if (pcPoints > playerPoints){
        console.log(`You lost! The score is: ${playerPoints} to ${pcPoints}`)
    }else{
        console.log(`You tied! The score is: ${playerPoints} to ${pcPoints}`)
    }
}