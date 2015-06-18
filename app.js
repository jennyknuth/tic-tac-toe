var div = document.getElementsByTagName('div')
var board = document.getElementById('board')

var win = {
}

var o = {}
var x = {}

console.log(div)
var handleEvent = function (event) {
  o[event.target.id] = 1
  event.target.class = "one"
}

div.forEach(function (element) {
  element.addEventListener('click', function(event){
    console.log("box was clicked")
    console.log(event.target.id)
    event.target.call(handleEvent)
  })
})


module.exports = {

}
