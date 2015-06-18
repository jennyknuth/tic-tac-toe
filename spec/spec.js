var code = require(./../app.js)

describe('#ticTACtoe', function(){
 it('plays tic tac toe', function() {
   expect(code.play(1)).toEqual(2);
});
