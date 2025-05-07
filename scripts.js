

function MusicOn() {
  const SongON = document.getElementById("song");
  SongON.volume = 0.1;
  SongON.play();
}

const MusicOff = () =>{
    const SongOFF = document.getElementById("song");
   SongOFF.pause();
   SongOFF.currentTime = 0;
  }



  const MusicWin = () =>{
  const WinSong = document.getElementById("Win-Sound")
  WinSong.volume = 1
  WinSong.play()
  setTimeout(() => {
    WinSong.pause();
    WinSong.currentTime = 0;
  }, 5000);
}

const MusicLooser = () =>{

const LoseSong = document.getElementById("Loser-Sound")
LoseSong.volume = 1
LoseSong.play()
setTimeout(() => {
  LoseSong.pause();
  LoseSong.currentTime = 0;
}, 5000);

}
const GAME_OPTION  = {

ROCK: 'rock',
PALM:'palm',
SCISSORS: 'scissors'

}


let HumanScoreNumber = 0;
let MachineScoreNumber = 0;


const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [GAME_OPTION.ROCK, GAME_OPTION.PALM, GAME_OPTION.SCISSORS];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  const HumanScore = document.querySelector(".human-points");
  const MachineScore = document.querySelector(".alexa-points");

  console.log("Humano: " + human + "Maquina: " + machine);
  const result = document.getElementById("result");




  if (human === machine) {
    result.innerHTML = "EMPATE";
  } else if (
    (human === GAME_OPTION.PALM && machine === GAME_OPTION.ROCK) ||
    (human === GAME_OPTION.ROCK && machine === GAME_OPTION.SCISSORS) ||
    (human === GAME_OPTION.SCISSORS && machine === GAME_OPTION.PALM)
  ) {
    result.innerHTML = "VOCÊ GANHOU! Meus parabéns!";
    HumanScoreNumber++;
    HumanScore.innerHTML = HumanScoreNumber;
MusicWin()
}  
else {
    result.innerHTML = "PERDEU PARA UMA IA 😂😂";
    MachineScoreNumber++;
    MachineScore.innerHTML = MachineScoreNumber;
    MusicLooser()
  }
};




const ButtonReset = () => {

    const HumanScore = document.querySelector(".human-points");
    const MachineScore = document.querySelector(".alexa-points");
   
    HumanScoreNumber = 0;
   MachineScoreNumber = 0;

    HumanScore.innerHTML = HumanScoreNumber;
    MachineScore.innerHTML = MachineScoreNumber;
    result.innerHTML = "";
}