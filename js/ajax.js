async function get(){
  console.log('Chamando o ajax.js');
  let url = 'https://estagio.geopostenergy.com/WorldCup/GetAllTeams';
  let gitUser = 'mayara-gualberto';
  let teamsResult = [];

  await $.ajax({
    url: url,
    headers: {'git-user': gitUser},
    type: 'GET',
    dataType: 'JSON',
    success: function (data) {
      // mostrar a estrutura da API
      // console.log(datas); 
      data.Result.forEach(item => {
        teamsResult.push(item.Name); 
      });
    }
  });
  return teamsResult;
};
