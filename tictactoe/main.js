/*posso usar um key value pra facilitar o acesso quando for marcar, <- facilita  a inserção de dados;
  ou usar um array e marcar as posições de forma virtual. <- facilita verificação;
*/
var game = [];

createTable();
//enquanto winner for falso tem jogo
var hasWinner = false;
//marcando qual player
var player = true;

function mark(element) {
  if (!hasWinner) {
    const simbol = player ? 'O': 'X';
    const id = element.id;
    if (game[id] === null) {
      element.innerText = simbol;
      game[id] = simbol;
      winnerVerification(simbol);
      player =! player;
    } else {
      alert('You have choose another!');
    }
  }
}

function winnerVerification(simbol) {
  let cells;
  if(game['a1'] == game['a2'] && game['a1'] == game['a3'] && game['a1'] != null) {
    cells = ['a1', 'a2', 'a3'];
    hasWinner = true;
  } else if(game['b1'] == game['b2'] && game['b3'] == game['b1'] && game['b1'] != null) {
    cells = ['b1', 'b2', 'b3'];
    hasWinner = true;
  } else if(game['c1'] == game['c2'] && game['c3'] == game['c1'] && game['c1'] != null) {
    cells = ['c1', 'c2', 'c3'];
    hasWinner = true;
  } else if(game['a1'] == game['b1'] && game['a1'] == game['c1'] && game['c1'] != null) {
    cells = ['a1', 'b1', 'c1'];
    hasWinner = true;
  } else if(game['a2'] == game['b2'] && game['a2'] == game['c2'] && game['a2'] != null) {
    cells = ['a2', 'b2', 'c2'];
    hasWinner = true;
  } else if(game['a3'] == game['b3'] && game['a3'] == game['c3'] && game['a3'] != null) {
    cells = ['a3', 'b3', 'c3'];
    hasWinner = true;
  } else if(game['a1'] == game['b2'] && game['a1'] == game['c3'] && game['a1'] != null) {
    cells = ['a1', 'b2', 'c3'];
    hasWinner = true;
  } else if(game['c1'] == game['b2'] && game['c1'] == game['a3'] && game['c1'] != null) {
    cells = ['c1', 'b2', 'a3'];
    hasWinner = true;
  }

  if (hasWinner) {
    const divWinner = document.querySelector('div#winner');
    divWinner.innerHTML = `<h1>O player <strong>${simbol}</strong> ganhou</h1>`;
    for(i=0; i < 3; i++)
      document.querySelector('td#'+cells[i]).style.backgroundColor = 'rgb(175, 243, 155)';
  }
}

function createTable() {
  let l = 'a';
  while( l != 'd') {
    for(i= 1; i <= 3; i++) {
      index = l + i;
      game[index] = null;
    }
    l = String.fromCharCode(l.charCodeAt(0) +1);
  }
}

function wipetable() {
  let cell;
  let l = 'a';
  while( l != 'd') {
    for(i= 1; i <= 3; i++) {
      id = l + i;
      cell = document.querySelector('td#'+id);
      cell.innerText = '';
      cell.style.background = 'white';
    }
    l = String.fromCharCode(l.charCodeAt(0) +1);
  }
}

function reloadGame() {
  createTable();
  wipetable();
  hasWinner = false;
}