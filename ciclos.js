const computer = ["piedra", "papel", "tijera"]

function game(option) {
  computerChoice = computer[Math.floor(Math.random() * computer.length)]
  if(option === computerChoice ){
    console.log("empate")
  }else if(computerChoice === "piedra" && option === "papel"){
    console.log("You won!")
  } else if (computerChoice === "papel" && option === "tijera"){
    console.log("You won!")
  } else if (computerChoice === "tijera" && option === "piedra"){
    console.log("You won!")
  }else{
    console.log("Computer Won!")
  }
}

game("tijera");
