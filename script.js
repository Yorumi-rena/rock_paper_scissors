function computerPlay(){
    let number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0){
        return "Rock";
    } else if (number % 3 === 1){
        return "Paper"
    }else if (number % 3 === 2) {
        return "Scissor"
    }
}
    console.log(computerPlay());
    
function playRound(playerSelection, computerSelection){
    if (computerSelection === "Rock"){
        if (playerSelection.toLowerCase() === "rock"){
            return "Tie!";
        } else if (playerSelection.toLowerCase() === "scissor"){
            return "Computer wins!"
        } else if (playerSelection.toLowerCase() === "paper"){
            return "Player wins!"
        }
    }else if (computerSelection === "Paper"){
        if (playerSelection.toLowerCase() === "rock"){
            return "Computer wins!"
        }else if (playerSelection.toLowerCase() === "paper"){
            return "Tie!"
        }else if (playerSelection.toLowerCase() === "scissor"){
            return "Player wins!"
        }
    }else if (computerSelection === "Scissor"){
        if (playerSelection.toLowerCase() === "rock"){
            return "Player wins!"
        }else if (playerSelection.toLowerCase() === "paper"){
            return "Computer wins!"
        }else if (playerSelection.toLowerCase() === "scissor"){
            return "Tie!"
        }
    }
}
const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){
    if(playRound() === "Computer wins!"){
        return "0-1"
    }else if(playRound() === "Player wins!"){
        return "1-0"
    }
}
console.log(game());