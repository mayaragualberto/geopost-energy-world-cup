function printResult(groups) {
  console.log('Chamando printResult');
  document.getElementById('teamA').innerHTML = groups[0][1].join('</p>');
  document.getElementById('teamB').innerHTML = groups[1][1].join('</p>');
  document.getElementById('teamC').innerHTML = groups[2][1].join('</p>');
  document.getElementById('teamD').innerHTML = groups[3][1].join('</p>');
  document.getElementById('teamE').innerHTML = groups[4][1].join('</p>');
  document.getElementById('teamF').innerHTML = groups[5][1].join('</p>');
  document.getElementById('teamG').innerHTML = groups[6][1].join('</p>');
  document.getElementById('teamH').innerHTML = groups[7][1].join('</p>');
}