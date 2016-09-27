var numShapes = 0; //counter for the game. If this reaches 9 without victory conditions being met, game is a tie
var xTurn = false; //boolean variable which will determine whose turn it is (true if X's turn, false if O)

var xArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var oArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

$(function () {

    alert("O will go first.");

    $(".square").click(function () {
        var id = $(this).attr('id');
        clickHandler(id);
        if (numShapes != 9) {
            checkRowWinConditions();
            checkColumnWinConditions();
            checkDiagWinConditions();
        } else {
            alert("Tied! Press reset to try again.")
        }
    });

    $("#reset").click(function () {
        reset();
    });
});

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

    numShapes = 0;

    $(".square").css("background", "white");

    if (xTurn == false) {
        alert('O will go first.');
    } else {
        alert('X will go first.');
    }
}//reset

//Checks to see whether X or O have won horizontally
function checkRowWinConditions() {
    if (xArray[0][0] + xArray[0][1] + xArray[0][2] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true;
    } else if (xArray[1][0] + xArray[1][1] + xArray[1][2] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true; //means that next game, x will start first
    } else if (xArray[2][0] + xArray[2][1] + xArray[2][2] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true;
    }

    if (oArray[0][0] + oArray[0][1] + oArray[0][2] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    } else if (oArray[1][0] + oArray[1][1] + oArray[1][2] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    } else if (oArray[2][0] + oArray[2][1] + oArray[2][2] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    }
}

//Checks to see whether X or O have won vertically
function checkColumnWinConditions() {
    if (xArray[0][0] + xArray[1][0] + xArray[2][0] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true;
    } else if (xArray[0][1] + xArray[1][1] + xArray[2][1] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true;
    } else if (xArray[0][2] + xArray[1][2] + xArray[2][2] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true;
    }

    if (oArray[0][0] + oArray[1][0] + oArray[2][0] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    } else if (oArray[0][1] + oArray[1][1] + oArray[2][1] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    } else if (oArray[0][2] + oArray[1][2] + oArray[2][2] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    }      
}

//Checks to see whether X or O have won diagonally
function checkDiagWinConditions() {
    if (xArray[0][0] + xArray[1][1] + xArray[2][2] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true;
    } else if (xArray[0][2] + xArray[1][1] + xArray[2][0] == 3) {
        alert("X has won! Press reset to start another game.");
        xTurn = true;
    }

    if (oArray[0][0] + oArray[1][1] + oArray[2][2] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    } else if (oArray[0][2] + oArray[1][1] + oArray[2][0] == 3) {
        alert("O has won! Press reset to start another game.");
        xTurn = false;
    }
}

function clickHandler(id) {
    var squareId = id;
    if (xTurn) {
        $("#" + id).css("background-image", 'url("resources/x.png")').css("background-size", "150px 150px");
        numShapes++;
        addToXScore(squareId);
        xTurn = false;
    }
    else {
        $("#" + id).css("background-image", 'url("resources/o.png")').css("background-size", "150px 150px");
        numShapes++;
        addToOScore(squareId);
        xTurn = true;
    }
}//clickHandler

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








