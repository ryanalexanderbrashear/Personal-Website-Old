var counter;

$(function() {

    var randomOne;
    var randomTwo;
    var randomThree;
    $("#box1").text("0");
    $("#box2").text("0");
    $("#box3").text("0");

    initialSetup();

    alert("Instructions: Guess the series of three non-repeating numbers by changing the values in the boxes. You have 10 tries. Good luck!")

    $("#processGuess").click(function () {
        var val1 = $("#guessOne").val();
        var val2 = $("#guessTwo").val();
        var val3 = $("#guessThree").val();
        $("#box1").text(val1);
        $("#box2").text(val2);
        $("#box3").text(val3);
        if (checkForDuplicateInput(val1, val2, val3)) {
            alert("You cannot enter duplicates of the same number!");
        } 
        else {
            var wonGame = processGuess(val1, val2, val3);
            if (wonGame) {
                alert("You won! Press Retry to try again.") //This should possibly be a popup with options to retry or not
            } 
            else {
                counter--;
                showCounter();
                if (counter == 0) {
                    alert("You lost the game! Press Retry to try again."); //This should possibly be a popup with options to retry or not
                    reset();
                }
            }
        }
    });

    $("#guessOne").click(function () {
        val1 = $("#guessOne").val();
        $("#box1").text(val1);
    });

    $("#guessTwo").click(function () {
        val2 = $("#guessTwo").val();
        $("#box2").text(val2);
    });

    $("#guessThree").click(function () {
        val3 = $("#guessThree").val();
        $("#box3").text(val3);
    });

    $("#resetButton").click(function () {
        reset();
    });
});

function checkForDuplicateInput(input1, input2, input3) {
    if (input1 == input2 || input1 == input3 || input2 == input3) {
        return true;
    }
    else {
        return false;
    }
}

function initialSetup() {
    counter = 10;
    generateRandomSequence();
    showCounter();
}

function showCounter() {
    document.getElementById("counter").innerHTML = "Tries Remaining: " + counter;
}

function reset() {
    counter = 10;
    showCounter();
    generateRandomSequence();
    $("#guessOne").val("0")
    $("#guessOneBox").css("background-color", "grey");
    $("#guessTwo").val("0")
    $("#guessTwoBox").css("background-color", "grey");
    $("#guessThree").val("0")
    $("#guessThreeBox").css("background-color", "grey");
    $("#box1").text("0");
    $("#box2").text("0");
    $("#box3").text("0");
    
}

function generateRandomSequence() {
    randomOne = Math.floor(Math.random() * 10);
    randomTwo = Math.floor(Math.random() * 10);
    if (randomTwo == randomOne) {
        while (randomTwo == randomOne) {
            randomTwo = Math.floor(Math.random() * 10);
        }
    }
    randomThree = Math.floor(Math.random() * 10);
    if (randomThree == randomOne || randomThree == randomTwo) {
        while (randomThree == randomOne || randomThree == randomTwo) {
            randomThree = Math.floor(Math.random() * 10);
        }
    }
}

function processGuess(val1, val2, val3) {

    changeBackground(val1, randomOne, randomTwo, randomThree, "#guessOneBox");
    changeBackground(val2, randomTwo, randomOne, randomThree, "#guessTwoBox");
    changeBackground(val3, randomThree, randomOne, randomTwo, "#guessThreeBox");

    if (val1 == randomOne && val2 == randomTwo && val3 == randomThree) {
        return true;
    }
    else {
        return false;
    }
}

function changeBackground(inputValue, correspondingRandom, randomValue2, randomValue3, id) {
    if (inputValue == correspondingRandom) {
        $(id).css("background-color", "green");
        } else if (inputValue == randomValue2 || inputValue == randomValue3) {
            $(id).css("background-color", "yellow");
        } else {
            $(id).css("background-color", "red");
        }
}

