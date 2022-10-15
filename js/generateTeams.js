// desordenar a lista de seleções de forma randômica
async function randomTeams(){
  // console.log('Chamando o randomTeams');
  let teams = await get();

  let randomTeams = teams;
  
  for (let i = randomTeams.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = randomTeams[i];
    randomTeams[i] = randomTeams[j];
    randomTeams[j] = temp;
  }

  console.log(randomTeams);
  await separateGroups(randomTeams);
  
}

// separar a lista randomica em grupos de 4 seleções
async function separateGroups(randomTeams) {
  // console.log('Chamando o separateGroups');
  var groups = [];
  let identifierGroup = ["A","B","C","D","E","F","G","H"]
  let count = 0;
  for (let i = 0; i < 4; i++) {
    while(randomTeams.length) {
      let group = [identifierGroup[count], (randomTeams.splice(0,4))];
      groups.push(group);
      count++;
    }
  }
  // console.log(groups);
  // grupo | tag | lista de jogadores
  // tag do grupo:
  // console.log(groups[0][0][0]);
  // primeiro jogador do time B
  // console.log(groups[1][1][1]);
  printResult(groups);
  generatePoints(groups);
}

// Chama as funções para gerar os pontos das partidas
async function generatePoints(groups) {
  // console.log('Chamando o generatePoints');
  await firstRound(groups);
  // atributePoints();
  return;
}

async function firstRound(groups) {
  let firstRoundGoals= [];
  for (let i = 0; i < 32; i++) {
    firstRoundGoals[i] = Math.floor(Math.random() * (10));
  }  
  console.log("Pontos na primeira rodada:");
  console.log(firstRoundGoals);
  // console.log("Pontos na SEGUNDA rodada:");
  // console.log(secondRoundGoals);
  // console.log("Pontos na TERCEIRA rodada:");
  // console.log(thirdRoundGoals);
  await pointsPerRound(firstRoundGoals,groups);

}

async function pointsPerRound(goals,groups){
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
  };
  // pontuação de cada time nessa primeira etapa
  console.log(pointsPerRoundTeam);
  await secondRound(pointsPerRoundTeam,groups);
}

