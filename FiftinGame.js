var fs = require('fs');
var colors = require('colors');

console.log('Enter 1 or 2');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}


rl.on('line', function(cmd) {

	chose = randomIntInc(1,2);

 if(cmd != 1 && cmd !=2)
	console.log('Enter 1 or 2 \n');
 else{
	 if(cmd != chose)
{
fs.appendFile('./statistic.txt', cmd + '-LOSE\r\n', function(err) {
  if (err) 
    throw err;
});
		console.log('YOU LOSE'.underline.red + ' I chose ' + chose);

}
	 if(cmd == chose)
{
fs.appendFile('./statistic.txt', cmd + '-WIN\r\n', function(err) {
  if (err) 
    throw err;
});
		console.log('YOU WIN'.underline.green + ' I chose ' + chose);
}

console.log('Try again?\n');  
}


  //this.close(); // закрываем обработчик
});
