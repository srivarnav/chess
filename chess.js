const move = require('./Move');
const readline = require('readline')
const rowMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H'];

//read input from console
function getInput() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    read.question(`Piece & position? `, (str) => {
        extractInfoFromInput(str);
        read.close()
    })
}

// modify input for exact data
function extractInfoFromInput(str) {
    var word = "";
    var info = [];
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch !== ' ') {
            word = word + ch;
        }
        else {
            info[0] = word;
            word = "";
        }
    }
    info[1] = rowMap.indexOf(word[0]);
    info[2] = parseInt(word[1]) - 1;
    movePiece(info);
}

function movePiece(info) {
    console.log(info);
    switch (info[0]) {
        case 'King':
            showMoves(move.moveKing(info[1], info[2]));
            break;
        case 'Horse':
            showMoves(move.moveHorse(info[1], info[2]));
            break;
        case 'Bishop':
            showMoves(move.moveBishop(info[1], info[2]));
            break;
        case 'Rook':
            showMoves(move.moveRook(info[1], info[2]));
            break;
        case 'Queen':
            showMoves(move.moveQueen(info[1], info[2]));
            break;
        case 'Pawn':
            showMoves(move.movePawn(info[1], info[2]));
            break;
        default:
            console.log("Wrong Input");
            getInput();
    }
}

//display moves of piece
function showMoves(possibleMoves) {
    for (let i = 0; i < possibleMoves.length; i++) {
        console.log(rowMap[possibleMoves[i].possibleRow], possibleMoves[i].possibleColumn+1);
    }
}

getInput();