$(function() {

    var output = false;

    $("#submit").click(function() {
        var tipPercent = getTipPercent();
        var billAmount = getBillAmount();
        var numberSharing = getSplitNumber();
        var tipTotal = ((tipPercent)/100*billAmount).toFixed(2);
        var tipForMultiple = ((tipPercent/100)*billAmount/numberSharing).toFixed(2);
        
        //only append if there have been nonzero values assigned for tipPercent and billAmount as well as no output already displayed
        if (tipPercent > 0 && billAmount > 0 && output == false) {
            if (numberSharing > 1) {
                output = true;
                $("#card").append("<h3 class='output'>Tip Amount:</h3>");
                $("#card").append("<h2 class='output'>$" + tipForMultiple + "</h2>");
                $("#card").append("<h3 class='output'>Per Person</h3>");
            }
            else {
                $("#card").append("<h3 class='output'>Tip Amount:</h3>");
                $("#card").append("<h2 class='output'>$" + tipTotal + "</h2>");
                output = true;
            }
        }
    });

    //This button clears the input areas
    $("#clear").click(function() {
        $("#serviceOptions").val("");
        $("#billAmount").val("");
        $("#numberSharing").val(1);
        $(".output").remove();
        output = false;
    });

})


function getTipPercent () {
    if ($("#serviceOptions").val() != null) {
        var tipPercent = $("#serviceOptions").val();
        tipPercent = Number(tipPercent);
        return tipPercent;
    }
    else {
        alert("You must select a tip percentage!");
    }
}

function getBillAmount() {
    var billAmount = $("#billAmount").val();
    var numberString = billAmount.toString();
    numberString = numberString.replace(".", ""); //removing the decimal so that I can properly calculate the number of digits in the number.
    var length = numberString.length;

    if (billAmount > 0 && length <= 6) {
        return billAmount;
    }
    else {
        alert("Error with bill amount!");
        $("#billAmount").val("");
    }
}

function getSplitNumber() {
    var split = $("#numberSharing").val();
    var splitLength = split.toString().length;
    if (split > 0 && splitLength < 2) {
        return split;
    } 
    else {
        alert("A bill can only be split up to 9 ways!");
    }
}