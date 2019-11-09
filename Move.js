// move king
function moveKing(row, column) {
    var possibleMoves = [];
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            possibleRow = row + j;
            possibleColumn = column + i;
            if ((i !== 0) && (j !== 0)) {
            }
            if (possibleColumn >-1 && possibleRow >-1 && possibleColumn < 8 && possibleRow < 8) {
                if(!(possibleRow === row && possibleColumn === column)){
                    possibleMoves.push({ possibleRow, possibleColumn });
                }                
            }
        }
    }
    // console.log(possibleMoves);
    return possibleMoves;
}

// move Bishop
function moveBishop(row, column) {
    var possibleMoves = [];
    //position in upward-rigth diagonal
    for (let i = row + 1, j = column + 1; i < 8, j < 8; i++ , j++) {
        possibleRow = i;
        possibleColumn = j;
        if (possibleColumn >= 0 && possibleRow >= 0 && possibleColumn < 8 && possibleRow < 8){
            possibleMoves.push({ possibleRow, possibleColumn });
        }
    }
    //position in downward-left diagonal
    for (let i = row - 1, j = column - 1; i > -1, j > -1; i-- , j--) {
        possibleRow = i;
        possibleColumn = j;
        if (possibleColumn >= 0 && possibleRow >= 0 && possibleColumn < 8 && possibleRow < 8){
            possibleMoves.push({ possibleRow, possibleColumn });
        }
    }
    //position in upward-left diagonal
    for (let i = row - 1, j = column + 1; i > -1, j < 8; i-- , j++) {
        possibleRow = i;
        possibleColumn = j;
        if (possibleColumn >= 0 && possibleRow >= 0 && possibleColumn < 8 && possibleRow < 8){
            possibleMoves.push({ possibleRow, possibleColumn });
        }
    }
    //position in downward-rigth diagonal
    for (let i = row + 1, j = column - 1; i < 8, j > -1; i++ , j--) {
        possibleRow = i;
        possibleColumn = j;
        if (possibleColumn >= 0 && possibleRow >= 0 && possibleColumn < 8 && possibleRow < 8){
            possibleMoves.push({ possibleRow, possibleColumn });
        }
    }
    // console.log(possibleMoves);
    return possibleMoves;
}

function moveRook(row, column) {
    var possibleMoves = [];

    //position in rigth
    for (let i = row + 1; i < 8; i++) {
        possibleRow = i;
        possibleColumn = column;
        possibleMoves.push({ possibleRow, possibleColumn });
    }

    //postion in left
    for (let i = row - 1; i > -1; i--) {
        possibleRow = i;
        possibleColumn = column;
        possibleMoves.push({ possibleRow, possibleColumn });
    }

    //position in upward direction
    for (let j = column + 1; j < 8; j++) {
        possibleRow = row;
        possibleColumn = j;
        possibleMoves.push({ possibleRow, possibleColumn });
    }

    //position in downward direction
    for (let j = column - 1; j > -1; j--) {
        possibleRow = row;
        possibleColumn = j;
        possibleMoves.push({ possibleRow, possibleColumn });
    }
    // console.log(possibleMoves);
    return possibleMoves;
}

function moveHorse(row, column) {
    var possibleMoves = [];
    for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
            if (Math.abs(i) + Math.abs(j) === 3) {
                possibleRow = row + i;
                possibleColumn = column + j;
                if(possibleRow > -1 && possibleColumn > -1 && possibleRow < 8 && possibleColumn < 8){
                    possibleMoves.push({ possibleRow, possibleColumn });
                }
            }
        }
    }
    // console.log(possibleMoves);
    return possibleMoves;
}

function moveQueen(row, column) {
    var possibleMoves = [];
    //positions in diagonals are same as Bishop
    let moveDiagonal = moveBishop(row, column);
    //position in up-down rigth-left are same as Rook
    let moveSideways = moveRook(row, column);
    possibleMoves = moveSideways.concat(moveDiagonal);
    // console.log(possibleMoves);
    return possibleMoves;
}

function movePawn(row, column) {
    var possibleMoves = [];
    for (let i = 0; i < 2; i++) {
        possibleRow = row;

        (i % 2 == 0) ? (possibleColumn = column - 1) : (possibleColumn = column + 1);

        if (possibleColumn < 8 && possibleColumn > -1) {
            possibleMoves.push({ possibleRow, possibleColumn });
        }

    }
    // console.log(possibleMoves);
    return possibleMoves;
}

module.exports = {
    moveKing,
    moveBishop,
    moveRook,
    moveHorse,
    moveQueen,
    movePawn
};