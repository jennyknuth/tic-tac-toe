module.exports = {

  var win = {
  }

  var o = {}
  var x = {}

  var div = document.getElementsByTagName('div')

  var handleEvent = function (event) {
    

  }

  div.addEventListener('click', function(event){
    event.target.call(handleEvent)
  })
}
