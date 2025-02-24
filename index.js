var x1count = 0;
var x2count = 0;
var x3count = 0;
var x4count = 0;
var x5count = 0;
var x6count = 0;
var x7count = 0;
var player = 1;
var lines = [];

window.onload = function () {
    console.log('load1执行');
    init();
}

function init(){
    lines = [];
    for(var i = 0; i <= 6; i ++){ // 倒六行
        var line = [];
        for(var j =  0; j < 8; j ++){ // 七列
            line.push(0);
        }
        lines.push(line);
    }
}

function imgClicked(column){
    var xCount = 0;
    if(column == 1){
        x1count ++;
        xCount = x1count;
    }
    if(column == 2){
        x2count ++;
        xCount = x2count;
    }
    if(column == 3){
        x3count ++;
        xCount = x3count;
    }
    if(column == 4){
        x4count ++;
        xCount = x4count;
    }
    if(column == 5){
        x5count ++;
        xCount = x5count;
    }
    if(column == 6){
        x6count ++;
        xCount = x6count;
    }
    if(column == 7){
        x7count ++;
        xCount = x7count;
    }

    lines[xCount][column] = player;

    if(player == 1){
        document.getElementById("img" + column + xCount).setAttribute("src", "images/red.jpg");
        player = 2;
    }
    else{
        document.getElementById("img" + column + xCount).setAttribute("src", "images/yellow.jpg");    
        player = 1;
    }
    CheckGameOver();
}

function CheckGameOver(){
    for(var i = 1; i <= 6; i ++){ // 倒六行
        for(var j =  1; j < 8; j ++){ // 七列
            if(CheckGameOverSingle(i, j)){
                init();
                return;
            }
        }
    }
    //resetHeaderImg();
}

function CheckGameOverSingle(row, column){
    var currentPersonValue = lines[row][column];
    if(currentPersonValue == 0){
        return false;
    }
    // 八个方向
    var direction1=[];
    var direction2=[];
    var direction3=[];
    var direction4=[];
    var direction5=[];
    var direction6=[];
    var direction7=[];
    var direction8=[];

    // direction1_East
    if(column <= 4){
        direction1.push(lines[row][column+1]);
        direction1.push(lines[row][column+2]);
        direction1.push(lines[row][column+3]);
    }
    // direction2_SouthEast
    if(row >= 4 && column <= 4){
        direction2.push(lines[row-1][column+1]);
        direction2.push(lines[row-2][column+2]);
        direction2.push(lines[row-3][column+3]); 
    }
    // direction3_South
    if(row >= 4){
        direction3.push(lines[row-1][column]);
        direction3.push(lines[row-2][column]);
        direction3.push(lines[row-3][column]); 
    }
       
    // direction4_SouthWest
    if(row >= 4 && column >= 4){
        direction4.push(lines[row-1][column-1]);
        direction4.push(lines[row-2][column-2]);
        direction4.push(lines[row-3][column-3]); 
    }
       
    // direction5_West
    if(column >= 4){
        direction5.push(lines[row][column-1]);
        direction5.push(lines[row][column-2]);
        direction5.push(lines[row][column-3]); 
    }

    // direction6_NorthWest
    if(row <= 3 && column >= 4){
        direction6.push(lines[row+1][column-1]);
        direction6.push(lines[row+2][column-2]);
        direction6.push(lines[row+3][column-3]); 
    }

    // direction7_North
    if(row <= 3){
        direction7.push(lines[row+1][column]);
        direction7.push(lines[row+2][column]);
        direction7.push(lines[row+3][column]); 
    }

    // direction8_NorthEast
    if(row <= 3 && column <= 4){
        direction8.push(lines[row+1][column+1]);
        direction8.push(lines[row+2][column+2]);
        direction8.push(lines[row+3][column+3]); 
    }
    var imgWinner = "images/winnerred.jpg";
    if(currentPersonValue == 2){
        imgWinner = "images/winneryellow.jpg";
    }
    // img列在前，行在后
    if((direction1.length != 0 && direction1[0]== currentPersonValue && direction1[1] == currentPersonValue && direction1[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 1).toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 2).toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 3).toString() + row.toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
        //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    if((direction2.length != 0 && direction2[0]== currentPersonValue && direction2[1] == currentPersonValue && direction2[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 1).toString() + (row - 1).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 2).toString() + (row - 2).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 3).toString() + (row - 3).toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
        //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    if((direction3.length != 0 && direction3[0]== currentPersonValue && direction3[1] == currentPersonValue && direction3[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 0).toString() + (row - 1).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 0).toString() + (row - 2).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 0).toString() + (row - 3).toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
        //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    if((direction4.length != 0 && direction4[0]== currentPersonValue && direction4[1] == currentPersonValue && direction4[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 1).toString() + (row - 1).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 2).toString() + (row - 2).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 3).toString() + (row - 3).toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
        //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    if((direction5.length != 0 && direction5[0]== currentPersonValue && direction5[1] == currentPersonValue && direction5[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 1).toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 2).toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 3).toString() + row.toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
        //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    if((direction6.length != 0 && direction6[0]== currentPersonValue && direction6[1] == currentPersonValue && direction6[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 1).toString() + (row + 1).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 2).toString() + (row + 2).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column - 3).toString() + (row + 3).toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
        //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    if((direction7.length != 0 && direction7[0]== currentPersonValue && direction7[1] == currentPersonValue && direction7[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 0).toString() + (row + 1).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 0).toString() + (row + 2).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 0).toString() + (row + 3).toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
       //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    if((direction8.length != 0 && direction8[0]== currentPersonValue && direction8[1] == currentPersonValue && direction8[2] == currentPersonValue)){
        document.getElementById("img" + column.toString() + row.toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 1).toString() + (row + 1).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 2).toString() + (row + 2).toString()).setAttribute("src",imgWinner);
        document.getElementById("img" + (column + 3).toString() + (row + 3).toString()).setAttribute("src",imgWinner);
        setTimeout(() => {
            alert("game over and the winner is: " + currentPersonValue);        
        }, 200);
        gameOver = true;
        //document.getElementById("buttonPlayback").removeAttribute("disabled");
        return true;
    }
    return false;
}

function buttonAboutClicked(){
    alert("From owner of website, Jessie:\nThis page provides a safe and fun place to play the board game 'Four in A Row'! \nThe winner will be annouced at the end. Have fun! :p");
}
