var fs = require('fs');


var args = process.argv;

var WIN = 'WIN';
var LOSE = 'LOSE';
var winCount = loseCount = 0;
var winRow = loseRow = maxWinRow = maxLoseRow = 0;

var flag;

fs.readFile('./' + args[2], function (err, data) {
  if (err) 
    throw err;
var getData = data.toString().split('\r\n')

console.log('Total parties: ' + (getData.length-1));
for(var i=0;i<getData.length; i++)
{
	if( getData[i].split('-')[1] == WIN)
	{	winCount++;

		if(flag != 1)
		{

			if(winRow>maxWinRow)
		  maxWinRow = winRow;
             winRow = 0;
		}
		
		 winRow++;

		flag = 1
	}

	if( getData[i].split('-')[1] == LOSE)
	{    loseCount++;
		if(flag != 2)
		{
		  if(loseRow>maxLoseRow)
		   maxLoseRow = loseRow;
             loseRow = 0;
		}
		
		loseRow++;
		flag = 2;
	}

}
console.log('Total WIN parties: ' + winCount);
console.log('Total LOSE parties: ' + loseCount);
console.log('Ratio WIN/LOSE: ' + winCount/loseCount);
console.log('Won in a row: ' + maxWinRow);
console.log('Lose in a row: ' + maxLoseRow);

});