async function secondRound(pointsPerRoundTeam,groups) {
  // dizer os primeiros e segundos lugares de cada grupo

  // GRUPO A
  let teamAFirstRound = pointsPerRoundTeam.slice(0,4);
  console.log(teamAFirstRound);
  let team1A = await Math.max.apply(null,teamAFirstRound);
  let indexTeam1A = await teamAFirstRound.findIndex(item => item === team1A);
  let team2A = await secondMax(teamAFirstRound);
  let indexTeam2A = await teamAFirstRound.findIndex(value => value === team2A);
  var team1AData = {
    name : groups[0][1][indexTeam1A],
    points : team1A
  };
  var team2AData = {
    name : groups[0][1][indexTeam2A],
    points : team2A
  };
  
  // GRUPO B
  let teamBFirstRound = pointsPerRoundTeam.slice(4,8);
  console.log(teamBFirstRound);
  let team1B = await Math.max.apply(null,teamBFirstRound);
  let indexTeam1B = await teamBFirstRound.findIndex(item => item === team1B);
  let team2B = await secondMax(teamBFirstRound);
  let indexTeam2B = await teamBFirstRound.findIndex(value => value === team2B);
  var team1BData = {
    name : groups[1][1][indexTeam1B],
    points : team1B
  };
  var team2BData = {
    name : groups[1][1][indexTeam2B],
    points : team2B
  };

  // GRUPO C
  let teamCFirstRound = pointsPerRoundTeam.slice(8,12);
  let team1C = await Math.max.apply(null,teamCFirstRound);
  let indexTeam1C = await teamCFirstRound.findIndex(item => item === team1C);
  let team2C = await secondMax(teamCFirstRound);
  let indexTeam2C = await teamCFirstRound.findIndex(value => value === team2C);
  var team1CData = {
    name : groups[2][1][indexTeam1C],
    points : team1C
  };
  var team2CData = {
    name : groups[2][1][indexTeam2C],
    points : team2C
  };

  // GRUPO D
  let teamDFirstRound = pointsPerRoundTeam.slice(12,16);
  let team1D = await Math.max.apply(null,teamDFirstRound);
  let indexTeam1D = await teamDFirstRound.findIndex(item => item === team1D);
  let team2D = await secondMax(teamDFirstRound);
  let indexTeam2D = await teamDFirstRound.findIndex(value => value === team2D);
  var team1DData = {
    name : groups[3][1][indexTeam1D],
    points : team1D
  };
  var team2DData = {
    name : groups[3][1][indexTeam2D],
    points : team2D
  };

  // GRUPO E
  let teamEFirstRound = pointsPerRoundTeam.slice(16,20);
  let team1E = await Math.max.apply(null,teamEFirstRound);
  let indexTeam1E = await teamEFirstRound.findIndex(item => item === team1E);
  let team2E = await secondMax(teamEFirstRound);
  let indexTeam2E = await teamEFirstRound.findIndex(value => value === team2E);
  var team1EData = {
    name : groups[0][1][indexTeam1E],
    points : team1E
  };
  var team2EData = {
    name : groups[0][1][indexTeam2E],
    points : team2E
  };


  // GRUPO F
  let teamFFirstRound = pointsPerRoundTeam.slice(20,24);
  let team1F = await Math.max.apply(null,teamFFirstRound);
  let indexTeam1F = await teamFFirstRound.findIndex(item => item === team1F);
  let team2F = await secondMax(teamFFirstRound);
  let indexTeam2F = await teamFFirstRound.findIndex(value => value === team2F);
  var team1FData = {
    name : groups[0][1][indexTeam1F],
    points : team1F
  };
  var team2FData = {
    name : groups[0][1][indexTeam2F],
    points : team2F
  };

  // GRUPO G
  let teamGFirstRound = pointsPerRoundTeam.slice(24,28);
  let team1G = await Math.max.apply(null,teamGFirstRound);
  let indexTeam1G = await teamGFirstRound.findIndex(item => item === team1G);
  let team2G = await secondMax(teamGFirstRound);
  let indexTeam2G = await teamGFirstRound.findIndex(value => value === team2G);
  var team1GData = {
    name : groups[0][1][indexTeam1G],
    points : team1G
  };
  var team2GData = {
    name : groups[0][1][indexTeam2G],
    points : team2G
  };

  // GRUPO H
  let teamHFirstRound = pointsPerRoundTeam.slice(28,32);
  let team1H = await Math.max.apply(null,teamHFirstRound);
  let indexTeam1H = await teamHFirstRound.findIndex(item => item === team1H);
  let team2H = await secondMax(teamHFirstRound);
  let indexTeam2H = await teamHFirstRound.findIndex(value => value === team2H);
  var team1HData = {
    name : groups[0][1][indexTeam1H],
    points : team1H
  };
  var team2HData = {
    name : groups[0][1][indexTeam2H],
    points : team2H
  };
  
  // console.log(team2AData);

  document.getElementById('firstRoundTeam1A2B').innerHTML = (team1AData.name) + " : " + (team1AData.points) + " pontos</p>" + (team2BData.name) + " : " + (team2BData.points);
  document.getElementById('firstRoundTeam1C2D').innerHTML = (team1CData.name) + " : " + (team1CData.points) + " pontos</p>" + (team2DData.name) + " : " + (team2DData.points);
  document.getElementById('firstRoundTeam1E2F').innerHTML = (team1EData.name) + " : " + (team1EData.points) + " pontos</p>" + (team2FData.name) + " : " + (team2FData.points);
  document.getElementById('firstRoundTeam1G2H').innerHTML = (team1GData.name) + " : " + (team1GData.points) + " pontos</p>" + (team2HData.name) + " : " + (team2HData.points);
  document.getElementById('firstRoundTeam1B2A').innerHTML = (team1BData.name) + " : " + (team1BData.points) + " pontos</p>" + (team2AData.name) + " : " + (team2AData.points);
  document.getElementById('firstRoundTeam1D2C').innerHTML = (team1DData.name) + " : " + (team1DData.points) + " pontos</p>" + (team2CData.name) + " : " + (team2CData.points);
  document.getElementById('firstRoundTeam1F2E').innerHTML = (team1FData.name) + " : " + (team1FData.points) + " pontos</p>" + (team2EData.name) + " : " + (team2EData.points);
  document.getElementById('firstRoundTeam1H2G').innerHTML = (team1HData.name) + " : " + (team1HData.points) + " pontos</p>" + (team2GData.name) + " : " + (team2GData.points) ;

  let thirdRoundGoals= [];
  for (let i = 0; i < 16; i++) {
    thirdRoundGoals[i] = Math.floor(Math.random() * (10));
  }  
  console.log("GOLS NA SEMIFINAL:");
  console.log(thirdRoundGoals);

  let pointsPerRoundTeamThirdRound = [];
  let pointsPerRoundFirstTeam = [];
  let pointsPerRoundSecondTeam = [];
  let pointsTeamA;
  let pointsTeamB;
  // Comparar a cada 4 posições, ou seja, um grupo, qual foi a pontuação das seleções
  // A primeira seleção de cada grupo enfrenta em cada partida:
  // Partida 0: a segunda seleção
  // Partida 1: a terceira seleção
  // Partida 2: a quarta seleção
  // Dessa forma gera um array com  pontuações, por partida de cada grupo
  
  for (let j = 0; j < 16; j+=2) {
    // Primeira partida: 
    //seleção 0 contra seleção 1
    if (thirdRoundGoals[j] < thirdRoundGoals[j+1]) {
      pointsPerRoundFirstTeam.push(0);
      pointsPerRoundSecondTeam.push(3);
    } else if (thirdRoundGoals[j] > thirdRoundGoals[j+1]) {
      pointsPerRoundFirstTeam.push(3);
      pointsPerRoundSecondTeam.push(0);
    } else if (thirdRoundGoals[j] == thirdRoundGoals[j+1]) {
      pointsPerRoundFirstTeam.push(1);
      pointsPerRoundSecondTeam.push(1);  
    }

    pointsTeamA = pointsPerRoundFirstTeam[0];
    pointsPerRoundTeamThirdRound.push(pointsTeamA);  
    pointsPerRoundFirstTeam.pop();


    pointsTeamB = pointsPerRoundSecondTeam[0];
    pointsPerRoundTeamThirdRound.push(pointsTeamB);  
    pointsPerRoundSecondTeam.pop();

    // console.log(pointsTeamA);
    // console.log(pointsTeamB);
  };
  // pontuação de cada time nessa primeira etapa
  console.log('pontuação do povo da semifinal' + pointsPerRoundTeamThirdRound);
  // await secondRound(pointsPerRoundTeam,groups);

  let semifinalTeam1Index;
  let semifinalTeam2Index;
  let semifinalTeam3Index;
  let semifinalTeam4Index;

  if (pointsPerRoundTeamThirdRound[0] > pointsPerRoundTeamThirdRound[1]) {
    semifinalTeam1Index = team1AData;
  } else {
    semifinalTeam1Index = team1CData;
  }

  if (pointsPerRoundTeamThirdRound[2] > pointsPerRoundTeamThirdRound[3]) {
    semifinalTeam2Index = team1EData;
  } else {
    semifinalTeam2Index = team1GData;
  }


  if (pointsPerRoundTeamThirdRound[4] > pointsPerRoundTeamThirdRound[5]) {
    semifinalTeam3Index = team1BData;
  } else {
    semifinalTeam3Index = team1DData;
  }

  if (pointsPerRoundTeamThirdRound[6] > pointsPerRoundTeamThirdRound[7]) {
    semifinalTeam4Index = team1FData;
  } else {
    semifinalTeam4Index = team1HData;
  }

  document.getElementById('thirdRoundTeam1').innerHTML = (team1AData.name) + " : " + (team1AData.points) + " pontos</p>" + (team2BData.name) + " : " + (team2BData.points);
  document.getElementById('thirdRoundTeam2').innerHTML = (team1CData.name) + " : " + (team1CData.points) + " pontos</p>" + (team2DData.name) + " : " + (team2DData.points);
  document.getElementById('thirdRoundTeam3').innerHTML = (team1EData.name) + " : " + (team1EData.points) + " pontos</p>" + (team2FData.name) + " : " + (team2FData.points);
  document.getElementById('thirdRoundTeam4').innerHTML = (team1GData.name) + " : " + (team1GData.points) + " pontos</p>" + (team2HData.name) + " : " + (team2HData.points);

  let final = pointsPerRoundTeamThirdRound;
  let teamFinal = await Math.max.apply(null,final);
  let infexFinal = await final.findIndex(item => item === teamFinal);
  var champion = {
    name : groups[0][1][infexFinal],
    points : team1E
  };

  document.getElementById('champion').innerHTML = (champion.name);

}
// retornar o segundo lugar do grupo
async function secondMax(arr){ 
  var max = Math.max.apply(null, arr); // get the max of the array
  arr.splice(arr.indexOf(max), 1); // remove max from the array 
  return Math.max.apply(null, arr);// get the 2nd max
};

