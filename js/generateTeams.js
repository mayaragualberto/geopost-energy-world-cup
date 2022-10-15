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
  separateGroups(randomTeams);
  
}

// separar a lista randomica em grupos de 4 seleções
async function separateGroups(randomTeams) {
  // console.log('Chamando o separateGroups');
  let groups = [];
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
}

