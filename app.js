
var div = document.getElementsByTagName('div')
var board = document.getElementById('board')

var win = [[a1,a2,a3], [b1,b2,b3], [c1,c2,c3], [a1,b1,c1], [a2,b2,c2], [a3,b3,c3], [a1,b2,c3], [a3,b2,c1]]

var o = {}
var x = {}
var player = 'O'

console.log(div)

var handleEvent = function (event) {
  if (player === 'O' && event.target.innerHTML === '') {
    o[event.target.id] = 'O'
    event.target.innerHTML = 'O'
    console.log(o)
    player = 'X'
    checkWinner()
  } else if (player === 'X' && event.target.innerHTML === ''){
    x[event.target.id] = 'X'
    event.target.innerHTML = 'X'
    console.log(x)
    player = 'O'
    checkWinner()
  }

}

Array.prototype.forEach.call(div, function (element) {
  element.addEventListener('click', function (event) {
    console.log(event.target)
    handleEvent(event)
  })
})
