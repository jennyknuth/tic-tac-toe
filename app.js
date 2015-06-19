
var div = document.getElementsByTagName('div')
var board = document.getElementById('board')

var win = [['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3'], ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'], ['a1', 'b2', 'c3'], ['a3', 'b2', 'c1']]

// game constructor to initialize board
var Game = function () {
  this.obj = {}
  // this.objX = {}
  this.player = 'X'
  this.counter = 0
}

var game = new Game()

var clearBoard = function () {
  for (var i = 0; i < div.length; i++) {
    div[i].innerHTML = ''
  }
  game = new Game()
}

var checkWinner = function (player) {
  win.forEach(function (element) {
    if (game.obj[element[0]] === player && game.obj[element[1]] === player && game.obj[element[2]] === player) {
      this.alert(player + ' wins!')
      board.addEventListener('click', clearBoard())
    } else if (game.counter === 9) {
      this.alert('a draw!')
      board.addEventListener('click', clearBoard())
    }
  })
}

var handleEvent = function (event) {
  var player = game.player
  game.counter++
  if (event.target.innerHTML === '') {
    game.obj[event.target.id] = player
    event.target.innerHTML = player
    checkWinner(player)
    game.player = player === 'O' ? 'X' : 'O' // switch players
  }
}

for (var i = 0; i < div.length; i++) {
  div[i].addEventListener('click', handleEvent)
}
