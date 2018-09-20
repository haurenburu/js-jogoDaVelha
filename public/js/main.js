let turn = "X";
let winner = null;

function startGame() {
    turn = "X";
    setMessage(turn + " Começa jogando!");
}

function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

function nextMove(cell) {
    if(winner != null){
        setMessage("O jogo acabou, "+ turn + "ganhou!")
    }
    else if (cell.innerText == "") {
        cell.innerText = turn;
        switchTurn();
    }

}

function switchTurn() {
    if(checkWinner(turn)){
        setMessage(turn + " ganhou!");
        winner = turn;
    }
    else if (turn == "X") {
        turn = "O";
        setMessage("Vez de " + turn);
    } else {
        turn = "X";
        setMessage("Vez de " + turn);
    }
}

function checkWinner(move) {
    let result = false;
    if( checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        result = true;
        }
        return result;
    }


function checkRow(a, b, c, move) {
    let result = false;
    if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
        result = true;
    }
    return result;
}

function getCell(number) {
    return document.getElementById("c" + number).innerText;
}
function resetCell(number){
    document.getElementById("c"+number).innerHTML = "";
}