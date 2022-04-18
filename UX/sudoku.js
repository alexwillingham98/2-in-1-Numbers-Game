var initBoard = new Array(new Array(0, 0, 0, 1),
                          new Array(0, 0, 0, 0),
                          new Array(3, 0, 0, 0),
                          new Array(0, 0, 2, 0)
);


var initBoard = getBoard();
function getBoard() {
	var board = new Array(new Array(0, 0, 0, 0),
                          new Array(0, 0, 0, 0),
                          new Array(0, 0, 0, 0),
                          new Array(0, 0, 0, 0));
	var i = 0;
	var xs = new Array();
	var ys = new Array();
	var nums = new Array();
	do {
	var x = Math.floor(Math.random()*4);
	var y = Math.floor(Math.random()*4);
	var num = Math.floor((Math.random()*4)+1);
	if(xs.indexOf(x) != -1) continue;
	if(ys.indexOf(y) != -1) continue;
	if(nums.indexOf(num) != -1) continue;
	xs.push(x);
	ys.push(y);
	nums.push(num)
	board[x][y] = num;
	i++;
	} while (i < 3);
	return board;
}
getBoard();
