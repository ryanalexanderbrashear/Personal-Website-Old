//Game state variables
var numPlaced = 0; //counter for the game. If this reaches 9 without victory conditions being met, game is a tie
var xTurn = false; //boolean variable which will determine whose turn it is (true if X's turn, false if O)
var xWin = 0;
var oWin = 0;

//this array tracks where x's have been placed
var xArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


//this array tracks where o's have been placed
var oArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

$(function () {

    showWins();

    //when the game first loads, O will always be the first to go
    alert("O will go first.");

    $(".square").click(function () {
        var id = $(this).attr('id');
        $("#" + id).css("pointer-events", "none");
        clickHandler(id);
        if (numPlaced != 9) {
            checkRowWinConditions();
            checkColumnWinConditions();
            checkDiagWinConditions();
        } 
        else {
            alert("Tied! Press reset to try again.");
        }
    });

    $("#resetWins").click(function () {
        resetWins();
    })

    $("#reset").click(function () {
        reset();
    });
});

//this resets the game so that it can be played again
function reset() {
    xArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    oArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    numPlaced = 0;

    $(".square").css("background", "white");
    $(".square").css("pointer-events", "auto");

    if (xTurn == false) {
        alert('O will go first.');
    } else {
        alert('X will go first.');
    }
}//reset

function showWins() {
    document.getElementById("wins").innerHTML = "[ X Wins: " + xWin + " ][ O Wins: " + oWin + " ]";
}

function resetWins() {
    xWin = 0;
    oWin = 0;
    showWins();
}

function xWon() {
    alert("X has won! Press reset to start another game.");
    xTurn = true;
    xWin++;
    showWins();
}

function oWon() {
    alert("O has won! Press reset to start another game.");
    xTurn = false;
    oWin++;
    showWins();
}

//Checks to see whether X or O have won horizontally
function checkRowWinConditions() {
    if (xArray[0][0] + xArray[0][1] + xArray[0][2] == 3) {
        xWon();
    } else if (xArray[1][0] + xArray[1][1] + xArray[1][2] == 3) {
        xWon();
    } else if (xArray[2][0] + xArray[2][1] + xArray[2][2] == 3) {
        xWon();
    }

    if (oArray[0][0] + oArray[0][1] + oArray[0][2] == 3) {
        oWon();
    } else if (oArray[1][0] + oArray[1][1] + oArray[1][2] == 3) {
        oWon();
    } else if (oArray[2][0] + oArray[2][1] + oArray[2][2] == 3) {
        oWon();
    }
}

//Checks to see whether X or O have won vertically
function checkColumnWinConditions() {
    if (xArray[0][0] + xArray[1][0] + xArray[2][0] == 3) {
        xWon();
    } else if (xArray[0][1] + xArray[1][1] + xArray[2][1] == 3) {
        xWon();
    } else if (xArray[0][2] + xArray[1][2] + xArray[2][2] == 3) {
        xWon();
    }

    if (oArray[0][0] + oArray[1][0] + oArray[2][0] == 3) {
        oWon();
    } else if (oArray[0][1] + oArray[1][1] + oArray[2][1] == 3) {
        oWon();
    } else if (oArray[0][2] + oArray[1][2] + oArray[2][2] == 3) {
        oWon();
    }   
}

//Checks to see whether X or O have won diagonally
function checkDiagWinConditions() {
    if (xArray[0][0] + xArray[1][1] + xArray[2][2] == 3) {
        xWon();
    } else if (xArray[0][2] + xArray[1][1] + xArray[2][0] == 3) {
        xWon();
    }

    if (oArray[0][0] + oArray[1][1] + oArray[2][2] == 3) {
        oWon();
    } else if (oArray[0][2] + oArray[1][1] + oArray[2][0] == 3) {
        oWon();
    }
}

//when a square is clicked, this will handle giving it the proper image based on whose turn it is
function clickHandler(id) {
    var squareId = id;
    if (xTurn) {
        $("#" + id).css("background-image", 'url("resources/x.png")').css("background-size", "100% 100%");
        numPlaced++;
        addToXScore(squareId);
        xTurn = false; //it is now O's turn
    }
    else {
        $("#" + id).css("background-image", 'url("resources/o.png")').css("background-size", "100% 100%");
        numPlaced++;
        addToOScore(squareId);
        xTurn = true; //it is now X's turn
    }
}//clickHandler

//this function increments X's score properly depending on which square has been clicked
function addToXScore(id) {
    var squareId = id;
    switch (squareId) {
        case "topLeft":
            xArray[0][0] = 1;
            break;
        case "topMiddle":
            xArray[0][1] = 1;
            break;
        case "topRight":
            xArray[0][2] = 1;
            break;
        case "centerLeft":
            xArray[1][0] = 1;
            break;
        case "centerMiddle":
            xArray[1][1] = 1;
            break;
        case "centerRight":
            xArray[1][2] = 1;
            break;
        case "bottomLeft":
            xArray[2][0] = 1;
            break;
        case "bottomMiddle":
            xArray[2][1] = 1;
            break;
        case "bottomRight":
            xArray[2][2] = 1;
            break;
    }
}//addToXScore

//this function increments X's score properly depending on which square has been clicked
function addToOScore(id) {
    var squareId = id;
    switch (squareId) {
        case "topLeft":
            oArray[0][0] = 1;
            break;
        case "topMiddle":
            oArray[0][1] = 1;
            break;
        case "topRight":
            oArray[0][2] = 1;
            break;
        case "centerLeft":
            oArray[1][0] = 1;
            break;
        case "centerMiddle":
            oArray[1][1] = 1;
            break;
        case "centerRight":
            oArray[1][2] = 1;
            break;
        case "bottomLeft":
            oArray[2][0] = 1;
            break;
        case "bottomMiddle":
            oArray[2][1] = 1;
            break;
        case "bottomRight":
            oArray[2][2] = 1;
            break;
    }
}//addToXScore








