let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock" , "paper" ,"scissors"]
    let idx = Math.floor(Math.random()*3);

    return options[idx];
}

const gameDraw = () =>{
    msg.innerText = "Match is Drawn!"
    msg.style.backgroundColor = "black"
}

const playGame = (userChoice) =>{ 
    
    // Generate computer choice
    let compChoice = genCompChoice();

    //compare the choices
    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "paper"){
            if(compChoice == "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }

        else if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }

        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You won !"
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;;
        msg.innerText = "You lost";
        msg.style.backgroundColor = "red";
        
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);    
    })
})