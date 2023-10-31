
function getComputerChoice() {
    let computerChoice = ['rock', 'paper','scissors']
    let compSelec = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return compSelec
}

let playerPoints = 0
let computerPoints = 0
function playRound(playerSelection) {
    let computerSelection= getComputerChoice();
    if  ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        //won
        playerPoints += 1
        document.getElementById("wresult").innerHTML = "You win! "
         +playerSelection +" beats "+computerSelection +" <br>You have "
          + playerPoints +" points."
        
        if (playerPoints==5) {
            console.log("You've won the game! Congratulations!")
            document.getElementById('wresult').innerHTML= "You've won the game! Congratulations!"
            exit()
        }
    }else if (playerSelection == computerSelection) {
        console.log("it's a tie!")
    }else{
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)
        computerPoints += 1
        document.getElementById("lresult").innerHTML = "You loose! "
         +computerSelection +" beats "+playerSelection +" <br>Computer have's "
          + computerPoints +" points."
        if (computerPoints==5) {
            console.log("You've lost... Try again!")
            document.getElementById('lresult').innerHTML= "You've lost... Try again!"
            exit()
        }
    }

}