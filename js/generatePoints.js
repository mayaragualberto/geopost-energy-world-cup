// Chama as funções para gerar os pontos das partidas
async function generatePoints() {
  // console.log('Chamando o generatePoints');
  firstRound();
  // atributePoints();
  return;
}

async function firstRound() {
  let firstRoundGoals= [];
  for (let i = 0; i < 32; i++) {
    firstRoundGoals[i] = Math.floor(Math.random() * (10));
  }  
  let secondRoundGoals= [];
  for (let i = 0; i < 32; i++) {
    secondRoundGoals[i] = Math.floor(Math.random() * (10));
  }  
  let thirdRoundGoals= [];
  for (let i = 0; i < 32; i++) {
    thirdRoundGoals[i] = Math.floor(Math.random() * (10));
  }
  console.log("Pontos na primeira rodada:");
  console.log(firstRoundGoals);
  // console.log("Pontos na SEGUNDA rodada:");
  // console.log(secondRoundGoals);
  // console.log("Pontos na TERCEIRA rodada:");
  // console.log(thirdRoundGoals);
  pointsPerRound(firstRoundGoals);
  // poinsPerRound(secondRoundGoals);
  // poinsPerRound(thirdRoundGoals);
}

async function pointsPerRound(goals){
  let pointsPerRound = goals;
  let pointsPerRoundTeam = [];
  let pointsPerRoundFirstTeam = [];
  let pointsPerRoundSecondTeam = [];
  let pointsPerRoundThirdTeam = [];
  let pointsPerRoundFourthTeam = [];

  let pointsTeamA;
  let pointsTeamB;
  let pointsTeamC;
  let pointsTeamD;
  // Comparar a cada 4 posições, ou seja, um grupo, qual foi a pontuação das seleções
  // A primeira seleção de cada grupo enfrenta em cada partida:
  // Partida 0: a segunda seleção
  // Partida 1: a terceira seleção
  // Partida 2: a quarta seleção
  // Dessa forma gera um array com  pontuações, por partida de cada grupo
  
  for (let j = 0; j < 32; j+=4) {
    // Primeira partida: 
    //seleção 0 contra seleção 1
    if (goals[j] < goals[j+1]) {
      pointsPerRoundFirstTeam.push(0);
      pointsPerRoundSecondTeam.push(3);
    } else if (goals[j] > goals[j+1]) {
      pointsPerRoundFirstTeam.push(3);
      pointsPerRoundSecondTeam.push(0);
    } else if (goals[j] == goals[j+1]) {
      pointsPerRoundFirstTeam.push(1);
      pointsPerRoundSecondTeam.push(1);  
    } 

    // seleção 0 contra seleção 2
    if (goals[j] < goals[j+2]) {
      pointsPerRoundFirstTeam.push(0);
      pointsPerRoundThirdTeam.push(3);
    }
    else if (goals[j] > goals[j+2]) {
      pointsPerRoundFirstTeam.push(3);
      pointsPerRoundThirdTeam.push(0);
    } else if (goals[j] == goals[j+2]) {
      pointsPerRoundFirstTeam.push(1);
      pointsPerRoundThirdTeam.push(1);
    } 
    // seleção 0 contra seleção 3
    if (goals[j] < goals[j+3]) {
      pointsPerRoundFirstTeam.push(0);
      pointsPerRoundFourthTeam.push(3);
    } else if (goals[j] > goals[j+3]) {
      pointsPerRoundFirstTeam.push(3);
      pointsPerRoundFourthTeam.push(0)
    } else if (goals[j] == goals[j+3]) {
      pointsPerRoundFirstTeam.push(1);
      pointsPerRoundFourthTeam.push(1);
    }

    // seleção 1 contra seleção 2
    if (goals[j+1] < goals[j+2]) {
      pointsPerRoundSecondTeam.push(0);
      pointsPerRoundThirdTeam.push(3);
    }
    else if (goals[j+1] > goals[j+2]) {
      pointsPerRoundSecondTeam.push(3);
      pointsPerRoundThirdTeam.push(0);
    } else if (goals[j+1] == goals[j+2]) {
      pointsPerRoundSecondTeam.push(1);
      pointsPerRoundThirdTeam.push(1);
    } 
    // seleção 1 contra seleção 3
    if (goals[j+1] < goals[j+3]) {
      pointsPerRoundSecondTeam.push(0);
      pointsPerRoundFourthTeam.push(3);
    } else if (goals[j+1] > goals[j+3]) {
      pointsPerRoundSecondTeam.push(3);
      pointsPerRoundFourthTeam.push(0)
    } else if (goals[j+1] == goals[j+3]) {
      pointsPerRoundSecondTeam.push(1);
      pointsPerRoundFourthTeam.push(1);
    }

    // seleção 2 contra seleção 3
    if (goals[j+2] < goals[j+3]) {
      pointsPerRoundThirdTeam.push(0);
      pointsPerRoundFourthTeam.push(3);
    } else if (goals[j+2] > goals[j+3]) {
      pointsPerRoundThirdTeam.push(3);
      pointsPerRoundFourthTeam.push(0)
    } else if (goals[j+2] == goals[j+3]) {
      pointsPerRoundThirdTeam.push(1);
      pointsPerRoundFourthTeam.push(1);
    }

    pointsTeamA = pointsPerRoundFirstTeam[0] + pointsPerRoundFirstTeam[1] + pointsPerRoundFirstTeam[2];
    pointsPerRoundTeam.push(pointsTeamA);  
    pointsPerRoundFirstTeam.pop();
    pointsPerRoundFirstTeam.pop();
    pointsPerRoundFirstTeam.pop();


    pointsTeamB = pointsPerRoundSecondTeam[0] + pointsPerRoundSecondTeam[1] + pointsPerRoundSecondTeam[2];
    pointsPerRoundTeam.push(pointsTeamB);  
    pointsPerRoundSecondTeam.pop();
    pointsPerRoundSecondTeam.pop();
    pointsPerRoundSecondTeam.pop();


    pointsTeamC = pointsPerRoundThirdTeam[0] + pointsPerRoundThirdTeam[1] + pointsPerRoundThirdTeam[2];
    pointsPerRoundTeam.push(pointsTeamC);
    pointsPerRoundThirdTeam.pop();
    pointsPerRoundThirdTeam.pop();
    pointsPerRoundThirdTeam.pop();


    pointsTeamD = pointsPerRoundFourthTeam[0] + pointsPerRoundFourthTeam[1] + pointsPerRoundFourthTeam[2];
    pointsPerRoundTeam.push(pointsTeamD); 
    pointsPerRoundFourthTeam.pop(); 
    pointsPerRoundFourthTeam.pop(); 
    pointsPerRoundFourthTeam.pop(); 

    // console.log(pointsTeamA);
    // console.log(pointsTeamB);
    // console.log(pointsTeamC);
    // console.log(pointsTeamD);
  }
  // pontuação de cada time nessa primeira etapa
  console.log(pointsPerRoundTeam);
  secondRound(pointsPerRoundTeam);
}

function secondRound(pointsPerRoundTeam) {
  // dizer os primeiros e segundos lugares de cada grupo
  let teamAFirstRound = pointsPerRoundTeam.slice(0,4);
  console.log(teamAFirstRound);
  let team1A = Math.max.apply(null,teamAFirstRound);
  let indexTeam1A = teamAFirstRound.findIndex(item => item === team1A);
  let team2A = secondMax(teamAFirstRound);
  let indexTeam2A = teamAFirstRound.findIndex(item => item === team2A);

  let team1AData = {
    name : groups[0][1][indexTeam1A],
    points : teamAFirstRound[indexTeam1A]
  };

  console.log(team1AData);

  let team1B;
  let team2B; 

  let team1C;
  let team2C;

  let team1D;
  let team2D;

  let team1E;
  let team2E;

  let team1F;
  let team2F;

  let team1G;
  let team2G;

  let team1H;
  let team2H;


}
// retornar o segundo lugar do grupo
function secondMax(arr){ 
  var max = Math.max.apply(null, arr); // get the max of the array
  arr.splice(arr.indexOf(max), 1); // remove max from the array
  return Math.max.apply(null, arr); // get the 2nd max
};