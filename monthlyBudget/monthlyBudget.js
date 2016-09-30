$(function() {

    var counter = 0;
    var totalExpenditure = 0;

    $("#addRow").click(function () {
        var row = $("<tr></tr>");
        var inputName = $("#billName").val();
        var inputValue = $("#billAmount").val();
        if (inputName != "" && inputValue != "") {
            totalExpenditure += Number(inputValue);
            row.append("<td>" + inputName + "</td>");
            row.append("<td>$" + inputValue + "</td>");
            row.append("<button type='button' class='removeRow'>Remove Row</button>");
            row.append("<button type='button' class='upRow'>Move Up</button>");
            row.append("<button type='button' class='downRow'>Move Down</button>");
            $("#tableBody").append(row);
            $("#billName").val("");
            $("#billAmount").val("");
        } else {
            alert("Both fields must be completed and free of errors to enter a new row.");
        }
    });

    $(document).on('click', 'button.removeRow', function() {
        $(this).parent().remove();
    });

    $(document).on('click', 'button.upRow', function() {
        var row = $(this).parent();
        row.insertBefore(row.prev());
    });

    $(document).on('click', 'button.downRow', function() {
        var row = $(this).parent();
        row.insertAfter(row.next());
    });

    $("#showExpenditure").click(function () {
        $("#expenditures").text("Total calculated expenditure: $" + totalExpenditure);
    });


});